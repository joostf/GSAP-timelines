

  
  
  // 1. Alle variabelen
  const menuButton = document.querySelector('.menu-button');
  const menu = document.querySelector('.menu');
  const menuItems = menu.querySelectorAll('a');
  const topLine = document.querySelector('.line-top'); 
  const middleLine = document.querySelector('.line-middle'); 
  const bottomLine = document.querySelector('.line-bottom'); 
  let focusInMenu = false;
  
  // 2. Code Logic
  menu.hidden = true;       
  menu.removeAttribute("popover");
  
  menuButton.addEventListener('click', handleClick);
  document.addEventListener("keydown", handleKeydownMenu);
  document.addEventListener("focusin", handleFocusInMenu);
  document.addEventListener("scroll", handleScrollMenu);

  // 3. Functie declaraties
  function toggleMenu(){
      const hamburgerMenuIsOpen = hamburgerButton.classList.toggle('hamburger-is-open');
      hamburgerButton.setAttribute("aria-expanded", "true");

      hamburgerButton.classList.add('bounce_animation');

      topLine.classList.toggle('path_animation_top');
      bottomLine.classList.toggle('path_animation_bottom');

      // Open of sluit menu afhankelijk van de staat en voeg animaties toe aan de links
      if (hamburgerMenuIsOpen ) {
          middleLine.style.display = 'none';  

          menu.classList.add('open');
          menu.hidden = false;  
            
          links[0].focus();

          // Voeg animaties toe aan de links met een kleine vertraging tussen elke link
          links.forEach((link, index) => {
              setTimeout(() => {
                  link.classList.add('slide-in-text');
              }, index * 50);
          });

      } else {
          closeMenu();
      }
      
      hamburgerButton.addEventListener('animationend', handleAnimationEndOnButton);
  }

  function resetMenu() {
      hamburgerButton.classList.remove('hamburger-is-open');
      topLine.classList.remove('path_animation_top');
      bottomLine.classList.remove('path_animation_bottom');
  }
  
  function handleFocusInMenu(event) {
      const focused = event.target;

      const insideMenuNav = menu.contains(focused);
      const focusOnButton = hamburgerButton.contains(focused);

      if (insideMenuNav) {
          focusInMenu = true;
          return;
      }

      if (focusInMenu && !focusOnButton) {
          closeMenu();
          resetHamburgerIcon();
          focusInMenu = false;
      }
  }

  function handleKeydownMenu(event) {
      const key = event.key;

      if (
          key === "Escape" &&
          hamburgerButton.classList.contains('hamburger-is-open')
      ) {
          closeMenu();
          resetHamburgerIcon();
      }
  }

  function handleScrollMenu(event) {
      if (hamburgerButton.classList.contains('hamburger-is-open')) {
          closeMenu();
          resetHamburgerIcon();
      }
  }
  
  function handleAnimationEndMenu(event) {
      // event.animationName moet "includes" bevatten omdat sveltekit altijd een random animatie naam toevoegt dat elke keer veranderd. Check uitleg hier: 
      if (event.animationName.includes("slide-out")) {

          menu.classList.remove('closing');
          menu.hidden = true;

          links.forEach(link => {
              link.classList.remove('slide-in-text');
          });
      }
  }

  function handleAnimationEndButton(event) {
      hamburgerButton.classList.remove('bounce_animation');
  }

  function cleanUp() {
      hamburgerButton.removeEventListener('click', handleClick);
      hamburgerButton.removeEventListener('animationend', handleAnimationEndOnButton);
      menu.removeEventListener('animationend', handleAnimationEndOnMenu);
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("focusin", handleFocusInHamburgerMenu);
      document.removeEventListener("scroll", handleScroll);
  }

