import { getRepository } from "typeorm";
import { Banco } from "../../entities/Banco";
type BancoRequest = {
    codigo_banco: string;
    descricao: string;
}

export class CreateBancoService {
    async execute({ codigo_banco, descricao }: BancoRequest): Promise<Banco | Error> {
        try {
            const repo = getRepository(Banco);

            if (codigo_banco.length != 3) {
                return new Error("Código do Banco inválido");
            }

            if (await repo.findOne({ codigo_banco })) {
                return new Error("Cadastro já existente em nossa base de dados!");
            }

            const banco = repo.create({
                codigo_banco,
                descricao,
            });

            await repo.save(banco);
            return banco;
        } catch (error) {
            return new Error("Erro ao cadastrar banco verifique os dados inseridos.");
        }

    }
}