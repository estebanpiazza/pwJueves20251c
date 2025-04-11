console.log("hola")

document.getElementById("guardaNombre").addEventListener("click", function() {
    let nombreUsuario = document.getElementById("nombre").value
    console.log(nombreUsuario)
    localStorage.setItem("nombreLocal",nombreUsuario)
})

window.addEventListener("load", function () {
    document.getElementById("nombre").value = localStorage.getItem("nombreLocal")
})

localStorage.removeItem("nombreLocal")
localStorage.clear()

let usuario = {
    nombre:"esteban",
    apellido:"piazza",
    edad:32,
    cumplirAnios: function(){
        return this.edad = this.edad + 1
    }
}
usuario.cumplirAnios()
console.log(usuario.edad)
console.log(usuario)

console.log(JSON.stringify(usuario))
let usuarioJSONEADO = JSON.stringify(usuario)
let usuarioParseado = JSON.parse(usuarioJSONEADO)
console.log(usuarioParseado.edad)
console.log(usuarioParseado)
console.log(fetch('https://dolarapi.com/v1/dolares')
)