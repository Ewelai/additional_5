module.exports = function check(str, bracketsConfig) {

  let array = [];

  if (str.length % 2 !== 0) {
    return false;
  }
  
  for(let i = 0, len = str.length; i < len; i++ ) {
    for (let a = 0, len = bracketsConfig.length; a < len; a++) {

      if(str[i] == bracketsConfig[a][1] && array[array.length - 1] == bracketsConfig[a][0]) {
        array.pop();
      } else if (str[i] == bracketsConfig[a][0]) {
        array.push(bracketsConfig[a][0]);
      }

    }
  }

  if(array.length == 0) {
    return true;
  } else {
    return false;
  }
}
