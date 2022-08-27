// Change mode code 

const botonChangeMode = document.querySelector("#change-mode")

// const configUser = window.matchMedia("(prefers-color-scheme: light)")
const configUser = document.body.classList


botonChangeMode.addEventListener("click", ()=>{
    // alert("diste click")
    console.log(configUser)
    if (document.body.classList["ligth-mode"]){
        // Entramos a modo claro
        document.body.classList.toggle("ligth-mode")
        document.body.classList.remove("dark-mode")

        // alert("Cambiando a modo oscuro")
    } else {
        document.body.classList.toggle("light-mode")
        document.body.classList.remove("dark-mode")
        // alert("cambiando a modo claro")

    }

})


/* ()=>{
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

}*/