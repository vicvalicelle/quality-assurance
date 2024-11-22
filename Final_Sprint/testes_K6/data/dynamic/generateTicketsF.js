const { faker } = require('@faker-js/faker');
const fs = require('fs');

// Função para gerar número aleatório dentro de um intervalo
const gerarNumeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gerarTicketsComCaracteristicas = () => {
    const tickets = [];

    for (let i = 0; i < 21; i++) {
        let ticket = {};

        // Valores dinâmicos para tickets
        ticket.movieId = ticket.movieId || faker.string.nanoid({ min: 13, max: 37 });
        ticket.userId = ticket.userId || faker.string.nanoid({ min: 13, max: 37 });
        ticket.seatNumber = ticket.seatNumber || gerarNumeroAleatorio(1, 99);
        ticket.price = ticket.price || gerarNumeroAleatorio(1, 60);
        ticket.showtime = ticket.showtime || faker.date.future().toISOString();

        // Características específicas por índice
        if (i === 1 || i === 10) {
            // ticket com `movieId` igual a 0
            ticket.movieId = 0;
        } else if (i === 2 || i === 11) {
            // `userId` igual a 0
            ticket.userId = 0;
        } else if (i === 3 || i === 12) {
            // Assento maior que 99 (inválido)
            ticket.seatNumber = 100;
        } else if (i === 9 || i === 20) {
            // Assento igual a um já utilizado
            ticket.movieId = "02ttctf2U0ponl97kf8n";
            ticket.seatNumber = 76; 
            ticket.showtime = "2025-03-04T03:39:25.870Z"
        } else if (i === 4 || i === 13) {
            // Preço inválido
            ticket.price = 61;
        } else if (i === 6 || i === 17) {
            // Preço vazio
            ticket.price = "";
        } else if (i === 7 || i === 18) {
            // Showtime vazio
            ticket.showtime = "";
        } else if (i === 5 || i === 16) {
            // Assento vazio
            ticket.seatNumber = "";
        } else if (i === 14 ) {
            // `movieId` igual a 0
            ticket.movieId = "";
        } else if (i === 15) {
            // `movieId` igual a 0
            ticket.userId = "";
        }

        tickets.push(ticket);
    }

    return tickets;
};

// Gerar os tickets com as características predefinidas
const tickets = gerarTicketsComCaracteristicas();

// Criar o arquivo JSON
const data = {
    tickets: tickets
};

try {
    fs.writeFileSync('ticketsFunctional.json', JSON.stringify(data, null, 2));
    console.log('Arquivo "ticketsFunctional.json" foi criado com sucesso.');
} catch (error) {
    console.error('Erro ao escrever o arquivo:', error);
}
