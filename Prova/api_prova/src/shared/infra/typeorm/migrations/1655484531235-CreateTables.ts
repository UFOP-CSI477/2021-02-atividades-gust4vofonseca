import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1655484531235 implements MigrationInterface {
    name = 'CreateTables1655484531235'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "entidades" ("id" character varying NOT NULL, "name" character varying NOT NULL, "bairro" character varying NOT NULL, "cidade" character varying NOT NULL, "estado" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4ceb23ee98193c241ee43c95111" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "items" ("id" character varying NOT NULL, "descricao" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "coletas" ("id" character varying NOT NULL, "item_id" character varying NOT NULL, "entidade_id" character varying NOT NULL, "quantidade" numeric NOT NULL, "data" date NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_03c49dc94fef7c07534db841661" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "coletas" ADD CONSTRAINT "FK_84e23d04fddf5583037a240d369" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "coletas" ADD CONSTRAINT "FK_e20fc8ee998ce9b15613563c1de" FOREIGN KEY ("entidade_id") REFERENCES "entidades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coletas" DROP CONSTRAINT "FK_e20fc8ee998ce9b15613563c1de"`);
        await queryRunner.query(`ALTER TABLE "coletas" DROP CONSTRAINT "FK_84e23d04fddf5583037a240d369"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "coletas"`);
        await queryRunner.query(`DROP TABLE "items"`);
        await queryRunner.query(`DROP TABLE "entidades"`);
    }

}
