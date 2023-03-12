import { Request, Response } from "express";
import { UpdateBancosService } from "../../services/bancos/UpdateBancosService";

export class UpdateBancoController {
    async handle(request: Request, response: Response) {
        const {id_banco, codigo_banco, descricao } = request.body;

        const service = new UpdateBancosService();
        const result = await service.execute({ id_banco, codigo_banco, descricao });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }

}