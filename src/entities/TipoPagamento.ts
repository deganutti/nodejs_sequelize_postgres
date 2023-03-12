import { Entity, Column, CreateDateColumn,UpdateDateColumn, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("tipo_pagamento")
export class Tipo_Pagamento{
    @PrimaryColumn()
    id_tipo:string;

    @Column()
    descricao:string;
    
    @Column()
    sigla:string;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

    constructor(){
        if(!this.id_tipo){
            this.id_tipo = uuid();
        }
    }
}