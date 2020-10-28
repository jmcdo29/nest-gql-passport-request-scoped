import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  validate(
    username: string,
    password: string,
  ): { username: string; password: string; id: number } {
    const user = this.authService.findByUsername(username);
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Username or password is incorrect');
    }
    return user;
  }
}
