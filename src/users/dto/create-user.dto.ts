import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsEmail, IsNumber, IsString, IsStrongPassword, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto{
    @ApiProperty()
    @IsAlphanumeric()
    @MaxLength(10)
    name : string;

    @ApiProperty()
    @IsAlphanumeric()
    @MaxLength(10)
    familyname : string;
    
    @ApiProperty()
    @IsNumber()
    @MaxLength(2)
    age : number;

    @ApiProperty()
    @IsEmail()
    email : string;

    @ApiProperty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    password: string;

    @ApiProperty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches('password')
    passwordConfirm: string;
}