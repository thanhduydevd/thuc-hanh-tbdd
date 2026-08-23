interface Payment { pay(amount: number): void; }
class CashPayment implements Payment {
    pay(amount: number) { console.log(`Paid $${amount} in Cash.`); }
}
class CardPayment implements Payment {
    pay(amount: number) { console.log(`Paid $${amount} via Credit Card.`); }
}
// Test 23:
new CashPayment().pay(100);
new CardPayment().pay(250);