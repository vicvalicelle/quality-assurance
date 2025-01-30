const { faker } = require('./lib/node_modules/@faker-js/faker/dist/cjs/locale/pt_BR');
const fs = require('fs');

const quantidade = process.argv[2] || 1;
const bilhetes = [];

for(let i = 0; i < quantidade; i++){
    const bilhete = {
        movieId: faker.string.nanoid({ min: 13, max: 37 }),
        userId: faker.string.nanoid({ min: 13, max: 37 }),
        seatNumber: faker.number.int({min:0, max:99}),
        price: faker.number.int({min:0, max:60 }),
        showtime: faker.date.future(),
    }
    bilhetes.push(bilhete);
}

const data = {
    tickets: bilhetes
}

fs.writeFileSync('tickets.json', JSON.stringify(data, null, 2), error => {
    if(error){
        console.error(error);
    }
})