import { Injectable, Scope } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable({ scope: Scope.REQUEST })
export class AuthRequestService extends AuthService {}
