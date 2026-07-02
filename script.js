// prints "hi" in the browser's dev tools console
console.log("hi");

function myFunction() {
   var element = document.getElementById("toggleinfo");
   element.classList.toggle("showinfo");
}

// ------------------------------
// BOOK SYSTEM VARIABLES
// ------------------------------
let isBookOpen = false;

// ------------------------------
// INITIALIZE TURN.JS FLIPBOOK
// ------------------------------
function initFlipbook() {

    if ($("#flipbook").data("turn")) return; 
    // prevents double initialization

    $("#flipbook").turn({
        display: 'double',
        acceleration: true,
        gradients: !$.isTouch,
        elevation: 50,
        autoCenter: true,
        when: {
            turned: function(e, page) {
                // console.log('Current view: ', $(this).turn('view'));
            }
        }
    });
}

// ------------------------------
// RESIZE BOOK TO WINDOW SIZE
// ------------------------------
function resizeBook() {

    let maxWidth = window.innerWidth * 0.9;
    let maxHeight = window.innerHeight * 0.9;

    // correct open-book ratio (11 x 8.5)
    let aspect = 11 / 8.5;

    let width = maxWidth;
    let height = width / aspect;

    if (height > maxHeight) {
        height = maxHeight;
        width = height * aspect;
    }

    if ($("#flipbook").data("turn")) {
        $("#flipbook").turn("size", width, height);
    }
}

// ------------------------------
// OPEN BOOK FROM SHELF
// ------------------------------
function openBook() {

    if (isBookOpen) return;
    isBookOpen = true;

    $("#shelf").fadeOut(200, function () {

        $("#book-container")
            .removeClass("hidden")
            .css("display", "block");

        requestAnimationFrame(() => {

            setTimeout(() => {
                initFlipbook();
                resizeBook();
            }, 50);

        });

    });
}

// ------------------------------
// CLOSE BOOK BACK TO SHELF
// ------------------------------
function closeBook() {

    if (!isBookOpen) return;
    isBookOpen = false;

    $("#book-container").fadeOut(200, function () {
        $("#shelf").fadeIn(300);
    });
}

// ------------------------------
// SHELF CLICK EVENTS
// ------------------------------
function setupShelf() {

    $(".book").on("click", function () {
        openBook();
    });

}

// ------------------------------
// NAVIGATION BUTTONS
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

        if (e.keyCode == 37) {
            $("#flipbook").turn("previous");
        }

        if (e.keyCode == 39) {
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
// START EVERYTHING
// ------------------------------
$(document).ready(function () {

    setupShelf();
    setupNavigation();
    setupKeyboard();
    setupResize();

});
