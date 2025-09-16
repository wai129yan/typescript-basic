import { IRepository } from './IRepository';


export class Repository<T extends { id: string }> implements IRepository<T> {
    private items: T[] = []; //state data

    add(item: T): void { //add
        this.items.push(item);
    }
    get(id: string): T | undefined { //get single
        return this.items.find((item) => item.id === id);
    }

    getAll(): T[] { //get all
        return this.items;
    }

    remove(id: string): void {
        this.items = this.items.filter((item) => item.id !== id); //reassigned to get new array
    }
}