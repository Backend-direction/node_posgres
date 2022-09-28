import { MigrationInterface, QueryRunner } from "typeorm";

export class addProjectsTable1664369310029 implements MigrationInterface {
    name = 'addProjectsTable1664369310029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "project" ("id" SERIAL NOT NULL, "title" character varying(50) NOT NULL, "created_at" TIMESTAMP NOT NULL, CONSTRAINT "UQ_cb001317127de4d5e323b5c0c4e" UNIQUE ("title"), CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "project"`);
    }

}
