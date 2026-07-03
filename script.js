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

    const sidebarWidth = window.innerWidth > 700 ? 220 : 0;
    const maxWidth = 1000; // prevents too-wide spread

    let w = Math.min(window.innerWidth - sidebarWidth, maxWidth) * 0.9;
    let h = window.innerHeight * 0.85;

    const ratio = 800 / 600;

    if (w / h > ratio) w = h * ratio;
    else h = w / ratio;

    $book.turn("size", w, h);
}
    
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
