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

    const $book = $("#flipbook");

    if ($book.length === 0) return;

    $book.turn({
        display: "double",
        autoCenter: true,
        elevation: 50,
        gradients: true
    });
document.body.classList.add("flipbook-open");
    // resize once
    resize();
}

// ----------------------
// RESIZE
// ----------------------
function resize() {

    const $book = $("#flipbook");

    if (!$book.data("turn")) return;

    // sidebar width compensation
    const sidebarWidth = window.innerWidth > 700 ? 220 : 0;

    const availableWidth = window.innerWidth - sidebarWidth;
    const availableHeight = window.innerHeight;

    let w = availableWidth * 0.9;
    let h = availableHeight * 0.85;

    // optional: enforce book ratio (prevents stretching)
    const ratio = 800 / 600;

    if (w / h > ratio) {
        w = h * ratio;
    } else {
        h = w / ratio;
    }

    $book.turn("size", w, h);
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

// -- wheel lock --//
let wheelLock = false;

document.addEventListener("wheel", function (e) {

    const $book = $("#flipbook");

    if (!$book.data("turn")) return;

    e.preventDefault();

    if (wheelLock) return;
    wheelLock = true;

    if (e.deltaY > 0) {
        $book.turn("next");
    } else {
        $book.turn("previous");
    }

    setTimeout(() => {
        wheelLock = false;
    }, 500);

}, { passive: false });
