// Velociade máxima de até 70
// a cada 5km acima do limite você ganha 1 ponto
// Math.Floor()
// caso pontos maior que 12, 'Carteira Suspendida'

const velocidadeAtual = verificaVelocidade(130);

function verificaVelocidade(velocidade){
    if(velocidade <= 70) // Checa se está dentro do limite
        return 'Dentro da velocidade permitida';
    else{
        const pontos = Math.floor((velocidade - 70) / 5) // Calcula quantos pontos voce deve receber
        if(pontos >= 12) // Verifica se a quantidade de pontos é suficiente pra suspender a carteira
            return 'Carteira Suspendida';
        else
            return pontos; // Mostra quantos pontos recebeu
    }
}

console.log(velocidadeAtual);