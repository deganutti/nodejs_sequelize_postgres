import { getRepository } from "typeorm";
import { Tipo_Pessoa } from "../../../entities/TipoPessoa";
type TipoPessoasRequest = {
    descricao: string;
}

export class GetAllTipoPessoasService {
    async execute(){
        const repo = getRepository(Tipo_Pessoa);
        const tipo_pessoa = await repo.find();
        return tipo_pessoa;
        //console.log("Implementations");
    }
}