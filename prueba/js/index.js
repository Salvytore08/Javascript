const IndexOf = document.querySelector('#IndexOf')
const IndexOfmodal = document.querySelector('#MIndexOf')
const IndexOfc = document.querySelector('#cerrar3')


IndexOf.addEventListener('click', (C)=>{
    C.preventDefault()
    IndexOfmodal.classList.add('modal--show')
})


IndexOfc.addEventListener('click', (C)=>{
    C.preventDefault()
    IndexOfmodal.classList.remove('modal--show')
})