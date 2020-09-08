import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity, ManyToMany, JoinTable, ManyToOne } from 'typeorm'
import { Field, ObjectType } from 'type-graphql'
import { Category } from './Category'
import { User } from './User'

@ObjectType()
@Entity()
export class Recipe extends BaseEntity {

  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Column()
  description!: string;

  @Field(() => String)
  @Column()
  ingredients!: string;

  @Field()
  @Column()
  category!: string;

  @Field(() => String)
  @CreateDateColumn({ type: "timestamp" })
  createdAt!: string;

  @ManyToMany(() => Category)
  @JoinTable()
  categories!: Category[];

  @ManyToOne(() => User, (user) => user.recipes)
  @JoinTable()
  user!: User;

}