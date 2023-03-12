import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePessoasEnderecos1640830507123 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pessoas_endereco",
                columns: [
                    {
                        name: "id_endereco",
                        type: "int",
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: "id_pessoa",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "cep",
                        type: "varchar(10)",
                        isNullable: false,
                    },
                    {
                        name: "endereco",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "bairro",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "complemento",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "cidade",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "uf",
                        type: "varchar(3)",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                      name: "fk_pessoa_id",
                      referencedTableName: "pessoas",
                      referencedColumnNames: ["id_pessoa"],
                      columnNames: ["id_pessoa"],
                      onDelete: "CASCADE",
                      onUpdate: "CASCADE"
                    }
                  ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pessoas_endereco");
    }

}
