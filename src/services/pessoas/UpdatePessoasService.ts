import { Pessoas } from '../../entities/Pessoas';
import { getRepository } from "typeorm";
import { cnpj as _cnpj, cpf } from "cpf-cnpj-validator";
type PessoasUpdateRequest = {
    id_pessoa: string;
    razao: string;
    fantasia: string;
    ie: string;
    cnpj: string;
    id_tipo: string;
}


export class UpdatePessoasService {
    async execute({ id_pessoa, razao, fantasia, ie, cnpj, id_tipo }: PessoasUpdateRequest): Promise<Pessoas | Error> {
        const repo = getRepository(Pessoas);

        const pessoa = await repo.findOne(id_pessoa);

        if (!pessoa) {
            return new Error("Cadastro não esta em nossa base de dados!");
        }
        switch(cnpj.length) {
            case 11 :{
                if(!cpf.isValid(cnpj)){
                    return new Error("CNPJ com valor incorreto verifique");
                }
                break;
            }
            case 14 :{
                if(!_cnpj.isValid(cnpj)){
                    return new Error("CNPJ com valor incorreto verifique");
                }
                break;
            }
            default : { 
                return new Error("CNPJ no formato incorreto verifique");
                break;
            }
        }
        // pessoa.id_pessoa = pessoa.id_pessoa;
        pessoa.razao = razao ? razao : pessoa.razao;
        pessoa.fantasia = fantasia ? fantasia : pessoa.fantasia;
        pessoa.ie = ie ? ie : pessoa.ie;
        pessoa.cnpj = cnpj ? cnpj : pessoa.cnpj;
        pessoa.id_tipo = id_tipo ? id_tipo : pessoa.id_tipo;

        await repo.save(pessoa);

        return pessoa;

    }
}