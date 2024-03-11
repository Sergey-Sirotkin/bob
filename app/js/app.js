// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $
import $ from "jquery";
// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener("DOMContentLoaded", () => {
  // Preloader
  window.onload = function () {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("hide-preloader");
    setInterval(function () {
      preloader.classList.add("preloader-hidden");
    }, 990);
  };

  // Smooth scroll
  $('a[href*="#"]').on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      400
    );
    return false;
  });

  // Change the active link when scrolling sections
  const sections = document.querySelectorAll(".section-menu");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;

      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - sectionHeight / 10) {
        current = `#${section.getAttribute("id")}`;
      }
    });

    navLinks.forEach(function (each) {
      // add/remove active class
      each.classList.remove("active");
      if (each.getAttribute("href") == current) {
        each.classList.add("active");
      }
    });
  });

  // Hamburger
  document
    .querySelector(".header__top-hamburger")
    .addEventListener("click", function () {
      document
        .querySelector(".hamburger--slider")
        .classList.toggle("is-active");
      document
        .querySelector(".nav__list")
        .classList.toggle("nav__list--active");
      document.querySelector("body").classList.toggle("hidden__body");
    });

  navLinks.forEach(function (each) {
    each.addEventListener("click", function () {
      document
        .querySelector(".hamburger--slider")
        .classList.remove("is-active");
      document
        .querySelector(".nav__list")
        .classList.remove("nav__list--active");
      document.querySelector("body").classList.remove("hidden__body");
    });

    // add/remove active class
    each.classList.remove("active");
  });

  // Accordion
  const accordionBtns = document.querySelectorAll(".questions__accordion-btn");

  accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {

      let content = this.nextElementSibling;
      const parent = this.parentNode;

      if (parent.classList.contains("is-active")) {
        parent.classList.remove("is-active");
        content.style.maxHeight = null;
      } else {
        parent.classList.add("is-active");
        content.style.maxHeight = 'initial'
      }
    };
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 700) {
      $("#goTop").addClass("is-visible ");
    } else {
      $("#goTop").removeClass("is-visible ");
    }
  });
  $("#goTop").click(function (e) {
    $("html").animate({ scrollTop: 0 }, "slow");
  });
});
