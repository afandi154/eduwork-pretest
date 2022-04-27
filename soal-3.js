let input = prompt('Masukan Input :')
let angka = input.replace(/[\D]/gi, "")
let panjang = angka.length - 1
let pemisah = null
let result = []

for (let x = 0; x < angka.length; x++) {
  pemisah = angka[x]
  for (let y = 0; y < panjang; y++) {
    pemisah += "0"
  }
  panjang -= 1
  result.push(parseInt(pemisah))
}

alert(`${angka}\n${result.join('\n')}`)