import { getRepository } from "typeorm";
import { PessoasEndereco } from "../../../entities/PessoasEndereco";

export class DeletePessoasEnderecoService{
    async execute(id_endereco:string){
        const repo = getRepository(PessoasEndereco);

        if(!await repo.findOne(id_endereco)){
            return new Error("Endereço não existe!");
        }        
        await repo.delete(id_endereco);
    }
}