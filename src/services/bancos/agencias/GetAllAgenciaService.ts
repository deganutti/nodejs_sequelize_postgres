import { getRepository } from "typeorm";
import { Banco } from "../../../entities/Banco";
import { Agencia } from "../../../entities/Agencia";
type BancoRequest = {
    codigo_banco: string;
    descricao: string;
}

export class GetAllAgenciaService {
    async execute() {
        const repo = getRepository(Agencia);
        const agencia = await repo.find( {relations: ['banco'],});
        return agencia;
    }

}

