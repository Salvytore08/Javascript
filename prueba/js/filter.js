const Filter = document.querySelector('#Filter')
const Fmodal = document.querySelector('#MFilter')
const Fc = document.querySelector('#cerrar11')


Filter.addEventListener('click', (C)=>{
    C.preventDefault()
    Fmodal.classList.add('modal--show')
})


Fc.addEventListener('click', (C)=>{
    C.preventDefault()
    Fmodal.classList.remove('modal--show')
})