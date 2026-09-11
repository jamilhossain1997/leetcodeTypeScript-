function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    const isAlphaNumber = (c: string): boolean => {
        return /[a-zA-Z0-9]/.test(c);
    }

    while (left < right) {
        while (left < right && !isAlphaNumber(s[left])) {
            left++;
        }

        while (left < right && !isAlphaNumber(s[right])) {
            right--;
        }

        if(s[left].toLocaleLowerCase() !== s[right].toLocaleLowerCase()){
            return false;
        }

        left++;
        right--;

    }

    return true;
}

console.log("A man, a plan, a canal: Panama", isPalindrome("A man, a plan, a canal: Panama")); // true