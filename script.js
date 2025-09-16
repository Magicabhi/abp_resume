// main behaviors: menu, sticky navbar, scroll-up, typed, carousel, animations
$(function(){
  // typed text
  new Typed('.typing', {
    strings: ["WordPress Developer","Full-Stack Developer","Frontend Developer"],
    typeSpeed:70, backSpeed:35, loop:true
  });

  // owl carousel for project cards
  $('.carousel').owlCarousel({
    margin:20, loop:true, autoplay:true, autoplayTimeout:2300, autoplayHoverPause:true,
    responsive:{
      0:{items:1,nav:false},
      600:{items:2,nav:false},
      1000:{items:3,nav:false}
    }
  });

  // sticky navbar + scroll-up
  $(window).on('scroll', function(){
    if (this.scrollY > 20) $('.navbar').addClass('sticky'); else $('.navbar').removeClass('sticky');
    if (this.scrollY > 500) $('.scroll-up-btn').addClass('show'); else $('.scroll-up-btn').removeClass('show');
  });

  // scroll up
  $('.scroll-up-btn').on('click', function(){
    $('html, body').animate({scrollTop:0}, 600);
  });

  // menu toggle (mobile)
  $('.menu-btn').on('click', function(){
    $('.menu').toggle();
  });

  // smooth scroll for internal links
  $('.menu a, .btn[href^="#"]').on('click', function(e){
    var target = this.hash;
    if (target && $(target).length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $(target).offset().top - 70 }, 600);
      if ($(window).width() < 980) $('.menu').hide();
    }
  });

  // IntersectionObserver for fade-up animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // optionally unobserve for performance
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

  // Make sure skill lines animate width after in-view
  // (since we set inline widths in HTML via style attribute, this will animate)
});
