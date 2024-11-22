const { faker } = require('./lib/node_modules/@faker-js/faker/dist/cjs/locale/pt_BR');
const fs = require('fs');

const quantidade = process.argv[2] || 1;
const produtos = [];

for(let i = 0; i < quantidade; i++){
    const produto = {
        nome: faker.commerce.productName(),
        preco: faker.commerce.price({ min: 100, max: 200, dec: 0 }),
        descricao: faker.commerce.product(),
        quantidade: faker.number.int({ min: 100, max: 300 })
    }
    produtos.push(produto);
}

const data = {
    products: produtos
}

fs.writeFileSync('products.json', JSON.stringify(data, null, 2), error => {
    if(error){
        console.error(error);
    }
})