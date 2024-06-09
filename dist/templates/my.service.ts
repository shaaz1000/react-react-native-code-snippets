import { Injectable } from '@nestjs/common';
import { CreateMyInput } from './dto/create-my.input';
import { UpdateMyInput } from './dto/update-my.input';

@Injectable()
export class MyService {
    create(createMyInput: CreateMyInput) {
        return 'This action adds a new My';
    }

    findAll() {
        return `This action returns all My`;
    }

    findOne(id: number) {
        return `This action returns a #${id} My`;
    }

    update(id: number, updateMyInput: UpdateMyInput) {
        return `This action updates a #${id} My`;
    }

    remove(id: number) {
        return `This action removes a #${id} My`;
    }
}
