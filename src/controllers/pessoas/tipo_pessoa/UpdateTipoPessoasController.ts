import { Request, Response } from "express";
import { UpdateTipoPessoasService } from '../../../services/pessoas/tipo_pessoa/UpdateTipoPessoasService';

export class UpdateTipoPessoasController {
    async handle(request: Request, response: Response) {

        const { id_tipo, descricao } = request.body;

        const service = new UpdateTipoPessoasService();

        const tipo_pessoa = await service.execute(
            {
                id_tipo, 
                descricao
            }
        );

        return response.json(tipo_pessoa);
    }

}