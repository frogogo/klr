"use strict";

const header = document.querySelector("#header");
const mobileMenu = document.querySelector(".mobile-navigation");
const mobileMenuOpenTarget = document.querySelector(".menu-open");
const mobileMenuCloseTarget = document.querySelector(".menu-close");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu__link");

const toggleMobileMenu = action => {
  if (action === "open") {
    mobileMenuCloseTarget.classList.remove("hidden");
    mobileMenuOpenTarget.classList.add("hidden");
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex", "md:hidden");
  } else if (action === "close") {
    mobileMenuCloseTarget.classList.add("hidden");
    mobileMenuOpenTarget.classList.remove("hidden");
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.add("hidden");
  } else return;
};

const toggleDocumentScroll = action => {
  if (action === "disable") {
    document.body.classList.add("relative", "overflow-hidden", "h-full");
    document.documentElement.classList.add(
      "relative",
      "overflow-hidden",
      "h-full"
    );
  } else if (action === "enable") {
    document.body.classList.remove("relative", "overflow-hidden", "h-full");
    document.documentElement.classList.remove(
      "relative",
      "overflow-hidden",
      "h-full"
    );
  } else return;
};

const checkHeader = () => {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (width < 768) {
    header.classList.add("header-white");
    return
  }

  const SCROLL_TO_LIMIT = 200;
  window.scrollY > SCROLL_TO_LIMIT
    ? header.classList.add("header-white")
    : header.classList.remove("header-white");
};

window.addEventListener("scroll", checkHeader);
window.addEventListener("DOMContentLoaded", checkHeader);
window.addEventListener("resize", checkHeader);

mobileMenuOpenTarget.addEventListener("click", () => {
  toggleMobileMenu("open");
  toggleDocumentScroll("disable");
});

mobileMenuCloseTarget.addEventListener("click", () => {
  toggleMobileMenu("close");
  toggleDocumentScroll("enable");
});

mobileMenuLinks.forEach(link => {
  link.addEventListener("click", () => {
    toggleMobileMenu("close");
    toggleDocumentScroll("enable");
  });
});

// Smooth scroll for anchors
SmoothScroll('.smooth-scroll', {
  speed: 700
})

// Smooth scroll for anchors with offset
SmoothScroll(".smooth-scroll-with-offset", {
  speed: 500,
  // How far to offset the scrolling anchor location in pixels
  offset: header.offsetHeight
});
