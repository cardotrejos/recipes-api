import { Resolver, Query, Mutation, Arg, Field, InputType, Int } from "type-graphql"

import { Recipe } from '../entity/Recipe'

@InputType()
class RecipesInput {
  @Field()
  name!: string

  @Field()
  description!: string

  @Field()
  ingredients!: string

  @Field()
  category!: string
}

@InputType()
class GetRecipesInput {
  @Field()
  name?: string

  @Field(() => String, { nullable: true })
  ingredients?: string

  @Field(() => String, { nullable: true })
  category?: string
}

@InputType()
class RecipesUpdateInput {
  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  description?: string

  @Field(() => String, { nullable: true })
  ingredients?: string

  @Field(() => String, { nullable: true })
  category?: string
}

@Resolver()
export class RecipeResolver {

  @Mutation(() => Recipe)
  async createRecipe(
    @Arg("fields", () => RecipesInput) fields: RecipesInput,
  ) {
    const newRecipe = Recipe.create(fields);
    return await newRecipe.save()
  }

  @Mutation(() => Boolean)
  async deleteRecipe(@Arg("id", () => Int) id: number) {
    await Recipe.delete(id)
    return true
  }

  @Mutation(() => Boolean)
  async updateRecipe(
    @Arg("id", () => Int) id: number,
    @Arg("fields", () => RecipesUpdateInput) fields: RecipesUpdateInput
  ) {
    await Recipe.update({ id }, fields)
    return true;
  }

  @Query(() => [Recipe])
  recipes() {
    return Recipe.find()
  }

  @Query(() => [Recipe])
  async getOneRecipe(
    @Arg("fields", () => GetRecipesInput) fields: GetRecipesInput
  ) {
    return await Recipe.find(fields)
  }

}




