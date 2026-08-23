class Repository<T> {
    private items: T[] = [];
    add(item: T): void { this.items.push(item); }
    getAll(): T[] { return this.items; }
}
// Test 21:
const repo = new Repository<string>();
repo.add("Item 1");
console.log(repo.getAll());
