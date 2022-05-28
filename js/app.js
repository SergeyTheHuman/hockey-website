import { isWebp } from './components/isWebp.js'
import Swiper from 'swiper/bundle'

isWebp()

const $burgerButtons = document.querySelectorAll('.header__top-burger')
const $burgerMenu = document.querySelector('.burger__menu')
const $body = document.querySelector('body')
const $backToHomeBtn = document.querySelector('.thanks__button')
const $dateInput = document.querySelector('.form__date')
const $bookingModal = document.querySelector('.ice__booking-wrapper')
const $connectModal = document.querySelector('.connect__us-wrapper')
const $popupButtons = document.querySelectorAll('[data-modal]')
const $closeModalButtons = document.querySelectorAll('.form__close')
const $forms = document.querySelectorAll('.form__body')
const $modals = [$bookingModal, $connectModal]

$body.addEventListener('keydown', (e) => {
	let activeModal = document.querySelector('.opened-modal')
	let modalForm = ''
	activeModal ? (modalForm = activeModal.querySelector('.form__body')) : modalForm

	if (e.keyCode === 27 && modalForm) {
		activeModal.classList.remove('opened-modal')
		modalForm.reset()
	}
})
$forms.forEach((form) => {
	form.addEventListener('submit', formSend)

	async function formSend(e) {
		e.preventDefault()
		let error = await formValidate(form)
		let formData = new FormData(form)

		if (error === 0) {
			form.reset()
			let date = form.querySelector('.form__date')
			if (date) {
				date.focus()
				date.blur()
			}
			form.parentElement.classList.remove('opened-modal')
			setTimeout(() => {
				window.location.href = `thanks.html`
			}, 500)
		}
	}
	async function formValidate(form) {
		let error = 0
		let formReqs = form.querySelectorAll('._req')
		for (const input of formReqs) {
			formRemoveError(input)

			if (input.classList.contains('_email')) {
				if (!emailTest(input)) {
					formAddError(input)
					error++
				}
			} else {
				if (input.value === '') {
					formAddError(input)
					error++
				}
			}
		}
		return error
	}

	function formAddError(input) {
		input.classList.add('_error')
		input.parentElement.classList.add('_error')
	}
	function formRemoveError(input) {
		input.classList.remove('_error')
		input.parentElement.classList.remove('_error')
	}
	function emailTest(input) {
		return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(input.value)
	}
})

$modals.forEach((modal) => {
	modal.addEventListener('click', (e) => {
		if (!e.target.closest('.form__body')) {
			$bookingModal.classList.remove('opened-modal')
			$connectModal.classList.remove('opened-modal')
			modal.querySelector('.form__body').reset()
		}
		if (e.target.classList.contains('form__close')) {
			$bookingModal.classList.remove('opened-modal')
			$connectModal.classList.remove('opened-modal')
			modal.querySelector('.form__body').reset()
		}
	})
})

$popupButtons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		let dataModal = btn.dataset.modal
		e.preventDefault()
		if ($burgerMenu.classList.contains('opened')) {
			$burgerMenu.classList.toggle('opened')

			$body.classList.contains('no-scroll') ? unlock($body) : lock($body)
		}
		if (dataModal === 'connectModal') {
			$connectModal.classList.add('opened-modal')
		} else if (dataModal === 'bookingModal') {
			$bookingModal.classList.add('opened-modal')
		}
	})
})

function lock(element) {
	const lockPadding = window.innerWidth - $body.clientWidth + 'px'

	element.classList.add('no-scroll')
	element.style.paddingRight = lockPadding
}

function unlock(element) {
	element.classList.remove('no-scroll')
	element.style.paddingRight = ''
}
if ($dateInput) {
	$dateInput.addEventListener('focus', () => {
		$dateInput.setAttribute('type', 'date')
	})
	$dateInput.addEventListener('blur', () => {
		if ($dateInput.value === '') {
			$dateInput.setAttribute('type', 'text')
		}
	})
}
if ($backToHomeBtn) {
	$backToHomeBtn.addEventListener('click', () => {
		window.location.href = `index.html`
	})
}

$burgerMenu.addEventListener('click', (e) => {
	const link = e.target.closest('.burger__nav-a')
	if (link) {
		e.preventDefault()
		const sectionId = link.getAttribute('href')
		if (e.target.closest('.thanks__header')) {
			window.location.href = `index.html${sectionId}`
		}
		$burgerButtons.forEach((btn) => btn.classList.remove('active'))
		$burgerMenu.classList.remove('opened')
		unlock($body)

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

		$body.classList.contains('no-scroll') ? unlock($body) : lock($body)
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
