class BankAccount {
    balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount > 0) this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds or invalid amount!");
        }
    }
}

const acc5 = new BankAccount(1000);
acc5.deposit(500);
acc5.withdraw(200);
console.log(`Balance: ${acc5.balance}`);