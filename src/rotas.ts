import { Router } from 'express';
import { listarCarros } from './controladores/carros';

const rotas: Router = Router();

rotas.get('/carros', listarCarros);

export default rotas
