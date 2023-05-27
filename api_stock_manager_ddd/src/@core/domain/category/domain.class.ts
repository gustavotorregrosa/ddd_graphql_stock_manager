import { ICategory } from "./domain.interface";

export class Category implements ICategory {
    constructor(public id: string, public name: string, public description: string){}
}