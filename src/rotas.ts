import { Router } from 'express';
import { cadastrarCarros, detalharCarros, listarCarros } from './controladores/carros';

const rotas: Router = Router();

rotas.get('/carros', listarCarros);

rotas.post('/carros', cadastrarCarros);

rotas.get('/carros/:id', detalharCarros);

export default rotas
