const Map = document.querySelector('#Map')
const Mmodal = document.querySelector('#MMap')
const Mc = document.querySelector('#cerrar10')


Map.addEventListener('click', (C)=>{
    C.preventDefault()
    Mmodal.classList.add('modal--show')
})


Mc.addEventListener('click', (C)=>{
    C.preventDefault()
    Mmodal.classList.remove('modal--show')
})