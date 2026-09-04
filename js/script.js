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
    tarea.guardado = false

    const btnAgregarMiniTarea = document.createElement("button");
    btnAgregarMiniTarea.textContent = "Agregar mini tarea"

    const btnMas = document.createElement("button");
    btnMas.textContent = "Más"

    const ul = document.createElement("ul"); 

    const objetoTarea = crearObjetoTarea("", "", false);

    tarea.objetoTarea = objetoTarea;
    tarea.nombreTarea = nombreTarea;
    tarea.detalleTarea = detalleTarea;
    tarea.btnGuardar = btnGuardar;
    tarea.btnMas = btnMas;
    tarea.listaMiniTareas = ul;
    
    tarea.appendChild(inputCheck)
    tarea.appendChild(nombreTarea)
    tarea.appendChild(detalleTarea)
    tarea.appendChild(btnGuardar)
    tarea.appendChild(btnAgregarMiniTarea)
    tarea.appendChild(btnMas)
    tarea.appendChild(ul)

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

    if (tarea.guardado == false) {

        tarea.guardado = true;
        
        nombreTarea.disabled = true;
        detalleTarea.disabled = true;

        console.log(tareas);

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

    const listaMiniTareas = tarea.listaMiniTareas;

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

    nombreMiniTarea.addEventListener("input", function () {
        objetoMiniTarea.nombre = nombreMiniTarea.value;
        console.log(objetoMiniTarea);
    });

    inputCheckMiniTarea.addEventListener("change", function(){
        objetoMiniTarea.estado = inputCheckMiniTarea.checked;
        console.log(objetoMiniTarea);
    });

    miniTarea.appendChild(inputCheckMiniTarea)
    miniTarea.appendChild(nombreMiniTarea)

    listaMiniTareas.appendChild(miniTarea)
    
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
    
    const btnMas = tarea.btnMas;

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
    const tarea = evento.target.parentElement.parentElement.parentElement;

    tarea.nombreTarea.disabled = false;
    tarea.detalleTarea.disabled = false;

    tarea.guardado = false
}


function eliminar(evento){

    const contenedorTarea = evento.target.parentElement.parentElement.parentElement.parentElement;

    const tarea = evento.target.parentElement.parentElement.parentElement;

    contenedorTarea.removeChild(tarea)
    
}

btnAgregar.addEventListener("click", function () {
    console.log("Botón presionado");
});

