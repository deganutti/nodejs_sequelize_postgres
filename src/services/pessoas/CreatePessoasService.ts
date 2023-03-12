import { getRepository } from "typeorm";
import { cnpj as _cnpj, cpf } from "cpf-cnpj-validator";
import { Pessoas } from "../../entities/Pessoas";
type PessoasRequest = {
    razao: string;
    fantasia: string;
    ie: string;
    cnpj: string;
    id_tipo: string;
}


export class CreatePessoasService {
    async execute({ razao, fantasia, ie, cnpj, id_tipo }: PessoasRequest): Promise<Pessoas | Error> {
        try {
            const repo = getRepository(Pessoas);



           





           

            if (await repo.findOne({ cnpj })) {

                const pessoas = await repo.findOne(
                    {
                        relations: ['pessoas'],
                        where: { cnpj }
                    }
                );
                return pessoas;

                // return new Error("Cadastro já existente em nossa base de dados!");

            }

            const pessoas = repo.create({
                razao,
                fantasia,
                ie,
                cnpj,
                id_tipo
            });

            await repo.save(pessoas);
            return pessoas;
        } catch (error) {
            return new Error("Erro ao cadastrar pessoa verifique os dados inseridos.");
        }

    }
}