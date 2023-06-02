function Sorteio(){
    document.getElementById("bla").innerHTML = ""
    for (var i = 0; i <= 5; i ++) {
        var nr =parseInt(Math.random() *60) + 1
        document.getElementById("bla").innerHTML += ` ${nr}`
    }
    
}