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

    // resize once
    resize();
}

// ----------------------
// RESIZE
// ----------------------
function resize() {

    const $book = $("#flipbook");

    if (!$book.data("turn")) return;

    let w = window.innerWidth * 0.9;
    let h = window.innerHeight * 0.9;

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
