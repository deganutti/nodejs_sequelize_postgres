import { getRepository } from "typeorm";
import { Banco } from "../../entities/Banco";

export class GetOneBancosService {
    async execute(id_banco: string) {
        const repo = getRepository(Banco);

        if(!await repo.find({
            where: { id_banco }
        })){
            return new Error("Banco não encontrado.");
        }

        const bancos = await repo.find({
            where: { id_banco }

        });
        return bancos;
    }

}

