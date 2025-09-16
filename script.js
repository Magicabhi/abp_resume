$(document).ready(function(){
  // sticky navbar & scroll-up button
  $(window).scroll(function(){
    if(this.scrollY > 20) $(".navbar").addClass("sticky");
    else $(".navbar").removeClass("sticky");

    if(this.scrollY > 500) $(".scroll-up-btn").addClass("show");
    else $(".scroll-up-btn").removeClass("show");
  });

  // scroll-up
  $(".scroll-up-btn").click(function(){
    $("html").animate({scrollTop:0});
    $("html").css("scrollBehavior","auto");
  });

  // smooth scroll on menu click
  $(".navbar .menu li a").click(function(){
    $("html").css("scrollBehavior","smooth");
  });

  // toggle menu
  $(".menu-btn").click(function(){
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing animation
  new Typed(".typing", {
    strings: ["WordPress Developer","Full-Stack Developer","Frontend Developer"],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true
  });

  // owl carousel for projects
  $(".carousel").owlCarousel({
    margin:20, loop:true, autoplay:true,
    autoplayTimeout:2000, autoplayHoverPause:true,
    responsive:{
      0:{items:1,nav:false},
      600:{items:2,nav:false},
      1000:{items:3,nav:false}
    }
  });
});
