class Box<T> {
    content: T;
    constructor(content: T) {
        this.content = content;
    }
}

const stringBox = new Box<string>("Gift");
const numberBox = new Box<number>(100);
console.log(stringBox.content, numberBox.content);