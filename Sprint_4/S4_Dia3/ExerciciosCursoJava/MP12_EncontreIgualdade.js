// Encontre a igualdade

function Endereco(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}
const endereco1 = new Endereco('a','b','c')
const endereco2 = new Endereco('a','b','c')

function saoIguais(endereco1,endereco2){
    // comparar se as propriedades são iguais
    if(endereco1.rua == endereco2.rua && endereco1.cidade == endereco2.cidade && endereco1.cep == endereco2.cep)
            return true; // retorna true se todas as propriedades forem iguais
    return false;
}

console.log(saoIguais(endereco1,endereco2));

function temEnderecoMemoriaIguais(endereco1,endereco2){
    // comparado se a referência do objeto aponta para o mesmo local na memória
    if(endereco1 === endereco2) 
        return true; // retorna true se as referências forem iguais, false caso contrário
    return false;
}

console.log(temEnderecoMemoriaIguais(endereco1,endereco2));