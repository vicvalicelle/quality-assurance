const { faker } = require('./lib/node_modules/@faker-js/faker/dist/cjs/locale/pt_BR');
const fs = require('fs');

const quantidade = process.argv[2] || 1;
const usuarios = [];

for(let i = 0; i < quantidade; i++){
    const usuario = {
        nome: faker.internet.userName(),
        email: faker.internet.email({ provider: 'exemplo.qa.com.br'}),
        password: faker.internet.password(),
        administrador: "true"
    }
    usuarios.push(usuario);
}

const data = {
    users: usuarios
}

fs.writeFileSync('user.json', JSON.stringify(data, null, 2), error => {
    if(error){
        console.error(error);
    }
})