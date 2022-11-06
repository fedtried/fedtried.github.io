window.addEventListener("scroll", reveal);
reveal();

const email = document.querySelector(".email");
email.addEventListener('click', function(){
    navigator.clipboard.writeText("federica.ox@gmail.com");
})

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function(){
    this.classList.toggle('is-active')
    const submenu = document.querySelector(".collapse-menu")
    if(submenu.classList.contains("is-active")){
        document.querySelector(".collapse-menu").classList.remove("is-active")
    } else{
        document.querySelector(".collapse-menu").classList.add("is-active")
    }
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
    header.addEventListener('click', function(){
        this.classList.toggle('active');
        const accordionBody = accordionHeaders.nextElementSibling;
        if(header.classList.contains("active")){
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        } else {
            accordionBody.style.maxHeight = 0
        }
    })
})

function reveal() {
    var reveals = document.querySelectorAll(".project");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }