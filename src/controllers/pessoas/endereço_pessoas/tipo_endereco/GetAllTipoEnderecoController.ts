import { Request, Response } from "express";
import { GetAllTipoEnderecoService } from "../../../../services/pessoas/endereco/tipo_endereco/GetAllTipoEnderecoService";

export class GetAllTipoEnderecoController {
    async handle(request: Request, response: Response) {

        const service = new GetAllTipoEnderecoService();
        const tipo_endereco = await service.execute();
        return response.json(tipo_endereco);
    }

}