// Média de Nota Escolar
// Obter a média a partir de um array

// 0 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
//  90 - 100: A

const array = [70,70,80]; // 75

console.log(mediaDoAluno(array));

function mediaDoAluno(notas){
    let soma = 0;
    let media = 0;
    for(let nota of notas){ //  loop para somar todas as notas
        soma += nota;
    }

    media = soma/(notas.length); // acha a média

    if(media < 59) // retorna a média
        return 'F';
    if(media < 69)
        return 'D';
    if(media < 79)
        return 'C';
    if(media < 89)
        return 'B';
    return 'A';
}