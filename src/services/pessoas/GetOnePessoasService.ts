import { getRepository } from "typeorm";
import { Pessoas } from "../../entities/Pessoas";

export class GetOnePessoasService {
    async execute(id_pessoa: string) {
        const repo = getRepository(Pessoas);

        if (!await repo.findOne(id_pessoa)) {
            return new Error("Pessoa não existe!");
        }

        const pessoas = await repo.findOne(
            {   
                relations: ['pessoas'],
                where: { id_pessoa } 
        
            }
        );
        return pessoas;

    }

}

