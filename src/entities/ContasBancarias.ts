import { Entity, Column, CreateDateColumn,UpdateDateColumn, PrimaryColumn,ManyToOne,JoinColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import { Agencia } from "./Agencia";


@Entity("banco_conta")
export class Banco_Conta{
    @PrimaryColumn()
    id_conta:string;

    @ManyToOne(() => Agencia)
    @JoinColumn({name:"id_agencia"})
    @Column()
    id_agencia:string;

    @Column()
    num_agencia:string;
    
    @Column()
    descricao:string;
    
    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

    constructor(){
        if(!this.id_conta){
            this.id_conta = uuid();
        }
    }
}