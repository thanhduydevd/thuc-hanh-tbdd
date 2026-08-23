class Logger {
    private static instance: Logger;
    private constructor() {} // Ngăn không cho khởi tạo bằng từ khóa new bên ngoài

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(message: string): void {
        console.log(`[LOG]: ${message}`);
    }
}
// Test 17:
Logger.getInstance().log("System started successfully.");