const menu = document.querySelector("#MobileMenu");
const menuLinks = document.querySelector(".NavbarMenu");
const navLogo = document.querySelector("#NavbarLogo");

const mobileMenu = () =>{
	menu.classList.toggle("is-active");
	menuLinks.classList.toggle("active");
};

const hideMobileMenu = () => {
	const menuBars = document.querySelector(".is-active");
	if(window.innerWidth <= 960 && menuBars){
		menu.classList.toggle("is-active");
		menuLinks.classList.remove("active");
	}
}

menu.addEventListener("click", mobileMenu);
menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
