import { getRepository } from "typeorm";
import { Pessoas } from "../../entities/Pessoas";
type PessoasRequest = {
    razao: string;
    fantasia: string;
    ie: string;
    cnpj: string;
    id_tipo: string;
}

export class GetAllPessoasService {
    async execute() {
        const repo = getRepository(Pessoas);
        const pessoas = await repo.find(
            { 
                relations: ['pessoas'] 
            }
        );
        return pessoas;

    }

}

