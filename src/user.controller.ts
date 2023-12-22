import {
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Body,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User, User as UserModel } from '@prisma/client';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Get('/user/:login')
  async get(@Param('login') login: string) {
    return await this.userService.findOne({ login });;
  }

  @Post('/auth')
  create(
    @Body()
    data: Prisma.UserCreateInput,
  ): Promise<User> {
    return this.userService.create(data);
  }

  @Patch('/:login')
  update(
    @Param('login') login: string,
    @Body() updateLinkDto: Prisma.UserUpdateInput,
  ) {
    return this.userService.update({
      where: { login },
      data: updateLinkDto,
    });
  }

  @Delete('/:login')
  delete(@Param('login') login: string) {
    return this.userService.delete({ login });
  }
}