// Tempat simpan data sementara (Array)
let listTugasDanang = [];

// Fungsi untuk menambah data
function addTodo() {
    const inputTugas = document.getElementById('taskInput');
    const inputTanggal = document.getElementById('dateInput');

    // Validasi input
    if (inputTugas.value === '' || inputTanggal.value === '') {
        alert('Danang, isi dulu tugas dan tanggalnya!');
        return;
    }

    // Masukkan data ke dalam Array
    const dataBaru = {
        kegiatan: inputTugas.value,
        waktu: inputTanggal.value
    };

    listTugasDanang.push(dataBaru);

    // Jalankan fungsi tampilkan data
    tampilkanData();

    // Bersihkan form
    inputTugas.value = '';
    inputTanggal.value = '';
}

// Fungsi untuk merender/menampilkan data ke tabel
function tampilkanData() {
    const isiTabel = document.getElementById('todoTableBody');

    // Kosongkan tabel sebelum diisi ulang
    isiTabel.innerHTML = '';

    // Masukkan tiap data dari Array ke baris tabel
    listTugasDanang.forEach((item, index) => {
        isiTabel.innerHTML += `
        <tr>
            <td>${item.kegiatan}</td>
            <td>${item.waktu}</td>
            <td><span class="badge pending">Proses</span></td>
            <td>
                <button onclick="hapusSatu(${index})" style="color:#ff4757; border:none; background:none; cursor:pointer;">Hapus</button>
            </td>
        </tr>`;
    });
}

// Fungsi Hapus Per Baris
function hapusSatu(index) {
    listTugasDanang.splice(index, 1);
    tampilkanData();
}

// Fungsi Hapus Semua
function removeAllTodo() {
    if (confirm("Hapus semua daftar tugas, Danang?")) {
        listTugasDanang = [];
        tampilkanData();
        document.getElementById('todoTableBody').innerHTML = `<tr><td colspan="4" style="text-align:center;">List Kosong</td></tr>`;
    }
}

// Menghubungkan ID tombol di HTML dengan fungsi JavaScript
document.getElementById('addBtn').onclick = addTodo;
document.getElementById('deleteAllBtn').onclick = removeAllTodo;
