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
