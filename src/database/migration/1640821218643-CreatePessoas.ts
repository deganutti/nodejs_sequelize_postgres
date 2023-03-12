import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePessoas1640821218643 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.createTable(
             new Table({
                name:"pessoas",
                columns:[
                    {
                        name:"id_pessoa",
                        type:"int",
                        isPrimary:true,
                        generationStrategy: 'uuid',
                    }, 
                    {
                        name:"razao",
                        type:"varchar(150)",
                        isNullable: false,

                    }, 
                    {
                        name:"fantasia",
                        type:"varchar(150)",
                        isNullable: false,
                    }, 
                    {
                        name:"ie",
                        type:"varchar(20)",
                    }, 
                    {
                        name:"cnpj",
                        type:"varchar(25)",
                        isNullable: false,
                        isUnique:true
                    }, 
                    {
                        name:"tipo",
                        type:"int",
                        isNullable: false
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    }, 
                    {
                        name:"updated_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ]
             })
         );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pessoas");
    }

}
