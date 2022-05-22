import { isWebp } from './components/isWebp.js'

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
