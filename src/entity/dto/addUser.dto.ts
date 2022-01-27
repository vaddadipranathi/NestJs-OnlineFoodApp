/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, Length, IsEmail, Matches } from "class-validator";
import { IsBoolean } from 'class-validator';

/* eslint-disable prettier/prettier */
export class AddUserDto {
    @ApiProperty() @IsString() @Length(8,16) userName: string;
    @ApiProperty() @IsEmail()  emailId: string;
    @ApiProperty() @IsString() @Length(8,16)  
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    password: string;
    @ApiProperty() @IsNumber() phoneNum: number;
    @ApiProperty() @IsNumber()aadharNo: number;
    @ApiProperty() @IsString() @Length(1)gender: string;
    @ApiProperty() @IsNumber() age: number;
    @ApiProperty() @IsBoolean() infected: boolean;
    @ApiProperty() @IsString()  @Length(8,16)address: string;

}