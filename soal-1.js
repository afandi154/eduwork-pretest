let hasil = 1
let input = prompt('Masukan Input Angka : ')

let jawaban1 = (input) => {
  for (let x = 1; x <= input; x++) {
    hasil *= x
  }
  return hasil
}

alert(`Hasil : ${jawaban1(parseInt(input))}`)
