import { Request, Response } from "express";
import { GetOnePessoasService } from "../../services/pessoas/GetOnePessoasService";

export class GetOnePessoasController {
    async handle(request: Request, response: Response) {

        const { cnpj } = request.params;

        const service = new GetOnePessoasService();
        const pessoas = await service.execute(cnpj);

        return response.json(pessoas);
    }

}

