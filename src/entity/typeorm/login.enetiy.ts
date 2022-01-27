/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */

// import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';
// import { IsString } from "class-validator";
// import { ApiProperty } from '@nestjs/swagger';
// import { User } from './user.emtity';

// /**
//  * Starting of Login Entity
//  */
// @Entity()
// export class Login {
//     /**
//      * auto increment id
//      */
//     @PrimaryGeneratedColumn()
//     id: number;

//     /**
//      * generates the emailId Column
//      */
//     @Column()
//     @IsString()
//     @ApiProperty()
//     emailId: string;

//     /**
//      * generates the password Column
//      */
//     @Column()
//     @IsString()
//     @ApiProperty()
//     password: string;

//     /**
//     * generates isActive column
//     */
//     @Column()
//     @ApiProperty()
//     isActive: boolean;

//     /**
//      * generates updatedAt column
//      */
//     @Column({ default: ' ' })
//     @IsString()
//     updatedAt: string;

//     /**
//      * generates createdAt column
//      */
//     @Column()
//     @IsString()
//     createdAt: string;

//     /**
//      * generates updatedTime column
//      */
//     @Column({ default: ' ' })
//     @IsString()
//     updatedTime: string;

//     /**
//      * generates createTime column
//      */
//     @Column()
//     @IsString()
//     createTime: string;

//     /**
//     * established the one-to-many relation between the user and the person
//     */
//     @OneToOne(() => User, (user) => user.login, {
//         cascade: true
//     })
//     @JoinColumn()
//     user: User;
// }
