import { Request, Response } from "express";
import { GetAllPessoasEnderecoService } from "../../../services/pessoas/endereco/GetAllPessoasEnderecoService";

export class GetAllPessoasEnderecoController {
    async handle(request: Request, response: Response) {

        const service = new GetAllPessoasEnderecoService();

        const pessoas_endereco = await service.execute();

        return response.json(pessoas_endereco);
    }

}