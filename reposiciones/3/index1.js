const input = document.getElementById('ingreso')
const listaDeTarea = document.getElementById('tareas')
const boton = document.querySelector('button')

function agregarTarea(){
    if(input.value){
        let tareaNueva = document.createElement('div')
        tareaNueva.classList.add('tarea')

        let texto = document.createElement('img')

        texto.src = "/reposiciones/3/imagenes/" + input.value + ".png"
        tareaNueva.appendChild(texto)
        texto.onclick = function() {
            texto.classList.toggle('show')
        }

        let iconos = document.createElement('div')
        iconos.classList.add('iconos')
        tareaNueva.appendChild(iconos)

        let completar = document.createElement('i')
        completar.classList.add('bi','bi-check-circle-fill','icono-completar')
        completar.addEventListener('click', completarTarea)

        let eliminar = document.createElement('i')
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar')
        eliminar.addEventListener('click', eliminarTarea)

        iconos.append(completar, eliminar)

        listaDeTarea.appendChild(tareaNueva)
        input.value = ''
    }else{
        alert('Por favor ingresa una tarea')
    }
}

function completarTarea(e){
    let tarea = e.target.parentNode.parentNode
    tarea.classList.toggle('completada')
}  


function eliminarTarea(e){
    let = tarea = e.target.parentNode.parentNode
    tarea.remove()
}

boton.addEventListener('click', agregarTarea)