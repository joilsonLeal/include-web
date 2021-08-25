import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Offer } from "./offer.entity";

@Entity('immobiles')
export class Immobile {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ length: 255, unique: true })
    name: string;

    @OneToMany(type => Offer, entity => entity.immobile)
    offers: Offer[];

    @CreateDateColumn({ type: 'datetime', nullable: true })
    created_at: Date;

    @UpdateDateColumn({ type: 'datetime', nullable: true })
    updated_at: Date;
}
