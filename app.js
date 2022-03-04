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
