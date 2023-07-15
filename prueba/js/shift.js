const Shift = document.querySelector('#Shift')
const Shiftmodal = document.querySelector('#MShift')
const Shiftc = document.querySelector('#cerrar13')


Shift.addEventListener('click', (C)=>{
    C.preventDefault()
    Shiftmodal.classList.add('modal--show')
})


Shiftc.addEventListener('click', (C)=>{
    C.preventDefault()
    Shiftmodal.classList.remove('modal--show')
})