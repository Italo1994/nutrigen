import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common'
import { LoginDto } from './auth.dto'

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() data: LoginDto) {
    const { email, password } = data

    if (email === 'default@enterprise' && password === 'default') {
      return {
        user: { id: '2', email, name: 'default user', age: 15 },
      }
    }

    throw new UnauthorizedException('credenciais inválidas')
  }
}
