import { Injectable } from '@nestjs/common';
import { Create${ componentName }Dto } from './dto/create-${componentName}.dto';
import { Update${ componentName }Dto } from './dto/update-${componentName}.dto';

@Injectable()
export class $ { componentName }Service {
    create(create${ componentName }Dto: Create${ componentName }Dto) {
        return 'This action adds a new ${componentName.toLowerCase()}';
    }

    findAll() {
        return `This action returns all ${componentName.toLowerCase()}s`;
    }

    findOne(id: number) {
        return `This action returns a #${id} ${componentName.toLowerCase()}`;
    }

    update(id: number, update${ componentName }Dto: Update${ componentName }Dto) {
        return `This action updates a #${id} ${componentName.toLowerCase()}`;
    }

    remove(id: number) {
        return `This action removes a #${id} ${componentName.toLowerCase()}`;
    }
}
