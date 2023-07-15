const Reduce = document.querySelector('#Reduce')
const Reducemodal = document.querySelector('#MReduce')
const Reducec = document.querySelector('#cerrar16')


Reduce.addEventListener('click', (C)=>{
    C.preventDefault()
    Reducemodal.classList.add('modal--show')
})


Reducec.addEventListener('click', (C)=>{
    C.preventDefault()
    Reducemodal.classList.remove('modal--show')
})