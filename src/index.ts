import express from 'express';

const servidor = express();

servidor.use(express.json());

servidor.listen(3000, function (): void {
    console.log('Servidor funcionando...');
});
