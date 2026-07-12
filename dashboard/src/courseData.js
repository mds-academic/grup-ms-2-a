export const courseData = {
  1: {
    thumbnail: "./thumb_1.png",
    kicker: "Checkpoint 01 · Input",
    title: "Input Aman",
    duration: "Materi 1",
    videoId: "UhutS4BVKhk",
    startSeconds: 0,
    endSeconds: 1338,
    bookmarks: [{"time": 14, "label": "Pengenalan Input Aman"}, {"time": 255, "label": "Studi Kasus Meminjam Buku"}, {"time": 421, "label": "Validasi Input User"}, {"time": 551, "label": "Pengecekan Input"}],
    quizzes: [
      {
        time: 1337,
        shown: false,
        resume: false,
        title: "MINI QUIZ 1",
        questions: [
          {
            question: "Kamu membuat aplikasi data anggota klub sekolah. Kolom nama wajib diisi.<br><br>Kondisi mana yang paling tepat untuk mengecek nama kosong?",
            choices: [
              "A. Jika TextBoxNama berwarna putih.",
              "B. Jika TextBoxNama.Text = \"\".",
              "C. Langsung simpan saja, nanti dicek belakangan."
            ],
            answer: "B. Jika TextBoxNama.Text = \"\".",
            explanation: "Untuk mengecek apakah TextBox kosong, kita menggunakan blok <b>TextBoxNama.Text = \"\"</b>."
          }
        ]
      }
    ],
    summaryHtml: `
      <header class="reading-header">
        <div>
          <p class="label">Materi Bacaan 01</p>
          <h3>Input Aman</h3>
        </div>
      </header>
      <article class="reading-section">
        <h4>Teori Input</h4>
<div class="slide-text">
<p><strong>Input</strong> adalah data yang dimasukkan pengguna ke aplikasi. Bisa berupa nama, umur, pilihan menu, nominal uang, password, lokasi, atau jawaban quiz.</p>
<p>Masalahnya, aplikasi tidak otomatis tahu apakah data itu masuk akal. Kalau pengguna mengisi umur dengan kata <em>"tigabelas"</em>, mengosongkan nama, atau mengetik nominal uang dengan huruf, aplikasi bisa salah menghitung.</p>
<div class="quote-box">Aplikasi yang baik tidak langsung percaya semua input. Aplikasi harus mengecek dulu.</div>
<p>Di MIT App Inventor, bagian input biasanya dibuat dengan komponen <span class="block-badge block-ui">TextBox</span>, <span class="block-badge block-ui">PasswordTextBox</span>, <span class="block-badge block-ui">ListPicker</span>, <span class="block-badge block-ui">CheckBox</span>, atau <span class="block-badge block-ui">Slider</span>.</p>
</div>
<h4>Contoh Sekitar</h4>
<div class="slide-text">
<p>Bayangkan kamu menjadi petugas perpustakaan sekolah. Temanmu mau meminjam buku, tetapi kartu anggota tidak ada namanya. Apakah boleh langsung diproses?</p>
<div class="info-grid">
<div class="mini-card" style="background-color:#FFFDE7;">
<h3>Di Perpustakaan</h3>
<ul>
<li>Nama peminjam harus ada.</li>
<li>Nomor anggota harus benar.</li>
<li>Buku yang dipinjam harus tercatat.</li>
</ul>
</div>
<div class="mini-card" style="background-color:#E1F5FE;">
<h3>Di Aplikasi</h3>
<ul>
<li>Nama tidak boleh kosong.</li>
<li>Umur harus angka.</li>
<li>Nominal uang harus lebih dari 0.</li>
</ul>
</div>
</div>
<p>Kesimpulannya: validasi membuat aplikasi lebih rapi, lebih aman, dan lebih mudah dipercaya.</p>
</div>
<h4>Validasi Input</h4>
<div class="slide-text">
<p><strong>Validasi input</strong> adalah proses memeriksa data sebelum data dipakai oleh aplikasi. Untuk SMP, kita mulai dari tiga validasi yang paling sering dipakai.</p>
<div class="info-grid">
<div class="mini-card" style="background-color:#E8F5E9;">
<h3>1. Tidak Kosong</h3>
<p>Contoh: nama pengguna wajib diisi sebelum tombol daftar bisa diproses.</p>
</div>
<div class="mini-card" style="background-color:#E3F2FD;">
<h3>2. Tipe Data Tepat</h3>
<p>Contoh: umur, harga, dan jumlah barang harus berupa angka.</p>
</div>
<div class="mini-card" style="background-color:#FFF3E0;">
<h3>3. Nilai Masuk Akal</h3>
<p>Contoh: umur siswa SMP biasanya bukan 2 tahun dan bukan 90 tahun.</p>
</div>
<div class="mini-card" style="background-color:#FCE4EC;">
<h3>Bonus: Data Sensitif</h3>
<p>Password dan PIN tidak boleh ditampilkan terang-terangan di layar.</p>
</div>
</div>
</div>
<h4>MIT App Inventor</h4>
<div class="slide-text">
<p>Kita akan membuat aplikasi sederhana: pengguna memasukkan nama dan umur, lalu aplikasi memberi sapaan hanya jika datanya valid.</p>
<div class="app-screen">
<p><strong>Komponen Designer:</strong></p>
<p><span class="block-badge block-ui">TextBoxNama</span> <span class="block-badge block-ui">TextBoxUmur</span> <span class="block-badge block-ui">ButtonCek</span> <span class="block-badge block-ui">LabelHasil</span> <span class="block-badge block-ui">Notifier1</span></p>
</div>
<div class="block-code">
<span class="block-badge block-control">when ButtonCek.Click</span><br/>
<span class="block-badge block-control">if</span> <span class="block-badge block-ui">TextBoxNama.Text</span> <span class="block-badge block-logic">=</span> <span class="block-badge block-text">""</span><br/>
<span class="block-badge block-control">then</span> <span class="block-badge block-ui">Notifier1.ShowAlert</span> <span class="block-badge block-text">"Nama belum diisi"</span><br/>
<span class="block-badge block-control">else if</span> <span class="block-badge block-math">not is a number?</span> <span class="block-badge block-ui">TextBoxUmur.Text</span><br/>
<span class="block-badge block-control">then</span> <span class="block-badge block-ui">Notifier1.ShowAlert</span> <span class="block-badge block-text">"Umur harus angka"</span><br/>
<span class="block-badge block-control">else</span> <span class="block-badge block-ui">set LabelHasil.Text</span> <span class="block-badge block-text">"Data aman diproses"</span>
</div>
<p>Urutan pengecekan penting: cek kosong dulu, cek angka, baru proses. Jangan memproses data sebelum yakin data itu benar.</p>
</div>
<h4>Designer</h4>
<div class="slide-text">
<p>Siswa membuat layar aplikasi seperti form pendaftaran klub sekolah. Fokusnya bukan login sungguhan, tetapi latihan membuat input yang jelas dan bisa divalidasi.</p>
<div class="practice-layout">
<div class="phone-mock">
<div class="phone-screen">
<div class="app-title-bar">Data Anggota Klub</div>
<div class="mock-label">Nama lengkap</div>
<div class="mock-input">contoh: Naya Putri</div>
<div class="mock-label">Umur</div>
<div class="mock-input">contoh: 13</div>
<div class="mock-label">Kelas</div>
<div class="mock-input">pilih: 7A / 7B / 8A</div>
<div class="mock-button">CEK DATA</div>
<div class="mock-output">Status akan muncul di sini.</div>
</div>
</div>
<div class="component-list">
<h3>Komponen di Designer</h3>
<span class="component-pill">VerticalArrangement</span>
<span class="component-pill">LabelJudul</span>
<span class="component-pill">TextBoxNama</span>
<span class="component-pill">TextBoxUmur</span>
<span class="component-pill">ListPickerKelas</span>
<span class="component-pill">ButtonCek</span>
<span class="component-pill">LabelStatus</span>
<span class="component-pill">Notifier1</span>
<p class="tiny-note">Properti yang perlu disetel: Hint pada TextBox, Text tombol, warna LabelStatus, dan pilihan kelas pada ListPicker.</p>
</div>
</div>
</div>
<h4>Blocks</h4>
<div class="slide-text">
<p>Susunan Blocks dibuat bertahap. Siswa jangan langsung membuat semua blok; mulai dari cek nama kosong, lalu cek umur angka, lalu cek umur masuk akal.</p>
<div class="block-stack">
<h3>Gambaran Blocks</h3>
<div class="block-row event">when ButtonCek.Click</div>
<div class="block-row check indent-1">if TextBoxNama.Text = ""</div>
<div class="block-row warn indent-2">call Notifier1.ShowAlert "Nama belum boleh kosong"</div>
<div class="block-row check indent-1">else if not is a number? TextBoxUmur.Text</div>
<div class="block-row warn indent-2">call Notifier1.ShowAlert "Umur harus angka, contoh: 13"</div>
<div class="block-row check indent-1">else if TextBoxUmur.Text &lt; 10 or TextBoxUmur.Text &gt; 16</div>
<div class="block-row warn indent-2">call Notifier1.ShowAlert "Umur belum sesuai untuk klub SMP"</div>
<div class="block-row output indent-1">else set LabelStatus.Text to "Data aman. Selamat bergabung!"</div>
</div>
<p class="tiny-note">Latihan tambahan: minta siswa menguji tiga input salah, lalu screenshot hasil Notifier yang muncul.</p>
</div>
      </article>
    `
  },
  
  2: {
    thumbnail: "./thumb_1.png",
    kicker: "Checkpoint 01 · Mini Project",
    title: "Mini Project Form Aman",
    duration: "Materi 1",
    videoId: "UhutS4BVKhk",
    startSeconds: 1349,
    endSeconds: 1392,
    bookmarks: [{"time": 1349, "label": "Instruksi Mini Project"}],
    quizzes: [],
    summaryHtml: `
      <header class="reading-header">
        <div>
          <p class="label">Mini Project</p>
          <h3>Form Aman</h3>
        </div>
      </header>
      <article class="reading-section">
        <div class="slide-text">
          <p>Tonton instruksi video di atas untuk mengerjakan mini project ini.</p>
        </div>
      </article>
    `
  },
  3: {
    thumbnail: "./thumb_3.png",
    kicker: "Checkpoint 03 · Flowchart",
    title: "Flowchart Logika Data",
    duration: "Materi 3",
    videoId: "UhutS4BVKhk",
    startSeconds: 1394,
    endSeconds: 2079,
    bookmarks: [{"time": 1424, "label": "Pengenalan Flowchart"}, {"time": 1499, "label": "Pentingnya Flowchart"}, {"time": 1794, "label": "Komponen Flowchart"}, {"time": 2037, "label": "Menyusun Flowchart"}],
    quizzes: [
      {
        time: 2079,
        resume: false,
        questions: [
          {
            question: "<span class=\"slide-title\">Mini Quiz: Urutan Flowchart</span><br><br>Kamu membuat aplikasi cek umur. Aplikasi harus menerima umur, memastikan umur angka, lalu menampilkan kategori.<br><br>Urutan yang paling masuk akal adalah...",
            choices: [
              "A. Tampilkan hasil, lalu minta input, lalu cek angka.",
              "B. Ambil input, cek apakah angka, lalu tampilkan kategori.",
              "C. Tekan reset, tampilkan hasil, lalu ambil input."
            ],
            answer: 1,
            explanation: "Urutan yang benar adalah menerima input, memproses input tersebut (validasi tipe data), lalu menampilkan hasilnya."
          }
        ]
      }
    ],
    summaryHtml: `
      <header class="reading-header">
        <div>
          <p class="label">Materi Bacaan 03</p>
          <h3>Flowchart Logika Data</h3>
        </div>
      </header>
      <article class="reading-section">
        <h4>Alur Aplikasi</h4>
<div class="slide-text">
<p><strong>Flowchart</strong> adalah gambar alur langkah yang menunjukkan bagaimana aplikasi berjalan dari awal sampai akhir.</p>
<p>Flowchart membantu kita berpikir sebelum menyusun blok. Kalau alurnya belum jelas, blok App Inventor biasanya jadi berantakan dan sulit diperbaiki.</p>
<div class="fc-container" style="transform: scale(0.85); margin-top: -10px; margin-bottom: -10px;">
<div class="fc-node fc-oval">Mulai</div>
<div class="fc-arrow-down"></div>
<div class="fc-node fc-para"><span>Input Data</span></div>
<div class="fc-arrow-down"></div>
<div class="fc-diamond-wrapper">
<div class="fc-diamond"></div>
<div class="fc-diamond-text">Cek Kondisi</div>
</div>
<div class="fc-row">
<div class="fc-node fc-rect" style="background-color: #ffebee;">Tidak Valid</div>
<div class="fc-arrow-left" style="transform: rotate(180deg);"></div>
<div style="font-weight: 700; margin: 0 10px;">Ya/Tidak</div>
<div class="fc-arrow-right"></div>
<div class="fc-node fc-rect" style="background-color: #e8f5e9;">Valid (Proses)</div>
</div>
<div class="fc-arrow-down"></div>
<div class="fc-node fc-para"><span>Tampilkan Output</span></div>
<div class="fc-arrow-down"></div>
<div class="fc-node fc-oval">Selesai</div>
</div>
<p>Di bagian ini, siswa belajar bahwa aplikasi yang baik tidak dibuat asal klik blok. Aplikasi dimulai dari alur logika.</p>
</div>
<h4>Contoh Sekitar</h4>
<div class="slide-text">
<p>Bayangkan aturan masuk kelas setelah bel istirahat selesai.</p>
<div class="fc-container" style="transform: scale(0.9); margin-top: -10px; margin-bottom: -10px;">
<div class="fc-node fc-oval">Bel berbunyi</div>
<div class="fc-arrow-down"></div>
<div class="fc-node fc-rect">Siswa menuju kelas</div>
<div class="fc-arrow-down"></div>
<div class="fc-diamond-wrapper">
<div class="fc-diamond"></div>
<div class="fc-diamond-text">Apakah<br/>membawa buku?</div>
</div>
<div class="fc-row" style="margin-top: 10px;">
<div style="display:flex; flex-direction:column; align-items:center; margin-right: 20px;">
<div style="font-weight:700; margin-bottom:5px; color:var(--red);">TIDAK</div>
<div class="fc-node fc-rect" style="background-color: #ffebee;">Ambil buku dulu</div>
</div>
<div style="display:flex; flex-direction:column; align-items:center; margin-left: 20px;">
<div style="font-weight:700; margin-bottom:5px; color:var(--green);">YA</div>
<div class="fc-node fc-rect" style="background-color: #e8f5e9;">Mulai belajar</div>
</div>
</div>
<div class="fc-arrow-down" style="margin-top:10px;"></div>
<div class="fc-node fc-oval">Pelajaran dimulai</div>
</div>
<p>Alur ini mirip aplikasi: ada awal, ada input/kondisi, ada percabangan, lalu ada hasil. Bedanya, di aplikasi semua aturan harus ditulis jelas dalam blok.</p>
</div>
<h4>Simbol Flowchart</h4>
<div class="slide-text">
<div class="info-grid">
<div class="mini-card" style="background-color:#E3F2FD; display: flex; align-items: center; gap: 15px;">
<div class="fc-node fc-oval" style="min-width: 70px; padding: 10px;">Term</div>
<div>
<h3>Terminator</h3>
<p>Menandai Mulai dan Selesai. Biasanya berbentuk oval.</p>
</div>
</div>
<div class="mini-card" style="background-color:#E8F5E9; display: flex; align-items: center; gap: 15px;">
<div class="fc-node fc-para" style="min-width: 70px; padding: 10px 15px;"><span>In/Out</span></div>
<div>
<h3>Input / Output</h3>
<p>Data masuk/hasil. Biasanya jajar genjang.</p>
</div>
</div>
<div class="mini-card" style="background-color:#FFF8E1; display: flex; align-items: center; gap: 15px;">
<div class="fc-node fc-rect" style="min-width: 70px; padding: 10px;">Proses</div>
<div>
<h3>Process</h3>
<p>Langkah pengolahan (seperti menghitung).</p>
</div>
</div>
<div class="mini-card" style="background-color:#FCE4EC; display: flex; align-items: center; gap: 15px;">
<div class="fc-diamond-wrapper" style="width: 70px; height: 70px; margin: 0;">
<div class="fc-diamond" style="width: 45px; height: 45px;"></div>
<div class="fc-diamond-text" style="font-size:12px;">Cek?</div>
</div>
<div>
<h3>Decision</h3>
<p>Pertanyaan Ya/Tidak. Berbentuk belah ketupat.</p>
</div>
</div>
</div>
<p>Untuk anak SMP, yang paling penting bukan menggambar simbol sempurna, tetapi membuat alur yang runtut dan bisa diterjemahkan menjadi blok.</p>
</div>
<h4>MIT App Inventor</h4>
<div class="slide-text">
<p>Contoh flowchart aplikasi "Cek Pengeluaran":</p>
<ol style="padding-left: 25px; font-size: 20px; line-height: 1.5;">
<li>Mulai ketika tombol ditekan.</li>
<li>Ambil angka dari TextBoxPengeluaran.</li>
<li>Cek apakah input kosong atau bukan angka.</li>
<li>Jika tidak valid, tampilkan pesan error.</li>
<li>Jika valid, cek apakah pengeluaran &gt; Rp25.000.</li>
<li>Tampilkan saran hemat atau saran aman.</li>
</ol>
<div class="block-code" style="background-color:#F7F7F7; color:var(--black);">
<span class="block-badge block-control">when ButtonCek.Click</span><br/>
<span class="block-badge block-control">if</span> <span class="block-badge block-ui">input tidak valid</span> <span class="block-badge block-control">then</span> <span class="block-badge block-ui">ShowAlert</span><br/>
<span class="block-badge block-control">else if</span> <span class="block-badge block-ui">pengeluaran</span> <span class="block-badge block-math">&gt;</span> <span class="block-badge block-math">25000</span> <span class="block-badge block-control">then</span> <span class="block-badge block-text">"Awas boros"</span><br/>
<span class="block-badge block-control">else</span> <span class="block-badge block-text">"Masih aman"</span>
</div>
</div>
<h4>Latihan Blocks</h4>
<div class="slide-text">
<p>Guru bisa menampilkan flowchart ini, lalu siswa menyusun Blocks yang cocok. Ini melatih urutan berpikir sebelum mereka membuka editor Blocks.</p>
<div class="practice-layout">
<div>
<div class="fc-container" style="margin-top: -10px; margin-bottom: -10px; transform: scale(0.75); transform-origin: top center;">
<div class="fc-node fc-oval">ButtonCek Click</div>
<div class="fc-arrow-down"></div>
<div class="fc-node fc-para"><span>Ambil pengeluaran</span></div>
<div class="fc-arrow-down"></div>
<div class="fc-diamond-wrapper">
<div class="fc-diamond"></div>
<div class="fc-diamond-text">Input Valid?</div>
</div>
<div class="fc-row" style="margin-top: 10px;">
<div style="display:flex; flex-direction:column; align-items:center; margin-right: 10px;">
<div style="font-weight:700; margin-bottom:5px; color:var(--red);">TIDAK</div>
<div class="fc-node fc-para" style="background-color: #ffebee;"><span>ShowAlert</span></div>
</div>
<div style="display:flex; flex-direction:column; align-items:center; margin-left: 10px;">
<div style="font-weight:700; margin-bottom:5px; color:var(--green);">YA</div>
<div class="fc-node fc-rect" style="background-color: #e8f5e9;">Hitung status</div>
</div>
</div>
</div>
</div>
<div class="block-stack" style="margin:0;">
<h3>Blocks yang Cocok</h3>
<div class="block-row event">when ButtonCek.Click</div>
<div class="block-row check indent-1">if input kosong atau bukan angka</div>
<div class="block-row warn indent-2">Notifier1.ShowAlert</div>
<div class="block-row action indent-1">else hitung dan bandingkan pengeluaran</div>
<div class="block-row output indent-2">set LabelStatus.Text</div>
</div>
</div>
<p class="tiny-note">Kegiatan kelas: minta siswa menukar posisi dua blok, lalu jelaskan bug yang muncul.</p>
</div>
<h4>Debugging</h4>
<div class="slide-text">
<p>Berikan kasus bug: aplikasi tetap menghitung walaupun kotak pengeluaran kosong. Siswa harus menemukan bagian alur yang salah.</p>
<div class="info-grid">
<div class="mini-card" style="background-color:#FFEBEE;">
<h3>Bug yang Terjadi</h3>
<p>Pengguna menekan ANALISIS tanpa mengisi pengeluaran. Aplikasi tetap menampilkan sisa uang, padahal datanya belum lengkap.</p>
</div>
<div class="mini-card" style="background-color:#E8F5E9;">
<h3>Perbaikan</h3>
<p>Pindahkan proses hitung ke bagian <strong>else</strong>, setelah semua validasi berhasil.</p>
</div>
</div>
<div class="block-stack">
<h3>Alur yang Benar</h3>
<div class="block-row check">if input bermasalah</div>
<div class="block-row warn indent-1">tampilkan pesan error</div>
<div class="block-row action">else baru hitung data</div>
<div class="block-row output indent-1">tampilkan hasil keputusan</div>
</div>
</div>
      </article>
    `
  },
  4: {
    thumbnail: "./thumb_4.png",
    kicker: "Checkpoint 04 · Data",
    title: "Data & Privacy App",
    duration: "Materi 4",
    videoId: "UhutS4BVKhk",
    startSeconds: 2096,
    endSeconds: 2572,
    bookmarks: [{"time": 2118, "label": "Apa Itu Privacy?"}, {"time": 2337, "label": "Empat Prinsip Data Privacy"}, {"time": 2527, "label": "Menerapkan Data Privacy"}, {"time": 2591, "label": "Memahami Data Privacy"}],
    quizzes: [
      {
        time: 2567,
        resume: false,
        questions: [
          {
            question: "<span class=\"slide-title\">Mini Quiz: Data Privacy</span><br><br>Kamu membuat aplikasi penghitung uang saku. Aplikasi hanya perlu tahu nominal uang saku dan pengeluaran.<br><br>Data mana yang tidak perlu diminta?",
            choices: [
              "A. Nominal uang saku hari ini.",
              "B. Total pengeluaran hari ini.",
              "C. Alamat rumah lengkap pengguna."
            ],
            answer: 2,
            explanation: "Aplikasi penghitung uang saku tidak membutuhkan alamat rumah pengguna. Meminta data yang tidak perlu melanggar prinsip data privacy."
          }
        ]
      }
    ],
    summaryHtml: `
      <header class="reading-header">
        <div>
          <p class="label">Materi Bacaan 04</p>
          <h3>Data & Privacy App</h3>
        </div>
      </header>
      <article class="reading-section">
        <h4>Privacy App</h4>
<div class="slide-text">
<p><strong>Privacy</strong> berarti menjaga data pribadi agar tidak digunakan, dilihat, atau dibagikan sembarangan.</p>
<p>Data pribadi bukan hanya password. Nama lengkap, nomor telepon, alamat rumah, lokasi, foto, kebiasaan belanja, dan riwayat aktivitas juga bisa menjadi data pribadi.</p>
<div class="quote-box">Pertanyaan penting pembuat aplikasi: "Apakah aplikasi benar-benar perlu meminta data ini?"</div>
<p>Kalau data tidak diperlukan, jangan diminta. Semakin sedikit data sensitif yang dikumpulkan, semakin kecil risiko penyalahgunaan.</p>
</div>
<h4>Contoh Sekitar</h4>
<div class="slide-text">
<p>Di sekolah, loker menyimpan barang pribadi. Kamu tidak memberikan kunci loker kepada semua orang, karena isinya milikmu.</p>
<div class="info-grid">
<div class="mini-card" style="background-color:#E8F5E9;">
<h3>Kunci Loker</h3>
<p>Diberikan hanya ke orang yang berhak. Kalau hilang, barang bisa diambil orang lain.</p>
</div>
<div class="mini-card" style="background-color:#FCE4EC;">
<h3>Password / PIN</h3>
<p>Diketahui hanya oleh pemilik akun. Kalau bocor, akun bisa disalahgunakan.</p>
</div>
</div>
<p>Itulah alasan aplikasi harus menjaga tampilan, penyimpanan, dan proses data pribadi.</p>
</div>
<h4>Prinsip Aman</h4>
<div class="slide-text">
<div class="info-grid">
<div class="mini-card" style="background-color:#E3F2FD;">
<h3>1. Minta Seperlunya</h3>
<p>Kalau aplikasi hanya menghitung uang saku, tidak perlu meminta alamat rumah.</p>
</div>
<div class="mini-card" style="background-color:#E8F5E9;">
<h3>2. Sembunyikan Data Rahasia</h3>
<p>Password ditulis di <span class="block-badge block-ui">PasswordTextBox</span>, bukan TextBox biasa.</p>
</div>
<div class="mini-card" style="background-color:#FFF8E1;">
<h3>3. Beri Peringatan Jelas</h3>
<p>Kalau data berisiko, aplikasi memberi pesan yang mudah dipahami pengguna.</p>
</div>
<div class="mini-card" style="background-color:#FCE4EC;">
<h3>4. Jangan Tampilkan Berlebihan</h3>
<p>Jangan menampilkan password, nomor PIN, atau data sensitif di Label biasa.</p>
</div>
</div>
</div>
<h4>MIT App Inventor</h4>
<div class="slide-text">
<p>Kita tidak membuat sistem login sungguhan yang rumit. Kita belajar cara membuat tampilan input yang lebih aman dan memberi peringatan saat password kosong.</p>
<div class="app-screen">
<p><strong>Komponen Designer:</strong></p>
<p><span class="block-badge block-ui">TextBoxUsername</span> <span class="block-badge block-ui">PasswordTextBox1</span> <span class="block-badge block-ui">ButtonLogin</span> <span class="block-badge block-ui">Notifier1</span> <span class="block-badge block-ui">LabelStatus</span></p>
</div>
<div class="block-code">
<span class="block-badge block-control">if</span> <span class="block-badge block-ui">PasswordTextBox1.Text</span> <span class="block-badge block-logic">=</span> <span class="block-badge block-text">""</span><br/>
<span class="block-badge block-control">then</span> <span class="block-badge block-ui">Notifier1.ShowAlert</span> <span class="block-badge block-text">"Password belum diisi"</span><br/>
<span class="block-badge block-control">else</span> <span class="block-badge block-ui">LabelStatus.Text</span> <span class="block-badge block-text">"Input diterima"</span>
</div>
<p class="tiny-note">Untuk proyek sekolah, jangan minta password asli siswa. Gunakan password latihan atau kode demo.</p>
</div>
<h4>Designer</h4>
<div class="slide-text">
<p>Tujuan praktik ini adalah mengenalkan cara aplikasi memperlakukan data rahasia. Gunakan akun demo, bukan akun asli siswa.</p>
<div class="practice-layout">
<div class="phone-mock">
<div class="phone-screen">
<div class="app-title-bar">Ruang Data Aman</div>
<div class="mock-label">Nama pengguna</div>
<div class="mock-input">contoh: demo_siswa</div>
<div class="mock-label">Kode rahasia</div>
<div class="mock-input">********</div>
<div class="mock-button">MASUK</div>
<div class="mock-output">Status: kode belum dicek</div>
</div>
</div>
<div class="component-list">
<h3>Komponen di Designer</h3>
<span class="component-pill">TextBoxUsername</span>
<span class="component-pill">PasswordTextBoxKode</span>
<span class="component-pill">ButtonMasuk</span>
<span class="component-pill">LabelStatus</span>
<span class="component-pill">Notifier1</span>
<span class="component-pill">CheckBoxSetuju</span>
<p class="tiny-note">Tambahkan CheckBoxSetuju dengan teks: "Saya paham tidak boleh membagikan kode rahasia."</p>
</div>
</div>
</div>
<h4>Blocks</h4>
<div class="slide-text">
<p>Bloknya bukan untuk membuat keamanan profesional, tetapi untuk mengajarkan kebiasaan aman: jangan kosong, jangan terlalu pendek, dan pengguna harus paham aturan privasi.</p>
<div class="block-stack">
<h3>Gambaran Blocks</h3>
<div class="block-row event">when ButtonMasuk.Click</div>
<div class="block-row check indent-1">if TextBoxUsername.Text = ""</div>
<div class="block-row warn indent-2">Notifier1.ShowAlert "Username belum diisi"</div>
<div class="block-row check indent-1">else if PasswordTextBoxKode.Text = ""</div>
<div class="block-row warn indent-2">Notifier1.ShowAlert "Kode rahasia belum diisi"</div>
<div class="block-row check indent-1">else if length PasswordTextBoxKode.Text &lt; 6</div>
<div class="block-row warn indent-2">Notifier1.ShowAlert "Kode minimal 6 karakter"</div>
<div class="block-row check indent-1">else if CheckBoxSetuju.Checked = false</div>
<div class="block-row warn indent-2">Notifier1.ShowAlert "Centang persetujuan privasi dulu"</div>
<div class="block-row output indent-1">else set LabelStatus.Text to "Input aman untuk latihan"</div>
</div>
<p class="tiny-note">Diskusi kelas: kenapa aplikasi tidak boleh menampilkan isi PasswordTextBox di LabelStatus?</p>
</div>
<h4>Evaluasi Aplikasi</h4>
<div class="slide-text">
<p>Sebelum aplikasi dianggap selesai, siswa bisa memakai checklist ini.</p>
<div class="info-grid">
<div class="mini-card" style="background-color:#E8F5E9;">
<h3>Input</h3>
<ul>
<li>Apakah kolom wajib sudah divalidasi?</li>
<li>Apakah angka benar-benar dicek sebagai angka?</li>
</ul>
</div>
<div class="mini-card" style="background-color:#E3F2FD;">
<h3>Output</h3>
<ul>
<li>Apakah pesan mudah dipahami?</li>
<li>Apakah data sensitif tidak ditampilkan?</li>
</ul>
</div>
<div class="mini-card" style="background-color:#FFF8E1;">
<h3>Logika</h3>
<ul>
<li>Apakah alurnya sesuai flowchart?</li>
<li>Apakah setiap kondisi punya hasil?</li>
</ul>
</div>
<div class="mini-card" style="background-color:#FCE4EC;">
<h3>Privacy</h3>
<ul>
<li>Apakah aplikasi meminta data seperlunya?</li>
<li>Apakah pengguna tahu kenapa data diminta?</li>
</ul>
</div>
</div>
</div>
      </article>
    `
  },
  5: {
    thumbnail: "./thumb_5.png",
    kicker: "Checkpoint 05 · Mini Project",
    title: "Mini Project Cek Pesan Aman",
    duration: "Materi 5",
    videoId: "UhutS4BVKhk",
    startSeconds: 2584,
    endSeconds: 2618,
    bookmarks: [{"time": 2584, "label": "Instruksi Mini Project"}],
    quizzes: [],
    summaryHtml: `
      <header class="reading-header">
        <div>
          <p class="label">Mini Project</p>
          <h3>Cek Pesan Aman</h3>
        </div>
      </header>
      <article class="reading-section">
        <div class="slide-text">
          <p>Tonton instruksi video di atas untuk mengerjakan mini project ini.</p>
        </div>
      </article>
    `
  },
  6: {
    thumbnail: "./thumb_6.png",
    kicker: "Checkpoint 06 · Finansial",
    title: "Menganalisis Data Finansial",
    duration: "Materi 6",
    videoId: "UhutS4BVKhk",
    startSeconds: 2621,
    endSeconds: 2844,
    bookmarks: [{"time": 2632, "label": "Menganalisis Data Finansial"}, {"time": 2664, "label": "Pencatatan Keuangan"}],
    quizzes: [],
    summaryHtml: `
      <header class="reading-header">
        <div>
          <p class="label">Materi Bacaan 05</p>
          <h3>Finansial & Transaksi Digital</h3>
        </div>
      </header>
      <article class="reading-section">
        <h4>Analisis Data</h4>
<div class="slide-text">
<p>Data finansial sederhana adalah catatan tentang uang masuk, uang keluar, sisa uang, dan kebiasaan belanja.</p>
<p>Untuk SMP, tujuannya bukan belajar akuntansi berat. Tujuannya adalah melihat pola: apakah pengeluaran terlalu besar, apakah ada kebiasaan jajan yang bisa dikurangi, dan apakah uang masih cukup untuk kebutuhan penting.</p>
<div class="quote-box" style="background-color:#E8F5E9;">Keputusan finansial yang baik dimulai dari mencatat data dengan jujur.</div>
</div>
<h4>Contoh Sekitar</h4>
<div class="slide-text">
<table style="width:100%; border-collapse: collapse; background-color: var(--white); border: 4px solid var(--black); box-shadow: 6px 6px 0px var(--black); margin-bottom: 25px; font-size: 18px;">
<thead>
<tr style="background-color: var(--yellow);">
<th style="padding: 12px; border: 2px solid var(--black);">Hari</th>
<th style="padding: 12px; border: 2px solid var(--black);">Uang Saku</th>
<th style="padding: 12px; border: 2px solid var(--black);">Pengeluaran</th>
<th style="padding: 12px; border: 2px solid var(--black);">Sisa</th>
</tr>
</thead>
<tbody>
<tr><td style="padding: 10px; border: 2px solid var(--black);">Senin</td><td style="padding: 10px; border: 2px solid var(--black);">30.000</td><td style="padding: 10px; border: 2px solid var(--black);">20.000</td><td style="padding: 10px; border: 2px solid var(--black);">10.000</td></tr>
<tr><td style="padding: 10px; border: 2px solid var(--black);">Selasa</td><td style="padding: 10px; border: 2px solid var(--black);">30.000</td><td style="padding: 10px; border: 2px solid var(--black);">28.000</td><td style="padding: 10px; border: 2px solid var(--black);">2.000</td></tr>
<tr><td style="padding: 10px; border: 2px solid var(--black);">Rabu</td><td style="padding: 10px; border: 2px solid var(--black);">30.000</td><td style="padding: 10px; border: 2px solid var(--black);">15.000</td><td style="padding: 10px; border: 2px solid var(--black);">15.000</td></tr>
</tbody>
</table>
<p>Dari data ini, aplikasi bisa menampilkan hari paling boros, sisa uang terkecil, dan saran agar siswa punya target menabung.</p>
</div>
<h4>MIT App Inventor</h4>
<div class="slide-text">
<p>Aplikasi "Smart Jajan" membantu pengguna mengecek apakah pengeluaran hari ini aman.</p>
<div class="app-screen">
<p><strong>Fitur:</strong></p>
<ul style="padding-left: 25px;">
<li>Input uang saku dan pengeluaran.</li>
<li>Validasi angka dan tidak kosong.</li>
<li>Hitung sisa uang.</li>
<li>Beri status: hemat, aman, atau boros.</li>
</ul>
</div>
<div class="block-code" style="background-color:#F7F7F7; color:var(--black);">
<span class="block-badge block-control">if</span> <span class="block-badge block-ui">pengeluaran</span> <span class="block-badge block-math">&gt;</span> <span class="block-badge block-ui">uangSaku</span><br/>
<span class="block-badge block-control">then</span> <span class="block-badge block-text">"Pengeluaran melebihi uang saku"</span><br/>
<span class="block-badge block-control">else if</span> <span class="block-badge block-ui">sisa</span> <span class="block-badge block-math">&gt;=</span> <span class="block-badge block-math">10000</span><br/>
<span class="block-badge block-control">then</span> <span class="block-badge block-text">"Hemat, sisa uangmu bagus"</span><br/>
<span class="block-badge block-control">else</span> <span class="block-badge block-text">"Aman, tapi coba sisakan lebih banyak"</span>
</div>
</div>
<h4>Designer</h4>
<div class="slide-text">
<p>Versi lebih lengkap dari aplikasi uang saku: siswa memasukkan kategori pengeluaran agar aplikasi tidak hanya menghitung sisa, tetapi juga membaca pola.</p>
<div class="practice-layout">
<div class="phone-mock">
<div class="phone-screen">
<div class="app-title-bar">Smart Jajan</div>
<div class="mock-label">Uang saku</div>
<div class="mock-input">30000</div>
<div class="mock-label">Pengeluaran</div>
<div class="mock-input">22000</div>
<div class="mock-label">Kategori</div>
<div class="mock-input">Makanan / Transport / Hiburan</div>
<div class="mock-button">CEK POLA</div>
<div class="mock-output">Kategori terbesar: Makanan<br/>Saran: kurangi jajan minuman manis.</div>
</div>
</div>
<div class="component-list">
<h3>Komponen di Designer</h3>
<span class="component-pill">TextBoxUangSaku</span>
<span class="component-pill">TextBoxPengeluaran</span>
<span class="component-pill">ListPickerKategori</span>
<span class="component-pill">ButtonCekPola</span>
<span class="component-pill">LabelSisa</span>
<span class="component-pill">LabelSaran</span>
<span class="component-pill">TinyDB1</span>
<p class="tiny-note">TinyDB opsional: dipakai jika ingin menyimpan catatan pengeluaran antar percobaan.</p>
</div>
</div>
</div>
<h4>Blocks</h4>
<div class="slide-text">
<p>Blocks ini membuat aplikasi memberi status yang lebih kaya: melebihi uang saku, hemat, aman, atau perlu mengurangi kategori tertentu.</p>
<div class="block-stack">
<h3>Gambaran Blocks</h3>
<div class="block-row event">when ButtonCekPola.Click</div>
<div class="block-row check indent-1">validasi uang saku, pengeluaran, dan kategori</div>
<div class="block-row action indent-1">set sisa to UangSaku - Pengeluaran</div>
<div class="block-row check indent-1">if Pengeluaran &gt; UangSaku</div>
<div class="block-row warn indent-2">set LabelSaran.Text to "Pengeluaran melebihi uang saku"</div>
<div class="block-row check indent-1">else if sisa &gt;= 10000</div>
<div class="block-row output indent-2">set LabelSaran.Text to "Hemat, sisa uangmu bagus"</div>
<div class="block-row check indent-1">else if Kategori = "Hiburan"</div>
<div class="block-row warn indent-2">set LabelSaran.Text to "Coba batasi hiburan dulu"</div>
<div class="block-row output indent-1">else set LabelSaran.Text to "Masih aman, tetap catat pengeluaran"</div>
</div>
<p class="tiny-note">Tantangan tambahan: simpan kategori dan pengeluaran ke TinyDB, lalu tampilkan riwayat sederhana.</p>
</div>
<h4>Transaksi Digital</h4>
<div class="slide-text">
<p>Transaksi digital terjadi saat kita membeli, membayar, top up, transfer, atau berlangganan lewat perangkat digital.</p>
<p>Risikonya bukan hanya uang hilang. Data pribadi juga bisa dicuri jika pengguna tertipu link palsu atau memberikan OTP/password kepada orang lain.</p>
<div class="info-grid">
<div class="mini-card" style="background-color:#FFEBEE;">
<h3>Risiko</h3>
<ul>
<li>Phishing lewat link palsu.</li>
<li>Hadiah palsu yang meminta password.</li>
<li>Nomor tidak dikenal meminta OTP.</li>
</ul>
</div>
<div class="mini-card" style="background-color:#E8F5E9;">
<h3>Langkah Aman</h3>
<ul>
<li>Cek sumber pesan.</li>
<li>Jangan bagikan OTP atau PIN.</li>
<li>Gunakan aplikasi resmi.</li>
</ul>
</div>
</div>
</div>
<h4>Phishing</h4>
<div class="slide-text">
<p>Phishing adalah penipuan yang menyamar sebagai pihak resmi untuk mencuri data atau uang.</p>
<div style="background-color: var(--red); color: white; padding: 22px; border: 4px solid var(--black); border-radius: 14px; box-shadow: 6px 6px 0px var(--black);">
<strong>Tanda bahaya:</strong>
<ul style="margin-top: 12px; padding-left: 28px;">
<li style="color:white;">Meminta password, PIN, kode OTP, atau data kartu.</li>
<li style="color:white;">Mendesak: "Akun akan diblokir dalam 5 menit!"</li>
<li style="color:white;">Hadiah terlalu bagus untuk dipercaya.</li>
<li style="color:white;">Link terlihat aneh atau berbeda dari situs resmi.</li>
</ul>
</div>
<p class="tiny-note">Aturan sederhana: kalau pesan membuat kamu panik, buru-buru, atau diminta memberi data rahasia, berhenti dulu dan cek ke orang dewasa/akun resmi.</p>
</div>
<h4>Designer</h4>
<div class="slide-text">
<p>Aplikasi ini membantu siswa membaca pesan digital dengan lebih kritis. Pengguna memilih tanda bahaya yang muncul, lalu aplikasi memberi status risiko.</p>
<div class="practice-layout">
<div class="phone-mock">
<div class="phone-screen">
<div class="app-title-bar">Cek Pesan Aman</div>
<div class="mock-label">Isi pesan</div>
<div class="mock-input">"Kirim OTP agar hadiah masuk"</div>
<div class="mock-label">Tanda bahaya</div>
<div class="mock-input">Meminta OTP</div>
<div class="mock-button">CEK RISIKO</div>
<div class="mock-output">Risiko tinggi: jangan balas pesan.</div>
</div>
</div>
<div class="component-list">
<h3>Komponen di Designer</h3>
<span class="component-pill">TextBoxPesan</span>
<span class="component-pill">CheckBoxOTP</span>
<span class="component-pill">CheckBoxPassword</span>
<span class="component-pill">CheckBoxLinkAneh</span>
<span class="component-pill">CheckBoxHadiah</span>
<span class="component-pill">ButtonCekRisiko</span>
<span class="component-pill">LabelRisiko</span>
<p class="tiny-note">Komponen CheckBox cocok untuk latihan ini karena tanda bahaya bisa lebih dari satu.</p>
</div>
</div>
</div>
<h4>Blocks</h4>
<div class="slide-text">
<p>Siswa belajar membuat skor risiko. Semakin banyak tanda bahaya yang dicentang, semakin tinggi risikonya.</p>
<div class="block-stack">
<h3>Gambaran Blocks</h3>
<div class="block-row event">when ButtonCekRisiko.Click</div>
<div class="block-row action indent-1">set global skor to 0</div>
<div class="block-row check indent-1">if CheckBoxOTP.Checked then set skor to skor + 2</div>
<div class="block-row check indent-1">if CheckBoxPassword.Checked then set skor to skor + 2</div>
<div class="block-row check indent-1">if CheckBoxLinkAneh.Checked then set skor to skor + 1</div>
<div class="block-row check indent-1">if CheckBoxHadiah.Checked then set skor to skor + 1</div>
<div class="block-row warn indent-1">if skor &gt;= 3 set LabelRisiko.Text to "Risiko tinggi: jangan klik atau balas"</div>
<div class="block-row output indent-1">else set LabelRisiko.Text to "Tetap cek sumber resmi sebelum percaya"</div>
</div>
<p class="tiny-note">Pertanyaan diskusi: kenapa OTP dan password diberi skor lebih tinggi daripada kata "hadiah"?</p>
</div>
      </article>
    `
  },
  7: {
    thumbnail: "./thumb_7.png",
    kicker: "Checkpoint 07 · Mini Project",
    title: "Mini Project C",
    duration: "Materi 7",
    videoId: "UhutS4BVKhk",
    startSeconds: 2847,
    endSeconds: 3000,
    bookmarks: [{"time": 2847, "label": "Instruksi Mini Project"}],
    quizzes: [],
    summaryHtml: `
      <header class="reading-header">
        <div>
          <p class="label">Mini Project</p>
          <h3>Mini Project C</h3>
        </div>
      </header>
      <article class="reading-section">
        <div class="slide-text">
          <p>Tonton instruksi video di atas untuk mengerjakan mini project ini.</p>
        </div>
      </article>
    `
  },
  8: {
    thumbnail: "./thumb_8.png",
    kicker: "Checkpoint 08 · Keamanan",
    title: "Keamanan dalam Bertransaksi Digital",
    duration: "Materi 8",
    videoId: "UhutS4BVKhk",
    startSeconds: 3155,
    endSeconds: 3683,
    bookmarks: [{"time": 3228, "label": "Transaksi Digital"}, {"time": 3491, "label": "Keamanan Transaksi & OTP"}],
    quizzes: [
      {
        time: 3683,
        resume: false,
        questions: [
          {
            question: "<span class=\"slide-title\">Mini Quiz: Finansial & Keamanan</span><br><br>Kamu menerima pesan: \"Selamat, kamu menang voucher game. Balas pesan ini dengan email dan password akunmu.\"<br><br>Apa tindakan paling aman?",
            choices: [
              "A. Balas dengan email dan password agar voucher dikirim.",
              "B. Abaikan pesan, blokir pengirim, dan cek ke sumber resmi.",
              "C. Berikan password lama saja supaya tidak terlalu bahaya."
            ],
            answer: 1,
            explanation: "Sangat penting untuk tidak membagikan password kepada siapapun. Pihak resmi tidak pernah meminta password. Mengabaikan dan memblokir pengirim adalah langkah yang tepat."
          }
        ]
      }
    ],
    summaryHtml: `
      <header class="reading-header">
        <div>
          <p class="label">Materi Bacaan 08</p>
          <h3>Keamanan dalam Bertransaksi Digital</h3>
        </div>
      </header>
      <article class="reading-section">
        <div class="slide-text">
          <p>Materi tentang keamanan saat melakukan transaksi digital, mengenali penipuan (phishing), dan menjaga kerahasiaan OTP serta password.</p>
        </div>
      </article>
    `
  },
  9: {
    thumbnail: "./thumb_9.png",
    kicker: "Checkpoint 09 · Final Project",
    title: "Final Project",
    duration: "Materi 9",
    videoId: "UhutS4BVKhk",
    startSeconds: 3700,
    bookmarks: [{"time": 3700, "label": "Instruksi Final Project"}],
    quizzes: [],
    summaryHtml: `
      <header class="reading-header">
        <div>
          <p class="label">Final Project</p>
          <h3>Final Project</h3>
        </div>
      </header>
      <article class="reading-section">
        <div class="slide-text">
          <p>Tonton instruksi video di atas untuk menyelesaikan Final Project dan mengakhiri pembelajaran.</p>
          <iframe src="./sandbox_finalproject.html" style="width: 100%; height: 600px; border: 4px solid var(--black); border-radius: 16px; margin-top: 20px; box-shadow: 6px 6px 0px var(--black);"></iframe>
        </div>
      </article>
    `
  }
};
