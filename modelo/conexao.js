
const mongoose = require('mongoose');

// Definir as opções de conexão
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost/seu-banco-de-dados', options);

// Exportar a conexão no padrão de módulo do JavaScript
module.exports = mongoose;