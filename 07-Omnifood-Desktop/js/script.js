console.log("Hello World!");

const myName = "Krisha Shah";
const h1 = document.querySelector('.heading-primary');
console.log(myName);
console.log(h1);

// h1.addEventListener('click', function(){
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

///////////////////////////////////////////////////////////
/// SET CURRENT YEAR

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
/// MAKE MOBILE NAVIGATION WORK

// Mobile navigation toggle button
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Close mobile nav when a nav link is clicked
const allNavLinks = document.querySelectorAll(".main-nav-link");

allNavLinks.forEach(link => {
  link.addEventListener("click", function () {
    headerEl.classList.remove("nav-open");
  });
});

// Smooth scrolling
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Scroll to top
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other sections
    if (href !== "#" && href.startsWith("#")) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

///////////////////////////////////////////////////////////
// Sticky Navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function(entries) {
    const ent = entries[0];
    console.log(ent);

    if(ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }

    if(ent.isIntersecting === true){
      document.body.classList.remove('sticky');
    }
}, 

{
  //In the viewport
  root: null,
  threshold: 0,
  rootMargin: '-80px',
}
);

obs.observe(sectionHeroEl);


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

