let contador = 0;

const boton = document.getElementById("koronebutton");
const contadorTexto = document.getElementById("contador");
const audio = document.getElementById("audio");

boton.addEventListener("click", function() {

    // Sumar 1 al contador
    contador++;

    // Actualizar el contador
    contadorTexto.textContent = contador;

    // Sonido cada 10 clics
    if (contador % 10 === 0) {
        audio.currentTime = 0;

        audio.play().catch(function(error) {
            console.log("No se pudo reproducir el audio:", error);
        });
    }

    // Guardar el tamaño del botón
    const anchoBoton = boton.offsetWidth;
    const altoBoton = boton.offsetHeight;

    // Desaparecer
    boton.style.display = "none";

    // Esperar 300 ms
    setTimeout(function() {

        // Calcular una posición que mantenga
        // TODO el botón dentro de la pantalla
        const maxX = window.innerWidth - anchoBoton;
        const maxY = window.innerHeight - altoBoton;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        // Mover el botón
        boton.style.left = x + "px";
        boton.style.top = y + "px";

        // Volver a mostrarlo
        boton.style.display = "block";

    }, 300);

});