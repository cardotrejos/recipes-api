import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity, OneToMany, JoinTable } from 'typeorm'
import {Field, ObjectType, ID} from 'type-graphql'
import { Recipe } from './Recipe';

@ObjectType()
@Entity()
export class User extends BaseEntity {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  email!: string;

  @Field()
  @Column()
  password!: string;

  @Field(() => String)
  @CreateDateColumn({type: "timestamp"})
  createdAt!: string;

  @OneToMany(() => Recipe, (recipe) => recipe.user)
  @JoinTable()
  recipes!: Recipe[]

}