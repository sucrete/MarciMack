const courseDetailsQuery =
  "https://fhm6z54x.api.sanity.io/v2025-07-31/data/query/production?query=*%5B_type+%3D%3D+%27courseDetails%27%5D%5B0%5D&perspective=published";

document.addEventListener("DOMContentLoaded", function () {
  // cornered box
  const corneredBox = document.getElementsByClassName("cornered-box")[0];
  const alert = document.getElementsByClassName("frost-warning")[0];
  const alertTitle = document.getElementsByClassName("frost-warning-title")[0];
  const alertText = document.getElementsByClassName("frost-warning-text")[0];

  // pool sign
  const poolEl = document.getElementsByClassName("pool")[0];
  const poolSign = document.getElementsByClassName("closed-sign")[0];

  //~ fetch data
  fetchData(courseDetailsQuery).then((data) => {
    const courseDetails = data;
    console.log(JSON.stringify(courseDetails, null, 2));
    if (courseDetails?.alertQuestion) {
      corneredBox.style = "display: none";
      alert.style = "display: block";
      alertTitle.textContent = courseDetails?.alert.alertHeading;
      alertText.textContent = courseDetails?.alert.alertTextBody;
    }
    if (!courseDetails?.poolQuestion) {
      // runs this code if poolQuestion = false or "THE POOL IS CLOSED"
      poolEl.classList.add("closed");
      poolSign.style = "display: unset;";
    }
  });
});

//~ promotional pop-up
// Reads the singleton "Pop-Up" document (_type "popUp") from Sanity.
const popUpQuery =
  "https://fhm6z54x.api.sanity.io/v2025-07-31/data/query/production?query=" +
  encodeURIComponent(
    '*[_type == "popUp"][0]{displayPopUp, "flyerUrl": flyer.asset->url, "alt": flyer.alt}'
  ) +
  "&perspective=published";

// how long after the page starts loading before the pop-up appears
const popUpDelayMs = 3000;

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("promo-popup");
  if (!popup) return;
  const pageStart = performance.now();
  const image = popup.querySelector(".promo-popup__image");
  const closeButton = popup.querySelector(".promo-popup__close");
  let lastFocused = null;

  function dismissedKey(url) {
    return "promoPopupDismissed:" + url;
  }

  function wasDismissed(url) {
    try {
      return sessionStorage.getItem(dismissedKey(url)) === "1";
    } catch (e) {
      return false;
    }
  }

  function openPopup() {
    lastFocused = document.activeElement;
    popup.hidden = false;
    // reading offsetWidth forces the browser to apply the starting state
    // (opacity 0, scale .8) before .is-visible triggers the transition
    void popup.offsetWidth;
    popup.classList.add("is-visible");
    document.body.classList.add("promo-popup-open");
    closeButton.focus({ preventScroll: true });
    document.addEventListener("keydown", onKeydown);
  }

  function closePopup() {
    popup.classList.remove("is-visible");
    popup.hidden = true;
    document.body.classList.remove("promo-popup-open");
    document.removeEventListener("keydown", onKeydown);
    try {
      sessionStorage.setItem(dismissedKey(image.dataset.flyer), "1");
    } catch (e) {}
    if (lastFocused) lastFocused.focus();
  }

  function onKeydown(e) {
    if (e.key === "Escape") closePopup();
  }

  closeButton.addEventListener("click", closePopup);
  // clicking the scrim (outside the image) also closes it
  popup.addEventListener("click", (e) => {
    if (e.target === popup) closePopup();
  });

  fetchData(popUpQuery).then((popUp) => {
    // nothing to show if the fetch failed, there's no Pop-Up doc,
    // "Display Pop-Up?" is off, or no flyer has been uploaded
    if (!popUp?.displayPopUp || !popUp?.flyerUrl) return;
    if (wasDismissed(popUp.flyerUrl)) return;

    // Sanity's image CDN resizes the flyer and serves WebP/AVIF where supported
    const src = popUp.flyerUrl + "?w=1000&auto=format";

    image.dataset.flyer = popUp.flyerUrl;
    image.alt = popUp.alt || "Promotion at The Club at MariMack";
    // open 3s after page load, but never before the image has loaded,
    // so the pop-up never shows empty (slow connections may wait a bit longer)
    image.addEventListener(
      "load",
      () => {
        const wait = Math.max(0, popUpDelayMs - (performance.now() - pageStart));
        setTimeout(openPopup, wait);
      },
      { once: true }
    );
    image.src = src;
  });
});
