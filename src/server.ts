import express from "express";
import "reflect-metadata";
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(8080, () => console.log("Servidor On-line"));




/**
 * Arquivo Server, todas as informações de conexão sera feito aqui.
 * 
*/