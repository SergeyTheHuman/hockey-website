import { isWebp } from './components/isWebp.js'
import Swiper from 'swiper/bundle'

isWebp()

const $burgerButtons = document.querySelectorAll('.header__top-burger')
const $burgerMenu = document.querySelector('.burger__menu')
const $body = document.querySelector('body')
const $html = document.querySelector('html')
const $anchors = document.querySelectorAll('a[href*="#"]')

$burgerMenu.addEventListener('click', (e) => {
	e.preventDefault()
	const link = e.target.closest('.burger__nav-a')
	if (link) {
		$burgerButtons.forEach((btn) => btn.classList.remove('active'))
		$burgerMenu.classList.remove('opened')
		$body.classList.remove('no-scroll')
		$html.classList.remove('no-scroll')

		const sectionId = link.getAttribute('href')
		document.querySelector(sectionId).scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		})
	}
})

$burgerButtons.forEach((btn) => {
	btn.addEventListener('click', () => {
		$burgerButtons.forEach((btn) => btn.classList.toggle('active'))
		$burgerMenu.classList.toggle('opened')

		if ($body.classList.contains('no-scroll')) {
			$body.classList.remove('no-scroll')
		} else {
			setTimeout(() => {
				$body.classList.add('no-scroll')
			}, 500)
		}

		if ($html.classList.contains('no-scroll')) {
			$html.classList.remove('no-scroll')
		} else {
			setTimeout(() => {
				$html.classList.add('no-scroll')
			}, 500)
		}
	})
})

const requestSwiper = new Swiper('.request__swiper', {
	grabCursor: true,
	slidesPerView: 1.1,
	spaceBetween: 10,
	navigation: {
		nextEl: '.request__swiper-next',
		prevEl: '.request__swiper-prev',
	},
	breakpoints: {
		768: {
			slidesPerView: 1.3,
		},
	},
})
const gridSwiper = new Swiper('.hockey__swiper', {
	grabCursor: true,
	slidesPerView: 1.5,
	spaceBetween: 20,
	navigation: {
		nextEl: '.hockey__swiper-next',
		prevEl: '.hockey__swiper-prev',
	},
})
const gallerySwiper = new Swiper('.gallery__swiper', {
	grabCursor: true,
	slidesPerView: 1.2,
	spaceBetween: 10,
	navigation: {
		nextEl: '.gallery__swiper-next',
		prevEl: '.gallery__swiper-prev',
	},
	breakpoints: {
		480: {
			slidesPerView: 1.5,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 2.5,
		},
	},
})
const eventsSwiper = new Swiper('.events__swiper', {
	grabCursor: true,
	slidesPerView: 1,
	spaceBetween: 20,
	navigation: {
		nextEl: '.events__swiper-next',
		prevEl: '.events__swiper-prev',
	},
})
const reviewsSwiper = new Swiper('.reviews__swiper', {
	grabCursor: true,
	slidesPerView: 'auto',
	spaceBetween: 20,
	navigation: {
		nextEl: '.reviews__swiper-next',
		prevEl: '.reviews__swiper-prev',
	},
})
