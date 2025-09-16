$(document).ready(function () {
  // Sticky navbar + scroll button
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // Scroll up
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  // Smooth scroll on menu click
  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  // Toggle menu/navbar
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Typing animation
  var typed = new Typed(".typing", {
    strings: [
      "WordPress Developer",
      "Full-Stack Developer",
      "Frontend Engineer",
      "Backend Developer",
      "Freelancer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed2 = new Typed(".typing-2", {
    strings: [
      "WordPress Developer",
      "Full-Stack Developer",
      "Frontend Engineer",
      "Backend Developer",
      "Freelancer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // Projects carousel
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1, nav: false },
      600: { items: 2, nav: false },
      1000: { items: 3, nav: false }
    }
  });
});
