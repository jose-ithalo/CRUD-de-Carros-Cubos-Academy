"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const rotas_1 = __importDefault(require("./rotas"));
const servidor = (0, express_1.default)();
servidor.use(express_1.default.json());
servidor.use(rotas_1.default);
servidor.listen(3000, function () {
    console.log('Servidor funcionando...');
});
