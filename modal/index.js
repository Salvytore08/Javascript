const openmodal = document.querySelector('.click')
const modal = document.querySelector('.modal')
const closemodal = document.querySelector('.cerrar')


openmodal.addEventListener('click', (C)=>{
    C.preventDefault()
    modal.classList.add('modal--show')
})


closemodal.addEventListener('click', (C)=>{
    C.preventDefault()
    modal.classList.remove('modal--show')
})