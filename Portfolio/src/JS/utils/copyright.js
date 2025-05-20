document.addEventListener('DOMContentLoaded', () => {
	const currentYear = new Date().getFullYear();

	const copyrightElement = document.getElementById('copyright');

	if (copyrightElement) {
		copyrightElement.textContent = `© ${currentYear} - Pilet Gaël / Slou - Tous droits réservés`;
	}
});