import { Request, Response } from "express";
import { DeletePessoasService } from "../../services/pessoas/DeletePessoasService";

export class DeletePessoasController {
    async handle(request: Request, response: Response) {
        const { id_pessoa } = request.params;
        const service = new DeletePessoasService();

        const result = await service.execute(id_pessoa);
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).end();

    }
}