import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateGenderGamesDto {
  @IsUUID()
  @ApiProperty({
    description: 'Id do jogo a ser adicionado no gênero',
    example: '6e6c4e87-37dd-4bfc-8gbc-495e8b151b40',
  })
  gamesId: string;
}
