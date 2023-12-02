const input= require('./input');

const isNumber = (char) => {
  return /^\d$/.test(char);
}

const getLineNumber = (line) => {
  const characters = line.split('')
  let first
  let second
  for (let i=0; i < characters.length; i++) {
    if(isNumber(characters[i])) {
      first = characters[i]
      break
    }
  }
  for (let i=characters.length; i >= 0; i--) {
    if(isNumber(characters[i])) {
      second = characters[i]
      break
    }
  }
  return parseInt([first, second].join(''))
}

const lineNumbers = (input.map(line => getLineNumber(line)))

const getSum = (input) => {
  return lineNumbers.reduce((acc, curr) => {
    return acc + curr
  }, 0)
}

console.log(getSum(lineNumbers))

