import { getRepository } from "typeorm";
import { Banco } from "../../../entities/Banco";
import { Agencia } from "../../../entities/Agencia";
type AgenciaRequest = {
    id_banco: string;
    numero_agencia: string;
    descricao: string;
    ativo:boolean;
}

export class CreateAgenciaService {
    async execute({ id_banco, numero_agencia , descricao, ativo }: AgenciaRequest): Promise<Agencia | Error> {
        try {

            const repo = getRepository(Banco);

            if (!await repo.find({
                where: { id_banco }
            })) {
                return new Error("Banco não encontrado.");
            } else {
                const repo = getRepository(Agencia);
                if (await repo.findOne({ id_banco,numero_agencia })) {
                    return new Error("Cadastro já existente em nossa base de dados!");
                }
                const agencia = repo.create({
                    id_banco,
                    numero_agencia,
                    descricao,
                    ativo
                });

                await repo.save(agencia);
                return agencia;
            } 

        } catch (error) {
            return new Error("Erro ao cadastrar banco verifique os dados inseridos."+error);
        }

    }
}