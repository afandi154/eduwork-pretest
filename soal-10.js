let input = prompt('Masukan Input Angka')
let angka = parseInt(input)

if ((angka % 4) == 0) {
  if ((angka % 100) != 0) {
    alert(`${angka} adalah tahun kabisat`)
  } else if ((angka % 100) == 0) {
    if ((angka % 400) != 0) {
      alert(`${angka} bukan tahun kabisat`)
    }
  }
} else {
  alert(`${angka} bukan tahun kabisat`)
}