// Criar função para mostrar os números primos

exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    for(let i = 2; i <= limite; i++){ // loop que percorre todos os números de 2 até limite
        let primo = true; // assumimos que sim variável é primo

        for(let divisor = 2; divisor < i; divisor++){ // loop para verificar se i é divisível por algum número menor que ele
            if(i % divisor === 0){ // se i for divisível por outro numero então não é primo
                primo = false;
                break;
            }
        }
        if(primo)
            console.log(i);
    }
}