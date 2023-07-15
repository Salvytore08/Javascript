const Push = document.querySelector('#Push')
const Pushmodal = document.querySelector('#MPush')
const Pushc = document.querySelector('#cerrar')

const pushBoton = document.querySelector('#pushBoton');
const pushElemento = document.querySelector('#pushElemento');
const pushContenido = document.querySelector('#pushContenido');

const arrayPush = [];

Push.addEventListener('click', (C)=>{
    C.preventDefault()
    Pushmodal.classList.add('modal--show')
})


Pushc.addEventListener('click', (C)=>{
    C.preventDefault()
    Pushmodal.classList.remove('modal--show')
})

pushBoton.addEventListener('click', () => {
    const elemento = pushElemento.value.trim();
    if (elemento !== '') {
      arrayPush.push(elemento);
      pushElemento.value = '';
      actualizarContenido();
    }
  });
  
  function actualizarContenido() {
    pushContenido.innerHTML = '';
    for (let i = 0; i < arrayPush.length; i++) {
      const elemento = document.createElement('p');
      elemento.textContent = arrayPush[i];
      elemento.classList.add('element')
      pushContenido.appendChild(elemento);
    }
  }