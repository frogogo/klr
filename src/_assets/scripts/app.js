import SmoothScroll from 'smooth-scroll'
import Flickity from 'flickity'

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

// Cases carousel
const cases = [
  {
    name: 'Сеть АЗС Газпромнефть',
    logotypesSrc: ['/static/images/cases/Gazpromneft/logo.png'],
    previewSrc: '/static/images/cases/Gazpromneft/preview.jpg',
    durationYears: '2017-2018',
    durationMonths: 'Ноябрь – Февраль',
    durationTime: '13 + 1 неделя'
  },
  {
    name: 'Пятёрочка',
    logotypesSrc: ['/static/images/cases/Pyaterochka/logo.png'],
    previewSrc: '/static/images/cases/Pyaterochka/preview.jpg',
    durationYears: '2016',
    durationMonths: 'Июль - Октябрь',
    durationTime: '13 + 1 неделя'
  },
  {
    name: 'Виктория',
    logotypesSrc: ['/static/images/cases/Lukoyl/logo.png'],
    previewSrc: '/static/images/cases/Lukoyl/preview.jpg',
    durationYears: '2019',
    durationMonths: 'Апрель - Июнь',
    durationTime: '10 + 6 недель'
  },
  {
    name: 'Карусель',
    logotypesSrc: ['/static/images/cases/Karusel/logo.png'],
    previewSrc: '/static/images/cases/Karusel/preview.jpg',
    durationYears: '2018',
    durationMonths: 'Февраль - Апрель',
    durationTime: '7 + 6 недель'
  },
  {
    name: 'Мираторг',
    logotypesSrc: ['/static/images/cases/Miratorg/logo1.png','/static/images/cases/Miratorg/logo2.png'],
    previewSrc: '/static/images/cases/Miratorg/preview.jpg',
    durationYears: '2016',
    durationMonths: 'Апрель - Июль',
    durationTime: '11 + 6 недель'
  },
  {
    name: 'ВР',
    logotypesSrc: ['/static/images/cases/BP/logo.png'],
    previewSrc: '/static/images/cases/BP/preview.jpg',
    durationYears: '2019-2020',
    durationMonths: 'Апрель - Июль',
    durationTime: '11 + 4 недели'
  },
  {
    name: 'Сеть АЗС Газпромнефть',
    logotypesSrc: ['/static/images/cases/Gazpromneft_2/logo1.png','/static/images/cases/Gazpromneft_2/logo2.png'],
    previewSrc: '/static/images/cases/Gazpromneft_2/preview.jpg',
    durationYears: '2019',
    durationMonths: 'Апрель - Июль',
    durationTime: '14 + 5 недель'
  },
  {
    name: 'SMALL',
    logotypesSrc: ['/static/images/cases/SMALL/logo.png'],
    previewSrc: '/static/images/cases/SMALL/preview.jpg',
    durationYears: '2019-2020',
    durationMonths: 'Октябрь - Январь',
    durationTime: '13 + 1 неделя'
  },
  {
    name: 'Беларуснефть',
    logotypesSrc: ['/static/images/cases/Belorusneft/logo.png'],
    previewSrc: '/static/images/cases/Belorusneft/preview.jpg',
    durationYears: '2019',
    durationMonths: 'Февраль - Май',
    durationTime: '13 + 1 неделя'
  },
]

const casesCarousel = document.querySelector('.cases-carousel')

cases.map(element => {
  const caseItem = casesCarousel.querySelector('.case').cloneNode(true)

  caseItem.querySelector('.name').textContent = element.name
  element.logotypesSrc.map(logotypeSrc => {
    const logo = caseItem.querySelector('.image-logo').cloneNode(true)
    logo.src = logotypeSrc
    logo.classList.remove('hidden')
    caseItem.querySelector('.image-logo').after(logo)
  })
  caseItem.querySelector('.image-logo').alt = element.name
  caseItem.querySelector('.image-preview').src = element.previewSrc
  caseItem.querySelector('.image-preview').alt = element.name
  caseItem.querySelector('.duration-years').textContent = element.durationYears
  caseItem.querySelector('.duration-months').textContent = element.durationMonths
  caseItem.querySelector('.duration-time').textContent = element.durationTime

  caseItem.classList.remove('hidden')
  casesCarousel.appendChild(caseItem)
})

new Flickity( casesCarousel, {
  // options
  cellAlign: 'left',
  groupCells: true
});
