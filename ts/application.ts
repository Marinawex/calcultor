// light button
const mode = document.getElementById("mode");
mode.addEventListener("click", () => {
  const el = document.body;
  el.classList.toggle("light");
});

// info button

// const content = fetch('../html/help.html').then(function response(res) {
//   console.log(res.json)
// } )

const modalBody = document.querySelector(".modal-body");
document.addEventListener(
  "DOMContentLoaded",
  () => (modalBody.innerHTML = " contentForInfo.innerHTML")
);

//history button

const historyBox: HTMLElement = document.querySelector(".operation-log");

const log = document.querySelector("#history");
log.addEventListener("click", () => {
  historyBox.style.visibility = "visible";
  document.body.classList.toggle("ON");
  if (historyBox.style.display !== "block") {
    historyBox.style.display = "block";
  } else {
    historyBox.style.display = "none";
  }
});

//seintific button

const sciBox: HTMLElement = document.querySelector(".sci");

const sciButton: Element = document.querySelector("#seintific");
sciButton.addEventListener("click", () => {
  calc.seintificMode = true;
  resetButton();
  sciBox.style.visibility = "visible";
  document.body.classList.toggle("sciMode");
  if (sciBox.style.display !== "block") {
    sciBox.style.display = "block";
  } else {
    sciBox.style.display = "none";
    calc.seintificMode = false;
    resetButton();
  }
});

//settings button

document.addEventListener("DOMContentLoaded", configSettings);

const settings = document.querySelector("#settings");
settings.addEventListener("click", () => window.open("/html/config.html"));

function configSettings() {
  const data = window.location.search;
  console.log(data);
  let params = new URLSearchParams(data);
  const colors = params.get("background-color");
  const fonts = params.get("font-family");
  const mode = params.get("mode");
  if (colors) {
    document.body.style.background = colors;
  }
  if (fonts) {
    document.body.style.fontFamily = fonts;
  }
  if (mode === "dark") {
    let element: any = document.body;
    element.classList.toggle("dark");
  }
}
