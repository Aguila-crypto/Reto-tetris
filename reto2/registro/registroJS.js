


let usuariosRegistrados = [{ username: "ana", password: "anaciao" }, { username: "paolo", password: "paolocaio" }, { username: "pino", password: "pinociao" }];
let emailRegistradas = ["ana@gmail.com", "paolo@gmail.com"]

function verificaDatos() {
    let nombreUs = document.forms["miFormulario"]["nom"].value;
    let emailUs = document.forms["miFormulario"]["mail"].value;
    let passUs = document.forms["miFormulario"]["pass"].value;
    let tieneNumero = /\d/.test(passUs);
    let tieneSimbolo = /[!@#$%^&*]/.test(passUs);
    if (usuariosRegistrados.some(usuario => usuario.username === nombreUs)) {
        alert("usuario ya registrado. Porfavor seleciona otro");
    } else if (emailRegistradas.includes(emailUs)) {
        alert("Email ya registrda, porfavor utiliza otra");

    } else if (passUs.length < 8) {
        alert("password minimo di 8 caratteri");

    } else if (!tieneNumero) {
        alert("la pass tiene que tener almeno un numero");
    } else if (!tieneSimbolo) {
        alert("la pass tiene que tener por lo meno un caracter especial");
    }
    else {
        usuariosRegistrados.push({ username: nombreUs, password: passUs });
        emailRegistradas.push(emailUs);
        localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));
        localStorage.setItem("emails", JSON.stringify(emailRegistradas));
    }
}

console.log(usuariosRegistrados);