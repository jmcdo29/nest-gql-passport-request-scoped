import { UseGuards } from '@nestjs/common';
import { Context, Query, Resolver } from '@nestjs/graphql';
import { JwtGqlGuard } from './jwt-gql.guard';
import { Me } from './user.model';

@Resolver()
export class AuthResolver {
  @UseGuards(JwtGqlGuard)
  @Query(() => Me)
  me(@Context() ctx) {
    console.log(ctx.req.user);
    return ctx.req.user;
  }
}
