import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'name of the game' })
  @IsString()
  readonly name?: string;

  @ApiProperty({ description: 'name of the game 1' })
  @IsString()
  readonly brand?: string;

  @ApiProperty({ description: 'name of the game 2' })
  @IsString({ each: true })
  readonly flavors?: string[];
}
