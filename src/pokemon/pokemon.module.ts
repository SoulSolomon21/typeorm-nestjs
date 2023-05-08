import { Module } from '@nestjs/common';
import { Pokemon } from './pokemon.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonResolver } from './pokemon.resolver';
import { PokemonService } from './pokemon.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon])],
  providers: [PokemonResolver, PokemonService],
})
export class PokemonModule {}
