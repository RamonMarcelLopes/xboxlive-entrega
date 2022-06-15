import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Usuário',
    example: 'xixorodeixo',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Nickname do usuário',
    example: 'xixas22',
  })
  nickname: string;

  @IsString()
  @ApiProperty({
    description: 'Email do usuário',
    example: 'xixasdograu@gmail.com',
  })
  email: string;

  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha de acesso do usuário',
    example: 'Xixo@157',
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: 'A confirmação da senha deve ser igual a senha de login',
    example: 'Xixo@157',
  })
  confirmPassword: string;

  @IsString()
  @MaxLength(15)
  @ApiProperty({
    description: 'CPF do usuário',
    example: '48071261564',
  })
  cpf: string;

  isAdmin: boolean;
}
