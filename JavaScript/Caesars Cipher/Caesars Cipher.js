function rot13(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[A-Z]/)) {
        if (str.charCodeAt(i) + 13 < 91) {
          result += String.fromCharCode(str.charCodeAt(i) + 13);
        } else {
          result += String.fromCharCode(str.charCodeAt(i) - 13);
        }
      } else {
        result += str[i];
        }
    }
    return result;
  }