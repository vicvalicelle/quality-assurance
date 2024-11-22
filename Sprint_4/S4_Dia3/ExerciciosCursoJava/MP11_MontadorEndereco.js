// Montador de Endereço
// criar um objeto endereço que contem: rua, cidade, cep, exibirEndereço(endereço)

let endereco = {
    rua: 'amazonas',
    cidade: 'rio das ostras',
    cep: 12345678
};

function exibirEndereco(endereco){
    for(let item in endereco) // percorre as propriedades do objeto
        console.log(item, endereco[item]); // Imprime o nome da propriedade e seu valor
}

exibirEndereco(endereco);
