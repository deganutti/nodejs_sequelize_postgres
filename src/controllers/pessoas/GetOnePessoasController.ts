import { Request, Response } from "express";
import { GetOnePessoasService } from "../../services/pessoas/GetOnePessoasService";

export class GetOnePessoasController {
    async handle(request: Request, response: Response) {

        const { id_pessoa } = request.body;

        const service = new GetOnePessoasService();
        const pessoas = await service.execute(id_pessoa);

        return response.json(pessoas);
    }

}

