import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConfigService } from '@nestjs/config';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private config: ConfigService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    if (!createUserDto.first_name || !createUserDto.last_name) throw new HttpException("datos incompletos", HttpStatus.BAD_REQUEST);
    return await this.userService.create(createUserDto);
  }

  @Get()
  async findAll() {
    console.log(`Quiero Papa con ${this.config.get<string>('PAPA')}`);
    const users = await this.userService.findAll();
    return { status: "success", payload: users }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // definimos una excepcion 
    if (isNaN(+id)) throw new HttpException("El id debe ser un numero", HttpStatus.BAD_REQUEST);
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
