import { Request, Response } from "express";
import { UpdatePessoasEnderecoService } from "../../../services/pessoas/endereco/UpdatePessoasEnderecoService";

export class UpdatePessoasEnderecoController {
    async handle(request: Request, response: Response) {
        
        const {id_endereco, id_pessoa, cep, endereco, bairro, complemento, cidade, uf, tipo_endereco, endereco_principal } = request.body;

        const service = new UpdatePessoasEnderecoService();

        const result = await service.execute({id_endereco, id_pessoa, cep, endereco, bairro, complemento, cidade, uf, tipo_endereco, endereco_principal});

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
} 