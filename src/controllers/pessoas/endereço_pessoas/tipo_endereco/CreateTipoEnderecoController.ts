import { Request, Response } from "express";
import { CreateTipoEnderecoService } from "../../../../services/pessoas/endereco/tipo_endereco/CreateTipoEnderecoService";

export class CreateTipoEnderecoController {
    async handle(request: Request, response: Response) {
        const { descricao } = request.body;

        const service = new CreateTipoEnderecoService();
        const result = await service.execute({ descricao });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }

}