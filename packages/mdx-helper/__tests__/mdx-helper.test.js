import { describe, it, expect } from "vitest";
import { parseFile, parseCode } from "../lib/mdx-helper";
import * as path from 'path';
import fs from "fs"
describe("markdown-helper", async () => {
    const file = path.resolve(__dirname, "./test.md");
    const fileContent = await fs.readFileSync(file).toString();
    console.log(fileContent)
    // 基本的原信息检验
    it("should get meta data", () => {
        // 两种方式输出的信息应该一样
        expect(Object.keys(parseFile(file))).toEqual(Object.keys(parseCode(fileContent)));

        // 应该包含信息有 {title: "测试转换"}
        const result = parseFile(file);
        expect(Object.keys(result)).toContain("title");
        expect(result["title"]).toEqual("测试转换");
    });

    it("sholud output mdx", () => {
        // 输出 mdx 内容 
    })
})
