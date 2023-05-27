import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class EditCategoryInputType {

    @Field()
    id: string

    @Field()
    name: string

    @Field()
    description: string

}