function hitungKelulusan() {

            // 1. Mengambil Nilai dari Input (DOM)

            const teori = parseInt(document.getElementById('nilaiTeori').value);

            const praktik = parseInt(document.getElementById('nilaiPraktik').value);

            const hasilElement = document.getElementById('hasil');





            // Validasi Input (Dasar)

            if (isNaN(teori) || isNaN(praktik) || teori < 0 || praktik < 0) {

                hasilElement.innerHTML = "Masukkan nilai yang valid (angka 0-100).";
                hasilElement.style.color = "red";
                return;

            }





            // 2. Logika Perhitungan (JavaScript Core)

            const rataRata = (teori + praktik) / 2;

            let status;

            let warna;





            if (rataRata >= 75) {

                status = "LULUS! Selamat, Anda memenuhi standar kelulusan.";

                warna = "green";

            } else {

                status = "TIDAK LULUS. Rata-rata di bawah 75. Silakan ikuti remedial.";

                warna = "red";

            }





            // 3. Menampilkan Hasil ke Halaman (DOM Manipulation)

            hasilElement.innerHTML = `Rata-rata Nilai: <b>${rataRata.toFixed(2)}</b><br>Status: ${status}`;

            hasilElement.style.color = warna;

        }
