let contador = 0;

const valor = document.querySelector('#Valor');
const botones = document.querySelectorAll('.Boton');

botones.forEach(boton => {
    boton.addEventListener('click', function(B){
        const estilos = B.currentTarget.classList;

        if(estilos.contains('+')){
            contador ++
            valor.style.color = '#51E2D5'
            
        }

        else if(estilos.contains('-')){
            contador -- 
            valor.style.color = '#D1476F'
        }

        else{
            contador = contador - contador
            valor.style.color = '#fff'
        }

        valor.textContent = contador
    })
})

