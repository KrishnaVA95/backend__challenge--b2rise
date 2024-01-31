import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1706706161864 implements MigrationInterface {
    name = 'CreateTables1706706161864'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(30) NOT NULL, "price" numeric(11,2) NOT NULL, "description" character varying(100) NOT NULL, "category" character varying(50) NOT NULL, "image" character varying(200) NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
