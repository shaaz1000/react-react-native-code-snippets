import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ${ componentName }Service } from './${componentName}.service';
import { Create${ componentName }Dto } from './dto/create-${componentName}.dto';
import { Update${ componentName }Dto } from './dto/update-${componentName}.dto';

@Controller('${componentName}')
export class $ { componentName }Controller {
    constructor(private readonly ${ componentName }Service: ${ componentName }Service) { }

    @Post()
    create(@Body() create${ componentName }Dto: Create${ componentName }Dto) {
        return this.${ componentName } Service.create(create${ componentName }Dto);
    }

    @Get()
    findAll() {
        return this.${ componentName } Service.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.${ componentName } Service.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() update${ componentName }Dto: Update${ componentName }Dto) {
        return this.${ componentName } Service.update(+id, update${ componentName }Dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.${ componentName } Service.remove(+id);
    }
}
