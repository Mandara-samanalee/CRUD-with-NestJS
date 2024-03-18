import { Controller, Get, Post, Delete, Body, ParseIntPipe, Put, NotFoundException } from "@nestjs/common";
import { Param } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from "./dto/update-user.dto";
import { InternalServerErrorException } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {

  }

  @Get()
  getUsers() {
    return this.userService.get();
  }

  @Post()
  store(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }


  @Put('/:userId')
  async updateUser(@Param('userId', ParseIntPipe) userId: number, @Body() updateUserDto: UpdateUserDto) {
  try {
    const updatedUser = await this.userService.updateUser(userId, updateUserDto);
    return {
      message: `User with ID ${userId} updated successfully`,
      data: updatedUser,
    };
  } catch (error) {
    if (error instanceof NotFoundException) {
      throw new NotFoundException(error.message);
    } else {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}

    
  @Get('/:userId')
  getuser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.show(userId);
  }
  //ParseIntPipe- inbuild parameter validation. userId must be an number, otherwise there will be an validation error


  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }

}



