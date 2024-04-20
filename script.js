function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tab-menu li');
  const tabContent = document.querySelectorAll('.js-tab-content section');

  if(tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('ativo')

  function activeTab (index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo')
    })
    tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
     activeTab(index);
      })
    });
  }
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');

  if(accordionList.length) {
    const activeClass = 'ativo'
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
     this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass);

   }
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

function initScrollSmooth() {
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    //outra forma
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // })
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  })
}

initScrollSmooth();

function initAnimationScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  const Window = window.innerHeight * 0.5;
  if(sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - Window) < 0;
        if(isSectionVisible) {
          section.classList.add('ativo');
        }
      })
    }

  animaScroll();

  window.addEventListener('scroll', animaScroll)
  }
}

initAnimationScroll();