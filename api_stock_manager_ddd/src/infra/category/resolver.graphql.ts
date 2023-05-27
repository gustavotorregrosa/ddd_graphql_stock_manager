import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CategoryInfra } from "./nestjs.class";
import { CategoryRepository } from "./repository";
import { CreateCategoryInputType } from "./create-category.input.graphql";
import { EditCategoryInputType } from "./edit-category.input.graphql";
import { CategoryService } from "./service";

@Resolver()
export class CategoryResolver {

    constructor(private service: CategoryService){}

    @Query(returns => [CategoryInfra])
    async getAllCategories(){
        return await this.service.getAll()
    }

    @Query(returns => CategoryInfra)
    async getOneCategory(@Args('id') id: string){
        return await this.service.findOneById(id)
    }

    @Mutation(returns => CategoryInfra)
    async createCategory(@Args('category') category: CreateCategoryInputType){
        return await this.service.createOne(new CategoryInfra('', category.name, category.description))
    }

    @Mutation(returns => CategoryInfra)
    async editCategory(@Args('category') category: EditCategoryInputType){
        return await this.service.save(new CategoryInfra(category.id, category.name, category.description))
    }


}