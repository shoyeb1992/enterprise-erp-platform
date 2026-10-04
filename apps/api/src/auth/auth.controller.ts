import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";

class LoginDto {
  usernameOrEmail!: string;
  password!: string;
}

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get("me")
  getMe(@Req() req: any) {
    return {
      success: true,
      data: req.user,
    };
  }
}
