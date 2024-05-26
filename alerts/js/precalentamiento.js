let mensaje = "Vas a salir de tu casa?";
let confirmacion = confirm(mensaje);
let alerta1= ''
if (confirmacion === true){
    alerta1 = "Chequeá el pronóstico del tiempo antes de salir"
}else{
    alerta1 = "Que bueno que te quedes. Va a llover mucho hoy."
};
alert(alerta1);