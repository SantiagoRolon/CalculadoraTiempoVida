




function calcularTiempoDeVida(opcion) {
    while (true) {
        const fechaNacimiento = prompt("Ingresa tu fecha de nacimiento en el formato YYYY-MM-DD (o escribe 'salir' para terminar):");

        if (fechaNacimiento.toLowerCase() === 'salir') {
            break; 
        }

        const fechaNacimientoObj = new Date(fechaNacimiento);

        const fechaActual = new Date();

        const diferencia = fechaActual.getTime() - fechaNacimientoObj.getTime();

        let tiempoDeVida;
        if (opcion === 'horas') {
            tiempoDeVida = Math.floor(diferencia / (1000 * 60 * 60));
        } else if (opcion === 'minutos') {
            tiempoDeVida = Math.floor(diferencia / (1000 * 60));
        }

        alert("Has vivido aproximadamente " + tiempoDeVida + " " + opcion);

        opcion = prompt("¿Quieres calcular tus horas o tus minutos de vida nuevamente? (Escribe 'horas' o 'minutos')");
    }
}

let opcionElegida = prompt("Bienvenid@ a mi calculadora de tiempo de vida,¿Quieres ver tus horas o tus minutos de vida? (Escribe 'horas' o 'minutos')");

calcularTiempoDeVida(opcionElegida);