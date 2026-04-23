$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
    // close mobile menu after clicking a link
    $(".navbar .menu").removeClass("active");
    $(".hamburger i").removeClass("active");
  });

  // toggle mobile menu
  $(".hamburger").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".hamburger i").toggleClass("active");
  });

  // typing text animations
  new Typed(".typing", {
    strings: [
      "Front end developer",
      "Back end developer",
      "Technician IT",
      "Freelancer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  new Typed(".typing-2", {
    strings: ["Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  new Typed(".typing-3", {
    strings: ["Connect with me on :)"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // auto-update footer copyright year
  var yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // init AOS scroll animations
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }
});
