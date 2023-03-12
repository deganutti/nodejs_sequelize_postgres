import { Request, Response } from "express";
import { GetAllBancosService } from "../../services/bancos/GetAllBancosService";

export class GetAllBancoController {
    async handle(request: Request, response: Response) {

        const service = new GetAllBancosService();
        const bancos = await service.execute();

        return response.json(bancos);
    }

}