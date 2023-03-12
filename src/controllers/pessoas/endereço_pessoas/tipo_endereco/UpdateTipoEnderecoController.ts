import { Request, Response } from "express";
import { UpdateTipoEnderecoService } from "../../../../services/pessoas/endereco/tipo_endereco/UpdateTipoEnderecoService";

export class UpdateTipoEnderecoController {
    async handle(request: Request, response: Response) {

        const { id_tipo_endereco, descricao } = request.body;

        const service = new UpdateTipoEnderecoService();

        const tipo_endereco = await service.execute(
            {
                id_tipo_endereco, 
                descricao
            }
        );

        return response.json(tipo_endereco);
    }

}