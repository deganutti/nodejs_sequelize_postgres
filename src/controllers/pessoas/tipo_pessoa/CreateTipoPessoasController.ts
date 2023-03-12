import { Request, Response } from "express";
import { CreateTipoPessoasService } from "../../../services/pessoas/tipo_pessoa/CreateTipoPessoasService";

export class CreateTipoPessoasController {
    async handle(request: Request, response: Response) {
        const { descricao } = request.body;

        const service = new CreateTipoPessoasService();
        const result = await service.execute({ descricao });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }

}