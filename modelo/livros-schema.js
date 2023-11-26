// modelo/livro-schema.js

const banco = require('./conexao'); // Importar a conexão do arquivo conexao.js

// Definir a estrutura do modelo "Livro"
const LivroSchema = new banco.Schema({
    titulo: String,
    autor: String,
    anoPublicacao: Number,
  // Outros campos necessários
});

// Associar LivroSchema e a coleção "livros" ao modelo de dados "Livro"
const Livro = banco.model('Livro', LivroSchema);

// Exportar o modelo "Livro" no padrão de módulo do JavaScript
module.exports = Livro;