import { Request, Response } from "express";
import { GetAgenciaService } from "../../../services/bancos/agencias/GetAgenciaService";

export class GetAgenciaController {
    async handle(request: Request, response: Response) {

        const {id_agencia} = request.body;

        const service = new GetAgenciaService();
        const agencias = await service.execute(id_agencia);

        return response.json(agencias);
    }
}