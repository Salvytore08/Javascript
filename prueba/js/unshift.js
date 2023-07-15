const Unshift = document.querySelector('#Unshift')
const Unshiftmodal = document.querySelector('#MUnshift')
const Unshiftc = document.querySelector('#cerrar14')


Unshift.addEventListener('click', (C)=>{
    C.preventDefault()
    Unshiftmodal.classList.add('modal--show')
})


Unshiftc.addEventListener('click', (C)=>{
    C.preventDefault()
    Unshiftmodal.classList.remove('modal--show')
})