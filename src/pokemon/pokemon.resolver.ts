import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Pokemon } from './pokemon.entity';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { inputPokemon } from './input/pokemon.input';

@Resolver((of) => Pokemon)
export class PokemonResolver {
  constructor(private readonly pokemonServive: PokemonService) {}

  @Query(() => [CreatePokemonDto])
  async pokemon() {
    return this.pokemonServive.getPokemon();
  }

  @Mutation(() => CreatePokemonDto)
  async createPokemon(@Args('input') input: inputPokemon) {
    return this.pokemonServive.createPokemon(input);
  }
}
