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
let form = document.getElementById('contactForm');
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

// EMAILJS INIT
emailjs.init("ct8es1C8Fk5H5133V");

// CHATBOT LOGIC
let step = 0;
let data = {};

function addMessage(text, sender, options = []) {
  let chatBox = document.getElementById("chat-box");
  if (!chatBox) return;

  let div = document.createElement("div");
  div.className = "msg " + sender;
  div.innerText = text;
  chatBox.appendChild(div);

  // OPTIONS BUTTONS
  if (options.length > 0) {
  let btnContainer = document.createElement("div");
  btnContainer.className = "options";

  options.forEach(option => {
    let btn = document.createElement("button");
    btn.className = "chat-option-btn"; // 👈 COMMON CLASS
    btn.innerText = option;

    btn.onclick = function () {
      addMessage(option, "user");
      handleOption(option);
    };

    btnContainer.appendChild(btn);
  });

  chatBox.appendChild(btnContainer);
}

// HANDLE BUTTON CLICK
function handleOption(option) {
  data.purpose = option;
  step = 1;
  setTimeout(botAsk, 500);
}

// BOT QUESTIONS
function botAsk() {
  if (step === 0) {
    addMessage(
      "Hi 👋 I'm Abhi's assistant. How can I help you today?",
      "bot",
      [
        "Hire a developer",
        "Build a website",
        "Freelance collaboration",
        "Just exploring"
      ]
    );
  }

  if (step === 1) addMessage("May I know your name?", "bot");

  if (step === 3) addMessage("What kind of website or work are you looking for?", "bot");

  if (step === 4) addMessage("Can you share your contact number?", "bot");

  if (step === 5) addMessage("Please share your email so we can connect with you.", "bot");
}

// SEND FUNCTION
function send() {
  let inputField = document.getElementById("input");
  if (!inputField) return;

  let input = inputField.value.trim();
  if (!input) return;

  addMessage(input, "user");

  if (step === 1) {
    data.name = input;
    step = 0;
  } 
  else if (step === 3) {
    data.message = input;
    step++;
  }
  else if (step === 4) {
    if (!/^[0-9]{10}$/.test(input)) {
      addMessage("⚠ Please enter a valid 10-digit number.", "bot");
      return;
    }
    data.phone = input;
    step++;
  }
  else if (step === 5) {
    if (!input.includes("@")) {
      addMessage("⚠ Please enter a valid email.", "bot");
      return;
    }

    data.email = input;

    emailjs.send("service_l7k00h9", "template_f56vqd7", data)
      .then(() => {
        addMessage("🎉 Thank you! I’ll get back to you shortly.", "bot");
      })
      .catch(() => {
        addMessage("❌ Error sending message.", "bot");
      });

    step = 0;
    inputField.value = "";
    return;
  }

  inputField.value = "";
  setTimeout(botAsk, 500);
}

// CHAT TOGGLE
window.addEventListener("load", function(){

  const chatToggle = document.getElementById("chat-toggle");
  const chatContainer = document.getElementById("chat-container");
  const closeChat = document.getElementById("close-chat");
  const input = document.getElementById("input");

  if (chatToggle) {
    chatToggle.onclick = function () {
      chatContainer.style.display = "block";
      chatToggle.style.display = "none";

      const chatBox = document.getElementById("chat-box");

      if (chatBox && chatBox.children.length === 0) {
        setTimeout(botAsk, 500);
      }
    };
  }

  if (closeChat) {
    closeChat.onclick = function () {
      chatContainer.style.display = "none";
      chatToggle.style.display = "block";
    };
  }

  if (input) {
    input.addEventListener("keypress", function(e){
      if (e.key === "Enter") {
        send();
      }
    });
  }

});
