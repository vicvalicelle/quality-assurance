// Postagem de Blog
// crie um objeto de postagem de blog que vai conter as seguintes propriedades: 
// postagem
/*
titulo
mensagem
autor
visualizacoes
comentarios
    (autor, mensagem)
estaAoVivo
*/

let postagem = {
    titulo: 'Turma da monica',       // título da postagem
    mensagem: 'monica, cebolinha e cascao', // conteúdo
    autor: 'monica',                 // autor da postagem
    visualizacoes: 100,            // número de visualizações da postagem
    comentarios: [                 // array de comentários, cada com autor e mensagem
        { autor: 'magali', mensagem: 'e eu?' }
    ],
    estaAoVivo: true               // postagem está publicada (true) ou não (false)
};

console.log(postagem);