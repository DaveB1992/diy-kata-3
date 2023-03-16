const numberToReversedDigits = (number) => {
 const reversedDigits = String(number).split('').reverse();
 return reversedDigits.map((digitString)=> Number(digitString));
};

module.exports = numberToReversedDigits;

