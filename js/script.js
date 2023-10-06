const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

document.querySelectorAll(".work__link").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll(".work__link").forEach(function (btn) {
      btn.classList.remove("work__link--active");
    });

    e.currentTarget.classList.add("work__link--active");

    document.querySelectorAll(".work__article").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("work__article--active");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("work__article--active");
  });
});

new Accordion(".accordion-list", {
  elementClass: "accordion",
  triggerClass: "accordion__control",
  panelClass: "accordion__content",
  activeClass: "accordion--active",
});

const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__nav");
const menuLinks = menu.querySelectorAll(".nav__link");

burger.addEventListener(
  "click",

  function () {
    burger.classList.toggle("burger--active");

    menu.classList.toggle("header__nav--active");

    document.body.classList.toggle("stop-scroll");
  }
);

menuLinks.forEach((el) => {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");

    menu.classList.remove("header__nav--active");

    document.body.classList.remove("stop-scroll");
  });
});

const searchButton = document.querySelector(".header__btn");
const searchForm = document.querySelector(".header__search");
const searchClosed = document.querySelector(".search__close-btn");
const searchInput = document.querySelector(".search__input");

searchButton.addEventListener(
  "click",

  function () {
    searchForm.classList.add("header__search--active");
  }
);

searchClosed.addEventListener(
  "click",

  function () {
    searchForm.classList.remove("header__search--active");

    searchInput.value = "";
  }
);
