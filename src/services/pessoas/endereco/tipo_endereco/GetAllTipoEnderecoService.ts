import { getRepository } from "typeorm";
import { Tipo_Endereco } from "../../../../entities/TipoEndereco";
type TipoEnderecoRequest = {
    descricao: string;
}

export class GetAllTipoEnderecoService {
    async execute(){
        const repo = getRepository(Tipo_Endereco);
        const tipo_endereco = await repo.find();
        return tipo_endereco;
        //console.log("Implementations");
    }
}