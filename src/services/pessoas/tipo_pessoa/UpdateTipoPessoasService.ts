import { Tipo_Pessoa } from '../../../entities/TipoPessoa';
import { getRepository } from "typeorm";
type TipoPessoaUpdateRequest = {
    id_tipo: string;
    descricao: string;
}


export class UpdateTipoPessoasService {
    async execute({ id_tipo, descricao }: TipoPessoaUpdateRequest): Promise<Tipo_Pessoa | Error> {
        const repo = getRepository(Tipo_Pessoa);

        const tipo_pessoa = await repo.findOne(id_tipo);

        if (!tipo_pessoa) {
            return new Error("Cadastro não esta em nossa base de dados!");
        }

        // pessoa.id_pessoa = pessoa.id_pessoa;
        tipo_pessoa.descricao = descricao ? descricao : tipo_pessoa.descricao;

        await repo.save(tipo_pessoa);

        return tipo_pessoa;

    }
}