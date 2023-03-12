import { getRepository } from "typeorm";
import { Tipo_Endereco } from "../../../../entities/TipoEndereco";
 

export class GetOneTipoEnderecoService {
    async execute( id_tipo_endereco:string ) {

        const repo = getRepository(Tipo_Endereco);
        const tipo_endereco = await repo.findOne(
            {
                where: { id_tipo_endereco }
            }
        );
        return tipo_endereco;
    }
}