import { Request, Response } from "express";
import { CreatePessoasEnderecoService } from "../../../services/pessoas/endereco/CreatePessoasEnderecoService";

export class CreatePessoasEnderecoController {
    async handle(request: Request, response: Response) {
        const { id_pessoa, cep, endereco, bairro, complemento, cidade, uf, tipo_endereco, endereco_principal } = request.body;

        const service = new CreatePessoasEnderecoService();
        const result = await service.execute({ id_pessoa, cep, endereco, bairro, complemento, cidade, uf, tipo_endereco,endereco_principal });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }

}