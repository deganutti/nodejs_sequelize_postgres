import { getRepository } from "typeorm";
import { Banco } from "../../../entities/Banco";
import { Agencia } from "../../../entities/Agencia";
type AgenciaRequest = {
    codigo_banco: string;
    descricao: string;
}

export class GetAgenciaService {
    async execute(id_agencia: string) {
        const repo = getRepository(Agencia);
        const agencia = await repo.find(
            {
                relations: ['banco'],
                where: { id_agencia }
            }
        );
        return agencia;
    }

}

