var mode = document.getElementById("mode");
mode.addEventListener("click", function () {
    var el = document.body;
    el.classList.toggle("dark");
});
var info = document.querySelector("#info");
info.addEventListener("click", function (e) {
    alert("Developer’s name:Marina\nCalculator’s version:1.0.0\nthis is a calculetor");
});
var historyBox = document.querySelector(".operation-log");
var log = document.querySelector("#history");
log.addEventListener("click", function () {
    if (historyBox.style.display !== "block") {
        historyBox.style.display = "block";
    }
    else {
        historyBox.style.display = "none";
    }
});
var sciBox = document.querySelector(".sci");
var sciButton = document.querySelector("#seintific");
sciButton.addEventListener("click", function () {
    if (sciBox.style.display !== "block") {
        sciBox.style.display = "block";
    }
    else {
        sciBox.style.display = "none";
    }
});
var settings = document.querySelector("#settings");
settings.addEventListener("click", function () { return window.open("/html/config.html"); });
