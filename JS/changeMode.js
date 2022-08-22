// Change mode code 

const botonChangeMode = document.querySelector("#change-mode")

const configUser = window.matchMedia("(prefers-color-scheme: light)")

botonChangeMode.addEventListener("click", ()=>{
    // alert("diste click")
    console.log(configUser.matches)
    if (configUser.matches){
        // Entramos a modo claro
        document.body.toggleAttribute("dark-mode")
        alert("Cambiando a modo oscuro")
    } else {
        document.body.toggleAttribute("light-mode")
        alert("cambiando a modo claro")
    }

})


