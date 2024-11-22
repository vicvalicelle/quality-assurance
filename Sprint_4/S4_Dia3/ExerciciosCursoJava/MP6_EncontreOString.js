// Criar um método para ler propriedades de um objeto
// Exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}

exibirPropriedades(filme);

function exibirPropriedades(obj){
    for(caracteristica in obj){ // loop para ler todas as propriedades do filme
        if(typeof obj[caracteristica] == 'string') // verifica se é do tipo string
            console.log(caracteristica, obj[caracteristica])
    }
}