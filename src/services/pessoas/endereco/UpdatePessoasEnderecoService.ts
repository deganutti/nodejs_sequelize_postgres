import { getRepository } from "typeorm";
import { PessoasEndereco } from "../../../entities/PessoasEndereco";
type PessoasEnderecoUpdateRequest = {
    id_endereco: string;
    id_pessoa:string;
    cep:string;
    endereco:string;
    bairro:string;
    complemento:string;
    cidade:string;
    uf:string;
    tipo_endereco:string;
    endereco_principal: boolean;
}


export class UpdatePessoasEnderecoService {
    async execute({id_endereco, id_pessoa, cep, endereco, bairro, complemento, cidade, uf, tipo_endereco, endereco_principal }: PessoasEnderecoUpdateRequest): Promise<PessoasEndereco | Error> {
       
        const repo = getRepository(PessoasEndereco);

        const pessoas_endereco = await repo.findOne(id_endereco);

        if(cep.length != 8){
            return new Error("Cep invalido");
        }

        if (!pessoas_endereco) {
            return new Error("Cadastro não esta em nossa base de dados!");
        }
        
        if (await repo.findOne({ endereco_principal })) {
            const repoUpdate = getRepository(PessoasEndereco);
            const pessoas_enderecoUpdate = await repoUpdate.findOne(
                {
                    where: { id_pessoa, endereco_principal }
                }
            );
            if (pessoas_enderecoUpdate) {
                pessoas_enderecoUpdate.endereco_principal = false;
                await repoUpdate.save(pessoas_enderecoUpdate);
            }
        }
        
        pessoas_endereco.id_pessoa = id_pessoa ? id_pessoa : pessoas_endereco.id_pessoa;
        pessoas_endereco.cep = cep ? cep : pessoas_endereco.cep;
        pessoas_endereco.endereco = endereco ? endereco : pessoas_endereco.endereco;
        pessoas_endereco.bairro = bairro ? bairro : pessoas_endereco.bairro;
        pessoas_endereco.complemento = complemento ? complemento : pessoas_endereco.complemento;
        pessoas_endereco.cidade = cidade ? cidade : pessoas_endereco.cidade;
        pessoas_endereco.uf = uf ? uf : pessoas_endereco.uf;
        pessoas_endereco.tipo_endereco = tipo_endereco ? tipo_endereco : pessoas_endereco.tipo_endereco;
        pessoas_endereco.endereco_principal = endereco_principal ? endereco_principal : pessoas_endereco.endereco_principal;


        await repo.save(pessoas_endereco);

        return pessoas_endereco;

    }
}