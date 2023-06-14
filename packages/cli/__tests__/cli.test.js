// 代理 zipDir 函数
jest.mock('@couriourc/cli', () => {
    return {
        zipDir: jest.fn().mockResolvedValue(true),
    };
});
describe('cli-tools', () => {
    it('should be run', () => {
        jest.mock('');
    });
});
