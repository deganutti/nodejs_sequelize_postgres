import { getRepository } from "typeorm";
import { Tipo_Pessoa } from "../../../entities/TipoPessoa";
type TipoPessoasRequest = {
    descricao: string;
}

export class CreateTipoPessoasService {
    async execute({ descricao }: TipoPessoasRequest): Promise<Tipo_Pessoa|Error> {
        const repo = getRepository(Tipo_Pessoa);
        if(await repo.findOne({descricao})){
            return new Error("Descrição já cadastrada!");
        }
        const tipo_pessoa = await repo.create(
            {
                descricao
            }
        );
        await repo.save(tipo_pessoa);
        return tipo_pessoa;
    }
}