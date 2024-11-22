// Escreva uma função que usa 2 números e retorna o maior entre eles

let numeros = maiorEntreEles(5,7);

function maiorEntreEles(numero1, numero2){
    if(numero1 >= numero2) // Checa se o primeiro número é maior ou igual o segundo e retorna o maior
        return numero1; 
    else
        return numero2;
}

console.log(numeros);