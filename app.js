const slides = document.querySelectorAll('.step')
const btnRight = document.querySelector('.right-slide-btn')
const btnLeft = document.querySelector('.left-slide-btn')

let currSlide = 0
const maxSlide = slides.length

function goToSlide(slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${105 * (i - slide)}%)`)
  )
}

goToSlide(currSlide)

setInterval(() => {
  currSlide++
  goToSlide(currSlide)
}, 3000)

btnRight.addEventListener('click', function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0
  } else {
    currSlide++
  }

  goToSlide(currSlide)
})

btnLeft.addEventListener('click', function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1
  } else {
    currSlide--
  }

  goToSlide(currSlide)
})

// navbar

const openMenuBtn = document.querySelector('.hamburger')
const closeMenuBtn = document.querySelector('.close-icon')
const navbar = document.querySelector('.nav-links')
const navLinks = document.querySelectorAll('.nav-link')

const showNavbar = function () {
  navbar.classList.add('show-nav')
  openMenuBtn.classList.add('hidden')
}

const removeNavbar = function () {
  navbar.classList.remove('show-nav')
  openMenuBtn.classList.remove('hidden')
}

openMenuBtn.addEventListener('click', showNavbar)
closeMenuBtn.addEventListener('click', removeNavbar)

navLinks.forEach(navLink => navLink.addEventListener('click', removeNavbar))

// sticky nav using intersection observer API

const nav = document.querySelector('.navbar')

const sectionOne = document.querySelector('.header')

const navHeight = nav.getBoundingClientRect().height

const stickyNav = function (enteries) {
  const [entry] = enteries
  if (!entry.isIntersecting) nav.classList.add('nav-sticky')
  else nav.classList.remove('nav-sticky')
}

const stickyNavOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: `-${navHeight}px`,
}

const observer = new IntersectionObserver(stickyNav, stickyNavOptions)

observer.observe(sectionOne)
