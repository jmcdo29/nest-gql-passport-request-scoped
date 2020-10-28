import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Me {
  @Field()
  username: string;

  @Field(() => Number)
  id: number;
}
