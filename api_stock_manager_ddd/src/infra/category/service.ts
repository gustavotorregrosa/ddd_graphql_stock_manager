import { Injectable } from "@nestjs/common";
import { ICategory } from "src/@core/domain/category/domain.interface";
import { IService } from "src/@core/shared/service.interface";
import { CategoryService as DomainService } from "src/@core/domain/category/service";
import { CategoryRepository } from "./repository";

@Injectable()
export class CategoryService implements IService<ICategory> {

    domainService: IService<ICategory>

    constructor(private catRepo: CategoryRepository){
        this.domainService = new DomainService(catRepo)
    }

    async getAll(): Promise<ICategory[]> {
        return await this.domainService.getAll()
    }

    async findOneById(id: string): Promise<ICategory> {
        return await this.domainService.findOneById(id)
    }

    async createOne(data: Omit<ICategory, "id">): Promise<ICategory> {
        return await this.domainService.createOne(data)
    }
    
    async save(data: ICategory): Promise<ICategory>{
        return await this.domainService.save(data)
    }



}