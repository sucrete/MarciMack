// for the animated tabs to work we need:
// - client width (width of tab pill or tab with padding)
// - left offset
// - click event handler for each tab

const tabs = document.getElementsByClassName("member-link");
const highlighter = document.getElementsByClassName("highlight")[0];
(() => {
  const initialTab = tabs[0];
  highlighter.style.left = initialTab.offsetLeft + "px";
  highlighter.style.width = initialTab.offsetWidth + "px";
  console.log("shits working");
  console.log(initialTab.offsetLeft);
})();

const highlight = function (thing) {
  highlighter.style.left = thing.offsetLeft + "px";
  highlighter.style.width = thing.offsetWidth + "px";
  console.log("inside HIGHLIGHT function " + thing.offsetLeft);
};

for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", (e) => {
    highlight(e);
    console.log("working? inside scope");
  });
  console.log("working? outside scope");
}
