/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from "class-validator";
/* eslint-disable prettier/prettier */
export class AddVaccineDetailsDto {
    @ApiProperty() @IsString() vaccineName: string;
    @ApiProperty() @IsString() doseDate: Date;
    @ApiProperty() @IsNumber() noOfDoses: number;
}