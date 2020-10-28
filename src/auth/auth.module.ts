import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { AuthRequestService } from './auth-request.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'supersecret',
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    AuthRequestService,
    JwtStrategy,
    AuthResolver,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
