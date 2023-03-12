import { Entity, Column, CreateDateColumn,UpdateDateColumn, PrimaryColumn,ManyToOne,JoinColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import { Banco } from "./Banco";

@Entity("agencia")
export class Agencia{
    @PrimaryColumn()
    id_agencia:string;

    @Column()
    id_banco:string;

    @ManyToOne(() => Banco)
    @JoinColumn({name:"id_banco"})
    banco:Banco;    
    
    @Column()
    numero_agencia:string;

    @Column()
    descricao:string;

    @Column()
    ativo:boolean;
    
    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

    constructor(){
        if(!this.id_agencia){
            this.id_agencia = uuid();
        }
    }
}