import { getRepository } from "typeorm";
import { Banco } from "../../entities/Banco";
type BancoRequest = {
    id_banco: string;
    codigo_banco: string;
    descricao: string;
}
export class UpdateBancosService {
    async execute({ id_banco, codigo_banco, descricao }: BancoRequest): Promise<Banco | Error> {
        const repo = getRepository(Banco);

        const bancos = await repo.findOne(id_banco);

        if(!await repo.findOne(id_banco)){
            return new Error("Banco não encontrado.");
        }

        if (codigo_banco.length != 3) {
            return new Error("Código do Banco inválido");
        }
        
        bancos.codigo_banco = codigo_banco ? codigo_banco : bancos.codigo_banco;
        bancos.descricao = descricao ? descricao : bancos.descricao;
  
        await repo.save(bancos);

        return bancos;
    }

}

