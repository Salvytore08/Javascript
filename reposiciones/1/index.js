const cuadro = document.querySelector('.cuadro')
const input = document.querySelector('#input')
const enlace = document.getElementsByTagName('a')

async function update() {
    cuadro.style.backgroundColor = "black";
    enlace[0].textContent = 'The legend of zelda tears of the kingdom'
    enlace[0].setAttribute('href','https://nsw2u.com/the-legend-of-zelda-tears-of-the-kingdom-switch-nsp-xci-nsz-v120?__cf_chl_rt_tk=QLWkFusMGmQK16vjY8g8EMM7cg0QHlb5DLuazlAPbQM-1689218251-0-gaNycGzNDNA')

    if (!document.querySelector('#backb')) {
        let boton = document.createElement('button')
        boton.id = 'backb'
        cuadro.appendChild(boton)
        boton.addEventListener('click', back)
        boton.textContent = 'Back'
    }

    for (let i = 0; i < lista.children.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 100))
        lista.children[i].style.color = 'white'
    }

    console.log('Update', 'Click')
}
  
async function back() {
    cuadro.style.backgroundColor = "rgb(54, 54, 54)";
    cuadro.style.color = "black";
    enlace[0].textContent = 'nsw2u'
    enlace[0].setAttribute('href','https://nsw2u.com/')

    backb = document.querySelector('#backb')
    backb.remove()

    for (let i = 0; i < lista.children.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 100))
        lista.children[i].style.color = 'black'
    }

    console.log('Back', 'Click')
}
