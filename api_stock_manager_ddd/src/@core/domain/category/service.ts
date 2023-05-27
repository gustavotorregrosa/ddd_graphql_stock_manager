import { IRepository } from "src/@core/shared/repository.interface";
import { ICategory } from "./domain.interface";
import { IService } from "../../shared/service.interface";

export class CategoryService implements IService<ICategory>{

    constructor(public repository: IRepository<ICategory>){}

    async getAll(): Promise<ICategory[]> {
        return await this.repository.getAll()
    }

    async findOneById(id: string): Promise<ICategory> {
        return await this.repository.findOneById(id)
    }

    async createOne(data: Omit<ICategory, "id">): Promise<ICategory> {
        return await this.repository.createOne(data)
    }

    async save(data: ICategory): Promise<ICategory> {
        return await this.repository.save(data)
    }

}