const Concat = document.querySelector('#Concat')
const Concatmodal = document.querySelector('#MConcat')
const Concatc = document.querySelector('#cerrar7')


Concat.addEventListener('click', (C)=>{
    C.preventDefault()
    Concatmodal.classList.add('modal--show')
})


Concatc.addEventListener('click', (C)=>{
    C.preventDefault()
    Concatmodal.classList.remove('modal--show')
})