import { Request, Response } from "express";
import { GetOnePessoasEnderecoService } from "../../../services/pessoas/endereco/GetOnePessoasEnderecoService";

export class GetOnePessoasEnderecoController {
    async handle(request: Request, response: Response) {

        const { id_endereco } = request.body;

        const service = new GetOnePessoasEnderecoService();

        const pessoas_endereco = await service.execute(id_endereco);

        return response.json(pessoas_endereco);
    }

}