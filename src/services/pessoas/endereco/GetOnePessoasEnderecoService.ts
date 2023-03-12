import { getRepository } from "typeorm";
import { PessoasEndereco } from "../../../entities/PessoasEndereco";

export class GetOnePessoasEnderecoService {
    async execute(id_endereco: string) {
        const repo = getRepository(PessoasEndereco);

        const pessoas_endereco = await repo.findOne({
            relations: ['pessoas_endereco'],
            where: { id_endereco }
        });
        
        if(!pessoas_endereco){
            return new Error("Endereço não existe!");
        }
              
        return pessoas_endereco;
 
    }
}