import { isWebp } from './components/isWebp.js'
import Swiper from 'swiper/bundle'
console.log(Swiper)
isWebp()

const $burgerButtons = document.querySelectorAll('.header__top-burger')
const $burgerMenu = document.querySelector('.burger__menu')
const $body = document.querySelector('body')
const $html = document.querySelector('html')

$burgerButtons.forEach((btn) => {
	btn.addEventListener('click', () => {
		$burgerButtons.forEach((btn) => btn.classList.toggle('active'))
		$burgerMenu.classList.toggle('opened')

		if ($body.classList.contains('no-scroll')) {
			setTimeout(() => {
				$body.classList.remove('no-scroll')
			}, 300)
		} else {
			$body.classList.add('no-scroll')
		}

		if ($html.classList.contains('no-scroll')) {
			setTimeout(() => {
				$html.classList.remove('no-scroll')
			}, 300)
		} else {
			$html.classList.add('no-scroll')
		}
	})
})

const requestSwiper = new Swiper('.request__swiper', {
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
	slidesPerView: 1.5,
	spaceBetween: 20,
	navigation: {
		nextEl: '.hockey__swiper-next',
		prevEl: '.hockey__swiper-prev',
	},
})

const gallerySwiper = new Swiper('.gallery__swiper', {
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
