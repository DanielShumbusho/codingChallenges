function isPalindrome(stri){
    const cleaned = stri.toLowerCase().replace(/[^a-z0-9]/g,'');
    return cleaned === cleaned.split('').reverse().join('')//is the reverse version equal to the normal version?
}
console.log(isPalindrome("hello"));//i tested and returns false