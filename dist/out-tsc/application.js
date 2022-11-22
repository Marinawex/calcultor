document.addEventListener("DOMContentLoaded", configSettings);
const mode = document.getElementById("mode");
mode.addEventListener("click", () => {
    const el = document.body;
    el.classList.toggle("dark");
});
const info = document.querySelector("#info");
info.addEventListener("click", (e) => {
    alert("Developer’s name:Marina\nCalculator’s version:1.0.0\nthis is a calculetor");
});
const historyBox = document.querySelector(".operation-log");
const log = document.querySelector("#history");
log.addEventListener("click", () => {
    if (historyBox.style.display !== "block") {
        historyBox.style.display = "block";
    }
    else {
        historyBox.style.display = "none";
    }
});
const sciBox = document.querySelector(".sci");
const sciButton = document.querySelector("#seintific");
sciButton.addEventListener("click", () => {
    if (sciBox.style.display !== "block") {
        sciBox.style.display = "block";
    }
    else {
        sciBox.style.display = "none";
    }
});
const settings = document.querySelector("#settings");
settings.addEventListener("click", () => window.open("/html/config.html"));
function configSettings() {
    const data = window.location.search;
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
        let element = document.body;
        element.classList.toggle("dark");
    }
}
