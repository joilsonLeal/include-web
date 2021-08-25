import { type } from "os";
import { Column, CreateDateColumn, Double, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Immobile } from "./immobile.entity";

@Entity('offers')
export class Offer {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => Immobile, entity => entity.offers)
    @JoinColumn({name: 'immobileId'})
    immobile: Immobile;

    @Column({type: 'decimal', precision: 13, scale: 2, default: 0.0,})
    value: number;

    @CreateDateColumn({ type: 'datetime', nullable: true })
    created_at: Date;

    @UpdateDateColumn({ type: 'datetime', nullable: true })
    updated_at: Date;
}
