"use strict";

const header = document.querySelector("#header");
const mobileMenu = document.querySelector(".mobile-navigation");
const mobileMenuOpenTarget = document.querySelector(".menu-open");
const mobileMenuCloseTarget = document.querySelector(".menu-close");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu__link");

const mobileMenuOpen = () => {
  mobileMenuCloseTarget.classList.remove("hidden");
  mobileMenuOpenTarget.classList.add("hidden");
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("flex", "md:hidden");
};

const mobileMenuClose = () => {
  mobileMenuCloseTarget.classList.add("hidden");
  mobileMenuOpenTarget.classList.remove("hidden");
  mobileMenu.classList.remove("flex");
  mobileMenu.classList.add("hidden");
};

mobileMenuOpenTarget.addEventListener("click", () => {
  mobileMenuOpen();
});

mobileMenuCloseTarget.addEventListener("click", () => {
  mobileMenuClose();
});

mobileMenuLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenuClose();
  });
});
