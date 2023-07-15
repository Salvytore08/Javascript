const Some = document.querySelector('#Some')
const Somemodal = document.querySelector('#MSome')
const Somec = document.querySelector('#cerrar20')


Some.addEventListener('click', (C)=>{
    C.preventDefault()
    Somemodal.classList.add('modal--show')
})


Somec.addEventListener('click', (C)=>{
    C.preventDefault()
    Somemodal.classList.remove('modal--show')
})