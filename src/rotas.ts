import { Router } from 'express';
import { cadastrarCarros, listarCarros } from './controladores/carros';

const rotas: Router = Router();

rotas.get('/carros', listarCarros);

rotas.post('/carros', cadastrarCarros);

export default rotas
