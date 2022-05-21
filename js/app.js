import { isWebp } from './components/isWebp.js'

isWebp()

const $burgerButton = document.querySelector('.header__top-burger')
const $burgerMenu = document.querySelector('.burger__menu')

const $headerLogo = document.querySelector('.header__logo')
const $headerLogoImg = document.querySelector('.header__logo-img')
const $headerTop = document.querySelector('.header__top')

$burgerButton.addEventListener('click', () => {
	let headerMargin = parseInt(window.getComputedStyle($headerLogo, null).getPropertyValue('margin-top'))
	let logoHeight = parseInt(window.getComputedStyle($headerLogoImg, null).getPropertyValue('height'))
	let headerTopHeight = parseInt(window.getComputedStyle($headerTop, null).getPropertyValue('height'))
	let padding = headerMargin + logoHeight + headerTopHeight - 20
	$burgerButton.classList.toggle('active')
	$burgerMenu.classList.toggle('opened')
	if ($burgerMenu.classList.contains('opened')) {
		setTimeout(() => {
			$burgerButton.style.cssText = `background-color: #0069E4; width: 100%; padding: ${padding}px 0;`
		}, 500)
	} else {
		$burgerButton.style.cssText = ``
	}
	document.body.classList.toggle('no-scroll')
})

window.addEventListener('resize', () => {
	let headerMargin = parseInt(window.getComputedStyle($headerLogo, null).getPropertyValue('margin-top'))
	let logoHeight = parseInt(window.getComputedStyle($headerLogoImg, null).getPropertyValue('height'))
	let headerTopHeight = parseInt(window.getComputedStyle($headerTop, null).getPropertyValue('height'))
	let padding = headerMargin + logoHeight + headerTopHeight - 20
	if ($burgerMenu.classList.contains('opened')) {
		$burgerButton.style.cssText = `background-color: #0069E4; width: 100%; padding: ${padding}px 0;`
	}
})
