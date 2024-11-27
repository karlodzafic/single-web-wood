document.addEventListener("DOMContentLoaded", () => {
  // Dodavanje glatkog prijelaza prilikom klika na navigacijske linkove
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Sprječava zadano ponašanje

      // Skrolanje do odabranog elementa
      const targetId = link.getAttribute("href").slice(1); // Uklanja #
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth", // Glatki prijelaz
          block: "start", // Prikazuje početak sekcije
        });
      }
    });
  });
});

