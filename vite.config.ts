import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [
        {
            name: "tst",
            transform(code) {
                return code;
            }
        }
    ]
})