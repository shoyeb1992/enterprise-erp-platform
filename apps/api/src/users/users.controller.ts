import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("test")
  async testUser() {
    const user = await this.usersService.findByUsername("ketset");

    if (!user) {
      return {
        success: false,
        message: "User not found",
      };
    }

    return {
      success: true,
      data: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        user_role: user.user_role,
        user_status: user.user_status,
        fms_user_right: user.fms_user_right,
      },
    };
  }
}
