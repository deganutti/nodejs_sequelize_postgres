import { Entity, Column, CreateDateColumn,UpdateDateColumn, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("banco")
export class Banco{
    @PrimaryColumn()
    id_banco:string;

    @Column()
    codigo_banco:string;
    
    @Column()
    descricao:string;
    
    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

    constructor(){
        if(!this.id_banco){
            this.id_banco = uuid();
        }
    }
}