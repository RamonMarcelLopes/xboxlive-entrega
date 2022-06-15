import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsUUID, ValidateNested } from 'class-validator';
import { CreateGenderGamesDto } from './create-gender-games.dto';

export class CreateGenderDto {
  @IsString()
  @ApiProperty({
    description: 'Gênero do(s) jogo(s)',
    example: 'ação',
  })
  name: string;

  @ApiProperty({
    description: 'Id do jogo a ser adicionado no gênero',
  })
  gamesId?: string;
}
