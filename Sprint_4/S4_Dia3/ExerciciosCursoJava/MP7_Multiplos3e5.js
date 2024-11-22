// Criar função somar que retorna a soma de todos os múltiplos de 3 e 5

somar(10);

function somar(limite){
    let aux3 = 0;
    let aux5 = 0;
    for(let i = 0; i <= limite; i++){
        if(i % 3 == 0) // verifica se é multiplo de 3
            aux3 += i; // soma os multiplos de 3
        if(i % 5 == 0) // verifica se é multiplo de 5
            aux5 += i; // soma os multiplos de 5
    }
    console.log(aux3 + aux5); // soma de todos os múltiplos de 3 e 5
}