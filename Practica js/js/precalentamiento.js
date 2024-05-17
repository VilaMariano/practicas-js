//alert

let mensaje ="Hola buenos dias";
let resultado= alert(mensaje);



//condicionales

let mensajeUno = "cuantos años tenes?";
let edad = prompt(mensajeUno)
let acceso = '';

if (edad<13){
    acceso = "No podes entrar"
} else if (edad >= 13 && edad <= 19){
    accesso = "Solo acompañado"
} else {
    acceso = "Permitido"
};

alert(acceso);
console.log(acceso);
