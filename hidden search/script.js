const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const back = document.querySelector('body')
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})
