import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Equipamentos } from "./Equipamentos";
import { Users } from "./Users";
import { v4 as uuidV4 } from "uuid";

@Entity("registros")
class Registros {
    @PrimaryColumn()
    id: string;

    @Column()
    equipamento_id: string;

    @OneToOne(() => Equipamentos, {
        cascade: true,
    })
    @JoinColumn({name: "equipamento_id"})
    equipamento: Equipamentos;

    @Column()
    user_id: string;

    @OneToOne(() => Users, {
        cascade: true,
    })
    @JoinColumn({name: "user_id"})
    user: Users;

    @Column()
    descricao: string;

    @Column({ type: "date"})
    dataLimite: Date;

    @Column()
    tipo: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Registros };
