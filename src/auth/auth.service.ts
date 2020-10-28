import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwt: JwtService) {}
  private users = [
    {
      username: 'Padfoot',
      password: 'maurader',
      id: 1,
    },
    {
      username: 'tester',
      password: 'keyboard-vomit',
      id: 2,
    },
  ];

  findByUsername(username: string) {
    return this.users.find(u => u.username === username);
  }

  makeJwt(user: { username: string; id: number }): string {
    return this.jwt.sign(user);
  }
}
