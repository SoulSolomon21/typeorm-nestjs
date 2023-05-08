import { Injectable } from '@nestjs/common';
import { Pokemon } from './pokemon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePokemonDto } from './dto/create-pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly PokemonRepository: Repository<Pokemon>,
  ) {}

  async createPokemon(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    const newPokemon = new Pokemon();
    newPokemon.name = createPokemonDto.name;
    newPokemon.type = createPokemonDto.type;
    newPokemon.pokedex = createPokemonDto.pokedex;

    await this.PokemonRepository.save(newPokemon);

    return newPokemon;
  }

  async getPokemon() {
    return await this.PokemonRepository.find();
  }
}
