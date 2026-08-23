class Stack<T> {
    private items: T[] = [];
    push(item: T): void { this.items.push(item); }
    pop(): T | undefined { return this.items.pop(); }
    peek(): T | undefined { return this.items[this.items.length - 1]; }
    isEmpty(): boolean { return this.items.length === 0; }
}
// Test 22:
const stack = new Stack<number>();
stack.push(10);
console.log("Peek:", stack.peek(), "Pop:", stack.pop());
