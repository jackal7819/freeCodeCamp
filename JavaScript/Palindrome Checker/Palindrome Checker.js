function palindrome(str) {
    const strAlphanumeric = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const strReverse = strAlphanumeric.split('').reverse().join('');
    return strAlphanumeric === strReverse;
}
