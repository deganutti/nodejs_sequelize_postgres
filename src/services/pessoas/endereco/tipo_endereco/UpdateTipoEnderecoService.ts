import { getRepository } from "typeorm";
import { Tipo_Endereco } from "../../../../entities/TipoEndereco";
type TipoEnderecoUpdateRequest = {
    id_tipo_endereco: string;
    descricao: string;
}


export class UpdateTipoEnderecoService {
    async execute({ id_tipo_endereco, descricao }: TipoEnderecoUpdateRequest): Promise<Tipo_Endereco | Error> {
        const repo = getRepository(Tipo_Endereco);

        const tipo_endereco = await repo.findOne(id_tipo_endereco);

        if (!tipo_endereco) {
            return new Error("Cadastro não esta em nossa base de dados!");
        }

        // pessoa.id_pessoa = pessoa.id_pessoa;
        tipo_endereco.descricao = descricao ? descricao : tipo_endereco.descricao;

        await repo.save(tipo_endereco);

        return tipo_endereco;

    }
}