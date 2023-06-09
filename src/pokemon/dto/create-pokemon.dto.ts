import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreatePokemonDto {
  @Field()
  readonly id?: string;

  @Field()
  readonly name: string;

  @Field()
  readonly type: string;

  @Field()
  readonly pokedex: number;
}
// this dto defines the shape of the data that we are expecting to be sent
