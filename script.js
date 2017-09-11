var UsuarioScore = 0;
var RespuestaTotal = 0;
var Pregunta1 = prompt("cuanto es 3 x 10 ?");
if (Pregunta1 === "30") {
    UsuarioScore = UsuarioScore +1;
    alert ("Respuesta Correcta!!, es " + Pregunta1);
    Pregunta1 = parseInt(Pregunta1);
    //RespuestaTotal = RespuestaTotal + Pregunta1;
    //alert (RespuestaTotal);
    alert ("Tu puntaje es " + UsuarioScore );
}
else {
    alert("Eso es incorrecto D:");
}
var Pregunta2 = prompt("cuanto es 10 + 5 ?");
if (Pregunta2 === "15") {
    UsuarioScore = UsuarioScore +1;
    alert ("Respuesta Correcta!!, es " + Pregunta2);
    Pregunta2 = parseInt(Pregunta2);
    //RespuestaTotal = RespuestaTotal + Pregunta2;
    //alert (RespuestaTotal);
    alert ("Tu puntaje es " + UsuarioScore );
}
else {
    alert("Eso es incorrecto D:");
}
var Pregunta3 = prompt("cuanto es 3 + 7 ?");
if (Pregunta3 === "10") {
    UsuarioScore = UsuarioScore +1;
    alert ("Respuesta Correcta!!, es " + Pregunta3);
    Pregunta3 = parseInt(Pregunta3);
    //RespuestaTotal = RespuestaTotal + Pregunta3;
    //alert (RespuestaTotal);
    alert ("Tu puntaje es " + UsuarioScore );
}
else {
    alert("Eso es incorrecto D:");
}
if (UsuarioScore === 2 || UsuarioScore === 3 ) {
    alert ("YOUWIN!! :D");
}
else {
    alert ("XD you lose");
}