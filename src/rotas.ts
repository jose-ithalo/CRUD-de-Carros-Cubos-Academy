import { Router } from 'express';
import {
    atualizarCarros,
    cadastrarCarros,
    detalharCarros,
    excluirCarros,
    listarCarros
} from './controladores/carros';

const rotas: Router = Router();

rotas.get('/carros', listarCarros);

rotas.post('/carros', cadastrarCarros);

rotas.get('/carros/:id', detalharCarros);

rotas.put('/carros/:id', atualizarCarros);

rotas.delete('/carros/:id', excluirCarros);

export default rotas
