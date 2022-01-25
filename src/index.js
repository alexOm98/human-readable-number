module.exports = function toReadable (number) {
    let less20 = [
      '',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen'
    ]
    let ty = [
      '',
      '',
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety'
    ]
    let str = number.toString();
    if (number === 0) {
        return 'zero';
    }
    if (number <= 19) {
        return less20[number];
    }
    if (str.length === 2) {
        if (str[1] === '0') {
            return ty[Number(str[0])];
        } else return (ty[Number(str[0])] + ' ' + less20[Number(str[1])]
    )}
    if (str.length == 3) {
        if (str[1] === '0' && str[2] === '0') {
            return less20[Number(str[0])] + ' hundred'
        } else return (less20[Number(str[0])] + ' hundred ' + toReadable(+(str[1] + str[2]))
        )
    }
  }
