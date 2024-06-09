import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MyService } from './my.service';
import { CreateMyInput } from './dto/create-my.input';
import { UpdateMyInput } from './dto/update-my.input';

@Resolver('My')
export class MyResolver {
    constructor(private readonly myService: MyService) { }

    @Mutation('createMy')
    create(@Args('createMyInput') createMyInput: CreateMyInput) {
        return this.myService.create(createMyInput);
    }

    @Query('my')
    findAll() {
        return this.myService.findAll();
    }

    @Query('my')
    findOne(@Args('id') id: number) {
        return this.myService.findOne(id);
    }

    @Mutation('updateMy')
    update(@Args('updateMyInput') updateMyInput: UpdateMyInput) {
        return this.myService.update(updateMyInput.id, updateMyInput);
    }

    @Mutation('removeMy')
    remove(@Args('id') id: number) {
        return this.myService.remove(id);
    }
}
