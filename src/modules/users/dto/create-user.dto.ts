import { IsAlphanumeric, IsEmail, IsNotEmpty, IsDate, IsString, IsBoolean } from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @IsNotEmpty()
    @IsAlphanumeric()
    readonly password: string;
    
    @IsDate()
    readonly createdAt: Date;

    @IsBoolean()
    readonly active: boolean
}