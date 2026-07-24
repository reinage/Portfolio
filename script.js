console.log("script loaded");

// ----------------------
// BACK BUTTON
// ----------------------
function goBack() {
    window.location.href = "MEd.html";
}

// ----------------------
// INIT FLIPBOOK
// ----------------------
function initFlipbook() {

    const isMobile = window.innerWidth < 700;
    const isLandscape = window.innerWidth > window.innerHeight;

    const displayMode = (isMobile && isLandscape) ? "double"
                        : (isMobile ? "single"
                        : "double");

    const $book = $("#flipbook");

    if (!$book.length) return;

$book.turn({
    width: 400,
    height: 600,
    display: displayMode,
    autoCenter: true,
    elevation: 20,
    gradients: true
});

    document.body.classList.add("flipbook-open");
showUI();
setTimeout(hideUI, UI_HIDE_DELAY);
    resize();
}

// ----------------------
// RESIZE
// ----------------------
function resize() {

    const $book = $("#flipbook");

    if (!$book.data("turn")) return;

const sidebarWidth = 0;
const stagePadding = 40;

let w = window.innerWidth - stagePadding;

const vh = window.visualViewport
    ? window.visualViewport.height
    : window.innerHeight;

let h = vh * 0.85;
const ratio = 5.5 / 8.5;

    if (w / h > ratio) w = h * ratio;
    else h = w / ratio;

    $book.turn("size", w, h);
const isMobile = window.innerWidth < 700;
const isLandscape = window.innerWidth > window.innerHeight;

$book.turn(
    "display",
    (isMobile && isLandscape) ? "double"
    : (isMobile ? "single" : "double")
);
}

// ----------------------
// EVENTS
// ----------------------
$(document).ready(function () {

    initFlipbook();

    $(window).on("resize", resize);

    $(document).on("keydown", function (e) {
        if (e.keyCode === 37) $("#flipbook").turn("previous");
        if (e.keyCode === 39) $("#flipbook").turn("next");
    });
});
let uiTimer;
const UI_HIDE_DELAY = 2000;

function showUI() {
    const ui = document.querySelector(".book-ui");
    if (!ui) return;

    ui.classList.remove("hidden");

    clearTimeout(uiTimer);
    uiTimer = setTimeout(hideUI, UI_HIDE_DELAY);
}

function hideUI() {
    const ui = document.querySelector(".book-ui");
    if (!ui) return;

    ui.classList.add("hidden");
}

// single activity handler (IMPORTANT)
function registerUIActivity() {
    showUI();
}

// events
document.addEventListener("mousemove", registerUIActivity);
document.addEventListener("mousedown", registerUIActivity);
document.addEventListener("touchstart", registerUIActivity);
document.addEventListener("keydown", registerUIActivity);

