import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    if(!createUserDto.first_name || !createUserDto.last_name) throw new HttpException("datos incompletos", HttpStatus.BAD_REQUEST);
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    const users =  this.userService.findAll();
    return {status: "success", payload: users }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // definimos una excepcion 
    if(isNaN(+id)) throw new HttpException("El id debe ser un numero", HttpStatus.BAD_REQUEST);
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
