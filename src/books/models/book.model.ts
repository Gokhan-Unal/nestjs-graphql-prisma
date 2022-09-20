import 'reflect-metadata';
import { ObjectType, registerEnumType, Field } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';
import { Role } from '@prisma/client';

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

@ObjectType()
export class Books extends BaseModel {
  @Field()
  title: string;

  @Field()
  author: string;

  @Field({ nullable: true })
  image?: string;
}
