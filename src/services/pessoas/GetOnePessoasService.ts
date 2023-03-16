import { getRepository } from "typeorm";
import { Pessoas } from "../../entities/Pessoas";

export class GetOnePessoasService {
    async execute(cnpj: string) {
        const repo = getRepository(Pessoas);

        if (!await repo.findOne({where:{cnpj:cnpj}})) {
            return new Error("Pessoa não existe!");
        }

        const pessoas = await repo.findOne(
            {   
                relations: ['pessoas'],
                where: { cnpj:cnpj } 
            }
        );
        return pessoas;

    }

}

