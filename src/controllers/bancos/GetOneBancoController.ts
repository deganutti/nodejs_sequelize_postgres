import { Request, Response } from "express";
import { GetOneBancosService } from "../../services/bancos/GetOneBancosService";

export class GetOneBancoController {
    async handle(request: Request, response: Response) {

        const { id_banco } = request.body;

        const service = new GetOneBancosService();
        const bancos = await service.execute(id_banco);

        return response.json(bancos);
    }

}