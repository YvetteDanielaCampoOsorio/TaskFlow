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

    const detalleTarea = document.createElement("textarea"); 
    detalleTarea.setAttribute("placeholder", "Detalle")

    const btnGuardar = document.createElement("button");
    btnGuardar.textContent = "Guardar tarea"
    let guardado = false

    const btnAgregarMiniTarea = document.createElement("button");
    btnAgregarMiniTarea.textContent = "Agregar mini tarea"

    const btnMas = document.createElement("button");
    btnMas.textContent = "Más"

    const ul = document.createElement("ul"); 

    tarea.appendChild(inputCheck)
    tarea.appendChild(nombreTarea)
    tarea.appendChild(detalleTarea)
    tarea.appendChild(btnGuardar)
    tarea.appendChild(btnAgregarMiniTarea)
    tarea.appendChild(btnMas)
    tarea.appendChild(ul)

    const objetoTarea = crearObjetoTarea("", "", false);
    tarea.objetoTarea = objetoTarea;
    tareas.push(objetoTarea);

    nombreTarea.addEventListener("input", function () { 
        tarea.objetoTarea.nombre = nombreTarea.value ; 
    });

    detalleTarea.addEventListener("input", function(){
        tarea.objetoTarea.detalle = detalleTarea.value;
    });

    inputCheck.addEventListener("change", function () {
        tarea.objetoTarea.estado = inputCheck.checked;
    });

    listaPendientes.appendChild(tarea);

    btnGuardar.addEventListener("click", function () {

    if (guardado == false) {
        guardado = true;
    } else {
        console.log("Error: esta tarea ya esta guardada");
    }
    });

    inputCheck.addEventListener("click", cambiarEstadoTarea);

    btnAgregarMiniTarea.addEventListener("click", agregarMiniTarea);
    btnMas.addEventListener("click", mas)
    }


function crearObjetoTarea(nombre, detalle, estado, miniTareas){
    const objetoTarea = {
        nombre: nombre,
        detalle: detalle,
        estado: estado,
        miniTareas: []
    }
    return objetoTarea      ;
}

function cambiarEstadoTarea(evento){
    const contenedorTarea = evento.target.parentElement

    if (evento.target.checked) {
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

    const nombre = nombreMiniTarea.value;
    const estado = inputCheckMiniTarea.checked;

    const objetoMiniTarea = crearObjetoMiniTarea(nombre, estado);
    tarea.objetoTarea.miniTareas.push(objetoMiniTarea);

    miniTarea.appendChild(inputCheckMiniTarea)
    miniTarea.appendChild(nombreMiniTarea)

    listaMiniTareas.appendChild(miniTarea)
    console.log(tareas);
}

function crearObjetoMiniTarea (nombre, estado){
    const miniTarea = {
        nombre: nombre,
        estado: estado
    }
    return miniTarea
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

