const From = document.querySelector('#From')
const Frommodal = document.querySelector('#MFrom')
const Fromc = document.querySelector('#cerrar21')


From.addEventListener('click', (C)=>{
    C.preventDefault()
    Frommodal.classList.add('modal--show')
})


Fromc.addEventListener('click', (C)=>{
    C.preventDefault()
    Frommodal.classList.remove('modal--show')
})