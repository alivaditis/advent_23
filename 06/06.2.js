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
    .map(num => parseInt(num))
  })

const [times, distances] = input

let multiple = 1

for (i=0; i < times.length; i++) {
  const time = times[i]
  const distance = distances[i]

  let possibleWins = 0

  for (let j = 0; j < time; j++) {
    const speed = j
    const timeLeft = time - j

    const newDistance = speed * timeLeft

    if (newDistance > distance) {
      possibleWins++
    }
  }
  
  multiple *= possibleWins
}

console.log(`multiple: ${multiple}`)
