import { IsNotEmpty, IsString, IsNumber, IsDate, IsBoolean } from 'class-validator';

export class CreatePostDto {

    @IsNotEmpty()
    @IsString()
    readonly post: string;

    @IsNotEmpty()
    @IsNumber()
    readonly userId: number;
    
    @IsDate()
    readonly postedAt: Date;

    @IsBoolean()
    readonly active: boolean
}