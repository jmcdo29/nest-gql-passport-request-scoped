import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthRequestService } from './auth-request.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly modRef: ModuleRef) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'supersecret',
      passReqToCallback: true,
    });
  }

  async validate(req, payload: Record<string, unknown>) {
    console.log(payload);
    const contextId = ContextIdFactory.getByRequest(req);
    const authService = await this.modRef.resolve(
      AuthRequestService,
      contextId,
    );
    const user = authService.findByUsername(payload['username'].toString());
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
