const Join = document.querySelector('#Join')
const Joinmodal = document.querySelector('#MJoin')
const Joinc = document.querySelector('#cerrar6')


Join.addEventListener('click', (C)=>{
    C.preventDefault()
    Joinmodal.classList.add('modal--show')
})


Joinc.addEventListener('click', (C)=>{
    C.preventDefault()
    Joinmodal.classList.remove('modal--show')
})