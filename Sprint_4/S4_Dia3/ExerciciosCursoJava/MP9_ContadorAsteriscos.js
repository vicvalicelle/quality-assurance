// Criar uma função que exibe a quantidade de * que a linha possui

exibirAsteriscos(5);

function exibirAsteriscos(linhas){
    let espaço = ''; // string vazia para armazenar os asteriscos
    for(let i = 1; i <= linhas; i++){ // loop até o número de linhas desejado
        espaço += '*'; // adiciona o asterisco na string
        console.log(espaço);
    }
}