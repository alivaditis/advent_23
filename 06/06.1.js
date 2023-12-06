const fs = require("fs");
const path = require("path");

const input = fs
  .readFileSync(path.join(__dirname, "/input.txt"))
  .toString()
  .split("\n")
  .map(line => {
    return line.split(':')[1]
    .split(' ')
    .filter(Number)
    .join('')
  })
  .map(num => parseInt(num))

const [time, distance] = input

let possibleWins = 0

for (let i = 0; i < time; i++) {
  const speed = i
  const timeLeft = time - i

  const newDistance = speed * timeLeft

  if (newDistance > distance) {
    possibleWins++
  }

}
  

console.log(`possibleWins: ${possibleWins}`)
