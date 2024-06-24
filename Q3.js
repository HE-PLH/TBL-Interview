// function findLongestPalindrome(s: string): string {
    //     let longest = '';
    //     for (let i = 0; i < s.length; i++) {
    //         for (let j = i+1; j < s.length; j++) {
    //             const substr = s.slice(i, j+1);
    //             if(isPalindrome(substr) && substr.length > longest.length) {
    //                 longest = substr;
    //             }
    //         }
    //     }
    //     return longest;
    // }
    //
    // function isPalindrome(s){
    //     return s === s.split('').reverse().join('');
    // }
    //
    // console.log(findLongestPalindrome('babad'))

    // rewrite
    function findLongestPalindromeFixed(s: string): string {
        let longest = '';
        for (let i = 0; i < s.length; i++) {
            for (let j = i+1; j < s.length; j++) {
                const substr = s.slice(i, j+1);
                if(isPalindromeFixed(substr) && substr.length > longest.length) {
                    longest = substr;
                }
            }
        }
        return longest;
    }

    function isPalindromeFixed(s){
        return s === s.split('').reverse().join('');
    }

    console.log(findLongestPalindromeFixed('babad'))


    //optimization
    function findLongestPalindromeOptimized(s){
        let longest = '';
        for (let i = 0; i < s.length; i++) {
            for (let j = s.length; j > i; j--) {
                const substr = s.slice(i, j);
                if(isPalindromeFixed(substr) && substr.length > longest.length) {
                    longest = substr;
                }
            }
        }
        return longest;
    }

//     The function isPalindromeFixed takes a string as an argument and returns true if the string is a palindrome and false otherwise.
    console.log(findLongestPalindromeOptimized('babad'))