let array = ['Manzanas', 'Peras', 'Mangos', 'Banano', 'Naranja', 'Duraznos', 'Moras', 'Chimichangas']

let contador = 0;

const value = document.querySelector('#value');
const botones = document.querySelectorAll('.Boton');

botones.forEach(boton => {
    boton.addEventListener('click', function(B){
        const estilos = B.currentTarget.classList;

        if(estilos.contains('+')){
            contador ++
            value.style.color = '#51E2D5'
            value.style.transition = '1s'
        }

        else if(estilos.contains('-')){
            contador -- 
            value.style.color = '#D1476F'
            value.style.transition = '1s'
        }

        else{
            contador = contador - contador
            value.style.color = '#fff'
            value.style.transition = '1s'
        }

        if (contador in array){
            value.textContent = `${contador} : ${array[contador]}`
            value.style.transition = '1s'
        }

        else{
            value.textContent = `${contador} : No existe`
            value.style.transition = '1s'
        }
        
    })
})

