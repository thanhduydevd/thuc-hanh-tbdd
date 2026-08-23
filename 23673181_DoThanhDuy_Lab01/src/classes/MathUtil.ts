class MathUtil {
    static add(a: number, b: number): number { return a + b; }
    static subtract(a: number, b: number): number { return a - b; }
    static multiply(a: number, b: number): number { return a * b; }
    static divide(a: number, b: number): number { return b !== 0 ? a / b : 0; }
}
// Test 18:
console.log("MathUtil Add:", MathUtil.add(5, 3));