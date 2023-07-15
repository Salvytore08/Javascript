const Find = document.querySelector('#Find')
const Findmodal = document.querySelector('#MFind')
const Findc = document.querySelector('#cerrar12')


Find.addEventListener('click', (C)=>{
    C.preventDefault()
    Findmodal.classList.add('modal--show')
})


Findc.addEventListener('click', (C)=>{
    C.preventDefault()
    Findmodal.classList.remove('modal--show')
})