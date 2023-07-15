const Pop = document.querySelector('#Pop')
const Popmodal = document.querySelector('#MPop')
const Popc = document.querySelector('#cerrar2')

const popBoton = document.querySelector('#popBoton');
const popElemento = document.querySelector('#popElemento');
const popContenido = document.querySelector('#popContenido');

const arrayPop = [];

Pop.addEventListener('click', (C)=>{
    C.preventDefault()
    Popmodal.classList.add('modal--show')
})


Popc.addEventListener('click', (C)=>{
    C.preventDefault()
    Popmodal.classList.remove('modal--show')
})

popBoton.addEventListener('click', () => {
    const elemento = popElemento.value.trim();
    if (elemento !== '') {
      arraypop.pop(elemento);
      popElemento.value = '';
      actualizarContenido();
    }
  });
  
  function actualizarContenido() {
    popContenido.innerHTML = '';
    for (let i = 0; i < arraypop.length; i++) {
      const elemento = document.createElement('p');
      elemento.textContent = arraypop[i];
      elemento.classList.add('element')
      popContenido.appendChild(elemento);
    }
  }