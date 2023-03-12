import { Request, Response } from "express";
import { GetAllPessoasService } from "../../services/pessoas/GetAllPessoasService";

export class GetAllPessoasController {
    async handle(request: Request, response: Response) {


        const service = new GetAllPessoasService();
        const pessoas = await service.execute();

        return response.json(pessoas);
    }

}