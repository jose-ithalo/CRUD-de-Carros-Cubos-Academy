import { Router } from 'express';
import {
    atualizarCarros,
    cadastrarCarros,
    detalharCarros,
    listarCarros
} from './controladores/carros';

const rotas: Router = Router();

rotas.get('/carros', listarCarros);

rotas.post('/carros', cadastrarCarros);

rotas.get('/carros/:id', detalharCarros);

rotas.put('/carros/:id', atualizarCarros);

export default rotas
