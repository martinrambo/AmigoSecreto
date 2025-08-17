// Asignacion de Varibales
let arrayAmigos = [];
let cantiadAmigos = null;
let nombre  = document.getElementById("amigo").value;
let sorteoAmigo = 0;





//Funciones
function agregarAmigo(){
    let nombre  = document.getElementById("amigo").value;
    //Validamos que el campo no este vacio
    if (nombre.trim() == ""){
        alert("Ingresa un nombre, no se permite campos vacios");

    }else if( nombre == 0 || nombre <= 0 || nombre >= 0 ){ //Validamos que no haya puesto un numero en el campo de nombre
        alert("Ingresa solo letras, no se permite numeros");

    }else{ //Si pasa las dos validaciones de arriba, se agrega al Array
        arrayAmigos.push(nombre);
        //Seleccionamos el UL ya existente
        const ul = document.getElementById("listaAmigos");
        //Creamos un LI para que muestre los nombre alli
        const li = document.createElement("li");
        //Le asignamos el nombre del ultimo amigo agregado
        li.textContent = nombre;
        //Lo agrega al HTML                   
        ul.appendChild(li);
        //Validamos que despues de agregar el amigo, quede vacio el campo de nombre    
        document.getElementById("amigo").value = "";

        //Creamos una variable que contara la cantidad de amgios que hay, para posteriormente usarla
        cantiadAmigos  = arrayAmigos.length ;

        

    }

}

function sortearAmigo(){

    //Validamos que haya ingresado la cantidad minima de amigos para realizar un sorteo
    if (cantiadAmigos == null || cantiadAmigos == 1){
        alert("Por favor agregue al menos 2 nombres, para realziar el sorteo");

    //Si logra pasar la validacion de arriba pasamos a realizar el sorteo
    }else{
        //Le decimos que seleccione un amigo desde 0, hasta la cantidad total de amigos que haya, aca usamos la varibale antes creada de "cantidadAmigos"
        sorteoAmigo = Math.floor((Math.random()*cantiadAmigos));
        //Por ultimo le decimos que muestre el nombre del amigo sorteado en un li que ya esta previamente creado en el html, ademas hacemos que se sobreescriba si quiero realizar le sorteo denuevo
        const nombreFinal = document.getElementById("nombreResultado");
        nombreFinal.textContent = `El amigo sorteado es: ${arrayAmigos[sorteoAmigo]}!`;
    }
    

}









