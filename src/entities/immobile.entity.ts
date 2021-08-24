import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('immobiles')
export class Immobile {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ length: 255, unique: true })
    name: string;

    @CreateDateColumn({ type: 'datetime', nullable: true })
    created_at: Date;

    @UpdateDateColumn({ type: 'datetime', nullable: true })
    updated_at: Date;
}
