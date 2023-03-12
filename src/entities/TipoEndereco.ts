import { Entity, Column, CreateDateColumn,UpdateDateColumn, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("tipo_endereco")
export class Tipo_Endereco{
    @PrimaryColumn()
    id_tipo_endereco:string;

    @Column()
    descricao:string;
    
    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

  
    constructor(){
        if(!this.id_tipo_endereco){
            this.id_tipo_endereco = uuid();
        }
    }
}