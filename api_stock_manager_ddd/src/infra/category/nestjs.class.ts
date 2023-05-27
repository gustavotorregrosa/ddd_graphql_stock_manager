import { Field, ObjectType } from "@nestjs/graphql";
import { Category } from "src/@core/domain/category/domain.class";

@ObjectType()
export class CategoryInfra extends Category{

    @Field()
    public id: string

    @Field()
    public name: string

    @Field()
    public description: string

}