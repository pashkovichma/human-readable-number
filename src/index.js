module.exports = function toReadable (number) {
  const numberString = String(number);
  function forOneDigit (digit) {
      switch (digit){
          case 0:
          return ('zero');
          case 1:
          return ('one');
          case 2:
          return ('two');
          case 3:
          return ('three');
          case 4:
          return ('four');
          case 5:
          return ('five');
          case 6:
          return ('six');
          case 7:
          return ('seven');
          case 8:
          return ('eight');
          case 9:
          return ('nine');
      }
  }
  function fromTenToNineteen(digit) {
    switch (digit){
        case 10:
        return ('ten');
        case 11:
        return ('eleven');
        case 12:
        return ('twelve');
        case 13:
        return ('thirteen');
        case 14:
        return ('fourteen');
        case 15:
        return ('fifteen');
        case 16:
        return ('sixteen');
        case 17:
        return ('seventeen');
        case 18:
        return ('eighteen');
        case 19:
        return ('nineteen');
    }
  }
  function fromTwentyToNineteeNine (digit){
    let first = '';
    let second = '';
    switch (Math.trunc(digit/10) ) {
        case 2:
        first = 'twenty';
        break;
        case 3:
        first = 'thirty';
        break;
        case 4:
        first = 'forty';
        break;
        case 5:
        first = 'fifty';
        break;
        case 6:
        first = 'sixty';
        break;
        case 7:
        first = 'seventy';
        break;
        case 8:
        first = 'eighty';
        break;
        case 9:
        first = 'ninety';
        break;
    } 
    switch (digit%10){
        case 0:
        second = '';
        break;
        default:
        first = first + ' ';
        second = forOneDigit(digit%10);
    }
    return (first + second);
  }
  function fromOneHundred(digit) {
    let first = 'one hundred';
    let second = '';
    let third = '';
    switch (Math.trunc(digit/100)) {
       case 2:
        first = 'two hundred';
        break;
        case 3:
        first = 'three hundred';
        break;
        case 4:
        first = 'four hundred';
        break;
        case 5:
        first = 'five hundred';
        break;
        case 6:
        first = 'six hundred';
        break;
        case 7:
        first = 'seven hundred';
        break;
        case 8:
        first = 'eight hundred';
        break;
        case 9:
        first = 'nine hundred';
        break;
    }
    if (digit%100 != 0){
        if (digit%100 < 10) {
            third = ' ' + forOneDigit(digit%100);
        } else if (digit%100 > 9 && digit%100 < 20) {
            third =  ' ' + fromTenToNineteen(digit%100);
        } else {
            third = ' ' + fromTwentyToNineteeNine(digit%100);
        }
    }
    return (first + third);
  }
  if (number < 10) {
    return (forOneDigit(number));
  } else if (number > 9 && number < 20) {
    return (fromTenToNineteen(number));
  } else if  (number > 19 && number < 100) {
    return (fromTwentyToNineteeNine(number));
  } else {
      return (fromOneHundred(number));
  }
}
