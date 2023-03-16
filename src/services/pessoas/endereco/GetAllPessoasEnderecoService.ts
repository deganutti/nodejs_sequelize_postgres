import { getRepository } from "typeorm";
import { PessoasEndereco } from "../../../entities/PessoasEndereco";

export class GetAllPessoasEnderecoService {
    async execute(){
        const repo = getRepository(PessoasEndereco);
        const pessoas_endereco = await repo.find({ 
            relations: ['pessoa'],
        });
        return pessoas_endereco;
        //console.log("Implementations");
    }
}