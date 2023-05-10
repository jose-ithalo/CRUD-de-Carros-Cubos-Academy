import 'dotenv/config';
import express from 'express';
import rotas from './rotas';

const servidor = express();

servidor.use(express.json());

servidor.use(rotas);

servidor.listen(3000, function (): void {
    console.log('Servidor funcionando...');
});
