const openn_btn = document.querySelector('.openn-btn')
const closee_btn = document.querySelector('.closee-btn')
const navv = document.querySelectorAll('.navv')

openn_btn.addEventListener('click', () => {
    navv.forEach(nav_el => nav_el.classList.add('visible'))
})

closee_btn.addEventListener('click', () => {
    navv.forEach(nav_el => nav_el.classList.remove('visible'))
})
