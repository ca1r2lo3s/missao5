
const express = require('express');
const router = express.Router();
const livroDao = require('../modelo/livro-dao');

// Rota para obter todos os livros
router.get('/', async (req, res) => {
    try {
    const livros = await livroDao.obterLivros();
    res.json(livros);
    } catch (error) {
    res.status(500).json({ erro: 'Erro ao obter livros.' });
    }
});

// Rota para incluir um novo livro
router.post('/', async (req, res) => {
    const livro = req.body;
    try {
    const novoLivro = await livroDao.incluir(livro);
    res.json({ mensagem: 'Livro incluído com sucesso!', livro: novoLivro });
    } catch (error) {
    res.status(500).json({ erro: 'Erro ao incluir livro.' });
    }
});

// Rota para excluir um livro pelo código (_id)
router.delete('/:codigo', async (req, res) => {
    const codigoLivro = req.params.codigo;
    try {
    const resultado = await livroDao.excluir(codigoLivro);
    if (resultado.deletedCount > 0) {
        res.json({ mensagem: 'Livro excluído com sucesso!' });
    } else {
        res.status(404).json({ erro: 'Livro não encontrado.' });
    }
    } catch (error) {
    res.status(500).json({ erro: 'Erro ao excluir livro.' });
    }
});

// Exportar router, seguindo o padrão de módulo do JavaScript
module.exports = router;