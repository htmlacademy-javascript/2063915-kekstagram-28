// eslint-disable-next-line no-unused-vars


// eslint-disable-next-line no-unused-vars
const getLineLength = (string, length) => {
  if (string.length <= length) {
    return true;
  } return false;
};

// eslint-disable-next-line no-unused-vars
const isPalidrom = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }

  return tempString === reverseString;
};


// eslint-disable-next-line no-unused-vars
const extractNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};


// eslint-disable-next-line no-unused-vars
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};
