import { IRepository } from '../core/services/index';

export class SetRepository<T> implements IRepository<T> {
    private entities: Set<T>;

    constructor() {
        this.entities = new Set<T>();
    }

    get values(): T[] {
        return [...this.entities.values()];
    }

    has(entity: T): boolean {
        return this.entities.has(entity);
    }

    add(entity: T): void {
        if (this.entities.has(entity)) { return; }
        this.entities.add(entity);
    }

    get(entity: Object): T {
        return this.values.filter(e => e === entity)[0];
    }

    delete(entity: T): void {
        this.entities.delete(entity);
    }
}
