import { getRepository } from "typeorm";
import { Banco } from "../../../entities/Banco";
import { Agencia } from "../../../entities/Agencia";
type AgenciaRequest = {
    id_agencia: string;
    id_banco:string;
    numero_agencia: string;
    descricao: string;
    ativo:boolean;
}
export class UpdateAgenciaService {
    async execute({ id_agencia, id_banco, numero_agencia, descricao, ativo }: AgenciaRequest): Promise<Agencia | Error> {
        
        const repo_agencia = getRepository(Agencia);

        const repo_banco = getRepository(Banco);

        const agencia = await repo_agencia.findOne(id_agencia); 

        const banco = await repo_banco.findOne(id_banco); 

        if(!await repo_banco.findOne(id_banco)){
            return new Error("Banco não encontrado.");
        }

        if(!await repo_agencia.findOne(id_agencia)){
            return new Error("Agencia não encontrada.");
        }

        
        agencia.numero_agencia = numero_agencia ? numero_agencia : agencia.numero_agencia;
        agencia.descricao = descricao ? descricao : agencia.descricao;
        agencia.ativo = ativo ? ativo : agencia.ativo;
  
        await repo_agencia.save(agencia);

        return agencia;
    }

}

