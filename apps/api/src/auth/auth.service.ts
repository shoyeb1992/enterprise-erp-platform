import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

import { UsersService } from "../users/users.service";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const { usernameOrEmail, password } = loginDto;

    const user = usernameOrEmail.includes("@")
      ? await this.usersService.findByEmail(usernameOrEmail)
      : await this.usersService.findByUsername(usernameOrEmail);

    if (!user) {
      throw new UnauthorizedException("Invalid username/email or password");
    }

    if (user.user_status !== "1") {
      throw new UnauthorizedException("User account is inactive");
    }

    const normalizedHash = user.password.replace(/^\$2y\$/, "$2b$");
    const isPasswordValid = await bcrypt.compare(password, normalizedHash);

    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid username/email or password");
    }

    const payload = {
      sub: user._id.toString(),
      username: user.username,
      role: user.user_role,
    };

    const accessToken = await this.jwtService.signAsync(payload);

    return {
      success: true,
      message: "Login successful",
      data: {
        accessToken,
        user: {
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          role: user.user_role,
        },
      },
    };
  }
}
