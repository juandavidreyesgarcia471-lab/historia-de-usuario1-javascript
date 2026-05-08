// pide el nombre del usuario
let nombre = prompt("¿Cuál es tu nombre?");

// Pide la edad
let edad = prompt("¿Cuántos años tienes?");

edad = Number(edad);

// Valida si la edad es un número
if (isNaN(edad)) {
    console.error("Error: Por favor, ingresa una edad válida en números.");

} else {

    // Si es menor de edad
    if (edad < 18) {

        alert("Hola " + nombre + ", eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!");

    } else {

        // Si es mayor de edad
        alert("Hola " + nombre + ", eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!");
    }
}
