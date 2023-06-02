function make(){
    var fin = document.getElementById("fin").value
    var ini = 0
    ini = Number(ini)
    fin = Number(fin)
    while (ini < fin) {
        document.getElementById("resultados").innerHTML += `<img src="/360289-nsmb_mushroom_super.webp" width="100px" height="100px">`
        ini++
    }
}
function novo(){
    document.getElementById("resultados").innerHTML =""
    nr = parseInt(Math.random() * 100)
}