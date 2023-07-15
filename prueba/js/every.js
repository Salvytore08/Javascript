const Every = document.querySelector('#Every')
const Everymodal = document.querySelector('#MEvery')
const Everyc = document.querySelector('#cerrar19')


Every.addEventListener('click', (C)=>{
    C.preventDefault()
    Everymodal.classList.add('modal--show')
})


Everyc.addEventListener('click', (C)=>{
    C.preventDefault()
    Everymodal.classList.remove('modal--show')
})