


        
  const hamburgerButton = document.querySelector('.hamburger-button');

  let menu = document.querySelector('.hamburger-menu-nav');
  menu.hidden = true;       

  menu.removeAttribute("popover");

  const links = document.querySelectorAll('.hamburger-menu-nav a');
  links.forEach(link => {
      link.style.opacity = "0";
  });

  const topLine = document.querySelector('.line-top');
  const middleLine = document.querySelector('.line-middle');
  const bottomLine = document.querySelector('.line-bottom');

  const animation_duration = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--animation-duration'),10);

  let focusInMenu = false;

  function closeMenu() {
      hamburgerButton.setAttribute("aria-expanded", "false");
      middleLine.style.setProperty('display', 'block');

      menu.classList.remove('open');
      menu.classList.add('closing');

      menu.addEventListener('animationend', () => {

          // event.animationName moet "includes" bevatten omdat sveltekit altijd een random animatie naam toevoegt dat elke keer veranderd. Check uitleg hier: 
          if (event.animationName.includes("slide-out")) {

              menu.classList.remove('closing');
              menu.hidden = true;

              links.forEach(link => {
                  link.classList.remove('slide-in-text');
              });
          }

      });

  }

  function resetHamburgerIcon() {
      hamburgerButton.classList.remove('hamburger-is-open');
      topLine.classList.remove('path_animation_top');
      bottomLine.classList.remove('path_animation_bottom');
  }
  
  hamburgerButton.addEventListener('click', () => {
      const hamburger_menu_is_open = hamburgerButton.classList.toggle('hamburger-is-open');
      hamburgerButton.setAttribute("aria-expanded", "true");

      hamburgerButton.classList.add('bounce_animation');

      topLine.classList.toggle('path_animation_top');
      bottomLine.classList.toggle('path_animation_bottom');

      // Open of sluit menu afhankelijk van de staat en voeg animaties toe aan de links
      if (hamburger_menu_is_open) {
          middleLine.style.setProperty('display', 'none');

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
      
      setTimeout(() => {
          hamburgerButton.classList.remove('bounce_animation');
      }, animation_duration + 100);

  });

  document.addEventListener("keydown", (event) => {
      if (
          event.key === "Escape" &&
          hamburgerButton.classList.contains('hamburger-is-open')
      ) {
          closeMenu();
          resetHamburgerIcon();
      }
  });

  function handleFocusInHamburgerMenu(event) {
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

  document.addEventListener("focusin", handleFocusInHamburgerMenu);

  // Bij scrollen, sluit het menu als deze open is
  document.addEventListener("scroll", () => {
      if (hamburgerButton.classList.contains('hamburger-is-open')) {
          closeMenu();
          resetHamburgerIcon();
      }
  });


  // Na navigeren, sluit het menu als deze open is
  afterNavigate(() => {
      if (hamburgerButton.classList.contains('hamburger-is-open')) {
          closeMenu();
          resetHamburgerIcon();
      }
  });