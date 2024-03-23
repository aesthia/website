// loadPages.js

// Funktion zum Abrufen und Einbinden der Seiten
function loadPage(pageName, containerId) {
  fetch('pages/' + pageName)
      .then(response => response.text())
      .then(html => {
          document.getElementById(containerId).innerHTML = html;
      });
}

// Lade die einzelnen Seiten in ihre entsprechenden Container
loadPage('home.html', 'home');
loadPage('about.html', 'about');
loadPage('popular.html', 'popular');
loadPage('recently.html', 'recently');
loadPage('newsletter.html', 'newsletter');
loadPage('footer.html', 'footer');
