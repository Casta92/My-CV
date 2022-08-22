// window.addEventListener('DOMContentLoaded', chistesAleatorios)


let chisteParteI = document.getElementById("texto-inicial");
let chisteParteII = document.getElementById("texto-respuesta");
let botonChiste = document.getElementById("Uno-mas");


botonChiste.addEventListener("click", ()=>chistesAleatorios())

async function chistesAleatorios() {


    const endpoint = "https://api.dadjokes.io/api/random/joke";
    let response;
    try {
        response = await fetch(endpoint);
    } catch (error) {
        console.log('ups!!')
    }
    const data = await response.json();
    console.log(data)
    const ListaChistes = data.body;
    const primerChiste = ListaChistes[0];
    const chiste = primerChiste.setup;
    const respuesta = primerChiste.punchline;
    document.getElementById("texto-inicial").textContent = chiste;
    document.getElementById("texto-respuesta").textContent = respuesta;
    console.log(chiste, respuesta);
}

