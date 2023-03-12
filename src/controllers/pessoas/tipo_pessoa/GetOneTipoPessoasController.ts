import { Request, Response } from "express";
import { GetOneTipoPessoasService } from '../../../services/pessoas/tipo_pessoa/GetOneTipoPessoasService';

export class GetOneTipoPessoasController {
    async handle(request: Request, response: Response) {

        const { id_tipo } = request.body;

        const service = new GetOneTipoPessoasService();

        const tipo_pessoa = await service.execute(id_tipo);

        return response.json(tipo_pessoa);
    }

}