function media(){
    var num1 = document.getElementById("nota1").value
    num1 = parseInt(num1);

    var num2 = document.getElementById("nota2").value
    num2 = parseInt(num2);

    var soma = num1 + num2;
    var div = soma/2
    document.getElementById("resultados").innerHTML += `sua nota foi ${div} <br>`
    if (div >7){
        document.getElementById("resultados").innerHTML += `voce passou de ano <br>`
    } else{
        document.getElementById("resultados").innerHTML += `voce nao passou de ano <br>`
    }
}