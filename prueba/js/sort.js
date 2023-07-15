const Sort = document.querySelector('#Sort')
const Sortmodal = document.querySelector('#MSort')
const Sortc = document.querySelector('#cerrar17')


Sort.addEventListener('click', (C)=>{
    C.preventDefault()
    Sortmodal.classList.add('modal--show')
})


Sortc.addEventListener('click', (C)=>{
    C.preventDefault()
    Sortmodal.classList.remove('modal--show')
})