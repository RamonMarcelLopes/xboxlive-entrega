import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do jogo',
    example: 'Hentai - Area 51',
  })
  title: string;

  @IsUrl()
  @ApiProperty({
    description: 'Capa do Jogo',
    example:
      'https://cdn.cloudflare.steamstatic.com/steam//apps/1127190/capsule_231x87.jpg',
  })
  coverImageUrl: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição do jogo',
    example: 'Jogo de ação tiro',
  })
  description: string;

  @IsNumber()
  @ApiProperty({
    description: 'Ano de lançamento',
    example: 2010,
  })
  year: number;

  @IsNumber()
  @ApiProperty({
    description: 'Pontuação do jogo no IMB',
    example: 4,
  })
  imbScore: number;

  @IsUrl()
  @ApiProperty({
    description: 'Trailer do jogo',
    example: 'https://youtu.be/YkdW_vdpBas',
  })
  trailerYoutubeUrl: string;

  @IsUrl()
  @ApiProperty({
    description: 'Gameplay',
    example: 'https://youtu.be/YkdW_vdpBas',
  })
  gameplayYouTubeUrl: string;

  @IsString()
  @ApiProperty({
    description: 'Gênero do jogo',
    example: 'FPS',
  })
  genreGame?: string;
}
