import { Request, Response } from "express";
import { knex } from "../bancoDados/conexao";

export const listarCarros = async (req: Request, res: Response): Promise<Response> => {

    try {

        const listaCarros: object[] = await knex('carrs');

        return res.status(200).json(listaCarros);

    } catch {
        return res.status(500).json({ menssagem: 'Erro interno do Servidor ☠' });
    }

}

export const cadastrarCarros = (req: Request, res: Response) => {

}

export const detalharCarros = (req: Request, res: Response) => {

}

export const atualizarCarros = (req: Request, res: Response) => {

}

export const excluirCarros = (req: Request, res: Response) => {

}