const LastIndexOf = document.querySelector('#LastIndexOf')
const LastIndexOfmodal = document.querySelector('#MLastIndexOf')
const LastIndexOfc = document.querySelector('#cerrar4')


LastIndexOf.addEventListener('click', (C)=>{
    C.preventDefault()
    LastIndexOfmodal.classList.add('modal--show')
})


LastIndexOfc.addEventListener('click', (C)=>{
    C.preventDefault()
    LastIndexOfmodal.classList.remove('modal--show')
})