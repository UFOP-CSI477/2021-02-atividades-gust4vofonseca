import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Entidades } from "./Entidades";
import { Items } from "./Items";

@Entity("coletas")
class Coletas {
    @PrimaryColumn()
    id: string;

    @Column()
    item_id: string;

    @OneToMany(() => Items, Items.name)
    @JoinColumn({name: "item_id"})
    item: Items;

    @Column()
    entidade_id: string;

    @OneToMany(() => Entidades, Entidades.name)
    @JoinColumn({name: "entidade_id"})
    entidade: Entidades;

    @Column()
    quantidade: Number;

    @Column({ type: "date" })
    data: Date;

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

export { Coletas };