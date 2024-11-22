// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é par ou impar

exibirTipo(4);

function exibirTipo(limite){
    for(let i = 0; i <= limite; i++){ // loop para a quantidade de valores a serem avaliados
        if(i % 2 == 0) // Verifica se o número é par
            console.log(i, 'PAR');
        else
            console.log(i, 'IMPAR');
    }
}