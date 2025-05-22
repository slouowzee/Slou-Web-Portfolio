const button = document.getElementById("load-more");
const moreInfo = document.getElementById("more-info");

button.addEventListener("click", function() {
	if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
		// Afficher plus d'info instantanément
		moreInfo.style.display = "block";
		moreInfo.classList.add('animate-fadeIn');
		button.innerHTML = "$ cat less_details.txt <i class='fa-solid fa-terminal'></i>";
		button.setAttribute('data-i18n', 'about_less');
	} else {
		// Cacher les infos instantanément
		moreInfo.classList.remove('animate-fadeIn');
		moreInfo.style.display = "none";
		button.innerHTML = "$ cat more_details.txt <i class='fa-solid fa-terminal'></i>";
		button.setAttribute('data-i18n', 'about_more');
	}
});