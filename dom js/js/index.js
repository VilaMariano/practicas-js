///PRACTICA INTEGRADORA///
alert("Bienvenido a mi sitio");
let confirmacion = confirm("Estas seguro que queres avanzar?")
if ( confirmacion === true){
    document.querySelector("h2").innerText = "Que alegria que quieras continuar tu visita";
}else{
    document.querySelector("h2").innerText = "Lamentamos que no quieras continuar tu visita";
};

let nombreUsuario = prompt("Ingrese su nombre porfavor");
document.querySelector("h1").innerText = "bienvenido" + ' ' + nombreUsuario;


let edadUsuario = prompt("Cuantos años tenes?");
if (edadUsuario >= 17){
    document.querySelector(".container-general").style.display = 'block';
    document.querySelector("#accesoDenegado").style.display = 'none';
    let gusto = confirm("Te gusta la programacion?")
let imagen = document.querySelector(".background-img")
    if (gusto === true){
       imagen.innerHTML = `<img src= "img/programmer.jpeg"></img>` ;
    }else {
    imagen.innerHTML = `<img src= "img/gatito.jpeg"></img>` ;
    };

let url = prompt ("Inserte url de imagen");
let avatar = document.querySelector(".avatar");
avatar.src = url

    let pelicula = {
    nombre : '',
    director : '',
    duracion: '',
    actor: '',
    };
    pelicula.nombre = prompt("Cual es su pelicula favorita?");
    pelicula.director = prompt("Cual es el director?");
    pelicula.duracion = prompt("Cuanto dura?");
    pelicula.actor = prompt("Actor principal")
    console.log(pelicula)

    document.querySelector("#pelicula ul #nombre").innerHTML = pelicula.nombre ; 
    document.querySelector("#pelicula ul #director").innerHTML = pelicula.director ;
    document.querySelector("#pelicula ul #duracion").innerHTML = pelicula.duracion ;
    document.querySelector("#pelicula ul #actor").innerHTML = pelicula.actor;
    document.querySelector("#pelicula").style.display = "block"
} else if (edadUsuario < 17){
        document.querySelector(".container-general").style.display = 'none';
        document.querySelector("#accesoDenegado").style.display = 'block';
};


   
