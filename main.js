// Dada las revoluciones por minuto de un auto en un juego de carreras, indique si el conductor debe seguir con el mismo cambio, 
// bajarlo o aumentarlo. Sabiendo que:
// Si las RPM son menores a 1000 debe bajar
// Si las RPM están entre 1000 y 3000 debe mantener
// Si las RPM son más de 3000 debe subir

let RPM = parseInt(prompt("Ingrese las revoluciones por minuto"));


if (RPM < 1000) {
    alert("Debe bajar de cambio");

} else if (RPM >= 1000 && RPM <= 3000) {
    alert("Debe mantener el cambio");
} else if (RPM > 3000) {
    alert("Debe subir un cambio");
} else {
    alert("Ingrese un valor numerico");
}



