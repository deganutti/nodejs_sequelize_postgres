import { getRepository } from "typeorm";
import { Tipo_Endereco } from "../../../../entities/TipoEndereco";
type TipoEnderecoRequest = {
    descricao: string;
}

export class CreateTipoEnderecoService {
    async execute({ descricao }: TipoEnderecoRequest): Promise<Tipo_Endereco|Error> {
        const repo = getRepository(Tipo_Endereco);
        if(await repo.findOne({descricao})){
            return new Error("Descrição já cadastrada!");
        }
        const tipo_endereco = await repo.create(
            {
                descricao
            }
        );
        await repo.save(tipo_endereco);
        return tipo_endereco;
    }
}