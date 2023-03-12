import { Request, Response } from "express";
import { GetOneTipoEnderecoService } from "../../../../services/pessoas/endereco/tipo_endereco/GetOneTipoEnderecoService";

export class GetOneTipoEnderecoController {
    async handle(request: Request, response: Response) {

        const { id_tipo_endereco } = request.body;

        const service = new GetOneTipoEnderecoService();

        const tipo_endereco = await service.execute(id_tipo_endereco);

        return response.json(tipo_endereco);
    }

}