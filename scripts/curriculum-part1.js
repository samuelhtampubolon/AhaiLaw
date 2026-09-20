const fs = require('fs');
const path = require('path');

// Complete Curriculum for AhaiLaw: 8 Leagues, 80 Islands, 240 Unique Legal Dilemmas.
// All cases are realistic, legally coherent, and written in rich Indonesian jurisprudence context.

const curriculum = [];

// League helper
function addLeague(lvl, name, desc, islands) {
  curriculum.push({ lvl, name, desc, islands });
}

// LEAGUE 1: FONDASI, ASAS & FILSAFAT HUKUM (10 Islands x 3 Cases = 30 Cases)
addLeague(1, "Liga Pemula (Fondasi & Filsafat Hukum)", "Filsafat, Asas, dan Pengantar Ilmu Hukum", [
  {
    idx: 1, title: "Asas Keadilan vs Kepastian Hukum (Formula Radbruch)", cases: [
      {
        title: "Pencurian 3 Butir Buah Kakao Nenek Minah",
        facts: ["Nenek Minah (55 tahun) memetik 3 buah kakao seharga Rp 2.100 yang jatuh di perkebunan swasta untuk dijadikan bibit.", "Manajemen perkebunan menolak damai dan menuntut penuntutan pidana pencurian ringan (Pasal 364 KUHP).", "Jaksa menuntut hukuman penjara demi menjaga asas perlakuan sama di muka hukum."],
        optA: { action: "Hentikan Penuntutan melalui Keadilan Restoratif (Perja No. 15/2020)", consequence: "Keadilan substantif tercapai, kemanusiaan lansia miskin dilindungi tanpa pemenjaraan sia-sia.", keadilan: 95, kepastian: 30, kemanfaatan: 90, alignmentShift: -25 },
        optB: { action: "Vonis Penjara Sesuai Teks Formal Pasal (Positivisme Hukum)", consequence: "Kepastian teks perundang-undangan ditegakkan kaku, namun memicu kecaman publik atas hilangnya empati hukum.", keadilan: 15, kepastian: 95, kemanfaatan: 20, alignmentShift: 25 }
      },
      {
        title: "Sopir Ambulans Menerobos Lampu Merah Demi Pasien Serangan Jantung",
        facts: ["Sopir ambulans membawa pasien serangan jantung kritis yang membutuhkan penanganan medis dalam hitungan menit.", "Di perempatan padat, sopir membunyikan sirine dan menerobos lampu merah, tertangkap oleh kamera tilang elektronik (ETLE).", "Dinas Perhubungan menolak mencabut tilang dengan alasan rambu berlaku mutlak bagi semua pengguna jalan."],
        optA: { action: "Gunakan Doktrin Noodtoestand (Keadaan Darurat Menghapus Sifat Melawan Hukum)", consequence: "Denda tilang dibatalkan, penyelamatan nyawa diakui sebagai nilai hukum tertinggi.", keadilan: 90, kepastian: 40, kemanfaatan: 95, alignmentShift: -20 },
        optB: { action: "Pertahankan Sanksi Denda demi Ketertiban Berlalu Lintas", consequence: "Kepastian aturan jalan raya ditegakkan tanpa kompromi, namun membahayakan armada medis darurat.", keadilan: 25, kepastian: 90, kemanfaatan: 30, alignmentShift: 20 }
      },
      {
        title: "Penolakan Prajurit atas Perintah Menembak Demonstran Tak Bersenjata",
        facts: ["Seorang komandan memerintahkan pasukannya melepaskan peluru tajam ke arah mahasiswa yang sedang duduk berunjuk rasa.", "Seorang bintara menolak menarik pelatuk senjata karena menyadari demonstran tidak bersenjata dan tidak mengancam nyawa.", "Komandan mengajukan bintara tersebut ke Mahkamah Militer atas tuduhan insubordinasi militer."],
        optA: { action: "Bebaskan Bintara (Perintah yang Melawan Hukum Nyata Wajib Ditolak Sesuai HAM)", consequence: "Integritas moral prajurit ditegakkan; hukum menolak doktrin kepatuhan buta pada kejahatan.", keadilan: 95, kepastian: 40, kemanfaatan: 85, alignmentShift: -25 },
        optB: { action: "Hukum Disiplin Militer demi Menjaga Rantai Komando", consequence: "Hierarki militer terjaga ketat, namun membuka ruang tirani bagi komandan yang sewenang-wenang.", keadilan: 20, kepastian: 95, kemanfaatan: 25, alignmentShift: 25 }
      }
    ]
  },
  {
    idx: 2, title: "Asas Legalitas & Larangan Retroaktif (Nullum Delictum)", cases: [
      {
        title: "Pemberlakuan Hukuman Kebiri Kimia Terhadap Pelaku Kejahatan Anak",
        facts: ["Terdakwa melakukan pelecehan seksual kepada 5 anak dua pekan sebelum UU Perlindungan Anak baru disahkan.", "Keluarga korban menuntut hakim menjatuhkan sanksi kebiri kimia yang tercantum dalam undang-undang baru.", "Pasal 1 ayat 1 KUHP dan Pasal 28I UUD 1945 melarang penerapan pidana yang berlaku surut (non-retroaktif)."],
        optA: { action: "Terapkan Aturan Saat Perbuatan Dilakukan (Asas Non-Retroaktif)", consequence: "Asas fundamental perlindungan HAM ditegakkan dari kesewenang-wenangan legislasi negara.", keadilan: 40, kepastian: 95, kemanfaatan: 40, alignmentShift: 20 },
        optB: { action: "Terapkan Hukuman Kebiri Baru Demi Keadilan Korban Anak", consequence: "Rasa keadilan keluarga korban terpenuhi, namun tatanan asas non-retroaktif konstitusi runtuh.", keadilan: 75, kepastian: 20, kemanfaatan: 60, alignmentShift: -25 }
      },
      {
        title: "Jerat Pidana Modus Baru Pencurian Rekening Lewat Penggandaan Simcard",
        facts: ["Sindikat membobol rekening perbankan korban dengan teknik SIM swap yang belum diatur secara spesifik dalam KUHP lama.", "Korban kehilangan tabungan pensiun senilai Rp 500 juta dalam hitungan detik.", "Jaksa mencoba menggunakan analogi pasal pencurian barang fisik konvensional untuk menjerat pelaku."],
        optA: { action: "Tolak Analogi Pasal Pidana demi Menjunjung Asas Legalitas Mutlak", consequence: "Menjaga batas ketat hukum pidana, mendesak penegak hukum memakai pasal cyber UU ITE yang tepat.", keadilan: 35, kepastian: 95, kemanfaatan: 30, alignmentShift: 25 },
        optB: { action: "Gunakan Penafsiran Teleologis agar Pelaku Kejahatan Modern Tidak Lolos", consequence: "Pelaku pembobol rekening dipenjara, namun membuka celah penafsiran elastis pasal pidana.", keadilan: 90, kepastian: 40, kemanfaatan: 85, alignmentShift: -20 }
      },
      {
        title: "Pencabutan Izin Tambang Berdasarkan Perda Zonasi yang Baru Terbit",
        facts: ["Perusahaan tambang memiliki izin operasi 10 tahun yang diterbitkan sah menurut regulasi tahun 2021.", "Pemerintah kabupaten menerbitkan Perda baru tentang kawasan lindung dan langsung membekukan izin tambang tanpa masa transisi.", "Perusahaan menuntut ganti rugi karena hak sah yang telah diperoleh (vested rights) dicabut sepihak."],
        optA: { action: "Menangkan Perusahaan (Prinsip Perlindungan Hak Sah & Non-Retroaktif)", consequence: "Kepastian iklim investasi terjaga; pemerintah wajib memberi kompensasi atau masa transisi wajar.", keadilan: 50, kepastian: 95, kemanfaatan: 55, alignmentShift: 15 },
        optB: { action: "Menangkan Pemkab (Asas Salus Populi Suprema Lex - Perlindungan Ekologis)", consequence: "Kerusakan alam terhenti seketika, namun menimbulkan ketakutan regulasi bagi dunia usaha.", keadilan: 80, kepastian: 30, kemanfaatan: 80, alignmentShift: -20 }
      }
    ]
  },
  {
    idx: 3, title: "Hukum Kodrat vs Positivisme Yuridis (Hans Kelsen)", cases: [
      {
        title: "Penggusuran Pemukiman Tepi Sungai Tanpa Ganti Rugi",
        facts: ["Seratus keluarga telah bermukim di bantaran sungai selama 50 tahun dan rutin membayar PBB.", "Pemerintah kota hendak menormalisasi sungai untuk mitigasi banjir massal yang mengancam 1 juta warga kota.", "Secara sertifikat formal, tanah tersebut adalah tanah negara bebas (vrij staatsdomein) tanpa hak milik privat warga."],
        optA: { action: "Wajibkan Kompensasi Manusiawi & Relokasi Layak (Hukum Kodrat / Progresif)", consequence: "Hak hidup bermartabat warga miskin dijamin negara tanpa mengorbankan proyek mitigasi banjir.", keadilan: 90, kepastian: 50, kemanfaatan: 90, alignmentShift: -20 },
        optB: { action: "Eksekusi Pengosongan Tanpa Ganti Rugi Berdasarkan Status Tanah Negara", consequence: "Anggaran proyek efisien dan cepat selesai, namun melahirkan gelombang kemiskinan tunawisma baru.", keadilan: 20, kepastian: 95, kemanfaatan: 40, alignmentShift: 25 }
      },
      {
        title: "Perjanjian Kerjasama Pupuk yang Mengikat Petani Secara Berat Sebelah",
        facts: ["Kelompok tani menandatangani kontrak jual beli pupuk dengan denda Rp 10 juta per hari jika gagal setor hasil panen.", "Terjadi serangan hama wereng dahsyat yang memusnahkan 90% panen padi warga desa.", "Pabrik pupuk menuntut sita jaminan sawah petani sesuai teks asas Pacta Sunt Servanda."],
        optA: { action: "Gugurkan Klausul Denda Berdasarkan Asas Kepatutan & Keadilan Alami", consequence: "Petani kecil terlindungi dari jerat perbudakan utang korporasi yang tidak seimbang.", keadilan: 95, kepastian: 35, kemanfaatan: 85, alignmentShift: -25 },
        optB: { action: "Eksekusi Klausul Perjanjian demi Menegakkan Kepastian Perikatan Bisnis", consequence: "Kepastian kontrak formal ditegakkan kaku, namun puluhan petani kehilangan sawah seumur hidup.", keadilan: 20, kepastian: 95, kemanfaatan: 20, alignmentShift: 25 }
      },
      {
        title: "Pengakuan Perkawinan Penghayat Kepercayaan pada Catatan Sipil",
        facts: ["Pasangan penganut ajaran leluhur Sunda Wiwitan hendak mencatatkan pernikahan mereka di Dinas Dukcapil.", "Petugas menolak karena ajaran tersebut belum masuk dalam daftar 6 agama resmi negara pada formulir baku.", "Pasangan menggugat atas dasar hak asasi konstitusional untuk memeluk keyakinan dan membentuk keluarga sah."],
        optA: { action: "Wajibkan Pencatatan Perkawinan Berdasarkan Putusan MK No. 97/PUU-XIV/2016", consequence: "Diskriminasi administrasi dihapus, seluruh warga negara setara di hadapan hukum tanpa kecuali.", keadilan: 95, kepastian: 70, kemanfaatan: 90, alignmentShift: -15 },
        optB: { action: "Tolak Pencatatan Demi Ketertiban Dokumen Administrasi Negara yang Baku", consequence: "Kerapian sistem birokrasi lama terjaga, namun hak sipil keturunan penghayat terabaikan.", keadilan: 25, kepastian: 85, kemanfaatan: 30, alignmentShift: 20 }
      }
    ]
  },
  {
    idx: 4, title: "Asas Kepatutan & Keadilan Substantif (Hukum Progresif)", cases: [
      {
        title: "Pemanfaatan Listrik Balai Desa untuk Inkubator Bayi Prematur",
        facts: ["Badai tropis memutus listrik total di puskesmas pedalaman pulau terpencil.", "Kepala dusun menarik kabel darurat dari panel surya kantor pos pemda yang terkunci untuk menyalakan inkubator 2 bayi prematur.", "Petugas pemda melaporkan kepala dusun atas tuduhan perusakan aset dan pencurian tenaga listrik."],
        optA: { action: "Bebaskan Kepala Dusun atas Dasar Daya Paksa Penyelamatan Nyawa", consequence: "Kemanusiaan diutamakan melampaui kerugian materiil ringan fasilitas negara.", keadilan: 95, kepastian: 40, kemanfaatan: 95, alignmentShift: -25 },
        optB: { action: "Jatuhkan Denda Materiil demi Menegakkan Aturan Aset Barang Milik Negara", consequence: "Aset negara steril dari intervensi tak berizin, namun memicu kekecewaan warga atas birokrasi dingin.", keadilan: 20, kepastian: 90, kemanfaatan: 30, alignmentShift: 20 }
      },
      {
        title: "Pengambilan Ranting Kayu Roboh di Kawasan Hutan Lindung untuk Memasak",
        facts: ["Seorang kakek sebatang kara mengumpulkan ranting jati kering yang patah akibat angin di pinggir hutan lindung.", "Polisi hutan menyita kayu seberat 5 kg dan mengenakan pasal perusakan habitat konservasi.", "Kakek tersebut tidak memiliki uang untuk membeli elpiji dan hanya ingin merebus ubi untuk makan malam."],
        optA: { action: "Terapkan Asas Keadilan Restoratif & Berikan Pembinaan Kesejahteraan", consequence: "Mencegah kriminalisasi kemiskinan dan memulihkan keharmonisan warga sekitar hutan.", keadilan: 95, kepastian: 30, kemanfaatan: 90, alignmentShift: -25 },
        optB: { action: "Tuntut Pidana Kurungan Minimal demi Menjaga Wibawa Hukum Kehutanan", consequence: "Efek gentar di kawasan hutan terjaga, namun menciderai nurani keadilan publik.", keadilan: 15, kepastian: 95, kemanfaatan: 15, alignmentShift: 30 }
      },
      {
        title: "Pemotongan Dahan Pohon Beringin Tetangga yang Nyaris Roboh",
        facts: ["Dahan pohon beringin milik warga A lapuk dan condong tepat di atas atap kamar tidur bayi warga B.", "Warga A berulang kali menolak memotong dahan karena alasan takhayul warisan leluhur.", "Warga B akhirnya menyewa tukang potong pohon saat warga A pergi; warga A menuntut atas perusakan properti."],
        optA: { action: "Bebaskan Warga B (Tindakan Perlindungan Keselamatan Nyawa yang Nyata)", consequence: "Pencegahan marabahaya fisik diprioritaskan di atas kepemilikan benda vegetasi pekarangan.", keadilan: 85, kepastian: 45, kemanfaatan: 85, alignmentShift: -15 },
        optB: { action: "Hukum Warga B karena Main Hakim Sendiri (Eigenrichting)", consequence: "Ketertiban sengketa perdata dijaga lewat pengadilan, namun risiko kecelakaan fisik terabaikan.", keadilan: 30, kepastian: 90, kemanfaatan: 35, alignmentShift: 20 }
      }
    ]
  },
  {
    idx: 5, title: "Hermeneutika Hukum: Penafsiran Teleologis vs Gramatikal", cases: [
      {
        title: "Apakah Mengunduh Arus Listrik Termasuk Pencurian 'Barang'?",
        facts: ["Terdakwa mencantol kabel listrik penerangan jalan umum untuk mengisi daya mobil listrik sewaannya.", "Jaksa menuntut terdakwa dengan Pasal 362 KUHP tentang Pencurian 'Barang yang seluruhnya milik orang lain'.", "Pengacara berdalih elektron listrik adalah energi tak kasat mata, bukan barang berwujud."],
        optA: { action: "Gunakan Penafsiran Teleologis: Energi Listrik Berharga Ekonomi Adalah 'Barang'", consequence: "Melindungi fasilitas energi publik dari penyalahgunaan modern tanpa kekosongan hukum.", keadilan: 80, kepastian: 70, kemanfaatan: 80, alignmentShift: 0 },
        optB: { action: "Tafsirkan Gramatikal Ketat: Bebaskan dari Pasal Pencurian Barang Konvensional", consequence: "Menuntut jaksa menggunakan UU Ketenagalistrikan spesifik daripada memaksakan KUHP usang.", keadilan: 55, kepastian: 90, kemanfaatan: 50, alignmentShift: 15 }
      },
      {
        title: "Status Skuter Listrik Kecepatan Tinggi di Jalur Pejalan Kaki",
        facts: ["Pengendara skuter listrik berdaya 1.000 Watt menabrak lansia di trotoar hingga patah tulang kaki.", "Polisi mendakwa pasal kelalaian mengemudikan kendaraan bermotor di jalan umum (UU LLAJ).", "Kuasa hukum mengklaim skuter beroda dua mikro bukan kendaraan bermotor menurut definisi UU 2009."],
        optA: { action: "Tafsirkan Teleologis: Segala Sarana Bertenaga Mesin Wajib Bertanggung Jawab", consequence: "Pejalan kaki di trotoar terlindungi dari bahaya kendaraan mikro berkecepatan tinggi.", keadilan: 85, kepastian: 60, kemanfaatan: 85, alignmentShift: -10 },
        optB: { action: "Tafsirkan Gramatikal: Tolak Kualifikasi Kendaraan Bermotor Jalan Raya", consequence: "Mendorong parlemen memperbarui regulasi, namun korban saat ini sulit mendapat santunan Jasa Raharja.", keadilan: 35, kepastian: 90, kemanfaatan: 30, alignmentShift: 25 }
      },
      {
        title: "Penafsiran 'Kerugian Keuangan Negara' pada Kebijakan Bencana Letusan Gunung",
        facts: ["Bupati membeli tenda tanggap darurat saat erupsi dengan harga 15% di atas HPS karena kelangkaan stok pasar.", "Audit BPK menemukan kelebihan pembayaran dan jaksa mendakwa Pasal 2 UU Tipikor atas kerugian negara.", "Bupati membuktikan seluruh tenda berdiri menyelamatkan 5.000 pengungsi tanpa ada uang yang masuk ke kantong pribadi."],
        optA: { action: "Tafsirkan Filosofis UU Tipikor: Tidak Ada Niat Jahat Korup (Absennya Mens Rea)", consequence: "Kepala daerah tidak lumpuh mengambil keputusan darurat demi menyelamatkan jiwa ribuan korban bencana.", keadilan: 95, kepastian: 40, kemanfaatan: 95, alignmentShift: -25 },
        optB: { action: "Tafsirkan Gramatikal Akuntansi: Selisih Bayar Tetaplah Kerugian Keuangan Negara", consequence: "Disiplin fiskal dijaga sangat kaku, namun memicu apatisme birokrasi saat musibah tiba.", keadilan: 20, kepastian: 95, kemanfaatan: 15, alignmentShift: 30 }
      }
    ]
  },
  {
    idx: 6, title: "Hirarki Peraturan Perundang-Undangan & Lex Superior", cases: [
      {
        title: "Perda Jam Malam Pekerja Perempuan Bertentangan dengan UU Ketenagakerjaan",
        facts: ["Perda melarang wanita bekerja di luar rumah lewat pukul 22.00 dengan ancaman sanksi denda.", "Asosiasi perawat dan buruh pabrik tekstil menggugat karena menghambat shift malam yang dijamin UU Ketenagakerjaan.", "Pemerintah kota bersikeras aturan dibuat untuk ketertiban moral lokal."],
        optA: { action: "Batalkan Perda Berdasarkan Asas Lex Superior Derogat Legi Inferiori", consequence: "Hak persamaan kerja perempuan dijamin, konsistensi hukum nasional ditegakkan.", keadilan: 90, kepastian: 85, kemanfaatan: 85, alignmentShift: -10 },
        optB: { action: "Pertahankan Perda Atas Nama Otonomi Khusus & Kearifan Moral Daerah", consequence: "Aspirasi konservatif lokal diakomodasi, namun menciptakan fragmentasi hak asasi nasional.", keadilan: 25, kepastian: 45, kemanfaatan: 30, alignmentShift: 20 }
      },
      {
        title: "Surat Edaran Dirjen Pajak yang Membatasi Hak Restitusi Cepat",
        facts: ["Dirjen Pajak menerbitkan Surat Edaran yang memperketat syarat restitusi wajib pajak di luar koridor UU KUP.", "Pengusaha UMKM menggugat ke PTUN bahwa SE bukanlah undang-undang yang boleh mengurangi hak warga.", "Dirjen beralasan SE adalah petunjuk teknis diskresi untuk mengamankan kas negara."],
        optA: { action: "Nyatakan SE Tidak Memiliki Kekuatan Hukum Mengikat Publik (Cacat Wewenang)", consequence: "Mencegah pejabat menerbitkan aturan internal yang melangkahi undang-undang resmi parlemen.", keadilan: 85, kepastian: 95, kemanfaatan: 75, alignmentShift: 10 },
        optB: { action: "Sahkan Keberlakuan SE Demi Target Pencapaian Penerimaan APBN", consequence: "Kas negara cepat terkumpul, namun mengikis kepastian hak-hak wajib pajak taat hukum.", keadilan: 30, kepastian: 35, kemanfaatan: 50, alignmentShift: -15 }
      },
      {
        title: "Perpres Pengadaan Tanah Cepat vs Putusan Mahkamah Konstitusi",
        facts: ["Perpres proyek strategis nasional memperbolehkan penggusuran fisik tanah sebelum sengketa ganti rugi tuntas.", "Warga menunjukkan Putusan MK yang menegaskan ganti kerugian wajib tuntas terlebih dahulu sebelum lahan dikuasai.", "Kementerian berargumen keterlambatan jalan tol merugikan perekonomian triliunan rupiah."],
        optA: { action: "Tunduk Mutlak pada Putusan MK sebagai Tafsir Konstitusi Tertinggi", consequence: "Hak milik warga dihormati, mencegah praktik perampasan tanah oleh aparatur negara.", keadilan: 95, kepastian: 95, kemanfaatan: 70, alignmentShift: 0 },
        optB: { action: "Dahulukan Target Kelancaran Infrastruktur Mengacu pada Perpres", consequence: "Jalan tol selesai tepat waktu, namun melanggar marwah konstitusi dan hak kepemilikan tanah.", keadilan: 20, kepastian: 30, kemanfaatan: 60, alignmentShift: -25 }
      }
    ]
  },
  {
    idx: 7, title: "Asas Fiksi Hukum & Presumsi Setiap Orang Tahu UU", cases: [
      {
        title: "Warga Pelosok Merawat Burung Kakatua Raja yang Terluka",
        facts: ["Warga pedalaman merawat kakatua raja yang patah sayapnya di serambi rumah hingga sehat.", "Polisi menangkapnya dengan ancaman penjara 5 tahun berdasarkan UU Konservasi Hayati.", "Warga tersebut buta huruf, tinggal tanpa listrik dan sinyal, serta belum pernah mendapat sosialisasi undang-undang."],
        optA: { action: "Bebaskan Pelaku dari Jerat Pidana & Sita Satwa untuk Rehabilitasi", consequence: "Keadilan kontekstual ditegakkan tanpa menindas masyarakat rentan yang belum terlayani literasi hukum.", keadilan: 95, kepastian: 40, kemanfaatan: 90, alignmentShift: -25 },
        optB: { action: "Jatuhkan Vonis Sesuai Asas Fiksi Hukum (Ignorantia Juris Non Excusat)", consequence: "Asas fiksi hukum dijunjung tinggi tanpa pandang bulu, namun melahirkan potret kezaliman peradilan.", keadilan: 15, kepastian: 95, kemanfaatan: 15, alignmentShift: 30 }
      },
      {
        title: "Pedagang Sayur Keliling Memakai Kantong Plastik yang Baru Dilarang",
        facts: ["Pemerintah daerah mengesahkan Perda larangan kantong kresek yang baru diundangkan 4 hari lalu.", "Satpol PP mendenda pedagang sayur keliling sebesar Rp 500.000 karena membungkus terong dengan kantong plastik lama.", "Denda tersebut setara dengan omzet berdagang sang ibu selama tiga hari bekerja."],
        optA: { action: "Batalkan Denda & Berikan Peringatan Lisan serta Sosialisasi Bertahap", consequence: "Penegakan hukum berorientasi pembinaan humanis tanpa mematikan nafkah pedagang gurem.", keadilan: 90, kepastian: 50, kemanfaatan: 90, alignmentShift: -20 },
        optB: { action: "Tegakkan Sanksi Penuh Mengacu pada Tanggal Lembaran Daerah", consequence: "Ketegasan aturan lingkungan ditegakkan seketika, namun menimbulkan luka sosial pedagang kecil.", keadilan: 25, kepastian: 95, kemanfaatan: 30, alignmentShift: 20 }
      },
      {
        title: "Petani Membawa Golok Penebas Semak Saat Melintasi Operasi Razia",
        facts: ["Kakek petani membawa golok pemangkas semak di boncengan sepeda tuanya saat melintasi razia malam cipta kondisi.", "Aparat menjeratnya dengan UU Darurat No. 12 Tahun 1951 tentang Kepemilikan Senjata Tajam ancaman 10 tahun penjara.", "Kakek membuktikan ia baru pulang membabat kebun kelapa sawit miliknya di pinggir desa."],
        optA: { action: "Hentikan Perkara Pidana: Golok Adalah Alat Kerja Sah (Legitimate Purpose)", consequence: "Menjauhkan pasal darurat dari kriminalisasi profesi agraris tradisional.", keadilan: 95, kepastian: 60, kemanfaatan: 90, alignmentShift: -20 },
        optB: { action: "Proses Pidana Mengingat Membawa Senjata Tajam di Tempat Umum Dilarang Mutlak", consequence: "Ketertiban malam perkotaan steril tanpa kompromi, namun merampas kemerdekaan kakek tak bersalah.", keadilan: 10, kepastian: 90, kemanfaatan: 20, alignmentShift: 25 }
      }
    ]
  },
  {
    idx: 8, title: "Hukum Adat / Kebiasaan vs Kodifikasi Hukum Tertulis", cases: [
      {
        title: "Penebangan Kayu Ulin Hutan Ulayat untuk Upacara Pemakaman Adat",
        facts: ["Masyarakat adat menebang satu pohon ulin di hutan ulayat leluhur untuk upacara sakral pemakaman adat.", "Kawasan tersebut baru dipetakan sepihak oleh pemerintah sebagai Taman Nasional konservasi.", "Polisi kehutanan menahan tetua adat atas sangkaan illegal logging."],
        optA: { action: "Akui Hak Ulayat Komunitas Adat Berdasarkan Pasal 18B UUD 1945", consequence: "Hak konstitusional masyarakat adat dipulihkan, membina sinergi adat dan konservasi hutan.", keadilan: 95, kepastian: 45, kemanfaatan: 85, alignmentShift: -25 },
        optB: { action: "Hukum Berdasarkan UU Kehutanan Tertulis Demi Menjaga Status Taman Nasional", consequence: "Batas zona konservasi steril mutlak, namun menindas warisan budaya bangsa yang telah ada ratusan tahun.", keadilan: 20, kepastian: 95, kemanfaatan: 40, alignmentShift: 25 }
      },
      {
        title: "Musyawarah Perdamaian Kasus Perkelahian Pemuda di Desa Adat",
        facts: ["Dua pemuda banjar terlibat perkelahian dan diselesaikan damai lewat sanksi adat oleh pemuka desa.", "Paman korban di kota melaporkan peristiwa tersebut ke polsek dan menuntut sidang pidana KUHP.", "Masyarakat desa adat keberatan karena intervensi kepolisian membuka kembali luka persaudaraan yang telah pulih."],
        optA: { action: "Hormati Perdamaian Adat & Hentikan Penyidikan Melalui Pendekatan Restoratif", consequence: "Kedamaian desa adat terjaga murni tanpa menambah beban lembaga pemasyarakatan.", keadilan: 90, kepastian: 50, kemanfaatan: 95, alignmentShift: -20 },
        optB: { action: "Lanjutkan Proses Peradilan Pidana Negara (Monopoli Penuntutan Publik)", consequence: "Dominasi penegakan hukum formal negara dipertahankan, namun merusak tatanan harmoni desa.", keadilan: 30, kepastian: 90, kemanfaatan: 30, alignmentShift: 20 }
      },
      {
        title: "Sengketa Batas Tanah Parit Alam vs Pengukuran Satelit Digital BPN",
        facts: ["Dua tetangga menyepakati batas tanah warisan berupa parit air alami yang diakui tiga generasi keluarga.", "Program sertifikasi massal BPN menggunakan drone satelit menggeser batas garis lurus 2 meter ke pekarangan warga tetangga.", "Tetangga penikmat pergeseran menuntut perataan pagar mengandalkan sertifikat baru BPN."],
        optA: { action: "Menangkan Batas Parit Fisik Berdasarkan Kesepakatan Historis Iktikad Baik", consequence: "Kerukunan bertetangga terselamatkan sesuai kebenaran materiil penguasaan tanah.", keadilan: 85, kepastian: 40, kemanfaatan: 85, alignmentShift: -15 },
        optB: { action: "Tegakkan Garis Batas Koordinat Digital BPN Demi Kepastian Kadaster", consequence: "Sistem pendaftaran tanah digital negara terjamin absolut, namun memicu permusuhan abadi tetangga.", keadilan: 35, kepastian: 95, kemanfaatan: 40, alignmentShift: 20 }
      }
    ]
  },
  {
    idx: 9, title: "Diskresi Penegak Hukum vs Penyalahgunaan Wewenang", cases: [
      {
        title: "Kapolsek Menghentikan Kasus Pencuri Tabung Gas Demi Beli Susu Bayi",
        facts: ["Pemuda tertangkap basah mencuri tabung gas melon di warung tetangga untuk membeli obat demam bayinya yang menggigil.", "Kapolsek mengganti kerugian korban warung dengan uang pribadinya dan mendamaikan kedua pihak.", "Sebuah LSM melaporkan Kapolsek ke Propam atas dugaan menghentikan penyidikan tanpa gelar perkara formal SP3."],
        optA: { action: "Apresiasi Diskresi Humanis Kapolsek (Keadilan Restoratif)", consequence: "Polisi dicintai rakyat sebagai pengayom sejati, keadilan restoratif terwujud nyata.", keadilan: 95, kepastian: 40, kemanfaatan: 95, alignmentShift: -25 },
        optB: { action: "Jatuhkan Teguran Etik karena Mengabaikan Prosedur Formil KUHAP", consequence: "Kepatuhan birokrasi penegakan hukum terjaga rapi, namun memadamkan empati aparat terhadap orang miskin.", keadilan: 20, kepastian: 95, kemanfaatan: 20, alignmentShift: 25 }
      },
      {
        title: "Jaksa Menolak Melimpahkan Berkas Perkara Kakek yang Membela Cucunya",
        facts: ["Seorang kakek melumpuhkan pelaku pemerkosa cucunya dengan balok kayu hingga pelaku patah rahang.", "Penyidik kepolisian melimpahkan berkas dengan tuduhan penganiayaan berat (Pasal 351 KUHP).", "Kepala Kejaksaan Negeri menerbitkan SKP2 penghentian penuntutan demi keadilan."],
        optA: { action: "Sahkan Penghentian Penuntutan oleh Jaksa (Dominus Litis Berkeadilan Substantif)", consequence: "Korban dan pelindung keluarga terlindungi dari penderitaan menjadi terdakwa di ruang pengadilan.", keadilan: 95, kepastian: 50, kemanfaatan: 90, alignmentShift: -20 },
        optB: { action: "Paksa Jaksa Bawa Perkara ke Meja Hijau agar Diputus oleh Majelis Hakim", consequence: "Pemisahan peran penyidik, jaksa, dan hakim terjaga murni, namun membebani kakek tua yang trauma.", keadilan: 30, kepastian: 90, kemanfaatan: 30, alignmentShift: 20 }
      },
      {
        title: "Hakim Menjatuhkan Vonis Pemaafan Peradilan atas Pencuri Obat",
        facts: ["Seorang ibu mencuri obat antibiotik di apotek senilai Rp 70.000 karena anaknya kejang demam dan ia tidak punya uang.", "Di persidangan, ibu tersebut menangis bersimpuh dan pemilik apotek telah memaafkannya.", "Hakim memutus bersalah namun membebaskan dari segala pidana penjara (Pemaafan Hakim KUHP Baru)."],
        optA: { action: "Dukung Putusan Pemaafan Hakim sebagai Wajah Humanis Hukum Modern", consequence: "Hukum pidana berevolusi dari sarana pembalasan dendam menjadi sarana pemulihan keadilan bermartabat.", keadilan: 95, kepastian: 60, kemanfaatan: 95, alignmentShift: -20 },
        optB: { action: "Tuntut Hukuman Penjara Minimal Demi Efek Jera Masyarakat Luas", consequence: "Pencegahan umum terjaga keras, namun menghancurkan masa depan seorang ibu dan bayinya.", keadilan: 15, kepastian: 90, kemanfaatan: 20, alignmentShift: 25 }
      }
    ]
  },
  {
    idx: 10, title: "Ujian Komprehensif: Putusan Sidang Mahkamah Perdana", cases: [
      {
        title: "Dilema Speluncean Explorers: Pengorbanan Satu Jiwa demi Selamatkan Empat",
        facts: ["Lima penjelajah terjebak di reruntuhan gua selama 30 hari tanpa cadangan makanan dan dipastikan mati kelaparan.", "Mereka melempar undian dadu untuk mengorbankan satu orang demi menjadi santapan bertahan hidup hingga tim penyelamat datang.", "Empat penjelajah yang selamat diseret ke pengadilan atas dakwaan pembunuhan berencana (Pasal 340 KUHP)."],
        optA: { action: "Bebaskan Terdakwa Berdasarkan Alasan Keadaan Memaksa Ekstrem (Noodtoestand)", consequence: "Hukum mengakui batas ketahanan biologis ekstrem manusia ketika hukum positif kehilangan rasionalitasnya.", keadilan: 80, kepastian: 30, kemanfaatan: 85, alignmentShift: -25 },
        optB: { action: "Jatuhkan Hukuman Pembunuhan Sesuai Asas Legalitas Mutlak", consequence: "Kesucian hak hidup setiap individu dijaga tanpa boleh dikorbankan demi kalkulasi angka keuntungan.", keadilan: 40, kepastian: 95, kemanfaatan: 30, alignmentShift: 25 }
      },
      {
        title: "Pengujian UU Kontroversial yang Memangkas Upah Minimum Demi Investasi",
        facts: ["Undang-undang baru disahkan DPR untuk menarik modal manufaktur asing dengan cara membekukan kenaikan upah buruh.", "Ratusan ribu buruh menggelar mogok massal melumpuhkan logistik pelabuhan dan kawasan industri.", "Serikat pekerja mengajukan uji materiil ke Mahkamah Konstitusi memohon pembatalan pasal upah murah."],
        optA: { action: "Batalkan Pasal Upah Murah karena Bertentangan dengan Hak Hidup Layak (UUD 1945)", consequence: "Kesejahteraan buruh terlindungi dari perlombaan eksploitasi upah murah antar-negara.", keadilan: 90, kepastian: 70, kemanfaatan: 80, alignmentShift: -15 },
        optB: { action: "Tolak Permohonan: Kebijakan Makroekonomi Adalah Wewenang DPR (Open Legal Policy)", consequence: "Daya saing investasi naik dan batas wewenang hakim terjaga, namun memperlebar jurang kemiskinan buruh.", keadilan: 30, kepastian: 85, kemanfaatan: 55, alignmentShift: 20 }
      },
      {
        title: "Penolakan Mandat Vaksinasi Wajib Saat Wabah Mematikan",
        facts: ["Pemerintah menetapkan kewajiban vaksinasi massal untuk menghentikan kematian pandemi dengan sanksi penahanan bansos.", "Seorang warga menggugat ke pengadilan menuntut hak atas kedaulatan integritas tubuhnya sendiri (bodily autonomy).", "Para ahli epidemiologi menyatakan jika 20% menolak vaksin, gelombang mutasi virus akan membunuh puluhan ribu lansia."],
        optA: { action: "Menangkan Pemerintah: Keselamatan Publik Berada di Atas Hak Otonomi Privat", consequence: "Kekebalan populasi tercapai dan nyawa puluhan ribu lansia terselamatkan dari kematian massal.", keadilan: 60, kepastian: 75, kemanfaatan: 95, alignmentShift: 10 },
        optB: { action: "Menangkan Warga: Hak Menentukan Intervensi Medis Tubuh Adalah Hak Asasi Mutlak", consequence: "Kedaulatan tubuh individu dari paksaan jarum suntik negara terlindungi, namun risiko wabah melonjak.", keadilan: 85, kepastian: 40, kemanfaatan: 30, alignmentShift: -20 }
      }
    ]
  }
]);

console.log("League 1 defined.");

// Now write a python/node script to construct the complete code for all 8 leagues and write to cases.ts and islands-data.ts!
