let chisteParteI = document.getElementById("texto-inicial");
let chisteParteII = document.getElementById("texto-respuesta");
let boton = document.getElementById("Uno-mas");

boton.addEventListener("click", chistesAleatorios)

function chistesAleatorios (){

    const endpoint="https://api.dadjokes.io/api/random/joke";
    async function apiAsync()
        {
            const response = await fetch(endpoint);
            const data = await response.json()
            console.log(data)
            const ListaChistes = data.body;
            const primerChiste = ListaChistes[0];
            const chiste = primerChiste.setup;
            const respuesta = primerChiste.punchline;
            document.getElementById("texto-inicial").innerHTML = chiste;
            document.getElementById("texto-respuesta").innerHTML = respuesta;
            console.log(chiste, respuesta); 
        }
    apiAsync()
}