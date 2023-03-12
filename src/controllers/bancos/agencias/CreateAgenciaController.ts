import { Request, Response } from "express";
import { CreateAgenciaService } from "../../../services/bancos/agencias/CreateAgenciaService";


export class CreateAgenciaController {
    async handle(request: Request, response: Response) {
        const { id_banco, numero_agencia, descricao, ativo } = request.body;

        const service = new CreateAgenciaService();
        const result = await service.execute({ id_banco, numero_agencia, descricao, ativo });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }

}