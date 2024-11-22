import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js';

export const generateUserData = () => {
  return {
    nome: faker.name.firstName(),
    email: faker.internet.email(),
    "password": "senha123",
    "administrador": "true"
  };
}

export const generateUserPUTData = () => {
  return {
    nome: faker.name.firstName(),
    "email": "batatao@qa.com",
    "password": "senha123",
    "administrador": "true"
  };
}

export const generateProductData = () => {
  return {
    nome: faker.commerce.productName(), // Nome de produto aleatório
    preco: faker.commerce.price(),      // Preço aleatório (número)
    descricao: "mouse", // Descrição aleatória
    quantidade: 100 // Quantidade aleatória entre 1 e 100
  };
}