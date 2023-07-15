const ForEach = document.querySelector('#ForEach')
const Formodal = document.querySelector('#MForEach')
const Forc = document.querySelector('#cerrar9')


ForEach.addEventListener('click', (C)=>{
    C.preventDefault()
    Formodal.classList.add('modal--show')
})


Forc.addEventListener('click', (C)=>{
    C.preventDefault()
    Formodal.classList.remove('modal--show')
})