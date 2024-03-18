import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    address: string;

}
