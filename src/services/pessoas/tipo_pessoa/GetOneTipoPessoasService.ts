import { getRepository } from "typeorm";
import { Tipo_Pessoa } from "../../../entities/TipoPessoa";
 

export class GetOneTipoPessoasService {
    async execute( id_tipo:string ) {

        const repo = getRepository(Tipo_Pessoa);
        const tipo_pessoa = await repo.findOne(
            {
                where: { id_tipo }
            }
        );
        return tipo_pessoa;
    }
}