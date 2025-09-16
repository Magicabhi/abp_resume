$(document).ready(function(){
  // Sticky navbar & scroll-up button
  $(window).scroll(function(){
    if(this.scrollY > 20) $(".navbar").addClass("sticky");
    else $(".navbar").removeClass("sticky");

    if(this.scrollY > 500) $(".scroll-up-btn").addClass("show");
    else $(".scroll-up-btn").removeClass("show");
  });

  // Scroll-up
  $(".scroll-up-btn").click(function(){
    $("html").animate({scrollTop:0});
    $("html").css("scrollBehavior","auto");
  });

  // Smooth scroll on menu items
  $(".navbar .menu li a").click(function(){
    $("html").css("scrollBehavior","smooth");
    $(".navbar .menu li a").removeClass("active");
    $(this).addClass("active");
  });

  // Toggle menu (mobile)
  $(".menu-btn").click(function(){
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Typing text animation
  new Typed(".typing", {
    strings: ["WordPress Developer", "Full-Stack Developer", "Frontend Developer"],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true
  });

  // Owl carousel for projects
  $(".carousel").owlCarousel({
    margin:20, loop:true, autoplay:true,
    autoplayTimeout:2500, autoplayHoverPause:true,
    responsive:{
      0:{items:1,nav:false},
      600:{items:2,nav:false},
      1000:{items:3,nav:false}
    }
  });

  // Section hover highlights (extra polish)
  $("section").hover(
    function(){ $(this).css("background-color", $(this).hasClass("work") || $(this).hasClass("teams") ? "#1a1a1a" : "#fafafa"); },
    function(){ $(this).css("background-color", ""); }
  );
});
