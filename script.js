function jugar() {
    alert("¡Bienvenido a Mini Tetri!");

    window.location.href = "usuario.html";
}

function iniciarSesion() {
    alert("Aquí podrás iniciar sesión.");
}

function registrarse() {
    alert("Aquí podrás crear tu cuenta.");
}

function verPuntuaciones() {
    alert("Aquí aparecerán las puntuaciones.");
}

function comoJugar() {
    alert("El objetivo es completar líneas con las piezas.");

    alert("Utiliza las flechas del teclado para mover las piezas.");
}

function cambiarIdioma() {

    var idioma = document.getElementById("idioma").value;

    if (idioma == "es") {
        alert("Has seleccionado español.");
    } else {
        alert("You have selected English.");
    }

}