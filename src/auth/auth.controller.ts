import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCreadentialsDto } from './dto/auth-creadentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  createTask(@Body() authCreadentialsDto: AuthCreadentialsDto) {
    return this.authService.createUser(authCreadentialsDto);
  }
}
