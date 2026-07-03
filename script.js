console.log("hi");

let activeBook = null;

// INIT flipbook for a specific book
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

// OPEN BOOK
function openBook(id) {

    if (activeBook === id) return;

    // hide shelf
    $("#shelf").fadeOut(200);

    // deactivate all
    $(".book-instance").removeClass("active");

    activeBook = id;

    const $book = $("#" + id);

    $("#book-container").fadeIn(200, function () {

        $book.addClass("active");

        initBook($book);

        const $flip = $book.find(".flipbook");

        setTimeout(() => {
            $flip.turn("page", 1);
            $flip.turn("size",
                Math.min(window.innerWidth * 0.8, 1000),
                window.innerHeight * 0.8
            );
        }, 100);
    });
}

// CLOSE BOOK
function closeBook() {

    activeBook = null;

    $("#book-container").fadeOut(200, function () {
        $(".book-instance").removeClass("active");
        $("#shelf").fadeIn(200);
    });
}

// NAV
function setupNav() {

    $("#next").on("click", function () {
        if (!activeBook) return;
        $("#" + activeBook).find(".flipbook").turn("next");
    });

    $("#previous").on("click", function () {
        if (!activeBook) return;
        $("#" + activeBook).find(".flipbook").turn("previous");
    });

    $("#close-book").on("click", closeBook);
}

// SHELF
function setupShelf() {

    $(".book").on("click", function () {
        openBook($(this).data("book"));
    });
}

// RESIZE
function setupResize() {

    $(window).on("resize", function () {

        if (!activeBook) return;

        const $flip = $("#" + activeBook).find(".flipbook");

        $flip.turn("size",
            Math.min(window.innerWidth * 0.8, 1000),
            window.innerHeight * 0.8
        );
    });
}

// INIT
$(document).ready(function () {
    setupShelf();
    setupNav();
    setupResize();
});
