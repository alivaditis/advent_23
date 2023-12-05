const fs = require("fs");
const path = require("path");

const input = fs
  .readFileSync(path.join(__dirname, "/input.txt"))
  .toString()
  .split("\n");

const getPoints = (input) => {
  let points = 0

  for (let i = 0; i < input.length; i++) {
    let cardPoints = 0
    const [winning, yours] = input[i].split(':')[1].split('|')
    winningList = winning.split(' ').filter(num => num)
    yourList = yours.split(' ').filter(num => num)
    
    // check to see if winning number is in your list
    winningList.forEach(num => {
      if(yourList.includes(num)) {
        cardPoints === 0 ? cardPoints++ : cardPoints *= 2
      }
    })

    points += cardPoints
  }

  return points
}

console.log(getPoints(input))