let input = prompt('Masukan input angka : ')
let angka = parseInt(input)
let result = []

for (let x = 1; x <= angka; x++) {
  if ((x % 3) == 0 && (x % 5) == 0) {
    result.push('EduWork')
  } else if ((x % 3) == 0) {
    result.push('Edu')
  } else if ((x % 5) == 0) {
    result.push('Work')
  } else {
    result.push(x)
  }
}

console.log(result.join('\n'))