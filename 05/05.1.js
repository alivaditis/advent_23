const fs = require("fs");
const path = require("path");

const input = fs
  .readFileSync(path.join(__dirname, "/example.txt"))
  .toString()
  .trim()
  .split("\n");

const seeds = input[0]
  .split(':')[1]
  .split(' ')
  .filter(num => num)
  .map(seed => parseInt(seed))

const maps = []

let currentMap = []

input.slice(2)
  .forEach(line => {
    if(line.match(/^[0-9]/)) {
      currentMap.push(line.split(' '))
    } else {
      if (currentMap.length) {
        maps.push(currentMap)
      }
      currentMap = []
    }
  })


const getMapOut = (input, map) => {
  let output = input
  
  map.forEach(line => {
    let [value, key, length] = line
    value = parseInt(value)
    key = parseInt(key)
    length = parseInt(length)

    for (let i = 0; i < length; i++) {
      if((key+i)===input) {
        output=(value+i)
      }
    }
  })

  return output
}

const seedLocations = seeds.map(seed => {
  return maps.reduce((location, map) => {
    return getMapOut(location, map)
  }, seed)
})

const lowest = Math.min(...seedLocations)

console.log(lowest)
