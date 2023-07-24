const uno = document.querySelector('#uno')
const dos = document.querySelector('#dos')
const tres = document.querySelector('#tres')
const cuatro = document.querySelector('#cuatro')
const cinco = document.querySelector('#cinco')
const seis = document.querySelector('#seis')

async function update1() {
    uno.style.backgroundColor = "black";
    uno.style.transition = 'transform 2s'
    uno.style.transform = 'rotate(360deg)'

    if (!uno.querySelector('#backb1')) {
        let boton = document.createElement('button')
        boton.id = 'backb1'
        boton.className = 'backb'
        uno.appendChild(boton)
        boton.addEventListener('click', back1)
        boton.textContent = 'Back'
    }
}
  
async function back1() {
    uno.style.backgroundColor = "rgb(54, 54, 54)";
    uno.style.transition = 'transform 2s'
    uno.style.transform = 'rotate(-360deg)'

    let backb1 = document.querySelector('#backb1')
    backb1.remove()
}



async function update2() {
    dos.style.backgroundColor = "rgb(0,0,0,0.4)";
    let enlace = dos.querySelector('a');
    enlace.style.color = "white"; 
    enlace.style.backgroundColor = "#356CF4"; 

    if (!dos.querySelector('#backb2')) {
        let boton = document.createElement('button')
        boton.id = 'backb2'
        boton.className = 'backb'
        dos.appendChild(boton)
        boton.addEventListener('click', back2)
        boton.textContent = 'Back'
    }
}
  
async function back2() {
    dos.style.backgroundColor = "rgb(54, 54, 54)";
    let enlace = dos.querySelector('a');
    enlace.style.color = "black";
    enlace.style.backgroundColor = "white";

    let backb2 = document.querySelector('#backb2')
    backb2.remove()
}



async function update3() {
    tres.style.backgroundColor = "grey";
    let enlace = tres.querySelector('a');
    enlace.style.width = '50%' 
    enlace.style.transition = 'width 1s' 

    if (!tres.querySelector('#backb3')) {
        let boton = document.createElement('button')
        boton.id = 'backb3'
        boton.className = 'backb'
        tres.appendChild(boton)
        boton.addEventListener('click', back3)
        boton.textContent = 'Back'
    }
}
  
async function back3() {
    tres.style.backgroundColor = "rgb(54, 54, 54)";
    let enlace = tres.querySelector('a');
    enlace.style.width = '20%' 
    enlace.style.transition = 'width 1s' 

    let backb3 = document.querySelector('#backb3')
    backb3.remove()
}



async function update4() {
    cuatro.style.backgroundColor = "#1C1C1C";
    let enlace = cuatro.querySelector('a');
    cuatro.style.transition = 'transform 0.4s'
    cuatro.style.transform = 'matrix(1.5, 1, -1.5, 0.3, -20, -20)'

    if (!cuatro.querySelector('#backb4')) {
        let boton = document.createElement('button')
        boton.id = 'backb4'
        boton.className = 'backb'
        cuatro.appendChild(boton)
        boton.addEventListener('click', back4)
        boton.textContent = 'Back'
    }
}
  
async function back4() {
    cuatro.style.backgroundColor = "rgb(54, 54, 54)";
    cuatro.style.transform = 'none'

    let backb4 = document.querySelector('#backb4')
    backb4.remove()
}



async function update5() {
    cinco.style.backgroundColor = "#C2C2C2";
    cinco.style.width = "30%";
    cinco.style.height = "20%";
    

    if (!cinco.querySelector('#backb5')) {
        let boton = document.createElement('button')
        boton.id = 'backb5'
        boton.className = 'backb'
        cinco.appendChild(boton)
        boton.addEventListener('click', back5)
        boton.textContent = 'Back'
    }
}
  
async function back5() {
    cinco.style.backgroundColor = "rgb(54, 54, 54)";
    cinco.style.width = "30vw";
    cinco.style.height = "auto";

    let backb5 = document.querySelector('#backb5')
    backb5.remove()
}



async function update6() {
    seis.style.opacity = "0";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    seis.style.opacity = "1";

    if (!seis.querySelector('#backb6')) {
        let boton = document.createElement('button')
        boton.id = 'backb6'
        boton.className = 'backb'
        seis.appendChild(boton)
        boton.addEventListener('click', back6)
        boton.textContent = 'Back'
    }
}
  
async function back6() {
    seis.style.opacity = "1";
    
    let backb6 = document.querySelector('#backb6')
    backb6.remove()
}