import { IsNotEmpty, IsNumber, IsDate, IsBoolean } from 'class-validator';

export class CreateFollowersDto {

    @IsNotEmpty()
    @IsNumber()
    readonly userId: number;

    @IsNotEmpty()
    @IsNumber()
    readonly followerId: number;

    @IsDate()
    readonly followedAt: Date;
    
    @IsDate()
    readonly unfollowedAt: Date;

    @IsBoolean()
    readonly active: boolean
}