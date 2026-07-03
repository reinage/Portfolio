// prints "hi" in dev tools
console.log("hi");

let isBookOpen = false;

// ------------------------------
// INITIALIZE TURN.JS FLIPBOOK
// ------------------------------
function initFlipbook() {

    let $book = $("#flipbook");

    if ($book.data("turn")) return;

    $book.turn({
        display: "double",
        acceleration: true,
        gradients: !$.isTouch,
        elevation: 50,
        autoCenter: true
    });
}

// ------------------------------
// RESIZE BOOK
// ------------------------------
function resizeBook() {

    let $book = $("#flipbook");

    if (!$book.data("turn")) return;

    // 🔥 DO NOT resize if hidden
    if ($("#book-container").css("visibility") === "hidden") return;

    let maxWidth = window.innerWidth * 0.9;
    let maxHeight = window.innerHeight * 0.9;

    let aspect = 11 / 8.5;

    let width = maxWidth;
    let height = width / aspect;

    if (height > maxHeight) {
        height = maxHeight;
        width = height * aspect;
    }

    $book.turn("size", width, height);
}

// ------------------------------
// OPEN BOOK
// ------------------------------
function openBook() {

    if (isBookOpen) return;
    isBookOpen = true;

    $("#shelf").fadeOut(200, function () {

        const $container = $("#book-container");
        const $book = $("#flipbook");

        $container
            .removeClass("hidden")
            .css({
                display: "flex",
                visibility: "hidden"
            });

        requestAnimationFrame(() => {

            setTimeout(() => {

                if (!$book.data("turn")) {
                    initFlipbook();
                }

                $book.turn("page", 1);

                // IMPORTANT: force reflow BEFORE sizing
                resizeBook();

                // NOW reveal
                setTimeout(() => {
                    $container.css("visibility", "visible");
                }, 50);

            }, 80);
        });
    });
}
// ------------------------------
// CLOSE BOOK
// ------------------------------
function closeBook() {

    if (!isBookOpen) return;
    isBookOpen = false;

    $("#book-container").fadeOut(200, function () {

        $("#shelf").fadeIn(300);

        const $book = $("#flipbook");

        if ($book.data("turn")) {
            $book.turn("page", 1);
        }
    });
}

// ------------------------------
// SHELF CLICK
// ------------------------------
function setupShelf() {

    $(".book").on("click", function () {
        openBook();
    });

}

// ------------------------------
// NAVIGATION
// ------------------------------
function setupNavigation() {

    $("#next").on("click", function () {
        $("#flipbook").turn("next");
    });

    $("#previous").on("click", function () {
        $("#flipbook").turn("previous");
    });

    $("#close-book").on("click", function () {
        closeBook();
    });

}

// ------------------------------
// KEYBOARD CONTROLS
// ------------------------------
function setupKeyboard() {

    $(window).on("keydown", function (e) {

        if (!isBookOpen) return;

        if (e.keyCode === 37) {
            $("#flipbook").turn("previous");
        }

        if (e.keyCode === 39) {
            $("#flipbook").turn("next");
        }
    });
}

// ------------------------------
// RESIZE HANDLER
// ------------------------------
function setupResize() {

    $(window).on("resize", function () {
        resizeBook();
    });

}

// ------------------------------
// INIT EVERYTHING
// ------------------------------
$(document).ready(function () {

    setupShelf();
    setupNavigation();
    setupKeyboard();
    setupResize();

});
