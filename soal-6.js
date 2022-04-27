const data = [1, 4, 7, 9, 12, 16]
const low = 2
const high = 15
const result = []

for (let x = 0; x < data.length; x++) {
  if (data[x] >= low && data[x] <= high) {
    result.push(data[x])
  }
}

console.log(result)