import { Request, Response } from "express";
import { knex } from "../bancoDados/conexao";
import { Carro } from "../tipos";

export const listarCarros = async (req: Request, res: Response): Promise<Response> => {

    try {

        const listaCarros: Carro[] = await knex('carrs');

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

export const detalharCarros = (req: Request, res: Response) => {

}

export const atualizarCarros = (req: Request, res: Response) => {

}

export const excluirCarros = (req: Request, res: Response) => {

}