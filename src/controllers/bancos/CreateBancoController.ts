import { Request, Response } from "express";
import { CreateBancoService } from "../../services/bancos/CreateBancosServive";

export class CreateBancoController {
    async handle(request: Request, response: Response) {
        const { codigo_banco, descricao } = request.body;

        const service = new CreateBancoService();
        const result = await service.execute({ codigo_banco, descricao });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }

}