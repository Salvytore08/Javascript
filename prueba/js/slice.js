const Slice = document.querySelector('#Slice')
const Slicemodal = document.querySelector('#MSlice')
const Slicec = document.querySelector('#cerrar5')


Slice.addEventListener('click', (C)=>{
    C.preventDefault()
    Slicemodal.classList.add('modal--show')
})


Slicec.addEventListener('click', (C)=>{
    C.preventDefault()
    Slicemodal.classList.remove('modal--show')
})