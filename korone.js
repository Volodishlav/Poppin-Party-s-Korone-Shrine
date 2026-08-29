let pulsaciones = 0;

const boton =
document.getElementById("KoroneButton");

const contador =
document.getElementById("contador");

boton.addEventListener("click" , function() {
    pulsaciones++;
    contador.textContent=
    pulsaciones;

});

if (clicks === 100) {
    document.getElementById("mensaje").textContent
= " ¡YUBI YUBI! (PERRO)";

document.getElementById("audio").onplay();
}
