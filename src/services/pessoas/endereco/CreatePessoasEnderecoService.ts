import { getRepository } from "typeorm";
import { PessoasEndereco } from "../../../entities/PessoasEndereco";
type PessoasEnderecoRequest = {
    id_pessoa: string;
    cep: string;
    endereco: string;
    bairro: string;
    complemento: string;
    cidade: string;
    uf: string;
    tipo_endereco: string;
    endereco_principal: boolean;
}
export class CreatePessoasEnderecoService {
    async execute({ id_pessoa, cep, endereco, bairro, complemento, cidade, uf, tipo_endereco, endereco_principal }: PessoasEnderecoRequest): Promise<PessoasEndereco | Error> {
        const repo = getRepository(PessoasEndereco);

        if(cep.length != 8){
            return new Error("Cep invalido");
        }

        /**
         * Verifica se nos cadastros de enderço ja existe um endereço principal, e faz o ajuste conforme o cadastro
         * que esta vindo do body, caso o novo cadastro venha como principal= true, será feito um upadate dos demais para false.
         */
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
        const pessoas_endereco = repo.create({
            id_pessoa,
            cep,
            endereco,
            bairro,
            complemento,
            cidade,
            uf,
            tipo_endereco,
            endereco_principal
        });
        await repo.save(pessoas_endereco);
        return pessoas_endereco;
    }
}