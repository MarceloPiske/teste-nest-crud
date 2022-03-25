import { IsEmail, IsInt, IsNumber, IsString } from 'class-validator';

export class CreateUser {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsNumber()
  altura: number;

  @IsString()
  cidade: string;
}
