function kalkulasiBmi() {
  let weightInput = document.getElementById("berat");
  let heightInput = document.getElementById("tinggi");
  let result = document.getElementById("hasil");

  let height = heightInput.value;
  let weight = weightInput.value;

  if (weight == "" || height == "") {
    swal("Maaf!", "Silahkan masukkan nilai terlebih dahulu", "error");
    return;
  }

  let bmi = weight / (height / 100) ** 2;
  let category = "";

  if (bmi < 18.5) {
    category = `<span style="color:#4551f2">Kurus</span>`;
  } else if (bmi < 25) {
    category = `<span style="color:#00ff4c">Normal</span>`;
  } else if (bmi < 30) {
    category = `<span style="color:#df114f">Gemuk</span>`;
  } else {
    category = `<span style="color:red">Obesitas</span>`;
  }

  result.innerHTML = `Hasil Kalkulasi ${bmi.toFixed(2)} (${category})`;
}
