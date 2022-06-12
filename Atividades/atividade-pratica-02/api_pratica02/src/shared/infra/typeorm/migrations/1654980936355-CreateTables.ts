import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1654980936355 implements MigrationInterface {
    name = 'CreateTables1654980936355'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "equipamentos" ("id" character varying NOT NULL, "nome" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0db94e9eed96824cb4446343a86" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "registros" ("id" character varying NOT NULL, "equipamento_id" character varying NOT NULL, "user_id" character varying NOT NULL, "descricao" character varying NOT NULL, "dataLimite" date NOT NULL, "tipo" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "REL_0b272061e1cf3de186cc415c07" UNIQUE ("equipamento_id"), CONSTRAINT "REL_f9bf914f293fa3a2a8ef6b49b6" UNIQUE ("user_id"), CONSTRAINT "PK_34c305689a504166a73ccaec0b0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "registros" ADD CONSTRAINT "FK_0b272061e1cf3de186cc415c07e" FOREIGN KEY ("equipamento_id") REFERENCES "equipamentos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "registros" ADD CONSTRAINT "FK_f9bf914f293fa3a2a8ef6b49b61" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "registros" DROP CONSTRAINT "FK_f9bf914f293fa3a2a8ef6b49b61"`);
        await queryRunner.query(`ALTER TABLE "registros" DROP CONSTRAINT "FK_0b272061e1cf3de186cc415c07e"`);
        await queryRunner.query(`DROP TABLE "registros"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "equipamentos"`);
    }

}
