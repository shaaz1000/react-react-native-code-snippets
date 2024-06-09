import { Module } from '@nestjs/common';
import { ${ componentName }Service } from './${componentName}.service';
import { ${ componentName }Controller } from './${componentName}.controller';

@Module({
    controllers: [${ componentName }Controller],
    providers: [${ componentName }Service],
})
export class $ { componentName }Module { }
