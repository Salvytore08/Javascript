const Includes = document.querySelector('#Includes')
const Includesmodal = document.querySelector('#MIncludes')
const Includesc = document.querySelector('#cerrar8')


Includes.addEventListener('click', (C)=>{
    C.preventDefault()
    Includesmodal.classList.add('modal--show')
})


Includesc.addEventListener('click', (C)=>{
    C.preventDefault()
    Includesmodal.classList.remove('modal--show')
})