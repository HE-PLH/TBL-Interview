function isPerfectSquare(n: number): boolean {
        return n>0 && Math.sqrt(n) % 1 === 0;
    }

    function isFibonacci(n: number): boolean {
        if (n<0) return false;
        const x1 = 5 * n * n + 4;
        const x2 = 5 * n * n - 4;
        return isPerfectSquare(x1) || isPerfectSquare(x2);
    }

    test('isFibonacci', () => {
        expect(isFibonacci(5)).toBe(true);
        expect(isFibonacci(8)).toBe(true);
        expect(isFibonacci(13)).toBe(true);
        expect(isFibonacci(21)).toBe(true);
    })

    //unit tests
    test('isPerfectSquare', () => {
        expect(isPerfectSquare(4)).toBe(true); // 4 is a perfect square
        expect(isPerfectSquare(9)).toBe(true); // 9 is a perfect square
        expect(isPerfectSquare(16)).toBe(true); // 16 is a perfect square
        expect(isPerfectSquare(25)).toBe(true); // 25 is a perfect square
    })