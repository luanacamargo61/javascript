function botaocalcular(){
    var nr= document.getElementById("nrDigitando").value
    var dobro= nr * 2
    var metade= nr / 2
    document.getElementById("resultados").innerHTML += 
    `O dobro do numero ${nr} é igual a ${dobro} e a metade é ${metade} <br>`
}
function botaolimpar(){
    document.getElementById("resultados").innerHTML = ""
    document.getElementById("nrDigitando").value = ""
}