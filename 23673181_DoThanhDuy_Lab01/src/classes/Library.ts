import { Book } from "./Book.ts";
import type { User } from "./User.ts";

class Library {
    books: Book[] = [];
    users: User[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }
}

const lib15 = new Library();
lib15.addBook(new Book("NodeJS Guide", "Author X", 2021));
console.log("Library books count:", lib15.books.length);
