import { Entity, Column, CreateDateColumn,UpdateDateColumn, PrimaryColumn,ManyToOne,JoinColumn } from "typeorm";
import {v4 as uuid} from "uuid"; 
import { Tipo_Pessoa } from "./TipoPessoa";

@Entity("pessoas")
export class Pessoas{
    @PrimaryColumn()
    id_pessoa:string;

    @Column()
    razao:string;

    @Column()
    fantasia:string;

    @Column()
    ie:string;

    @Column()
    cnpj:string;

    @ManyToOne(() => Tipo_Pessoa)
    @JoinColumn({name:"id_tipo"})
    pessoas: Tipo_Pessoa;
    @Column()
    id_tipo:string;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

  
    constructor(){
        if(!this.id_pessoa){
            this.id_pessoa = uuid();
        }
    }
}