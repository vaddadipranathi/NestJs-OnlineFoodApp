/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany } from "typeorm";
import * as bcrypt from 'bcrypt';
import { IsBoolean, IsEmail, IsNumber, IsString } from "class-validator";
import { VaccineDetails } from "./vaccinationData.entity";

/* eslint-disable prettier/prettier */

/**
 * starting of User Entity
 */
@Entity()
export class User {

    /**
     * auto incremental id
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * generates UserName column
     */
    @Column()
    @IsString()
    @ApiProperty()
    userName: string;

    /**
    * generates emailId column
    */
    @Column()
    @IsEmail()
    @ApiProperty()
    emailId: string;

    /**
     * generates password column
     */
    @Column()
    @IsString()
    @ApiProperty()
    password: string;


    /**
     * generates phoneNum column
     */
    @Column()
    @IsNumber()
    @ApiProperty()
    phoneNum: number;


    /**
     * generates aadharNo column
     */
    @Column()
    @IsNumber()
    @ApiProperty()
    aadharNo: number;


    /**
     * generates gender column
     */
    @Column()
    @IsString()
    @ApiProperty()
    gender: string;

    /**
     * generates age column
     */
    @Column()
    @IsNumber()
    @ApiProperty()
    age: number;

    /**
     * generates infected column
     */
    @Column({ default: false })
    @IsBoolean()
    @ApiProperty()
    infected: boolean;

    /**
     * generates address column
     */
    @Column()
    @IsString()
    @ApiProperty()
    address: string;

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

    static password: any;

    /**
     * generates a bcrypted password ie hashed password
     */
    @BeforeInsert()
    async strongPassword() {
        console.log("enterd");
        this.password = await bcrypt.hash(this.password, 10);
    }

    @OneToMany(() => VaccineDetails, (vaccineDetails) => vaccineDetails.user, {
    })
    vaccineDetails: VaccineDetails[];


}