const Splice = document.querySelector('#Splice')
const Splicemodal = document.querySelector('#MSplice')
const Splicec = document.querySelector('#cerrar18')


Splice.addEventListener('click', (C)=>{
    C.preventDefault()
    Splicemodal.classList.add('modal--show')
})


Splicec.addEventListener('click', (C)=>{
    C.preventDefault()
    Splicemodal.classList.remove('modal--show')
})