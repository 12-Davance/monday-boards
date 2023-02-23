import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { AuthGuard } from '@nestjs/passport';
import { LoginDTO, RegisterDTO } from './auth.dto';

@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('login')
  async login(@Body() userDTO: LoginDTO) {
    const {
      _doc: { password, ...user },
    } = await this.usersService.findByLogin(userDTO);
    // define a payload
    const payload = {
      email: user.email,
    };
    //get a JWT authentication token from the payload
    const token = await this.authService.signPayload(payload);
    // return the user and the token
    return {
      user,
      token,
    };
  }

  @Post('register')
  async register(@Body() userDTO: RegisterDTO) {
    // Create user based on the input data
    const {
      _doc: { password, ...user },
    } = await this.usersService.createUser(userDTO);
    // define a payload
    const payload = {
      email: user.email,
    };
    // get a JWT authentication token from the payload
    const token = await this.authService.signPayload(payload);
    // return the user and the token
    return { user, token };
  }
}
