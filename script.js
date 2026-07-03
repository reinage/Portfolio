console.log("flipbook system loaded");

let activeBook = null;

// ------------------------------
// INIT TURN.JS (SAFE WRAPPER)
// ------------------------------
function initBook($book) {

    const $flip = $book.find(".flipbook");

    if ($flip.data("turn")) return;

    $flip.turn({
        display: "double",
        autoCenter: true,
        elevation: 50,
        gradients: true
    });
}

// ------------------------------
// FORCE STABLE SIZE
// ------------------------------
function resizeFlipbook($flip) {

    if (!$flip || !$flip.data("turn")) return;

    const maxWidth = Math.min(window.innerWidth * 0.85, 1000);
    const maxHeight = window.innerHeight * 0.85;

    const aspect = 8.5 / 11;

    let width = maxWidth;
    let height = width / aspect;

    if (height > maxHeight) {
        height = maxHeight;
        width = height * aspect;
    }

    $flip.turn("size", width, height);
    $flip.turn("resize");
}

// ------------------------------
// OPEN BOOK
// ------------------------------
function openBook(id) {

    const $book = $("#" + id);
    const $flip = $book.find(".flipbook");

    activeBook = id;

    // hide shelf
    $("#shelf").fadeOut(150);

    // show container FIRST (critical for Turn.js)
    $("#book-container").fadeIn(200, function () {

        $(".book-instance").removeClass("active");
        $book.addClass("active");

        // ALWAYS (re)initialize safely
        initBook($book);

        // CRITICAL: wait for layout paint
        requestAnimationFrame(() => {

            setTimeout(() => {

                // reset to first page every open (prevents freeze state)
                $flip.turn("page", 1);

                // stabilize layout AFTER visible
                resizeFlipbook($flip);

                // second stabilization pass (fixes Safari/Chrome jitter)
                setTimeout(() => {
                    resizeFlipbook($flip);
                }, 80);

            }, 50);
        });
    });
}

// ------------------------------
// CLOSE BOOK
// ------------------------------
function closeBook() {

    activeBook = null;

    $("#book-container").fadeOut(150, function () {

        $(".book-instance").removeClass("active");

        $("#shelf").fadeIn(200);
    });
}

// ------------------------------
// SHELF CLICK
// ------------------------------
function setupShelf() {

    $(".book").on("click", function () {
        const id = $(this).data("book");
        openBook(id);
    });
}

// ------------------------------
// NAV BUTTONS
// ------------------------------
function setupNavigation() {

    $("#next").on("click", function () {
        if (!activeBook) return;
        $("#" + activeBook + " .flipbook").turn("next");
    });

    $("#previous").on("click", function () {
        if (!activeBook) return;
        $("#" + activeBook + " .flipbook").turn("previous");
    });

    $("#close-book").on("click", function () {
        closeBook();
    });
}

// ------------------------------
// KEYBOARD
// ------------------------------
function setupKeyboard() {

    $(window).on("keydown", function (e) {

        if (!activeBook) return;

        const $flip = $("#" + activeBook + " .flipbook");

        if (e.keyCode === 37) $flip.turn("previous");
        if (e.keyCode === 39) $flip.turn("next");
    });
}

// ------------------------------
// RESIZE HANDLER
// ------------------------------
function setupResize() {

    $(window).on("resize", function () {

        if (!activeBook) return;

        const $flip = $("#" + activeBook + " .flipbook");
        resizeFlipbook($flip);
    });
}

// ------------------------------
// INIT
// ------------------------------
$(document).ready(function () {

    setupShelf();
    setupNavigation();
    setupKeyboard();
    setupResize();

});
