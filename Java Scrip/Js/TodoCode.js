function agregarTarea(){
    // Obtener el input y el botón
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    //validamos que el valor no sea vacio
    if(nuevaTareaTexto === ""){
        alert("ingresa nueva tarea");
        return;
    }

    // crear elemento en la lista
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto + 
    " ";

    //crear boton eliminar
    let botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Eliminar"

    //agregar evento al boton
    botonBorrar.onclick = function(){
        nuevaTarea.remove();};

    //agregar boton de eliminar al elemento de la lista
    nuevaTarea.appendChild(botonBorrar);

    //agregar elemento a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //limpiar input
    document.getElementById("nuevaTarea").value = "";
}