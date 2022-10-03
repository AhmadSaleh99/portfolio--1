// ================= Show menu =======================
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// =================menu show================
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// ====================hide menu======================
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
// =================remove menu from mobile=============
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // when we click on each nav__link we remove show-menu
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// ================projects swiper===================
let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
  // mousewheel: true,
  // keyboard: true,
});
// =================testimonial swiper==================
let swiperTestimonial = new Swiper(".testimonials__container", {
  grapCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// ============Email js ==========================
const contactForm = document.getElementById("contact__form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactProject = document.getElementById("contact-project"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  // check if the field has value

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactProject.value === ""
  ) {
    // add and remove color

    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");

    // show message

    contactMessage.textContent = "Fill all the fields 📩";
  } else {
    // serviceID - templateID - #form - publicKey
    emailjs
      .sendForm(
        "service_sm5ylrt",
        "template_56mpcf3",
        "#contact__form",
        "-MERN1CCRNhZHsjJb"
      )
      .then(
        () => {
          // show message and add color
          contactMessage.classList.add("color-blue");
          contactMessage.textContent = "Message sent ✅";

          // remove message after some time
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPS!  SOMETHING WENT WRONGE ", error);
        }
      );
    //to clear the input fields

    contactName.value = "";
    contactEmail.value = "";
    contactProject.value = "";
  }
};
contactForm.addEventListener("submit", sendEmail);

//====scroll section active link============
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// ========= show scroll up
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// ======== dark light theme================

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// previosly selected topic if user selected
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// we obtain the current theme that the interface has by validating the dark-theme class

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = themeButton.classList.contains(iconTheme)
  ? "ri-moon-line"
  : "ri-sun-line";

// we validate if the user previosly chosed a topic

if (selectedTheme) {
  //if the validation is fulfilld,we ask what the issue was to know if we activate or deactivate the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}
// activate / deactivate the theme manually wth the button

themeButton.addEventListener("click", () => {
  // add and remove the dark theme as well as the theme icon
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // then we save the theme to the localstorage
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// ======================change background header=================

const scrollHeader = () => {
  const header = document.getElementById("header");
  // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

// ==========scrol reveal animation==========

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true, //animations repeat
});

sr.reveal(
  `.home__data, .projects__container, .testimonials__container, .footer__container`
);
sr.reveal(`.home__info div`, { delay: 600, origin: "bottom", interval: 100 });
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1) `, {
  origin: "left",
});
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2) `, {
  origin: "right",
});
sr.reveal(`.qualification__content, .services__card`, { interval: "100" });
