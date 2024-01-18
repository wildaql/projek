document.getElementById("hitung_luas").addEventListener("click", function() {
  var sisi = parseFloat(document.getElementById("sisi_luas").value);
  var luas = sisi * sisi;

  document.getElementById("luas").textContent = luas.toFixed(2);
});

document.getElementById("reset_luas").addEventListener("click", function() {
  document.getElementById("sisi_luas").value = "";
  document.getElementById("luas").textContent = "-";
});

document.getElementById("hitung_keliling").addEventListener("click", function() {
  var sisi = parseFloat(document.getElementById("sisi_keliling").value);
  var keliling = 4 * sisi;

  document.getElementById("keliling").textContent = keliling.toFixed(2);
});

document.getElementById("reset_keliling").addEventListener("click", function() {
  document.getElementById("sisi_keliling").value = "";
  document.getElementById("keliling").textContent = "-";

});