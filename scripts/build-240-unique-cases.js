const fs = require('fs');
const path = require('path');

// 8 Leagues x 10 Islands x 3 Unique Cases = Exactly 240 Distinct Legal Cases

const rawLeagues = [
  {
    lvl: 1,
    name: "Liga Pemula (Fondasi & Filsafat Hukum)",
    desc: "Filsafat, Asas, dan Pengantar Ilmu Hukum",
    islands: [
      {
        idx: 1,
        title: "Asas Keadilan vs Kepastian Hukum (Formula Radbruch)",
        cases: [
          {
            title: "Pencurian 3 Butir Kakao Nenek Minah",
            facts: [
              "Nenek Minah (55 tahun) memetik 3 buah kakao seharga Rp 2.100 yang jatuh di area perkebunan swasta untuk dijadikan bibit.",
              "Manajemen perkebunan menolak damai dan melaporkannya atas tindak pidana pencurian ringan (Pasal 364 KUHP).",
              "Jaksa menuntut hukuman kurungan demi menjamin perlindungan kepastian hak milik perkebunan secara setara di mata hukum."
            ],
            optA: { action: "Hentikan Penuntutan melalui Keadilan Restoratif (Perja No. 15/2020)", consequence: "Keadilan substantif tercapai, kemanusiaan lansia miskin dilindungi tanpa pemenjaraan sia-sia.", keadilan: 95, kepastian: 30, kemanfaatan: 90, alignmentShift: -25 },
            optB: { action: "Vonis Penjara Sesuai Teks Formal Pasal (Positivisme Hukum)", consequence: "Kepastian teks perundang-undangan ditegakkan kaku, namun memicu kecaman keras publik atas hilangnya nurani hukum.", keadilan: 15, kepastian: 95, kemanfaatan: 20, alignmentShift: 25 }
          },
          {
            title: "Sopir Ambulans Menerobos Lampu Merah Demi Pasien Kritis",
            facts: [
              "Sopir ambulans membawa pasien serangan jantung akut yang membutuhkan pertolongan medis dalam tempo kurang dari 5 menit.",
              "Di perempatan padat, sopir membunyikan sirine dan menerobos lampu merah, tertangkap oleh kamera tilang elektronik (ETLE).",
              "Dinas Perhubungan menolak membatalkan denda tilang dengan dalih rambu lalu lintas mengikat tanpa pengecualian."
            ],
            optA: { action: "Gunakan Doktrin Noodtoestand (Keadaan Darurat Menghapus Melawan Hukum)", consequence: "Denda tilang dibatalkan, menyelamatkan nyawa manusia diposisikan sebagai nilai hukum tertinggi.", keadilan: 90, kepastian: 40, kemanfaatan: 95, alignmentShift: -20 },
            optB: { action: "Pertahankan Sanksi Denda demi Ketertiban Berlalu Lintas", consequence: "Kepastian aturan jalan raya ditegakkan tanpa kompromi, namun membahayakan keselamatan pasien darurat.", keadilan: 25, kepastian: 90, kemanfaatan: 30, alignmentShift: 20 }
          },
          {
            title: "Penolakan Prajurit atas Perintah Menembak Demonstran Tak Bersenjata",
            facts: [
              "Seorang komandan militer memerintahkan peletonnya melepaskan peluru tajam ke arah barisan mahasiswa yang duduk berunjuk rasa.",
              "Seorang bintara menolak menarik pelatuk senjata karena menyadari para demonstran tidak bersenjata dan tidak membahayakan nyawa.",
              "Komandan mengajukan bintara tersebut ke Mahkamah Militer atas tuduhan pembangkangan terhadap perintah atasan (insubordinasi)."
            ],
            optA: { action: "Bebaskan Bintara (Perintah Melawan Hukum Wajib Ditolak Sesuai HAM)", consequence: "Integritas moral prajurit ditegakkan; hukum menolak doktrin kepatuhan buta pada kejahatan.", keadilan: 95, kepastian: 40, kemanfaatan: 85, alignmentShift: -25 },
            optB: { action: "Hukum Disiplin Militer demi Menjaga Rantai Komando", consequence: "Hierarki militer terjaga ketat, namun membuka ruang tirani bagi komandan yang sewenang-wenang.", keadilan: 20, kepastian: 95, kemanfaatan: 25, alignmentShift: 25 }
          }
        ]
      },
      {
        idx: 2,
        title: "Asas Legalitas & Larangan Retroaktif (Nullum Delictum)",
        cases: [
          {
            title: "Pemberlakuan Hukuman Kebiri Kimia Terhadap Pelaku Kejahatan Anak",
            facts: [
              "Terdakwa melakukan pelecehan seksual berat kepada 5 anak dua pekan sebelum UU Perlindungan Anak baru diundangkan.",
              "Keluarga korban menuntut hakim menjatuhkan sanksi kebiri kimia yang diatur dalam undang-undang baru tersebut.",
              "Pasal 1 ayat 1 KUHP dan Pasal 28I UUD 1945 melarang penerapan pidana yang berlaku surut (non-retroaktif)."
            ],
            optA: { action: "Terapkan Aturan yang Berlaku Saat Perbuatan Dilakukan (Asas Non-Retroaktif)", consequence: "Asas fundamental perlindungan HAM konstitusional ditegakkan dari kesewenang-wenangan legislasi.", keadilan: 40, kepastian: 95, kemanfaatan: 40, alignmentShift: 20 },
            optB: { action: "Terapkan Hukuman Kebiri Baru Demi Keadilan Korban Anak", consequence: "Rasa dendam publik terpuaskan, namun tatanan asas non-retroaktif konstitusi menjadi runtuh.", keadilan: 75, kepastian: 20, kemanfaatan: 60, alignmentShift: -25 }
          },
          {
            title: "Jerat Pidana Modus Baru Pencurian Rekening Lewat Rekayasa Simcard",
            facts: [
              "Sindikat pembobol bank menduplikasi SIM card korban dengan memalsukan KTP digital yang mekanismenya belum tercakup KUHP lama.",
              "Korban kehilangan tabungan hari tua senilai Rp 500 juta dalam hitungan detik.",
              "Jaksa mencoba menggunakan analogi pasal pencurian fisik konvensional untuk menjerat pelaku."
            ],
            optA: { action: "Tolak Analogi Pasal Pidana demi Menjunjung Asas Legalitas Mutlak", consequence: "Menjaga batas ketat hukum pidana, mendorong jaksa menggunakan regulasi UU ITE yang lebih tepat.", keadilan: 35, kepastian: 95, kemanfaatan: 30, alignmentShift: 25 },
            optB: { action: "Gunakan Penafsiran Teleologis agar Pelaku Penipuan Modern Tidak Lolos", consequence: "Pelaku kejahatan finansial berhasil dipenjara, namun membuka preseden penafsiran elastis pasal pidana.", keadilan: 90, kepastian: 40, kemanfaatan: 85, alignmentShift: -20 }
          },
          {
            title: "Pencabutan Izin Tambang Berdasarkan Perda Baru yang Terbit Esok Hari",
            facts: [
              "Perusahaan tambang memiliki izin eksplorasi sah selama 10 tahun yang diterbitkan menurut regulasi tahun 2021.",
              "Pemerintah kabupaten mengundangkan Perda baru tentang zonasi hijau dan langsung menghentikan paksa operasi tambang.",
              "Perusahaan menuntut ganti rugi miliaran karena hak yang diperolehnya secara sah (vested rights) dirampas sepihak."
            ],
            optA: { action: "Menangkan Perusahaan (Prinsip Perlindungan Hak Sah & Non-Retroaktif)", consequence: "Kepastian iklim investasi terjaga; pemerintah wajib memberikan kompensasi atau masa transisi.", keadilan: 50, kepastian: 95, kemanfaatan: 55, alignmentShift: 15 },
            optB: { action: "Menangkan Pemkab (Asas Salus Populi Suprema Lex - Kelestarian Alam)", consequence: "Kerusakan alam terhenti seketika, namun menimbulkan ketakutan bagi investor akibat ketidakpastian regulasi.", keadilan: 80, kepastian: 30, kemanfaatan: 80, alignmentShift: -20 }
          }
        ]
      },
      {
        idx: 3,
        title: "Hukum Kodrat vs Positivisme Yuridis (Hans Kelsen)",
        cases: [
          {
            title: "Penggusuran Pemukiman Tepi Sungai Tanpa Ganti Rugi",
            facts: [
              "Seratus kepala keluarga telah bermukim di bantaran sungai selama 50 tahun dan rutin membayar pajak bumi dan bangunan.",
              "Pemerintah kota hendak menormalisasi sungai untuk mitigasi banjir massal yang mengancam 1 juta jiwa warga kota.",
              "Secara sertifikasi formal, lahan tersebut adalah tanah negara bebas (vrij staatsdomein) tanpa hak milik privat warga."
            ],
            optA: { action: "Wajibkan Kompensasi Manusiawi & Relokasi Layak (Hukum Kodrat / Progresif)", consequence: "Hak hidup bermartabat warga miskin dijamin negara tanpa mengorbankan proyek mitigasi banjir.", keadilan: 90, kepastian: 50, kemanfaatan: 90, alignmentShift: -20 },
            optB: { action: "Eksekusi Pengosongan Tanpa Ganti Rugi Berdasarkan Status Tanah Negara", consequence: "Anggaran proyek efisien dan cepat selesai, namun melahirkan gelombang kemiskinan dan tunawisma baru.", keadilan: 20, kepastian: 95, kemanfaatan: 40, alignmentShift: 25 }
          },
          {
            title: "Perjanjian Kerjasama Monopoli Pupuk yang Menjebak Petani",
            facts: [
              "Kelompok tani menandatangani kontrak jual beli pupuk dengan klausul baku denda Rp 10 juta per hari jika gagal setor hasil panen.",
              "Terjadi serangan hama wereng dahsyat yang menghancurkan 90% panen padi warga.",
              "Distributor pupuk menuntut sita jaminan atas sawah petani sesuai teks asas Pacta Sunt Servanda (kontrak adalah hukum)."
            ],
            optA: { action: "Gugurkan Klausul Denda Berdasarkan Asas Kepatutan & Keadilan Alami", consequence: "Petani kecil terlindungi dari jerat perbudakan utang korporasi yang tidak berimbang.", keadilan: 95, kepastian: 35, kemanfaatan: 85, alignmentShift: -25 },
            optB: { action: "Eksekusi Klausul Perjanjian demi Kepastian Hukum Perikatan", consequence: "Kepastian kontrak bisnis terjaga tegak, namun puluhan petani kehilangan mata pencaharian seumur hidup.", keadilan: 20, kepastian: 95, kemanfaatan: 20, alignmentShift: 25 }
          },
          {
            title: "Pengakuan Perkawinan Penghayat Kepercayaan pada Catatan Sipil",
            facts: [
              "Pasangan penganut ajaran leluhur Sunda Wiwitan hendak mencatatkan pernikahan mereka di Dinas Dukcapil.",
              "Petugas menolak karena ajaran tersebut belum masuk dalam daftar 6 agama resmi negara pada formulir baku birokrasi.",
              "Pasangan menggugat atas dasar hak asasi konstitusional untuk memeluk keyakinan dan membentuk keluarga sah."
            ],
            optA: { action: "Wajibkan Pencatatan Perkawinan Berdasarkan Putusan MK No. 97/PUU-XIV/2016", consequence: "Diskriminasi administrasi dihapus, seluruh warga negara setara di hadapan hukum tanpa kecuali.", keadilan: 95, kepastian: 70, kemanfaatan: 90, alignmentShift: -15 },
            optB: { action: "Tolak Pencatatan Demi Ketertiban Dokumen Administrasi Negara yang Baku", consequence: "Kerapian sistem birokrasi lama terjaga, namun hak sipil anak cucu penghayat terabaikan.", keadilan: 25, kepastian: 85, kemanfaatan: 30, alignmentShift: 20 }
          }
        ]
      },
      {
        idx: 4,
        title: "Asas Kepatutan & Keadilan Substantif (Hukum Progresif)",
        cases: [
          {
            title: "Pemanfaatan Listrik Balai Desa untuk Inkubator Bayi Prematur",
            facts: [
              "Terjadi bencana badai tropis yang memutus listrik total di puskesmas pedalaman pulau terpencil.",
              "Kepala dusun menarik kabel darurat dari panel surya kantor pos pemda yang terkunci untuk menyalakan inkubator 2 bayi prematur.",
              "Petugas pemda melaporkan kepala dusun atas tuduhan perusakan aset dan pencurian tenaga listrik negara."
            ],
            optA: { action: "Bebaskan Kepala Dusun atas Dasar Daya Paksa Penyelamatan Nyawa", consequence: "Kemanusiaan diutamakan melampaui kerugian materiil ringan fasilitas negara.", keadilan: 95, kepastian: 40, kemanfaatan: 95, alignmentShift: -25 },
            optB: { action: "Jatuhkan Denda Materiil demi Menegakkan Aturan Aset Barang Milik Negara", consequence: "Aset negara steril dari intervensi tak berizin, namun memicu kekecewaan warga atas birokrasi dingin.", keadilan: 20, kepastian: 90, kemanfaatan: 30, alignmentShift: 20 }
          },
          {
            title: "Pengambilan Ranting Kayu Roboh di Kawasan Konservasi untuk Memasak",
            facts: [
              "Seorang kakek sebatang kara mengumpulkan ranting jati kering yang patah akibat angin di tanah pinggir hutan lindung.",
              "Petugas polisi hutan menyita kayu seberat 5 kg dan mengenakan pasal perusakan habitat konservasi.",
              "Kakek tersebut tidak memiliki uang untuk membeli gas elpiji dan hanya ingin merebus ubi untuk makan malam."
            ],
            optA: { action: "Terapkan Asas Keadilan Restoratif & Berikan Pembinaan Kesejahteraan", consequence: "Mencegah kriminalisasi kemiskinan dan memulihkan keharmonisan warga sekitar hutan.", keadilan: 95, kepastian: 30, kemanfaatan: 90, alignmentShift: -25 },
            optB: { action: "Tuntut Pidana Kurungan Minimal demi Menjaga Wibawa Hukum Kehutanan", consequence: "Efek gentar di kawasan hutan terjaga, namun menciderai nurani keadilan publik.", keadilan: 15, kepastian: 95, kemanfaatan: 15, alignmentShift: 30 }
          },
          {
            title: "Pemotongan Dahan Pohon Beringin Tetangga yang Nyaris Roboh",
            facts: [
              "Dahan pohon beringin milik warga A lapuk dan condong tepat di atas atap kamar tidur bayi warga B.",
              "Warga A berulang kali menolak memotong dahan karena alasan takhayul warisan leluhur.",
              "Warga B akhirnya menyewa tukang potong pohon saat warga A pergi; warga A menuntut atas perusakan properti pribadi."
            ],
            optA: { action: "Bebaskan Warga B (Tindakan Perlindungan Keselamatan Nyawa yang Nyata)", consequence: "Pencegahan marabahaya fisik diprioritaskan di atas kepemilikan benda vegetasi pekarangan.", keadilan: 85, kepastian: 45, kemanfaatan: 85, alignmentShift: -15 },
            optB: { action: "Hukum Warga B karena Main Hakim Sendiri (Eigenrichting)", consequence: "Ketertiban sengketa perdata dijaga lewat pengadilan, namun resiko kecelakaan fisik terabaikan.", keadilan: 30, kepastian: 90, kemanfaatan: 35, alignmentShift: 20 }
          }
        ]
      },
      {
        idx: 5,
        title: "Hermeneutika Hukum: Penafsiran Teleologis vs Gramatikal",
        cases: [
          {
            title: "Apakah Mengunduh Arus Listrik Termasuk Pencurian 'Barang'?",
            facts: [
              "Terdakwa mencantol kabel listrik penerangan jalan umum untuk mengisi daya mobil listrik sewaannya.",
              "Jaksa menuntut terdakwa dengan Pasal 362 KUHP tentang Pencurian 'Barang yang seluruhnya milik orang lain'.",
              "Pengacara berdalih elektron listrik adalah gelombang energi tak berwujud, bukan benda padat/cair sesuai gramatikal abad ke-19."
            ],
            optA: { action: "Gunakan Penafsiran Teleologis: Energi Listrik Berharga Ekonomi Adalah 'Barang'", consequence: "Melindungi fasilitas energi publik dari penyalahgunaan modern tanpa kekosongan hukum.", keadilan: 80, kepastian: 70, kemanfaatan: 80, alignmentShift: 0 },
            optB: { action: "Tafsirkan Gramatikal Ketat: Bebaskan dari Pasal Pencurian Barang Konvensional", consequence: "Menuntut jaksa menggunakan UU Ketenagalistrikan spesifik daripada memaksakan KUHP usang.", keadilan: 55, kepastian: 90, kemanfaatan: 50, alignmentShift: 15 }
          },
          {
            title: "Status Skuter Listrik Kecepatan Tinggi di Jalur Khusus Pejalan Kaki",
            facts: [
              "Pengendara skuter listrik berdaya 1.000 Watt menabrak lansia di trotoar hingga patah tulang kaki.",
              "Polisi mendakwa pasal kelalaian mengemudikan 'Kendaraan Bermotor di Jalan Umum' (UU LLAJ).",
              "Kuasa hukum mengklaim skuter beroda dua mikro bukan kendaraan bermotor menurut definisi teks UU 2009."
            ],
            optA: { action: "Tafsirkan Teleologis Tujuan UU: Segala Sarana Bertenaga Mesin Wajib Bertanggung Jawab", consequence: "Pejalan kaki di trotoar terlindungi dari bahaya kendaraan mikro berkecepatan tinggi.", keadilan: 85, kepastian: 60, kemanfaatan: 85, alignmentShift: -10 },
            optB: { action: "Tafsirkan Gramatikal: Tolak Kualifikasi Kendaraan Bermotor Jalan Raya", consequence: "Mendorong parlemen memperbarui regulasi, namun korban saat ini sulit mendapat santunan Jasa Raharja.", keadilan: 35, kepastian: 90, kemanfaatan: 30, alignmentShift: 25 }
          },
          {
            title: "Penafsiran 'Kerugian Keuangan Negara' pada Kebijakan Pembelian Tenda Darurat",
            facts: [
              "Bupati membeli tenda tanggap darurat saat erupsi gunung meletus dengan harga 15% di atas HPS karena kelangkaan stok pasar.",
              "Audit BPK menemukan kelebihan pembayaran dan jaksa mendakwa Pasal 2 UU Tipikor atas kerugian negara.",
              "Bupati membuktikan seluruh tenda berdiri kokoh menyelamatkan 5.000 pengungsi tanpa sepeser pun uang masuk ke kantong pribadi."
            ],
            optA: { action: "Tafsirkan Filosofis UU Tipikor: Tidak Ada Niat Jahat Korup (Absennya Mens Rea)", consequence: "Kepala daerah tidak lumpuh mengambil keputusan darurat demi menyelamatkan jiwa ribuan korban bencana.", keadilan: 95, kepastian: 40, kemanfaatan: 95, alignmentShift: -25 },
            optB: { action: "Tafsirkan Gramatikal Akuntansi: Selisih Bayar Tetaplah Kerugian Keuangan Negara", consequence: "Disiplin fiskal dijaga sangat kaku, namun memicu apatisme birokrasi saat musibah tiba.", keadilan: 20, kepastian: 95, kemanfaatan: 15, alignmentShift: 30 }
          }
        ]
      },
      {
        idx: 6,
        title: "Hirarki Peraturan Perundang-Undangan & Lex Superior",
        cases: [
          {
            title: "Perda Jam Malam Pekerja Perempuan Bertentangan dengan UU Ketenagakerjaan",
            facts: [
              "Peraturan Daerah melarang wanita bekerja di luar rumah lewat pukul 22.00 dengan ancaman sanksi denda ketertiban umum.",
              "Asosiasi perawat dan buruh pabrik tekstil menggugat karena menghambat shift malam yang dijamin UU Ketenagakerjaan.",
              "Pemerintah kota bersikeras aturan dibuat untuk moralitas dan perlindungan kesusilaan lokal."
            ],
            optA: { action: "Batalkan Perda Berdasarkan Asas Lex Superior Derogat Legi Inferiori", consequence: "Hak persamaan kerja perempuan dijamin, konsistensi hukum nasional ditegakkan.", keadilan: 90, kepastian: 85, kemanfaatan: 85, alignmentShift: -10 },
            optB: { action: "Pertahankan Perda Atas Nama Otonomi Khusus & Kearifan Moral Daerah", consequence: "Aspirasi konservatif lokal diakomodasi, namun menciptakan fragmentasi hak asasi nasional.", keadilan: 25, kepastian: 45, kemanfaatan: 30, alignmentShift: 20 }
          },
          {
            title: "Surat Edaran Dirjen Pajak yang Menghapus Hak Restitusi Cepat",
            facts: [
              "Dirjen Pajak menerbitkan Surat Edaran (SE) yang memperketat syarat restitusi wajib pajak di luar koridor UU KUP.",
              "Pengusaha UMKM menggugat ke PTUN bahwa SE bukanlah peraturan perundang-undangan yang boleh mengurangi hak warga.",
              "Dirjen beralasan SE adalah petunjuk teknis diskresi untuk mengamankan penerimaan kas negara."
            ],
            optA: { action: "Nyatakan SE Tidak Memiliki Kekuatan Hukum Mengikat Publik (Cacat Wewenang)", consequence: "Mencegah pejabat menerbitkan aturan siluman yang melangkahi undang-undang resmi parlemen.", keadilan: 85, kepastian: 95, kemanfaatan: 75, alignmentShift: 10 },
            optB: { action: "Sahkan Keberlakuan SE Demi Target Pencapaian Penerimaan APBN", consequence: "Kas negara cepat terkumpul, namun mengikis kepastian hak-hak wajib pajak taat hukum.", keadilan: 30, kepastian: 35, kemanfaatan: 50, alignmentShift: -15 }
          },
          {
            title: "Perpres Pengadaan Tanah Cepat vs Putusan Mahkamah Konstitusi",
            facts: [
              "Perpres proyek strategis nasional memperbolehkan penggusuran fisik tanah warga sebelum sengketa appraisal tuntas.",
              "Warga menunjukkan Putusan MK yang menegaskan ganti kerugian wajib tuntas terlebih dahulu sebelum lahan dikuasai.",
              "Kementerian berargumen keterlambatan proyek jalan tol akan merugikan perekonomian nasional triliunan rupiah."
            ],
            optA: { action: "Tunduk Mutlak pada Putusan MK sebagai Tafsir Konstitusi Tertinggi", consequence: "Hak milik warga dihormati, mencegah praktik perampasan tanah oleh aparatur negara.", keadilan: 95, kepastian: 95, kemanfaatan: 70, alignmentShift: 0 },
            optB: { action: "Dahulukan Target Kelancaran Infrastruktur Mengacu pada Perpres", consequence: "Jalan tol selesai tepat waktu, namun melanggar marwah konstitusi dan hak kepemilikan tanah.", keadilan: 20, kepastian: 30, kemanfaatan: 60, alignmentShift: -25 }
          }
        ]
      },
      {
        idx: 7,
        title: "Asas Fiksi Hukum & Presumsi Setiap Orang Tahu UU",
        cases: [
          {
            title: "Warga Pelosok Memelihara Satwa Kakatua Raja yang Terluka",
            facts: [
              "Seorang warga pedalaman Papua merawat burung kakatua raja yang patah sayapnya di hutan hingga sembuh di serambi rumah.",
              "Polisi menangkapnya dengan ancaman penjara 5 tahun berdasarkan UU Konservasi Hayati.",
              "Warga tersebut buta huruf, tinggal di pulau tanpa listrik dan internet, serta tak pernah mendengar sosialisasi undang-undang konservasi."
            ],
            optA: { action: "Bebaskan Pelaku dari Jerat Pidana & Sita Satwa untuk Rehabilitasi", consequence: "Keadilan kontekstual ditegakkan tanpa menindas masyarakat rentan yang belum terlayani literasi hukum.", keadilan: 95, kepastian: 40, kemanfaatan: 90, alignmentShift: -25 },
            optB: { action: "Jatuhkan Vonis Sesuai Asas Fiksi Hukum (Ignorantia Juris Non Excusat)", consequence: "Asas fiksi hukum dijunjung tinggi tanpa pandang bulu, namun melahirkan potret kezaliman peradilan.", keadilan: 15, kepastian: 95, kemanfaatan: 15, alignmentShift: 30 }
          },
          {
            title: "Pedagang Sayur Keliling Menggunakan Kantong Kresek yang Baru Dilarang",
            facts: [
              "Pemerintah daerah mengesahkan Perda larangan kantong plastik sekali pakai yang baru diundangkan 4 hari lalu di lembaran daerah.",
              "Satpol PP menyita dagangan dan mendenda pedagang sayur sebesar Rp 500.000 karena membungkus terong dengan kantong plastik sisa kemarin.",
              "Denda tersebut setara dengan omzet dagang sang ibu selama tiga hari bekerja memeras keringat."
            ],
            optA: { action: "Batalkan Denda & Berikan Peringatan Lisan serta Sosialisasi Bertahap", consequence: "Penegakan hukum berorientasi pembinaan humanis tanpa mematikan nafkah pedagang gurem.", keadilan: 90, kepastian: 50, kemanfaatan: 90, alignmentShift: -20 },
            optB: { action: "Tegakkan Sanksi Penuh Mengacu pada Tanggal Lembaran Daerah", consequence: "Ketegasan aturan lingkungan ditegakkan seketika, namun menimbulkan luka sosial pedagang kecil.", keadilan: 25, kepastian: 95, kemanfaatan: 30, alignmentShift: 20 }
          },
          {
            title: "Pembawaan Pisau Pemotong Ranting oleh Petani Saat Melintasi Operasi Razia",
            facts: [
              "Seorang kakek petani membawa golok pemangkas semak di boncengan sepeda tuanya saat melintasi razia cipta kondisi malam hari di pinggir kota.",
              "Aparat menjeratnya dengan UU Darurat No. 12 Tahun 1951 tentang Kepemilikan Senjata Tajam ancaman 10 tahun penjara.",
              "Kakek membuktikan ia baru pulang membabat kebun kelapa sawit miliknya di pinggir desa."
            ],
            optA: { action: "Hentikan Perkara Pidana: Golok Adalah Alat Kerja Sah (Legitimate Purpose)", consequence: "Menjauhkan pasal darurat dari kriminalisasi profesi agraris tradisional.", keadilan: 95, kepastian: 60, kemanfaatan: 90, alignmentShift: -20 },
            optB: { action: "Proses Pidana Mengingat Membawa Senjata Tajam di Tempat Umum Dilarang Mutlak", consequence: "Ketertiban malam perkotaan steril tanpa kompromi, namun merampas kemerdekaan kakek tak bersalah.", keadilan: 10, kepastian: 90, kemanfaatan: 20, alignmentShift: 25 }
          }
        ]
      },
      {
        idx: 8,
        title: "Hukum Adat / Kebiasaan vs Kodifikasi Hukum Tertulis",
        cases: [
          {
            title: "Pengambilan Kayu Ulin Hutan Adat untuk Tiang Rumah Pemakaman Leluhur",
            facts: [
              "Masyarakat adat Dayak menebang satu pohon ulin di hutan ulayat leluhur mereka untuk upacara sakral pemakaman adat Tiwah.",
              "Kawasan tersebut baru dipetakan sepihak oleh Kementerian Lingkungan Hidup sebagai Taman Nasional konservasi.",
              "Polisi kehutanan menahan tetua adat atas sangkaan pembalakan liar (illegal logging)."
            ],
            optA: { action: "Akui Hak Ulayat Komunitas Adat Berdasarkan Pasal 18B UUD 1945", consequence: "Hak konstitusional masyarakat adat dipulihkan, membina sinergi adat dan konservasi hutan.", keadilan: 95, kepastian: 45, kemanfaatan: 85, alignmentShift: -25 },
            optB: { action: "Hukum Berdasarkan UU Kehutanan Tertulis Demi Menjaga Status Taman Nasional", consequence: "Batas zona konservasi steril mutlak, namun menindas warisan budaya bangsa yang telah ada ratusan tahun.", keadilan: 20, kepastian: 95, kemanfaatan: 40, alignmentShift: 25 }
          },
          {
            title: "Musyawarah Perdamaian Kasus Perkelahian Remaja di Desa Adat Bali",
            facts: [
              "Dua pemuda banjar terlibat perkelahian dan diselesaikan damai lewat sanksi adat prayascita oleh Bendesa Adat.",
              "Salah satu paman korban yang tinggal di kota melaporkan peristiwa tersebut ke polsek dan menuntut sidang pidana KUHP.",
              "Masyarakat desa adat keberatan karena intervensi kepolisian membuka kembali luka persaudaraan yang telah pulih."
            ],
            optA: { action: "Hormati Perdamaian Adat & Hentikan Penyidikan Melalui Pendekatan Restoratif", consequence: "Kedamaian desa adat terjaga murni tanpa menambah beban lembaga pemasyarakatan.", keadilan: 90, kepastian: 50, kemanfaatan: 95, alignmentShift: -20 },
            optB: { action: "Lanjutkan Proses Peradilan Pidana Negara (Monopoli Penuntutan Publik)", consequence: "Dominasi penegakan hukum formal negara dipertahankan, namun merusak tatanan harmoni desa.", keadilan: 30, kepastian: 90, kemanfaatan: 30, alignmentShift: 20 }
          },
          {
            title: "Sengketa Batas Tanah Parit Warisan vs Pengukuran Satelit Digital BPN",
            facts: [
              "Dua tetangga menyepakati batas tanah warisan berupa parit air alami yang telah diakui tiga generasi keluarga.",
              "Program sertifikasi massal BPN menggunakan drone satelit menggeser batas garis lurus 2 meter ke pekarangan warga tetangga.",
              "Tetangga penikmat pergeseran menuntut perataan tembok pagar lama mengandalkan sertifikat baru BPN."
            ],
            optA: { action: "Menangkan Batas Parit Fisik Berdasarkan Kesepakatan Historis Iktikad Baik", consequence: "Kerukunan bertetangga terselamatkan sesuai kebenaran materiil penguasaan tanah.", keadilan: 85, kepastian: 40, kemanfaatan: 85, alignmentShift: -15 },
            optB: { action: "Tegakkan Garis Batas Koordinat Digital BPN Demi Kepastian Kadaster", consequence: "Sistem pendaftaran tanah digital negara terjamin absolut, namun memicu permusuhan abadi tetangga.", keadilan: 35, kepastian: 95, kemanfaatan: 40, alignmentShift: 20 }
          }
        ]
      },
      {
        idx: 9,
        title: "Diskresi Penegak Hukum vs Penyalahgunaan Wewenang",
        cases: [
          {
            title: "Kapolsek Menghentikan Kasus Pencuri Tabung Gas Demi Beli Susu Bayi",
            facts: [
              "Seorang pemuda tertangkap basah mencuri tabung gas melon di warung tetangga untuk membeli obat demam bayinya yang menggigil.",
              "Kapolsek mengganti kerugian korban warung dengan uang pribadinya dan mendamaikan kedua belah pihak tanpa penahanan.",
              "Sebuah LSM melaporkan Kapolsek ke Propam atas dugaan menghentikan penyidikan tanpa gelar perkara formal SP3."
            ],
            optA: { action: "Apresiasi Diskresi Humanis Kapolsek (Keadilan Restoratif Menyentuh Akar Masalah)", consequence: "Polisi dicintai rakyat sebagai pengayom sejati, keadilan restoratif terwujud nyata.", keadilan: 95, kepastian: 40, kemanfaatan: 95, alignmentShift: -25 },
            optB: { action: "Jatuhkan Teguran Etik karena Mengabaikan Prosedur Formil KUHAP", consequence: "Kepatuhan birokrasi penegakan hukum terjaga rapi, namun memadamkan empati aparat terhadap orang miskin.", keadilan: 20, kepastian: 95, kemanfaatan: 20, alignmentShift: 25 }
          },
          {
            title: "Jaksa Menolak Melimpahkan Berkas Perkara Kakek yang Membela Cucunya",
            facts: [
              "Seorang kakek melumpuhkan pelaku pemerkosa cucunya dengan cangkul hingga pelaku patah tulang selangka.",
              "Penyidik kepolisian melimpahkan berkas dengan tuduhan penganiayaan berat (Pasal 351 ayat 2 KUHP).",
              "Kepala Kejaksaan Negeri menerbitkan SKP2 (Surat Ketetapan Penghentian Penuntutan) demi keadilan."
            ],
            optA: { action: "Sahkan Penghentian Penuntutan oleh Jaksa (Dominus Litis Berkeadilan Substantif)", consequence: "Korban dan pelindung keluarga terlindungi dari penderitaan menjadi terdakwa di ruang pengadilan.", keadilan: 95, kepastian: 50, kemanfaatan: 90, alignmentShift: -20 },
            optB: { action: "Paksa Jaksa Bawa Perkara ke Meja Hijau agar Diputus oleh Majelis Hakim", consequence: "Pemisahan peran penyidik, jaksa, dan hakim terjaga murni, namun membebani kakek tua yang trauma.", keadilan: 30, kepastian: 90, kemanfaatan: 30, alignmentShift: 20 }
          },
          {
            title: "Hakim Menjatuhkan Vonis Pemaafan Peradilan (Rechterlijk Pardon) atas Pencuri Obat",
            facts: [
              "Seorang ibu mencuri obat antibiotik di apotek senilai Rp 70.000 karena anaknya kejang demam dan ia tidak memiliki uang sepeser pun.",
              "Di persidangan, ibu tersebut menangis bersimpuh dan pemilik apotek telah ikhlas memaafkannya.",
              "Hakim memutus bersalah namun membebaskan dari segala pidana penjara (Pemaafan Hakim KUHP Baru)."
            ],
            optA: { action: "Dukung Putusan Pemaafan Hakim sebagai Wajah Humanis Hukum Modern", consequence: "Hukum pidana berevolusi dari sarana pembalasan dendam menjadi sarana pemulihan keadilan bermartabat.", keadilan: 95, kepastian: 60, kemanfaatan: 95, alignmentShift: -20 },
            optB: { action: "Tuntut Hukuman Penjara Minimal Demi Efek Jera Masyarakat Luas", consequence: "Pencegahan umum terjaga keras, namun menghancurkan masa depan seorang ibu dan bayinya.", keadilan: 15, kepastian: 90, kemanfaatan: 20, alignmentShift: 25 }
          }
        ]
      },
      {
        idx: 10,
        title: "Ujian Komprehensif: Putusan Sidang Mahkamah Perdana",
        cases: [
          {
            title: "Dilema Kasus Speluncean Explorers: Pengorbanan Satu Jiwa Selamatkan Empat",
            facts: [
              "Lima penjelajah terjebak di reruntuhan gua selama 30 hari tanpa cadangan makanan dan dipastikan mati kelaparan dalam 2 hari.",
              "Mereka melempar undian dadu untuk mengorbankan satu orang demi menjadi santapan bertahan hidup hingga tim penyelamat datang.",
              "Empat penjelajah yang selamat diseret ke pengadilan atas dakwaan pembunuhan berencana (Pasal 340 KUHP)."
            ],
            optA: { action: "Bebaskan Terdakwa Berdasarkan Alasan Keadaan Memaksa Ekstrem (Noodtoestand)", consequence: "Hukum mengakui batas ketahanan biologis ekstrem manusia ketika hukum positif kehilangan rasionalitasnya.", keadilan: 80, kepastian: 30, kemanfaatan: 85, alignmentShift: -25 },
            optB: { action: "Jatuhkan Hukuman Pembunuhan Sesuai Asas Legalitas Mutlak", consequence: "Kesucian hak hidup setiap individu dijaga tanpa boleh dikorbankan demi kalkulasi angka keuntungan.", keadilan: 40, kepastian: 95, kemanfaatan: 30, alignmentShift: 25 }
          },
          {
            title: "Pengujian UU Kontroversial yang Memangkas Upah Minimum Demi Investasi",
            facts: [
              "Undang-undang baru disahkan DPR untuk menarik modal manufaktur asing dengan cara membekukan kenaikan upah minimum buruh.",
              "Ratusan ribu buruh menggelar mogok massal melumpuhkan logistik pelabuhan dan kawasan industri.",
              "Serikat pekerja mengajukan uji materiil ke Mahkamah Konstitusi memohon pembatalan pasal upah murah."
            ],
            optA: { action: "Batalkan Pasal Upah Murah karena Bertentangan dengan Hak Hidup Layak (UUD 1945)", consequence: "Kesejahteraan buruh terlindungi dari perlombaan eksploitasi upah murah antar-negara.", keadilan: 90, kepastian: 70, kemanfaatan: 80, alignmentShift: -15 },
            optB: { action: "Tolak Permohonan: Kebijakan Makroekonomi Adalah Wewenang DPR (Open Legal Policy)", consequence: "Daya saing investasi naik dan batas wewenang hakim terjaga, namun memperlebar jurang kemiskinan buruh.", keadilan: 30, kepastian: 85, kemanfaatan: 55, alignmentShift: 20 }
          },
          {
            title: "Penolakan Mandat Vaksinasi Wajib Saat Wabah Mematikan",
            facts: [
              "Pemerintah menetapkan kewajiban vaksinasi massal untuk menghentikan laju kematian pandemi dengan sanksi penahanan bansos beras.",
              "Seorang warga menggugat ke pengadilan menuntut hak atas kedaulatan integritas tubuhnya sendiri (bodily autonomy).",
              "Para ahli epidemiologi menyatakan jika 20% menolak vaksin, gelombang mutasi virus akan membunuh 50.000 lansia rentan."
            ],
            optA: { action: "Menangkan Pemerintah: Keselamatan Publik Berada di Atas Hak Otonomi Privat", consequence: "Kekebalan populasi tercapai dan nyawa puluhan ribu lansia terselamatkan dari kematian massal.", keadilan: 60, kepastian: 75, kemanfaatan: 95, alignmentShift: 10 },
            optB: { action: "Menangkan Warga: Hak Menentukan Intervensi Medis Tubuh Adalah Hak Asasi Mutlak", consequence: "Kedaulatan tubuh individu dari paksaan jarum suntik negara terlindungi, namun risiko wabah melonjak.", keadilan: 85, kepastian: 40, kemanfaatan: 30, alignmentShift: -20 }
          }
        ]
      }
    ]
  }
];

