let input = prompt('Masukan Input Angka : ')
let panjang = input.length
let pemisah = ""
let result = []

if (parseInt(input) === 10) {
  alert(`Hasil : Sepuluh`)
} else if (parseInt(input) > 0 && parseInt(input) < 100) {
  for (let x = 0; x < panjang; x++) {
    pemisah = parseInt(input[x])
    switch (pemisah) {
      case 1:
        result.push("satu")
        break
      case 2:
        result.push("dua")
        break
      case 3:
        result.push("tiga")
        break
      case 4:
        result.push("empat")
        break
      case 5:
        result.push("lima")
        break
      case 6:
        result.push("enam")
        break
      case 7:
        result.push("tujuh")
        break
      case 8:
        result.push("delapan")
        break
      case 9:
        result.push("sembilan")
        break
      default:
        result.push(null)
        break
    }
  }
  alert(`Hasil : ${result.join(" puluh ")}`)
} else {
  alert('Silahkan masukkan bilangan 1-100')
}