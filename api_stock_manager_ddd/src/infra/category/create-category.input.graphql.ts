import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInputType {

    @Field()
    name: string

    @Field()
    description: string

}