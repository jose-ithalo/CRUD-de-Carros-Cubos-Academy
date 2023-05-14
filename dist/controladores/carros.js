"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirCarros = exports.atualizarCarros = exports.detalharCarros = exports.cadastrarCarros = exports.listarCarros = void 0;
const conexao_1 = require("../bancoDados/conexao");
const listarCarros = async (req, res) => {
    try {
        const listaCarros = await (0, conexao_1.knex)('carros');
        return res.status(200).json(listaCarros);
    }
    catch (_a) {
        return res.status(500).json({ menssagem: 'Erro interno do Servidor ☠' });
    }
};
exports.listarCarros = listarCarros;
const cadastrarCarros = async (req, res) => {
    const { marca, modelo, ano, cor, valor } = req.body;
    try {
        const novoCarro = await (0, conexao_1.knex)('carros').insert({
            marca,
            modelo,
            ano,
            cor,
            valor
        }).returning('*');
        return res.status(201).json(novoCarro[0]);
    }
    catch (_a) {
        return res.status(500).json({ menssagem: 'Erro interno do Servidor ☠' });
    }
};
exports.cadastrarCarros = cadastrarCarros;
const detalharCarros = async (req, res) => {
    const { id } = req.params;
    try {
        const carroEscolhido = await (0, conexao_1.knex)('carros').where({ id: Number(id) }).first();
        if (!carroEscolhido) {
            return res.status(404).json('Carro não encontrado.');
        }
        return res.status(200).json(carroEscolhido);
    }
    catch (_a) {
        return res.status(500).json({ menssagem: 'Erro interno do Servidor ☠' });
    }
};
exports.detalharCarros = detalharCarros;
const atualizarCarros = async (req, res) => {
    const { id } = req.params;
    const { marca, modelo, ano, cor, valor } = req.body;
    try {
        const carroEscolhido = await (0, conexao_1.knex)('carros').where({ id: Number(id) }).first();
        if (!carroEscolhido) {
            return res.status(404).json('Carro não encontrado.');
        }
        await (0, conexao_1.knex)('carros')
            .update({ marca, modelo, ano, cor, valor })
            .where({ id: Number(id) });
        return res.status(204).send();
    }
    catch (_a) {
        return res.status(500).json({ menssagem: 'Erro interno do Servidor ☠' });
    }
};
exports.atualizarCarros = atualizarCarros;
const excluirCarros = async (req, res) => {
    const { id } = req.params;
    try {
        const carroEscolhido = await (0, conexao_1.knex)('carros').where({ id: Number(id) }).first();
        if (!carroEscolhido) {
            return res.status(404).json('Carro não encontrado.');
        }
        await (0, conexao_1.knex)('carros')
            .del()
            .where({ id: Number(id) });
        return res.status(204).send();
    }
    catch (_a) {
        return res.status(500).json({ menssagem: 'Erro interno do Servidor ☠' });
    }
};
exports.excluirCarros = excluirCarros;
