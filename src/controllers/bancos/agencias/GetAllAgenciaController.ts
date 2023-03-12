import { Request, Response } from "express";
import { GetAllAgenciaService } from "../../../services/bancos/agencias/GetAllAgenciaService";

export class GetAllAgenciaController {
    async handle(request: Request, response: Response) {

        const service = new GetAllAgenciaService();
        const agencias = await service.execute();

        return response.json(agencias);
    }
}