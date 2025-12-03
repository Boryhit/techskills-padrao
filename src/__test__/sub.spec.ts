import { sub } from "../example/sub";

describe('sub function', () => {
    it('should add two numbers correctly, to make a sub', () => {
        const result = sub(5, 2);
        expect(result).toBe(3);
    });
});