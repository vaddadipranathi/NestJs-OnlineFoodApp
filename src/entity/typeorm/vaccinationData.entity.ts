/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";
import { User } from "./user.emtity";
import { VaccineType } from "./vaccineType.emtity";

/**
 * Starting of VaccineDetails Entity
 */
@Entity()
export class VaccineDetails {
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
     * generates the dosDate Column
     */
    @Column()
    @IsString()
    @ApiProperty()
    doseDate: Date;

    /**
     * generates the noOfDoses Column
     */
    @Column()
    @IsString()
    @ApiProperty()
    noOfDoses: number;

    /**
     * generates the status Column
     */
    @Column()
    @IsString()
    @ApiProperty()
    status: string;

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
    @IsString()
    updatedAt: string;

    /**
     * generates createdAt column
     */
    @Column()
    @IsString()
    createdAt: string;

    /**
     * generates updatedTime column
     */
    @Column({ default: ' ' })
    @IsString()
    updatedTime: string;

    /**
     * generates createTime column
     */
    @Column()
    @IsString()
    createTime: string;

    /**
     * establishes the many-to-one relation between the user and vaccineDetails
     */
    @ManyToOne(() => User, (user) => user.vaccineDetails, {
        cascade: true
    })
    @JoinColumn()
    user: User;

    /**
    * establishes the many-to-one relation between the vaccineDetails and VaccineType
    */
    @ManyToOne(() => VaccineType, (vaccineType) => vaccineType.vaccineDetails, {
        cascade: true
    })
    @JoinColumn()
    vaccineType: VaccineType;

}