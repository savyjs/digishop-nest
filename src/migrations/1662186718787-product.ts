import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey, TableIndex } from "typeorm";

export class product1662186718787 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "int",
            isGenerated: true,
            isPrimary: true
          },
          {
            name: "name",
            type: "varchar"
          },
          {
            name: "digikala_id",
            isNullable: true,
            type: "varchar",
            isUnique: true
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          }
        ]
      }),
      true
    );

    await queryRunner.createIndex(
      "products",
      new TableIndex({
        name: "IDX_products_NAME",
        columnNames: ["name"]
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "product_data",
        columns: [
          {
            name: "id",
            type: "int",
            isGenerated: true,
            isPrimary: true
          },
          {
            name: "data",
            type: "json"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          }
        ]
      }),
      true
    );

    await queryRunner.addColumn(
      "product_data",
      new TableColumn({
        name: "productId",
        type: "int"
      })
    );

    await queryRunner.createForeignKey(
      "product_data",
      new TableForeignKey({
        columnNames: ["productId"],
        referencedColumnNames: ["id"],
        referencedTableName: "products",
        onDelete: "CASCADE"
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {

  }

}
