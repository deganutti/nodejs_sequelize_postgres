import { getRepository } from "typeorm";
import { Banco } from "../../entities/Banco";
type BancoRequest = {
    codigo_banco: string;
    descricao: string;
}

export class GetAllBancosService {
    async execute() {
        const repo = getRepository(Banco);
        const bancos = await repo.find();
        return bancos;

    }

}

