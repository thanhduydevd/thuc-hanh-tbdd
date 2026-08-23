class Account {
    public username: string;          // Công khai
    private passwordHash: string;     // Riêng tư
    readonly createdAt: Date;         // Chỉ đọc

    constructor(username: string, pass: string) {
        this.username = username;
        this.passwordHash = pass;
        this.createdAt = new Date();
    }
}

const acc10 = new Account("admin", "123456");
console.log(acc10.username, acc10.createdAt);