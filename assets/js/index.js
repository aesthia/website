// AUTOPLAY BACKGROUND VIDEO
document.getElementById('autoplay').play();

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header')
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50 ? header.classList.add('bg-header') 
                     : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)
  
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-fill';

// Zuletzt ausgewähltes Thema (falls vom Benutzer ausgewählt)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Aktuelles Thema und Icon ermitteln
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-fill';

// Benutzerpräferenz überprüfen
if (selectedTheme) {
  // Falls vorhanden, Thema und Icon entsprechend setzen
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme);
}

// Funktion zum Aktivieren des Dark-Modus
const activateDarkMode = () => {
  document.body.classList.add(darkTheme);
  themeButton.classList.add(iconTheme);
  localStorage.setItem('selected-theme', 'dark');
  localStorage.setItem('selected-icon', 'ri-moon-fill');
};

// Funktion zum Deaktivieren des Dark-Modus
const deactivateDarkMode = () => {
  document.body.classList.remove(darkTheme);
  themeButton.classList.remove(iconTheme);
  localStorage.setItem('selected-theme', 'light');
  localStorage.setItem('selected-icon', 'ri-sun-fill');
};

// Automatisches Umschalten des Dark-Modus basierend auf der Uhrzeit
const autoToggleDarkMode = () => {
  const currentTime = new Date().getHours();
  if (currentTime >= 18 || currentTime < 6) {
    activateDarkMode();
  } else {
    deactivateDarkMode();
  }
};

// Ereignislistener für manuelles Umschalten des Modus
themeButton.addEventListener('click', () => {
  if (getCurrentTheme() === 'dark') {
    deactivateDarkMode();
  } else {
    activateDarkMode();
  }
});

// Dark-Modus automatisch aktivieren/deaktivieren
autoToggleDarkMode();

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 300,
  reset: true, //Animations repeat
})

sr.reveal(`
.home__img,
.newsletter__container,
.footer__logo,
.footer__description,
.footer__content,
.footer__info
`)
sr.reveal(`.home__data`, {origin: 'bottom'})
sr.reveal(`.about__data, .recently__data`, {origin: 'left'})
sr.reveal(`.about__img, .recently__img`, {origin: 'right'})
sr.reveal(`.popular__card`, {interval: 100})
