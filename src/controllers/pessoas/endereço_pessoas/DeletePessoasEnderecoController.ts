import { Request, Response } from "express";
import { DeletePessoasEnderecoService } from "../../../services/pessoas/endereco/DeletePessoasEnderecoService";

export class DeletePessoasEnderecoController {
    async handle(request: Request, response: Response) {
        const { id_endereco } = request.body;
        const service = new DeletePessoasEnderecoService();

        const result = await service.execute(id_endereco);
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).end();

    }
}