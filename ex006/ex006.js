function botaocalcular(){
    var num1 = document.getElementById("nrDigitando").value
    num1 = parseInt(num1);
    
    var num2 = document.getElementById("nrDigitando2").value
    num2 = parseInt(num2);
    
        var soma = num1 + num2;
        var sub  = num1-num2;
        var mult = num1 * num2;
        var div  = num1/num2;
        var exp  = num1**num2;
        var resto = num1%num2;
       
        document.getElementById("resultados").innerHTML += `a soma do numero ${num1} com ${num2} é igual a ${soma} <br>
        a subitração de ${num1} e ${num2} é igual a ${sub} <br>
        a multiplicação de ${num1} e ${num2} é igual a ${mult} <br>
        a divisão de ${num1} e ${num2} é igual a ${div} <br>
        a expotenciação de ${num1} e ${num2} é igual a ${exp} <br>
        o resto da divisão de ${num1} e ${num2} é igual a ${resto} <br>`
    }