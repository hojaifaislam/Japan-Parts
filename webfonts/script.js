// const overlay = document.querySelector(".overlay");
// const body = document.querySelector("body");
// const menuBtn = document.querySelector(".menu-btn");
// const crossBtn = document.querySelector(".cross-btn");
// const menuItems = document.querySelector(".menu-items");
// const expandBtn = document.querySelectorAll(".expand-btn");

// function toggle() {
//   body.classList.toggle("overflow");
//   overlay.classList.toggle("overlay--active");
//   menuBtn.classList.toggle("open");
//   menuItems.classList.toggle("open");
// }

// menuBtn.addEventListener("click", (e) => {
//   e.stopPropagation();
//   toggle();
// });

// crossBtn.addEventListener("click", (e) => {
//     e.stopPropagation();
//     menuItems.classList.remove("open");
//     menuBtn.classList.remove("open");
//     overlay.classList.remove("overlay--active");
//     body.classList.remove("overflow");
// });

// window.onkeydown = function (event) {
//   const key = event.key;
//   const active = menuItems.classList.contains("open");
//   if (key === "Escape" && active) {
//     toggle();
//   }
// };

// document.addEventListener("click", (e) => {
//   let target = e.target,
//     its_menu = target === menuItems || menuItems.contains(target),
//     its_hamburger = target === menuBtn,
//     menu_is_active = menuItems.classList.contains("open");
//   if (!its_menu && !its_hamburger && menu_is_active) {
//     toggle();
//   }
// });


// expandBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     btn.classList.toggle("open");
//   });
// });


// jQuery
$(document).ready(function () {

    function toggle() {
        $("body").toggleClass("overflow");
        $(".overlay").toggleClass("overlay--active");
        $(".menu-btn").toggleClass("open");
        $(".menu-items").toggleClass("open");
    }

    $(".menu-btn").on("click", function (e) {
        e.stopPropagation();
        toggle();
    });

    $(".cross-btn").on("click", function (e) {
        e.stopPropagation();
        $(".menu-items").removeClass("open");
        $(".menu-btn").removeClass("open");
        $(".overlay").removeClass("overlay--active");
        $("body").removeClass("overflow");
    });

    $(window).on("keydown", function (event) {
        if (event.key === "Escape" && $(".menu-items").hasClass("open")) {
            toggle();
        }
    });


    $(document).on("click", function (e) {
        if (!$(".menu-items").is(e.target) && !$(".menu-items").has(e.target).length && !$(".menu-btn").is(e.target)) {
            if ($(".menu-items").hasClass("open")) {
                toggle();
            }
        }
    });




    $(".expand-btn").click(function () {
        $(this).toggleClass("open");
    });
});
