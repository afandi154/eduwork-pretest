let input = prompt('Masukan Input : ')
let pemisah = [...input]
let result = []

for (let x = pemisah.length - 1; x >= 0; x--) {
  result.push(pemisah[x])
}
alert(`Output : ${result.join("")}`)