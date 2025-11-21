import { Body, Controller, Get, Post } from '@nestjs/common'
import { UserDto } from './user.dto'

@Controller('users')
export class UserController {
  @Post()
  create(@Body() user: UserDto) {
    console.log(user)
  }

  @Get()
  getAllUsers(): UserDto[] {
    return [
      {
        id: '2',
        name: 'default user',
        email: 'default@enterprise',
        password: 'default',
        age: 29,
      },
    ]
  }
}
