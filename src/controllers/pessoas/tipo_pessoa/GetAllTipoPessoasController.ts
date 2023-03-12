import { Request, Response } from "express";
import { GetAllTipoPessoasService } from "../../../services/pessoas/tipo_pessoa/GetAllTipoPessoasService";

export class GetAllTipoPessoasController {
    async handle(request: Request, response: Response) {

        const service = new GetAllTipoPessoasService();

        const tipo_pessoa = await service.execute();

        return response.json(tipo_pessoa);
    }

}