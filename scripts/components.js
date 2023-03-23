const loadNavbar = () => {
  const navbar = document.getElementById("navbar");
  navbar.innerHTML = `
        <nav>
            <div class="nav-container">
                <a href="index.html">
                    <img src="assets/logo.png" alt="Aspire Builders, Inc." />
                </a>
                <a class="hamburger" onclick="toggleHamburger()">☰</a>
                <div id="nav-links">
                    <a href="about.html">About</a>
                    <a href="projects.html">Projects</a>
                    <a href="contact.html">Contact</a>
                </div>
            </div>
        </nav>
    `;
};

const loadFooter = () => {
  const footer = document.getElementById("footer");
  footer.innerHTML = `
        <footer>
            Aspire Builders, Inc. © 2023 — All rights reserved
        </footer>
    `;
};

function toggleHamburger() {
  let navLinks = document.getElementById("nav-links");
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
}

loadNavbar();
loadFooter();
