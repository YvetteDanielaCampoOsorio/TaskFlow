const btnAgregar = document.getElementById("btnAgregar");
const listaPendientes = document.getElementById("listaPendientes");
const listaCompletadas = document.getElementById("listaCompletadas");

const tareas = []   

btnAgregar.addEventListener("click", crearTarea);

function crearTarea() {
    const tarea = document.createElement("li");

    const inputCheck = document.createElement("input")
    inputCheck.setAttribute("type", "checkbox")

    const nombreTarea = document.createElement("input")
    nombreTarea.setAttribute("type", "text")
    nombreTarea.setAttribute("placeholder","Nombre de la tarea")

    const detalle = document.createElement("textarea"); 
    detalle.setAttribute("placeholder", "Detalle")

    const btnGuardar = document.createElement("button");
    btnGuardar.textContent = "Guardar tarea"

    const btnAgregarMiniTarea = document.createElement("button");
    btnAgregarMiniTarea.textContent = "Agregar mini tarea"

    const btnMas = document.createElement("button");
    btnMas.textContent = "Más"

    const ul = document.createElement("ul"); 

    tarea.appendChild(inputCheck)
    tarea.appendChild(nombreTarea)
    tarea.appendChild(detalle)
    tarea.appendChild(btnGuardar)
    tarea.appendChild(btnAgregarMiniTarea)
    tarea.appendChild(btnMas)
    tarea.appendChild(ul)

    listaPendientes.appendChild(tarea);

    inputCheck.addEventListener("click", detectarCambioEstado);
    btnGuardar.addEventListener("click", guardarTareas)
    btnAgregarMiniTarea.addEventListener("click", agregarMiniTarea);
    btnMas.addEventListener("click", mas)


    }

function detectarCambioEstado(evento){
    const contenedorTarea = evento.target.parentElement
    const estado = false

    if (evento.target.checked) {
        estado = true
    }else{
        estado = false
    }

    cambiarEstadoTarea(estado)
}

function crearObjetoTarea(estado){
    /*ObjetoTarea{
        nombre == nombreTarea,
        detalle == detalle,
        estado == false,
        miniTareas: []
    }*/
}

function guardarTareas(ObjetoTarea){
    tareas.push(ObjetoTarea);
}

function cambiarEstadoTarea(estado){
    console.log(evento.target.checked);
    const contenedorTarea = evento.target.parentElement

    if (estado == true) {
        listaCompletadas.appendChild(contenedorTarea);
    }else{
        listaPendientes.appendChild(contenedorTarea);
    }
}

function agregarMiniTarea(evento){
    const tarea = evento.target.parentElement;

    const listaMiniTareas = tarea.children[5];

    const miniTarea = document.createElement("li");

    const inputCheckMiniTarea = document.createElement("input")
    inputCheckMiniTarea.setAttribute("type", "checkbox")

    const nombreMiniTarea = document.createElement("input")
    nombreMiniTarea.setAttribute("type", "text")
    nombreMiniTarea.setAttribute("placeholder","Nombre de la mini tarea")

    miniTarea.appendChild(inputCheckMiniTarea)
    miniTarea.appendChild(nombreMiniTarea)

    listaMiniTareas.appendChild(miniTarea)
}

function mas(evento){
    const tarea = evento.target.parentElement;
    
    const btnMas = tarea.children[4];

    if (btnMas.children.length == 0){

        const opcionesMas = document.createElement("li")

        const btnEditar = document.createElement("button")
        btnEditar.textContent = "Editar"

        const btnEliminar = document.createElement("button")
        btnEliminar.textContent = "Eliminar"
        
        opcionesMas.appendChild(btnEditar)
        opcionesMas.appendChild(btnEliminar)
    
        btnMas.appendChild(opcionesMas)

        btnEditar.addEventListener("click", editar)
        btnEliminar.addEventListener("click", eliminar)
    } else {

        const OpcionesMas = btnMas.children

        btnMas.removeChild(OpcionesMas[0])
    }
}

function editar(evento){
    
}

function eliminar(evento){

    const contenedorTarea = evento.target.parentElement.parentElement.parentElement.parentElement;

    const tarea = evento.target.parentElement.parentElement.parentElement;

    contenedorTarea.removeChild(tarea)
    
}



btnAgregar.addEventListener("click", function () {
    console.log("Botón presionado");
});

