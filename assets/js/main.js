/* ===== GET HTML ELEMENTS ===== */
const header = document.getElementById('header')
const menu = document.getElementById('nav-menu')
const formContainer = document.querySelector('.contact__form')
const checkbox = document.getElementById('terms')
const btnSubmit = document.querySelector('.btn--submit')

/* ===== LISTENERS ===== */
checkbox.addEventListener('change', ({target}) => {
  if (target.checked) {
    btnSubmit.disabled = false
  } else {
    btnSubmit.disabled = true
  }
})

formContainer.addEventListener('submit', async (e) => {
  e.preventDefault()
  const email = 'your@email.com'
  const BASE_URL = `https://formsubmit.co/ajax/${email}`
  
  const input = e.currentTarget.elements

  const formData = {
    name: input.name.value,
    lastname: input.lastname.value,
    email: input.email.value,
    tel: input.tel.value,
    service: input.service.value,
    message: input.message.value
  }

  window.fetch(BASE_URL, {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

  e.currentTarget.reset()
  btnSubmit.disabled = true
})


header.addEventListener('click', e => {
  const target = e.target

  if (target.closest('#nav-toggle')) {
    menu.classList.add('show--menu')
  }

  if (target.closest('#nav-close')) {
    menu.classList.remove('show--menu')
  }

  if (target.matches('.nav__link')) {
    menu.classList.remove('show--menu')
  }
})

/* =============== SCROLL REVEAL ANIMATION =============== */
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 2500
})

sr.reveal('.header', { origin: 'top', distance: '120px', delay: 200 })
sr.reveal('.home__title', { delay: 1000 })
sr.reveal('.home__description', { delay: 1200 })
sr.reveal('.balloon--lf', { origin: 'top', delay: 1400 })
sr.reveal('.balloon--rt', { delay: 1600 })
sr.reveal('.home__social', { delay: 1600 })
sr.reveal('.home__image--img', { origin: 'right', interval: 100, delay: 1800 })

sr.reveal('.suscribe', { interval: 100, delay: 200 })

sr.reveal('.about__title', { origin: 'top', delay: 200 })
sr.reveal('.about__data', { origin: 'left', interval: 100, delay: 1000 })
sr.reveal('.about__button', { delay: 1200 })

sr.reveal('.education__title', { origin: 'top', delay: 200 })
sr.reveal('.education__card', { origin: 'right', interval: 100, delay: 1000 })

sr.reveal('.skills__title', { origin: 'top', delay: 200 })
sr.reveal('.skills__item:nth-child(even)', { origin: 'left', interval: 100, delay: 400 })
sr.reveal('.skills__item:nth-child(odd)', { origin: 'right', interval: 100, delay: 400 })

sr.reveal('.experience__title', { origin: 'top', delay: 200 })
sr.reveal('.swiper-button-prev', { origin: 'left', delay: 200 })
sr.reveal('.swiper-button-next', { origin: 'rigth', delay: 200 })
sr.reveal('.experience__title', { origin: 'top', delay: 200 })
sr.reveal('.experience__container--cards', { delay: 400 })
sr.reveal('.swiper-pagination', { delay: 600 })

sr.reveal('.portfolio__title', { delay: 200 })
sr.reveal('.portfolio__project--item', { delay: 400, interval: 100 })
sr.reveal('.portfolio__project', { delay: 600, interval: 100 })

sr.reveal('.contact__title', { origin: 'top', delay: 200 })
sr.reveal('.contact__info', { origin: 'left', delay: 400, interval: 100 })
sr.reveal('.contact__form', { delay: 600, interval: 100 })

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  breakpoints: {
    567: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 4,
      navigation: {
        enabled: false
      },
      pagination: false
    }
  }
})

mixitup('.portfolio__projects', {
  selectors: {
    target: '.portfolio__project'
  },
  animation: {
    duration: 300
  }
}).filter('all')


