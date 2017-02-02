export interface IRepository<T> {
    values: T[];
    has(entity: T): boolean;
    add(entity: T): void;
    get(entity: Object): T;
    delete(entity: T): void;
}
