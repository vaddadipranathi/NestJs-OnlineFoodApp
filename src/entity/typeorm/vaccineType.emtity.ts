/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { VaccineDetails } from './vaccinationData.entity';

/**
 * Starting of VaccineType Entity
 */
@Entity()
export class VaccineType {
    /**
     * auto increment id
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * generates the vaccineName Column
     */
    @Column()
    @IsString()
    @ApiProperty()
    vaccineName: string;

    /**
     * generates isActive column
     */
    @Column()
    @ApiProperty()
    isActive: boolean;

    /**
     * generates updatedAt column
     */
    @Column({ default: ' ' })

    updatedAt: string;

    /**
     * generates createdAt column
     */
    @Column()
    createdAt: string;

    /**
     * generates updatedTime column
     */
    @Column({ default: ' ' })

    updatedTime: string;

    /**
     * generates createTime column
     */
    @Column()

    createTime: string;

    /**
     * establishes the one-to-many relation between the vaccineType and vaccineDetails
     */
    @OneToMany(
        () => VaccineDetails,
        (vaccineDetails) => vaccineDetails.vaccineType,
        {},
    )
    vaccineDetails: VaccineDetails;
}