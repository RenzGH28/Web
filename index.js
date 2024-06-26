// Fungsi untuk menghasilkan nilai RGB secara acak
function randomColor() {
  // Menghasilkan nilai acak untuk masing-masing komponen RGB
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  
  // Menggabungkan nilai RGB menjadi format string
  var rgbColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  
  return rgbColor;
}

// Mengubah warna teks "Selamat Datang Di Website Renz" menjadi warna acak saat tombol ditekan
document.getElementById('changeColorButton').addEventListener('click', function() {
  var welcomeText = document.getElementById('welcomeText');
  welcomeText.style.color = randomColor();
});
