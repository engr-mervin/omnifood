"use strict";

const body = document.querySelector("body");
const header = document.querySelector("#main-header");

const toggle = document.querySelectorAll(".btn-mobile-nav");

toggle.forEach((el) => {
  el.addEventListener("click", (e) => {
    header.classList.toggle("nav-open");
  });
});

document.addEventListener("scroll", (e) => {
  header.classList.remove("nav-open");
});

const overlay = document.querySelector(".overlay");

overlay.addEventListener("click", (e) => {
  header.classList.remove("nav-open");
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/

const currentYear = document.querySelector(".current-year");

currentYear.textContent = new Date().getFullYear().toString();

//////////////////smooth scrolling

const allLinks = document.querySelectorAll("a:link");

console.log(allLinks);

allLinks.forEach((el) => {
  el.addEventListener("click", (e) => {
    // console.log(e);
    e.preventDefault();

    const href = el.getAttribute("href");

    //scroll back to top
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (href !== "#" && href.startsWith("#")) {
      const element = document.querySelector(href);

      console.log(element);

      element.scrollIntoView({ behavior: "smooth" });
    }

    if (el.classList.contains("main-nav-link")) {
      header.classList.remove("nav-open");
    }
  });
});

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      body.classList.add("sticky");
    } else {
      body.classList.remove("sticky");
    }

    console.log(ent);
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHero);
