import { Entity, Column, CreateDateColumn,UpdateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Pessoas } from "./Pessoas";
import { Tipo_Endereco } from "./TipoEndereco";

@Entity("pessoas_endereco")
export class PessoasEndereco {
    @PrimaryColumn()
    id_endereco: string;

    @Column()
    id_pessoa:string;

    @ManyToOne(() => Pessoas)
    @JoinColumn({name:"id_pessoa"})
    pessoas_endereco: Pessoas;

    @Column()
    cep: string;

    @Column()
    endereco: string;

    @Column()
    bairro: string;

    @Column()
    complemento: string;

    @Column()
    cidade: string;

    @Column()
    uf: string;

    @ManyToOne(() => Tipo_Endereco)
    @JoinColumn({name:"id_tipo_endereco"})
    @Column()
    tipo_endereco: string;

    @Column()
    endereco_principal: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at:Date;

    constructor() {
        if (!this.id_endereco) {
            this.id_endereco = uuid();
        }
    }
}