const { faker } = require('./lib/node_modules/@faker-js/faker/dist/cjs/locale/pt_BR');
const fs = require('fs');

const quantidade = process.argv[2] || 1;
const filmes = [];

for(let i = 0; i < quantidade; i++){
    const filme = {
        title: faker.music.songName(),
        description: faker.lorem.sentences(),
        launchdate: faker.date.past(),
        showtimes: [
            faker.date.future(),
            ]
    }
    filmes.push(filme);
}

const data = {
    movies: filmes
}

fs.writeFileSync('movies.json', JSON.stringify(data, null, 2), error => {
    if(error){
        console.error(error);
    }
})