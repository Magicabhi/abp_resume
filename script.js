$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation
    var typed = new Typed(".typing", {
        strings: ["WordPress Developer", "Full-Stack WordPress Developer", "Freelance WordPress Developer", "WordPress Designer & Developer", "Full-Stack Web Creator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["WordPress Developer", "Full-Stack WordPress Developer", "Freelance WordPress Developer", "WordPress Designer & Developer", "Full-Stack Web Creator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{ items: 1, nav: false },
            600:{ items: 2, nav: false },
            1000:{ items: 3, nav: false }
        }
    });
});

// contact form (Formspree + animation)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = form.querySelector('button');
    const orig = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        btn.textContent = 'Message Sent ✓';
        form.reset();
      } else {
        btn.textContent = 'Error! Try again';
      }
    } catch (error) {
      btn.textContent = 'Error! Try again';
    }

    setTimeout(() => {
      btn.textContent = orig;
      btn.disabled = false;
    }, 2000);
  });
}

$(document).ready(function(){
  $(".serv-content").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true, // <-- pauses on hover
    responsive: {
      0:{ items:1, nav:false },
      600:{ items:2, nav:false },
      1000:{ items:3, nav:false }
    }
  });
});

$(".card").click(function(){
  var popupId = $(this).data("popup");
  $("body").addClass("popup-open");
  $("#" + popupId).css("display","flex").hide().fadeIn();
});

$(".popup .close").click(function(){
  $(this).closest(".popup").fadeOut(function(){
    $("body").removeClass("popup-open");
  });
});

$(".popup").click(function(e){
  if($(e.target).hasClass("popup")){
    $(this).fadeOut(function(){
      $("body").removeClass("popup-open");
    });
  }
});


