// window.addEventListener('DOMContentLoaded', chistesAleatorios)


let chisteParteI = document.getElementById("texto-inicial");
let chisteParteII = document.getElementById("texto-respuesta");
let boton = document.getElementById("Uno-mas");


boton.addEventListener("click", ()=>chistesAleatorios())

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