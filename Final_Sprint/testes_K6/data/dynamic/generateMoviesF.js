const { faker } = require('@faker-js/faker');
const fs = require('fs');

// Função para gerar número aleatório dentro de um intervalo
const gerarNumeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gerarFilmesComCaracteristicas = () => {
    const filmes = [];

    for (let i = 0; i < 19; i++) {
        let filme = {};

        // Aplicar características específicas para cada filme
        filme.title = faker.music.songName();

        // Filmes com título "You Belong With Me" (índices 0 e 1)
        if (i === 0 || i === 1) {
            filme.title = "You Belong With Me";
        }

        // Filmes com título vazio (índices 2 e 10)
        if (i === 2 || i === 10) {
            filme.title = "";
        }

        
        // Filme com título "Shake You Down" (índice 9 e 8)
        if (i === 8 || i === 9) {
            filme.title = "Shake You Down";
        }
        
        // Definir descrição e data de lançamento
        
        filme.description = filme.description || faker.lorem.sentences();
        filme.launchdate = filme.launchdate || faker.date.past().toISOString();
        
        // Definir horários de exibição
        filme.showtimes = [faker.date.future().toISOString()];
        
        // Manter showtimes vazio em filmes específicos (índices 4 e 12)
        if (i === 4 || i === 12) {
            filme.showtimes = "";
        }
        
        // Filme com lançamento sem data (índice 3 e 11)
        if (i === 3 || i === 11) {
            filme.launchdate = "";
        }

        // Filme com título e descrição nulos (ou zero) (índices 5 e 13)
        if (i === 5 || i === 13) {
            filme.title = 0;
            filme.description = 0;
        }

        filmes.push(filme);
    }

    return filmes;
};

// Gerar os filmes com as características predefinidas
const filmes = gerarFilmesComCaracteristicas();

// Criar o arquivo JSON
const data = {
    movies: filmes
};

try {
    fs.writeFileSync('moviesFunctional.json', JSON.stringify(data, null, 2));
    console.log('Arquivo "moviesFunctional.json" foi criado com sucesso.');
} catch (error) {
    console.error('Erro ao escrever o arquivo:', error);
}
