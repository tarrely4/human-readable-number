module.exports = function toReadable (number) {
  let hundred = Math.trunc(number / 100);
  let deci = Math.trunc(number / 10) % 10;
  let ones = number % 10;
  let result = '';
  if (number == 0) return 'zero';
  if (hundred > 0) {
    result = toWords(hundred) + ' hundred';
  } else {
    result = '';
  }
  switch (deci) {
    case 0:
      result += ''
      break;
    case 1:
      result += toWords(number % 100);
      break;
    case 2:
      result += ' twenty';
      break;
    case 3:
      result += ' thirty';
      break;
    case 4:
      result += ' forty';
      break;
    case 5:
      result += ' fifty';
      break;
    case 6:
      result += ' sixty';
      break;
    case 7:
      result += ' seventy';
      break;
    case 8:
      result += ' eighty';
      break;
    case 9:
      result += ' ninety';
      break;
  }
  if (deci != 1) {
    result += toWords(ones)
  }
  return result.trimLeft();
}

function toWords(n) {
  switch (n) {
    case 0:
      return '';
      break;
    case 1:
      return ' one';
      break;
    case 2:
      return ' two';
      break;
    case 3:
      return ' three';
      break;
    case 4:
      return ' four';
      break;
    case 5:
      return ' five';
      break;
    case 6:
      return ' six';
      break;
    case 7:
      return ' seven';
      break;
    case 8:
      return ' eight';
      break;
    case 9:
      return ' nine';
      break;
    case 10:
      return ' ten';
      break;
    case 11:
      return ' eleven';
      break;
    case 12:
      return ' twelve';
      break;
    case 13:
      return ' thirteen';
      break;
    case 14:
      return ' fourteen';
      break;
    case 15:
      return ' fifteen';
      break;
    case 16:
      return ' sixteen';
      break;
    case 17:
      return ' seventeen';
      break;
    case 18:
      return ' eighteen';
      break;
    case 19:
      return ' nineteen';
      break;
  }
}
