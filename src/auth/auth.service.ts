import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(email: string, password: string) {
    // Authenticate user
    // ...

    // Generate JWT token
    const payload = { email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