// Define Leagues 2 to 8 with complete realistic handcrafted cases for each island!
// League 2: Perdata 1 (10 islands x 3 unique cases = 30 cases)
const league2 = {
  lvl: 2,
  name: "Liga Amatir (Hukum Perdata 1 - Orang, Keluarga, Benda)",
  desc: "Hukum Perdata, Hubungan Keluarga, Waris, dan Hak Kebendaan",
  islands: [
    {
      idx: 1,
      title: "Kedudukan Hak Waris Anak Luar Kawin pasca Putusan MK",
      cases: [
        {
          title: "Gugatan Pengakuan Hak Waris Berdasarkan Hasil Uji Laboratorium DNA",
          facts: [
            "Seorang pemuda menuntut hak waris atas harta ayahnya, pengusaha tekstil yang wafat tanpa meninggalkan wasiat tertulis.",
            "Hasil tes DNA forensik membuktikan identitas keayahan biologis sebesar 99,99% sesuai Putusan MK No. 46/PUU-VIII/2010.",
            "Keluarga istri sah menolak membagi warisan dengan dalih KUHPerdata membatasi hak anak di luar perkawinan resmi."
          ],
          optA: { action: "Kabulkan Hak Waris Anak Biologis Berdasarkan Bukti Ilmiah DNA", consequence: "Keadilan bagi anak tidak berdosa diwujudkan sesuai putusan progresif Mahkamah Konstitusi.", keadilan: 95, kepastian: 55, kemanfaatan: 85, alignmentShift: -20 },
          optB: { action: "Batasi Hanya pada Nafkah Pemeliharaan Tanpa Hak atas Pokok Harta Waris", consequence: "Kepastian pembagian waris keluarga sah dipertahankan tanpa memecah aset perseroan keluarga.", keadilan: 40, kepastian: 90, kemanfaatan: 45, alignmentShift: 20 }
        },
        {
          title: "Tuntutan Pencantuman Nama Ayah Biologis pada Akta Kelahiran",
          facts: [
            "Seorang ibu tunggal memohon ke Dinas Catatan Sipil agar nama ayah biologis dicantumkan pada akta lahir anaknya.",
            "Sang ayah menolak menandatangani surat pengakuan karena khawatir merusak nama baik rumah tangga resminya.",
            "Ibu menunjukkan bukti percakapan dan transfer bulanan yang membuktikan nafkah anak dari pria tersebut."
          ],
          optA: { action: "Perintahkan Pencantuman Nama Ayah Biologis Demi Hak Asasi Identitas Anak", consequence: "Anak terlindungi dari stigma sosial dan memperoleh kepastian nasab keperdataan yang jelas.", keadilan: 95, kepastian: 65, kemanfaatan: 90, alignmentShift: -15 },
          optB: { action: "Tolak Permohonan Tanpa Adanya Penetapan Pengakuan Sukarela Ayah", consequence: "Mencegah klaim sepihak hubungan kekerabatan tanpa putusan pengadilan negeri terlebih dahulu.", keadilan: 45, kepastian: 90, kemanfaatan: 40, alignmentShift: 20 }
        },
        {
          title: "Sengketa Bagian Waris Anak Adopsi Tanpa Akta Pengesahan Notaris",
          facts: [
            "Seorang wanita merawat anak yatim sejak bayi selama 25 tahun hingga dewasa layaknya anak kandung sendiri.",
            "Ibu angkat meninggal mendadak sebelum sempat mengurus akta pengesahan pengangkatan anak di pengadilan negeri.",
            "Saudara kandung almarhumah menuntut seluruh rumah warisan dan mengusir anak angkat tersebut ke jalanan."
          ],
          optA: { action: "Berikan Bagian Hibah Wasiat Wajar (Wasiat Wajibah) Demi Keadilan Nyata", consequence: "Bakti dan ikatan batin puluhan tahun diakui hukum tanpa membiarkan anak angkat terlantar.", keadilan: 90, kepastian: 45, kemanfaatan: 85, alignmentShift: -20 },
          optB: { action: "Serahkan Seluruh Warisan ke Ahli Waris Sedarah Sesuai Teks KUHPerdata", consequence: "Prinsip garis darah hukum waris klasik ditegakkan murni tanpa penyimpangan prosedur formal.", keadilan: 30, kepastian: 95, kemanfaatan: 30, alignmentShift: 25 }
        }
      ]
    },
    {
      idx: 2,
      title: "Hak Mutlak Ahli Waris (Legitieme Portie) vs Wasiat Hibah",
      cases: [
        {
          title: "Wasiat Ayah Mewariskan 90% Kekayaan Hanya untuk Yayasan Amal",
          facts: [
            "Seorang konglomerat meninggalkan surat wasiat notaril yang menyumbangkan 90% asetnya ke yayasan konservasi satwa langka.",
            "Tiga anak kandungnya menggugat karena hak mutlak bagian waris mereka (Legitieme Portie) terlanggar.",
            "Pihak yayasan beralasan pewaris memiliki kebebasan penuh atas harta yang ia hasilkan semasa hidupnya."
          ],
          optA: { action: "Pangkas Wasiat Demi Memenuhi Hak Legitieme Portie Anak Kandung", consequence: "Kepastian hak perlindungan nafkah keluarga darah dilindungi oleh Pasal 913 KUHPerdata.", keadilan: 75, kepastian: 95, kemanfaatan: 60, alignmentShift: 15 },
          optB: { action: "Hormati Wasiat Amal Pewaris Berdasarkan Kebebasan Kehendak Terakhir", consequence: "Kelestarian satwa langka terbiayai besar, namun menelantarkan hak waris mutlak anak-anak pewaris.", keadilan: 55, kepastian: 30, kemanfaatan: 75, alignmentShift: -20 }
        },
        {
          title: "Hibah Tanah Diam-Diam kepada Istri Muda Sebelum Meninggal",
          facts: [
            "Sebelum wafat, seorang pria menghibahkan ruko paling berharga kepada istri siri tanpa sepengetahuan anak-anak istri pertama.",
            "Anak-anak istri pertama menuntut pembatalan akta hibah karena menghabiskan lebih dari separuh harta peninggalan.",
            "Istri siri berargumen akta hibah di hadapan notaris telah sah berkekuatan hukum sebelum pewaris meninggal."
          ],
          optA: { action: "Batalkan Sebagian Hibah yang Melanggar Bagian Mutlak (Inbreng)", consequence: "Keadilan antar-ahli waris dipulihkan; harta ditarik kembali ke boedel waris untuk dibagi adil.", keadilan: 90, kepastian: 85, kemanfaatan: 80, alignmentShift: 0 },
          optB: { action: "Pertahankan Hibah Notaril Mengacu pada Hak Pemilik Mengalihkan Benda", consequence: "Kepastian akta otentik notaris dijaga, namun mengabaikan asas perlindungan waris keluarga sah.", keadilan: 35, kepastian: 90, kemanfaatan: 40, alignmentShift: 20 }
        },
        {
          title: "Tuntutan Pencabutan Hak Waris Anak Kandung yang Pernah Melakukan KDRT",
          facts: [
            "Seorang anak laki-laki pernah divonis pidana karena memukul ayahnya hingga dirawat di rumah sakit.",
            "Setelah sang ayah wafat, anak tersebut tetap menuntut sepertiga warisan perkebunan sawit.",
            "Adik-adiknya menolak dengan alasan pelaku telah berstatus onwaardig (tidak patut menjadi ahli waris)."
          ],
          optA: { action: "Nyatakan Anak Tidak Patut Mewaris (Onwaardig Pasal 838 KUHPerdata)", consequence: "Moralitas keluarga ditegakkan; pelaku kekerasan terhadap orang tua gugur hak warisnya demi hukum.", keadilan: 95, kepastian: 95, kemanfaatan: 85, alignmentShift: 5 },
          optB: { action: "Berikan Sebagian Hak Waris dengan Alasan Terdakwa Telah Menjalani Vonis Pidana", consequence: "Menghindari pemiskinan eks-narapidana, namun melanggar doktrin kepatutan ahli waris.", keadilan: 40, kepastian: 40, kemanfaatan: 45, alignmentShift: -15 }
        }
      ]
    },
    {
      idx: 3,
      title: "Perjanjian Kawin (Prenuptial Agreement) Berjalan",
      cases: [
        {
          title: "Pemisahan Harta Suami Istri Demi Menghindari Sita Kreditor Utang Judi",
          facts: [
            "Suami terlilit utang rentenir miliaran rupiah akibat kecanduan trading kripto ilegal.",
            "Pasangan suami istri menandatangani akta pemisahan harta perkawinan di notaris pasca Putusan MK No. 69/PUU-XIII/2015.",
            "Kreditor menggugat akta tersebut sebagai tipu muslihat (actio pauliana) untuk mengamankan rumah keluarga."
          ],
          optA: { action: "Lindungi Harta Istri yang Terbukti Dibeli Murni dari Tabungan Gaji Pribadinya", consequence: "Istri dan anak-anak yang tidak berdosa terlindungi dari kemiskinan akibat kelalaian suami.", keadilan: 90, kepastian: 65, kemanfaatan: 85, alignmentShift: -15 },
          optB: { action: "Batalkan Akta Pemisahan demi Menjamin Kepastian Pelunasan Piutang Kreditor", consequence: "Mencegah modus pengelabuan debitur nakal yang menyembunyikan harta bersama di balik nama istri.", keadilan: 45, kepastian: 90, kemanfaatan: 50, alignmentShift: 20 }
        },
        {
          title: "Klausul Ganti Rugi Perselingkuhan dalam Perjanjian Pra-Nikah",
          facts: [
            "Calon pengantin sepakat mencantumkan klausul penalti Rp 2 miliar dan kehilangan hak asuh anak jika salah satu terbukti selingkuh.",
            "Setelah 5 tahun menikah, sang suami terbukti berselingkuh dan istri menuntut eksekusi penalti klausul pranikah.",
            "Suami membela diri bahwa penetapan hak asuh anak dan denda pidana moral tidak boleh dikomodifikasi dalam perjanjian perdata."
          ],
          optA: { action: "Eksekusi Denda Finansial Namun Tinjau Ulang Hak Asuh Demi Kepentingan Terbaik Anak", consequence: "Klausul perdata dihormati sementara keselamatan psikologis anak tetap diuji secara obyektif.", keadilan: 85, kepastian: 75, kemanfaatan: 90, alignmentShift: -10 },
          optB: { action: "Batalkan Seluruh Perjanjian Pranikah karena Mengatur Hal yang Melanggar Kesusilaan", consequence: "Mencegah komersialisasi moralitas rumah tangga, namun merugikan pihak istri yang dikhianati.", keadilan: 40, kepastian: 70, kemanfaatan: 40, alignmentShift: 15 }
        },
        {
          title: "Pendaftaran Akta Pisah Harta yang Terlambat di Pengadilan Negeri",
          facts: [
            "Pasangan suami istri menandatangani akta pisah harta di hadapan notaris sebelum akad nikah dilangsungkan.",
            "Namun notaris lalai mendaftarkan akta tersebut ke kepaniteraan Pengadilan Negeri dan Kantor Catatan Sipil setempat.",
            "Bank menyita deposito istri untuk membayar kredit macet PT milik sang suami dengan alasan akta tidak mengikat pihak ketiga."
          ],
          optA: { action: "Tolak Sitaan Bank Mengingat Iktikad Baik Para Pihak Telah Terbukti Notaril", consequence: "Keadilan substansi hak milik istri diutamakan daripada kelalaian administratif notaris.", keadilan: 85, kepastian: 50, kemanfaatan: 80, alignmentShift: -15 },
          optB: { action: "Menangkan Bank Berdasarkan Asas Publisitas Pendaftaran Perjanjian Kawin", consequence: "Perlindungan pihak ketiga terjaga ketat; istri diarahkan menuntut ganti rugi ke notaris yang lalai.", keadilan: 40, kepastian: 95, kemanfaatan: 50, alignmentShift: 25 }
        }
      ]
    },
    {
      idx: 4,
      title: "Hibah Wasiat yang Melebihi Batas Sepertiga Harta Warisan",
      cases: [
        {
          title: "Pemberian Rumah Utama kepada Perawat Lansia Tanpa Hubungan Darah",
          facts: [
            "Kakek berusia 80 tahun menghibahkan rumah tinggal satu-satunya kepada perawat yang merawatnya selama 10 tahun sakit stroke.",
            "Anak-anak kandung kakek yang tinggal di luar negeri dan tidak pernah menjenguk menggugat ke pengadilan setelah ayah mereka wafat.",
            "Anak kandung mengklaim hibah melampaui batas sepertiga harta dan menuduh adanya bujuk rayu licik."
          ],
          optA: { action: "Bagi Rumah Secara Proporsional: Hak Tempat Tinggal Perawat & Hak Waris Anak", consequence: "Kompromi adil; menghargai pengorbanan tulus perawat sambil mengakui hak waris anak kandung.", keadilan: 90, kepastian: 60, kemanfaatan: 90, alignmentShift: -15 },
          optB: { action: "Batalkan Seluruh Hibah Wasiat Berdasarkan Doktrin Perlindungan Garis Keturunan", consequence: "Kepastian teks hukum waris terjaga kaku, namun membuang perawat berjasa ke jalanan tanpa nafkah.", keadilan: 30, kepastian: 95, kemanfaatan: 25, alignmentShift: 25 }
        },
        {
          title: "Hibah Tanah Waris kepada Pesantren yang Ditentang Ahli Waris Tunggal",
          facts: [
            "Seorang ayah mewakafkan 80% tanah perkebunannya untuk pembangunan asrama santri yatim piatu di desanya.",
            "Anak kandung tunggalnya seorang buruh tani miskin memprotes karena sisa 20% tanah tandus tidak cukup untuk makan keluarganya.",
            "Pengurus pesantren bersikeras wakaf keagamaan tidak boleh diganggu gugat demi kemaslahatan umat."
          ],
          optA: { action: "Sesuaikan Batas Maksimal Hibah Menjadi Sepertiga (Kompensasi Hak Nafkah Anak)", consequence: "Pahala ibadah pewaris tetap jalan, hak dasar hidup anak kandung miskin terselamatkan.", keadilan: 95, kepastian: 80, kemanfaatan: 90, alignmentShift: -10 },
          optB: { action: "Tegakkan Hibah Wakaf 80% Penuh Demi Menjaga Niat Ibadah Pewaris", consequence: "Fasilitas asrama yatim piatu terbangun megah, namun anak kandung pewaris jatuh ke lembah kemiskinan ekstrem.", keadilan: 35, kepastian: 60, kemanfaatan: 60, alignmentShift: 15 }
        },
        {
          title: "Gugatan Pengembalian Mobil Hadiah Pertunangan yang Dibatalkan",
          facts: [
            "Pria memberikan mobil mewah sebagai hadiah seserahan pertunangan resmi dengan akta hibah notaril.",
            "Tiga bulan sebelum resepsi pernikahan, calon istri membatalkan pernikahan sepihak karena berselingkuh.",
            "Pria menggugat pengembalian mobil berdasarkan Pasal 1688 KUHPerdata (pencabutan hibah karena penolakan kewajiban)."
          ],
          optA: { action: "Kabulkan Gugatan: Wajibkan Pengembalian Mobil Hadiah Pertunangan", consequence: "Mencegah perbuatan memperkaya diri sendiri tanpa hak yang mencederai kepatutan moral perjanjian kawin.", keadilan: 95, kepastian: 85, kemanfaatan: 85, alignmentShift: 0 },
          optB: { action: "Tolak Gugatan Berdasarkan Sifat Hibah Murni yang Tidak Dapat Ditarik Kembali", consequence: "Kepastian transaksi hibah dihormati, namun membiarkan ketidakadilan nyata dinikmati pihak yang curang.", keadilan: 25, kepastian: 80, kemanfaatan: 30, alignmentShift: 25 }
        }
      ]
    },
    {
      idx: 5,
      title: "Bezit vs Eigendom: Penguasaan Fisik Tanah Terlantar 30 Tahun",
      cases: [
        {
          title: "Petani Mengolah Tanah HGB Kedaluwarsa Milik Korporasi Selama Tiga Dekade",
          facts: [
            "Kelompok tani menanami lahan terlantar seluas 20 hektar sejak HGB korporasi habis pada tahun 1993 tanpa pernah ditengok pemiliknya.",
            "Tahun 2023, pengembang properti membeli sisa hak dan mengerahkan ekskavator untuk meratakan ladang jagung petani.",
            "Petani menuntut hak prioritas pendaftaran tanah berdasarkan Pasal 1963 KUHPerdata (daluwarsa akuisitif / verjaring)."
          ],
          optA: { action: "Akui Hak Penguasaan Fisik Petani Berdasarkan Asas Tanah untuk Penggarap (UUPA)", consequence: "Keadilan agraria progresif diwujudkan; lahan tidur berpuluh tahun menjadi berkah pangan rakyat.", keadilan: 95, kepastian: 40, kemanfaatan: 95, alignmentShift: -25 },
          optB: { action: "Eksekusi Penggusuran Demi Menjaga Status Hak Pengembang Formal", consequence: "Kepastian sistem pendaftaran tanah berbadan hukum terjaga, namun mengusir ratusan keluarga petani.", keadilan: 20, kepastian: 95, kemanfaatan: 35, alignmentShift: 25 }
        },
        {
          title: "Sengketa Pemilikan Rumah Warisan Berdasarkan Akta Girik Kuno vs Sertifikat Baru",
          facts: [
            "Keluarga pensiunan guru menempati rumah dengan bukti surat girik dan pembayaran PBB selama 60 tahun berturut-turut.",
            "Tiba-tiba seorang pengusaha muncul membawa Sertifikat Hak Milik (SHM) yang diterbitkan BPN dua tahun lalu di atas tanah tersebut.",
            "Pengusaha menuntut pengosongan seketika tanpa uang santunan sepeser pun."
          ],
          optA: { action: "Batalkan Sertifikat Baru BPN karena Terbit Cacat Prosedur di Atas Tanah Berpenghuni", consequence: "Melindungi warga dari mafia tanah yang menerbitkan sertifikat siluman di kantor BPN.", keadilan: 95, kepastian: 70, kemanfaatan: 90, alignmentShift: -15 },
          optB: { action: "Menangkan Pemegang Sertifikat SHM Resmi Sebagai Bukti Hak Terkuat", consequence: "Sistem hukum sertifikasi tanah modern ditegakkan kaku, mengorbankan keluarga yang menempati puluhan tahun.", keadilan: 25, kepastian: 95, kemanfaatan: 40, alignmentShift: 25 }
        },
        {
          title: "Klaim Pemilik Asal atas Rumah yang Dibeli Pembeli Beriktikad Baik",
          facts: [
            "Seorang warga membeli rumah lelang bank melalui risalah lelang resmi KPKNL dan telah membaliknama sertifikat.",
            "Pemilik lama menggugat bahwa lelang bank cacat hukum karena surat peringatan wanprestasi tidak pernah sampai ke tangannya.",
            "Pembeli lelang menuntut perlindungan sebagai pembeli beriktikad baik (good faith purchaser)."
          ],
          optA: { action: "Lindungi Pembeli Lelang Resmi KPKNL Berdasarkan Asas Iktikad Baik", consequence: "Kepastian hukum pasar lelang eksekusi negara terjaga dari pembatalan sepihak di masa depan.", keadilan: 75, kepastian: 95, kemanfaatan: 85, alignmentShift: 10 },
          optB: { action: "Batalkan Hasil Lelang & Kembalikan Rumah ke Pemilik Asal dengan Ganti Rugi", consequence: "Hak pemilik lama dipulihkan, namun meruntuhkan kepercayaan publik terhadap risalah lelang resmi negara.", keadilan: 65, kepastian: 30, kemanfaatan: 50, alignmentShift: -20 }
        }
      ]
    },
    {
      idx: 6,
      title: "Eksekusi Hak Tanggungan oleh Bank Tanpa Putusan Pengadilan",
      cases: [
        {
          title: "Lelang Eksekusi Rumah Debitur yang Sedang Mengajukan Restrukturisasi",
          facts: [
            "Pengusaha katering terdampak pandemi gagal bayar cicilan pinjaman bank selama 4 bulan.",
            "Bank langsung memasang plang lelang eksekusi rumah keluarga debitur senilai Rp 2 miliar dengan limit hanya Rp 800 juta.",
            "Debitur memohon penundaan karena usahanya mulai pulih dan telah mengajukan proposal pelunasan bertahap."
          ],
          optA: { action: "Tunda Lelang & Perintahkan Musyawarah Restrukturisasi Kredit yang Berkeadilan", consequence: "Debitur yang beriktikad baik diselamatkan dari kebangkrutan tragis dan kerugian aset yang tak wajar.", keadilan: 90, kepastian: 50, kemanfaatan: 90, alignmentShift: -20 },
          optB: { action: "Izinkan Eksekusi Parate Lelang Bank Sesuai UU Hak Tanggungan", consequence: "Likuiditas bank dan kepastian pelunasan kreditur separatis terjaga kilat tanpa hambatan.", keadilan: 35, kepastian: 95, kemanfaatan: 45, alignmentShift: 25 }
        },
        {
          title: "Penjualan Objek Jaminan di Bawah Harga Pasar yang Menghancurkan Debitur",
          facts: [
            "Pabrik garmen seharga taksiran appraisal independen Rp 10 miliar dilelang bank seharga Rp 3 miliar kepada pembeli tunggal.",
            "Hasil penjualan lelang bahkan belum menutup sisa pokok utang dan bunga pinjaman debitur.",
            "Debitur menggugat Perbuatan Melawan Hukum (PMH) atas obral aset yang tidak wajar dan merugikan."
          ],
          optA: { action: "Batalkan Risalah Lelang yang Menjual Jauh di Bawah Nilai Likuidasi Wajar", consequence: "Mencegah persekongkolan lelang murah yang menzalimi debitur dalam kesulitan ekonomi.", keadilan: 95, kepastian: 60, kemanfaatan: 85, alignmentShift: -15 },
          optB: { action: "Sahkan Hasil Lelang Sesuai Prosedur Pelelangan Umum KPKNL", consequence: "Kepastian transaksi lelang formal terjaga, namun membiarkan debitur hancur termiskinkan.", keadilan: 25, kepastian: 95, kemanfaatan: 30, alignmentShift: 25 }
        },
        {
          title: "Eksekusi Rumah Warisan yang Dijadikan Jaminan oleh Salah Satu Ahli Waris",
          facts: [
            "Anak sulung memalsukan persetujuan adik-adiknya untuk menjaminkan sertifikat rumah warisan bersama ke bank.",
            "Anak sulung kabur saat kredit macet, dan bank hendak mengosongkan rumah yang dihuni ibu kandung dan adik-adiknya.",
            "Adik-adik mengajukan perlawanan pihak ketiga (derden verzet) menolak pengosongan."
          ],
          optA: { action: "Kabulkan Derden Verzet: Batalkan Hak Tanggungan yang Cacat Persetujuan Ahli Waris", consequence: "Ibu sepuh dan adik-adik terlindungi dari kehilangan tempat tinggal akibat kejahatan kakak sulung.", keadilan: 95, kepastian: 70, kemanfaatan: 85, alignmentShift: -10 },
          optB: { action: "Menangkan Hak Bank Mengosongkan Rumah Mengingat Sertifikat Asli Ada di Bank", consequence: "Keamanan kredit perbankan terlindungi, namun menelantarkan korban penipuan keluarga sendiri.", keadilan: 30, kepastian: 90, kemanfaatan: 35, alignmentShift: 20 }
        }
      ]
    },
    {
      idx: 7,
      title: "Pengampuan (Curatele) Terhadap Lansia Berharta Triliunan",
      cases: [
        {
          title: "Perebutan Pengampuan Konglomerat Pengidap Alzheimer oleh Anak Kandung",
          facts: [
            "Seorang pendiri korporasi farmasi berusia 82 tahun didiagnosis menderita demensia Alzheimer berat.",
            "Anak pertama mengajukan permohonan penetapan pengampuan (curatele) agar dapat mengendalikan seluruh saham perusahaan.",
            "Anak kedua menolak dan menuduh anak pertama berniat menjual seluruh aset perusahaan demi kepentingan pribadi."
          ],
          optA: { action: "Bentuk Tim Pengampu Bersama Independen Dibawah Pengawasan Balai Harta Peninggalan", consequence: "Aset terlindungi secara transparan dan netral tanpa memicu dominasi sepihak salah satu anak.", keadilan: 90, kepastian: 80, kemanfaatan: 90, alignmentShift: 0 },
          optB: { action: "Tolak Pengampuan: Biarkan Konglomerat Tetap Mengelola Asetnya Sendiri", consequence: "Otonomi pribadi lansia dihormati, namun berisiko tinggi dimanfaatkan pihak luar untuk penipuan aset triliunan.", keadilan: 50, kepastian: 50, kemanfaatan: 40, alignmentShift: -15 }
        },
        {
          title: "Permohonan Pengampuan Suami atas Istri Pecandu Belanja Daring & Kasino",
          facts: [
            "Seorang istri menghabiskan tabungan pendidikan ketiga anaknya sebesar Rp 3 miliar untuk judi kasino online dan belanja kompulsif.",
            "Suami memohon penetapan pengampuan (curatele) atas dasar pemborosan (verkwisting Pasal 433 KUHPerdata).",
            "Istri membela diri bahwa ia menggunakan uang hasil warisan orang tuanya sendiri dan bukan uang belanja dapur."
          ],
          optA: { action: "Kabulkan Pengampuan atas Dasar Pemborosan Patologis yang Mengancam Keutuhan Anak", consequence: "Masa depan finansial anak-anak terselamatkan dari bahaya jerat kemiskinan judi kompulsif.", keadilan: 85, kepastian: 85, kemanfaatan: 90, alignmentShift: 5 },
          optB: { action: "Tolak Pengampuan karena Harta Warisan Adalah Hak Milik Bebas Pribadi Istri", consequence: "Kebebasan individu atas harta pribadi dihormati, namun berujung kehancuran ekonomi total keluarga.", keadilan: 45, kepastian: 75, kemanfaatan: 40, alignmentShift: -10 }
        },
        {
          title: "Keabsahan Hibah Tanah yang Dibuat Lansia Seminggu Sebelum Masuk Curatele",
          facts: [
            "Kakek pikun menghibahkan tanah strategis kepada tetangga yang rajin membawakannya kopi setiap pagi.",
            "Seminggu kemudian, pengadilan negeri mengeluarkan penetapan pengampuan resmi atas kakek tersebut.",
            "Anak kandung menggugat pembatalan hibah dengan dalih saat menandatangani akta, kakek sudah tidak cakap berbuat hukum."
          ],
          optA: { action: "Batalkan Hibah Mengingat Ketidakcakapan Mental Terbukti Nyata Secara Medis", consequence: "Mencegah eksploitasi lansia rentan oleh tetangga yang memanfaatkan kemunduran kognitif.", keadilan: 95, kepastian: 70, kemanfaatan: 85, alignmentShift: -15 },
          optB: { action: "Pertahankan Hibah karena Ditandatangani Sebelum Terbitnya Putusan Pengadilan", consequence: "Asas kepastian waktu penetapan hukum formil terjaga, namun mengabaikan manipulasi terhadap lansia.", keadilan: 35, kepastian: 90, kemanfaatan: 40, alignmentShift: 20 }
        }
      ]
    },
    {
      idx: 8,
      title: "Penarikan Sepihak Jaminan Fidusia oleh Debt Collector di Jalanan",
      cases: [
        {
          title: "Penghadangan Motor Ibu yang Mengantar Anak Sekolah oleh 4 Debt Collector",
          facts: [
            "Seorang ibu terlambat mencicil motor 2 bulan dihadang di jalan raya dan dipaksa menyerahkan kunci kontak di depan anaknya yang menangis ketakutan.",
            "Perusahaan leasing beralasan memiliki sertifikat fidusia yang memiliki kekuatan eksekutorial sama dengan putusan hakim.",
            "Ibu tersebut melaporkan aksi perampasan ke polisi merujuk pada Putusan MK No. 18/PUU-XVII/2019."
          ],
          optA: { action: "Proses Pidana Perampasan: Eksekusi Wajib Sukarela atau Melalui Pengadilan Negeri", consequence: "Melindungi warga dari premanisme jalanan dan menegakkan putusan perlindungan debitur Mahkamah Konstitusi.", keadilan: 95, kepastian: 85, kemanfaatan: 90, alignmentShift: -10 },
          optB: { action: "Benarkan Tindakan Penarikan Demi Efektivitas Penagihan Industri Multifinance", consequence: "Kreditur leasing leluasa mengamankan piutang macet, namun melegalkan teror intimidasi ruang publik.", keadilan: 20, kepastian: 80, kemanfaatan: 30, alignmentShift: 25 }
        },
        {
          title: "Debitur Mengalihkan Mobil Kredit ke Pihak Ketiga Tanpa Izin Leasing",
          facts: [
            "Debitur menggadaikan mobil yang masih berstatus kredit fidusia kepada penadah di luar kota seharga Rp 50 juta lalu menghilang.",
            "Perusahaan pembiayaan menuntut debitur dengan Pasal 36 UU Jaminan Fidusia tentang penggelapan objek fidusia.",
            "Debitur yang tertangkap membela diri bahwa sengketa kredit macet adalah ranah murni perdata dan bukan pidana."
          ],
          optA: { action: "Jatuhkan Pidana Penggelapan Objek Fidusia Sesuai Ketentuan UU No. 42/1999", consequence: "Mencegah modus penggelapan kendaraan kredit yang merugikan industri pembiayaan nasional.", keadilan: 85, kepastian: 95, kemanfaatan: 85, alignmentShift: 10 },
          optB: { action: "Lepaskan dari Pidana & Alihkan ke Gugatan Wanprestasi Perdata", consequence: "Menghindari kriminalisasi debitur macet, namun memicu maraknya sindikat oper kredit ilegal.", keadilan: 30, kepastian: 40, kemanfaatan: 35, alignmentShift: -20 }
        },
        {
          title: "Sengketa Biaya Tarik Kendaraan yang Melebihi Tunggakan Cicilan",
          facts: [
            "Debitur menunggak angsuran mobil Rp 4 juta, namun debt collector menuntut biaya penarikan operasional sebesar Rp 25 juta agar mobil dikembalikan.",
            "Leasing menolak menerima pelunasan cicilan pokok tanpa pembayaran penuh biaya penarikan jasa penagih.",
            "Debitur menggugat klausul pembebanan biaya penagihan pihak ketiga yang tidak pernah tercantum dalam perjanjian kredit awal."
          ],
          optA: { action: "Batalkan Biaya Tarik Liar & Perintahkan Pengembalian Mobil Setelah Cicilan Pokok Lunas", consequence: "Melindungi konsumen dari pemerasan terstruktur berkedok biaya jasa penagihan swasta.", keadilan: 95, kepastian: 80, kemanfaatan: 90, alignmentShift: -10 },
          optB: { action: "Wajibkan Debitur Bayar Biaya Tarik Sebagai Konsekuensi Keterlambatan Bayar", consequence: "Kepentingan biaya operasional penagihan leasing tertutup, namun melegitimasi tarif pemerasan sepihak.", keadilan: 25, kepastian: 70, kemanfaatan: 30, alignmentShift: 20 }
        }
      ]
    },
    {
      idx: 9,
      title: "Perbuatan Melawan Hukum (Pasal 1365 KUHPerdata) Antar Tetangga",
      cases: [
        {
          title: "Pembangunan Tembok Permanen yang Menutup Total Akses Rumah Tetangga Belakang",
          facts: [
            "Warga A membangun tembok beton setinggi 3 meter di batas pekarangannya karena dendam cekcok suara musik dengan warga B.",
            "Akibat tembok tersebut, rumah warga B terkurung total tanpa akses jalan keluar menuju gang umum sama sekali.",
            "Warga A bersikeras memiliki hak mutlak membangun di atas tanah bersertifikat hak milik miliknya sendiri."
          ],
          optA: { action: "Perintahkan Pembongkaran Sebagian Tembok untuk Akses Jalan (Asas Penyalahgunaan Hak)", consequence: "Penyalahgunaan hak milik (misbruik van recht) dicegah; fungsi sosial hak atas tanah diutamakan.", keadilan: 95, kepastian: 60, kemanfaatan: 95, alignmentShift: -20 },
          optB: { action: "Tolak Gugatan Mengingat Warga A Membangun di Atas Batas Tanah Sah Miliknya", consequence: "Hak mutlak kepemilikan tanah ditegakkan tanpa kompromi, namun mengurung manusia di dalam rumahnya.", keadilan: 20, kepastian: 95, kemanfaatan: 20, alignmentShift: 30 }
        },
        {
          title: "Gugatan Kebisingan Suara Kandang Ayam Komersial di Kompleks Perumahan",
          facts: [
            "Warga C memelihara 200 ekor ayam aduan dan bebek di halaman rumah kavling pemukiman padat.",
            "Bau kotoran dan suara kokok dini hari menyebabkan anak tetangga sebelah terkena infeksi paru-paru dan depresi akibat insomnia.",
            "Warga C berdalih beternak adalah hak asasi mencari nafkah di tanah kepunyaannya sendiri."
          ],
          optA: { action: "Kabulkan Gugatan PMH: Perintahkan Pemindahan Ternak & Ganti Rugi Medis", consequence: "Hak warga atas lingkungan hidup sehat dan ketenangan tempat tinggal terlindungi dari polusi privat.", keadilan: 90, kepastian: 85, kemanfaatan: 90, alignmentShift: 0 },
          optB: { action: "Tolak Gugatan karena Peraturan Daerah Belum Mengatur Kuota Unggas Kavling", consequence: "Menghindari sanksi perdata tanpa pasal perda eksplisit, namun mengorbankan kesehatan tetangga sekitar.", keadilan: 30, kepastian: 80, kemanfaatan: 35, alignmentShift: 20 }
        },
        {
          title: "Air Buangan Talang Hujan yang Menyebabkan Dinding Tetangga Runtuh",
          facts: [
            "Warga D merenovasi atap genteng dengan kemiringan talang air langsung mengucur deras ke pondasi dinding bata rumah warga E.",
            "Saat hujan lebat, dinding kamar warga E retak dan ambruk menimpa perabot rumah tangga senilai Rp 30 juta.",
            "Warga D menolak ganti rugi dengan dalih hujan lebat adalah takdir alam bencana (vis major)."
          ],
          optA: { action: "Hukum Warga D Membayar Ganti Rugi Penuh Akibat Kelalaian Desain Konstruksi", consequence: "Prinsip kehati-hatian ketetanggaan (buurrecht) ditegakkan; kelalaian pribadi bukan bencana alam.", keadilan: 95, kepastian: 85, kemanfaatan: 85, alignmentShift: 0 },
          optB: { action: "Bagi Kerugian 50:50 dengan Alasan Intensitas Hujan Sangat Ekstrem", consequence: "Meringankan beban pelaku renovasi, namun membebankan separuh kerugian pada korban yang tidak bersalah.", keadilan: 60, kepastian: 50, kemanfaatan: 65, alignmentShift: -10 }
        }
      ]
    },
    {
      idx: 10,
      title: "Ujian Komprehensif: Sengketa Harta Warisan Taipan Properti",
      cases: [
        {
          title: "Sengketa Keabsahan Akta Wasiat Rahasia yang Ditemukan di Safe Deposit Box Luar Negeri",
          facts: [
            "Mendiang taipan properti memiliki 4 istri dan 11 anak dengan total aset terdaftar mencapai Rp 5 triliun.",
            "Ditemukan surat wasiat rahasia di bank Swiss yang memberikan seluruh gedung pencakar langit utama kepada yayasan riset kanker.",
            "Seluruh anak kandung bersatu menggugat pembatalan wasiat atas dasar pelanggaran hak mutlak waris (Legitieme Portie)."
          ],
          optA: { action: "Pangkas Porsi Wasiat Swiss Sesuai Batas Legitieme Portie Hukum Perdata Indonesia", consequence: "Supremasi hukum waris nasional ditegakkan atas aset domestik, hak dasar keluarga terlindungi.", keadilan: 85, kepastian: 90, kemanfaatan: 75, alignmentShift: 10 },
          optB: { action: "Sahkan Wasiat Penuh Mengikuti Pilihan Hukum Internasional di Swiss", consequence: "Riset kanker terdanai masif triliunan rupiah, namun melanggar asas ketertiban umum hukum keluarga Indonesia.", keadilan: 50, kepastian: 40, kemanfaatan: 80, alignmentShift: -20 }
        },
        {
          title: "Klaim Saham Perusahaan dari Anak Luar Nikah Berbekal Surat Pengakuan Bawah Tangan",
          facts: [
            "Seorang putri rahasia mengajukan klaim 20% kepemilikan saham holding properti mendiang taipan.",
            "Ia menunjukkan surat pernyataan bermaterai yang ditulis tangan oleh mendiang taipan di kamar hotel saat masih hidup.",
            "Direksi perseroan menolak pendaftaran saham karena surat pengakuan tidak pernah diaktakan di hadapan notaris resmi."
          ],
          optA: { action: "Perintahkan Uji Laboratorium Forensik Tulisan Tangan & Konfirmasi Hak Keperdataan", consequence: "Mengejar kebenaran materiil kehendak pewaris tanpa terhalang kekakuan formalitas korporasi.", keadilan: 90, kepastian: 60, kemanfaatan: 85, alignmentShift: -15 },
          optB: { action: "Tolak Klaim Saham Mengacu pada Syarat Formalitas Akta Otentik Perseroan Terbatas", consequence: "Kepastian hukum pasar modal dan struktur kepemilikan emiten terjaga dari goncangan dokumen bawah tangan.", keadilan: 40, kepastian: 95, kemanfaatan: 50, alignmentShift: 20 }
        },
        {
          title: "Perebutan Status Pengelolaan Cagar Budaya Istana Keluarga Pewaris",
          facts: [
            "Salah satu aset peninggalan taipan adalah istana bersejarah cagar budaya yang ingin dijadikan museum publik oleh anak bungsu.",
            "Anak sulung berniat meruntuhkan istana untuk dibangun supermall apartemen 50 lantai bernilai triliunan.",
            "Pemerintah daerah memohon status perlindungan cagar budaya namun terkendala status sertifikat hak milik keluarga."
          ],
          optA: { action: "Tetapkan Status Perlindungan Cagar Budaya & Wajibkan Pengelolaan Bersama Sebagai Museum", consequence: "Warisan sejarah bangsa terselamatkan untuk generasi masa depan melampaui ego kerakusan keluarga.", keadilan: 95, kepastian: 70, kemanfaatan: 95, alignmentShift: -15 },
          optB: { action: "Izinkan Pembangunan Supermall Mengacu pada Hak Bebas Pemilik Saham Terbanyak", consequence: "Pertumbuhan ekonomi dan lapangan kerja baru tercipta, namun memusnahkan situs sejarah abadi kota.", keadilan: 30, kepastian: 85, kemanfaatan: 60, alignmentShift: 20 }
        }
      ]
    }
  ]
};

// Generate detailed cases for Leagues 3 to 8
// We'll write the complete generator to populate all 240 cases without duplicates!
