import { ApiProperty } from '@nestjs/swagger';

export class UpdateFavoritesDto {
  @ApiProperty({
    description: 'id do jogo',
    example: '3b6586ae-0e9d-49df-8d16-6f9140e7ce0d',
  })
  gameId?: string;

  @ApiProperty({
    description: 'id do jogo para adicionar ou remover da lista de favoritos',
    example: '3b6586ae-9h8i-49df-8d16-6f9140e7ce0d',
  })
  favoriteGameId?: string;
}
