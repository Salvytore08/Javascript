const Reverse = document.querySelector('#Reverse')
const Reversemodal = document.querySelector('#MReverse')
const Reversec = document.querySelector('#cerrar15')


Reverse.addEventListener('click', (C)=>{
    C.preventDefault()
    Reversemodal.classList.add('modal--show')
})


Reversec.addEventListener('click', (C)=>{
    C.preventDefault()
    Reversemodal.classList.remove('modal--show')
})