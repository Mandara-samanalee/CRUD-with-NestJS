import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateDescription, UpdateResult } from 'typeorm';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';



@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>, 
    ) { }
    

    get(): Promise<User[]> {
        return this.usersRepository.find();
    }

    create(createUserDto: CreateUserDto): Promise<User> {
        return this.usersRepository.save(createUserDto);
    }


    async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
       const user = await this.usersRepository.findOne({ where: { id: id } });
         if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
         }
       const updatedUser = Object.assign(user, updateUserDto);
       return this.usersRepository.save(updatedUser);
}

    show(id: number) {
        return this.usersRepository.findOne({ where: { id } });   
    }

    delete(userId: number) {
        return this.usersRepository.delete(userId);
    }

}



