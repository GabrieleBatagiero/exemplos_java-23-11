//EXEMPLO DE FUNÇÕES (4 TIPOS)
//1-FUNÇÃO SEM PARAMETROS E SEM RETORNO

function teste1(){
console.log("Bom dia");
}

//2-FUNÇÃO SEM PARAMETROS E COM RETORNO
function teste2(){
    var frase ="bom dia!";
    return frase;
    }
    var resultado = teste2();
     //console.log(valor);


//3-FUNÇÃO COM PARAMETROS E SEM RETORNO
function muda_texto(valor){
   
  document.getElementById("paragrafo").innerHTML= valor;
}
   
//4-FUNÇÃO COM PARAMETROS E COM RETORNO

var num1 = 10;
var num2 = 20;

function soma(num1, num2){
    var soma = num1 + num2;
    return soma;
}

var total = soma(num1, num2);
console.log('a soma é: ' + total);
