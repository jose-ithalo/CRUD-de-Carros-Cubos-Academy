import { Request, Response } from "express";
import { knex } from "../bancoDados/conexao";
import { Carro } from "../tipos";

export const listarCarros = async (req: Request, res: Response): Promise<Response> => {

    try {

        const listaCarros: Carro[] = await knex('carros');

        return res.status(200).json(listaCarros);

    } catch {
        return res.status(500).json({ menssagem: 'Erro interno do Servidor ☠' });
    }

}

export const cadastrarCarros = async (req: Request, res: Response): Promise<Response> => {

    const { marca, modelo, ano, cor, valor } = req.body;

    try {

        const novoCarro = await knex<Omit<Carro, 'id'>>('carros').insert({
            marca,
            modelo,
            ano,
            cor,
            valor
        }).returning('*');

        return res.status(201).json(novoCarro[0]);

    } catch {
        return res.status(500).json({ menssagem: 'Erro interno do Servidor ☠' });
    }

}

export const detalharCarros = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    try {

        const carroEscolhido = await knex<Carro>('carros').where({ id: Number(id) }).first();

        if (!carroEscolhido) {
            return res.status(404).json('Carro não encontrado.');
        }

        return res.status(200).json(carroEscolhido);

    } catch {
        return res.status(500).json({ menssagem: 'Erro interno do Servidor ☠' });
    }

}

export const atualizarCarros = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const { marca, modelo, ano, cor, valor } = req.body;

    try {

        const carroEscolhido = await knex<Carro>('carros').where({ id: Number(id) }).first();

        if (!carroEscolhido) {
            return res.status(404).json('Carro não encontrado.');
        }

        await knex<Carro>('carros')
            .update({ marca, modelo, ano, cor, valor })
            .where({ id: Number(id) });

        return res.status(204).send();

    } catch {
        return res.status(500).json({ menssagem: 'Erro interno do Servidor ☠' });
    }

}

export const excluirCarros = async (req: Request, res: Response) => {

}