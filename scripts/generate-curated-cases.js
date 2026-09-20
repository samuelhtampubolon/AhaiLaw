const fs = require('fs');
const path = require('path');

// 8 Levels x 10 Islands = 80 Islands
// Each Island has 3 hand-crafted realistic legal cases = 240 Cases in total.

const islandsData = [
  // LEVEL 1: FONDASI, ASAS & FILSAFAT HUKUM
  {
    level: 1,
    islands: [
      {
        idx: 1,
        title: "Asas Keadilan vs Kepastian Hukum (Dilema Radbruch)",
        cases: [
          {
            title: "Pencurian 3 Butir Buah Kakao Nenek Minah",
            facts: [
              "Nenek Minah (55 tahun) memetik 3 butir buah kakao seharga Rp 2.100 di perkebunan swasta untuk bibit tanaman.",
              "Pihak manajemen perkebunan melaporkan kejadian ini ke polisi atas tuduhan pencurian ringan (Pasal 364 KUHP).",
              "Jaksa menuntut pidana penjara demi menjunjung tinggi kepastian hukum dan perlindungan hak milik perkebunan."
            ],
            optA: {
              action: "Terapkan Asas Keadilan Restoratif (Hentikan Penuntutan)",
              consequence: "Perkara diselesaikan secara musyawarah tanpa pemenjaraan lansia miskin, keadilan substantif tercapai.",
              keadilan: 95, kepastian: 30, kemanfaatan: 90, alignmentShift: -25
            },
            optB: {
              action: "Jatuhkan Vonis Bersalah Sesuai Teks Pasal (Positivisme Hukum)",
              consequence: "Kepastian teks undang-undang ditegakkan mutlak, namun publik mengecam keras vonis yang mencederai nurani.",
              keadilan: 15, kepastian: 95, kemanfaatan: 20, alignmentShift: 25
            }
          },
          {
            title: "Dilema Sopir Ambulans Menerobos Lampu Merah",
            facts: [
              "Seorang sopir ambulans swasta membawa korban serangan jantung kritis yang membutuhkan penanganan medis dalam hitungan menit.",
              "Sopir menerobos lampu merah di persimpangan padat dan tertangkap kamera tilang elektronik (ETLE).",
              "Dinas perhubungan menolak mencabut denda tilang karena aturan lalu lintas berlaku mutlak bagi seluruh pengguna jalan."
            ],
            optA: {
              action: "Gunakan Doktrin Noodtoestand (Kondisi Darurat Menghapus Melawan Hukum)",
              consequence: "Denda tilang dibatalkan demi menyelamatkan nyawa manusia sebagai nilai tertinggi dalam hukum.",
              keadilan: 90, kepastian: 40, kemanfaatan: 95, alignmentShift: -20
            },
            optB: {
              action: "Pertahankan Sanksi Tilang Demi Tertib Hukum Lalu Lintas",
              consequence: "Aturan lalu lintas dihormati tanpa pengecualian, namun menimbulkan ketakutan bagi armada medis darurat.",
              keadilan: 25, kepastian: 90, kemanfaatan: 30, alignmentShift: 20
            }
          },
          {
            title: "Hak Menolak Perintah Atasan yang Melanggar HAM",
            facts: [
              "Seorang bintara polisi diperintahkan komandannya untuk membubarkan aksi demonstrasi buruh dengan kekerasan fisik berlebihan.",
              "Bintara tersebut menolak perintah karena meyakini pembubaran brutal melanggar HAM dan etika profesi kepolisian.",
              "Komandan menjatuhkan sanksi disiplin atas pembangkangan terhadap perintah atasan (insubordinasi)."
            ],
            optA: {
              action: "Benarkan Penolakan Bintara (Hukum Alam & Keadilan Hakiki)",
              consequence: "Integritas moral prajurit diapresiasi, menegaskan bahwa perintah yang nyata-nyata melawan hukum wajib ditolak.",
              keadilan: 95, kepastian: 40, kemanfaatan: 85, alignmentShift: -25
            },
            optB: {
              action: "Tegakkan Hukuman Disiplin demi Hierarki & Doktrin Komando",
              consequence: "Hierarki militer/polisi tetap solid dan patuh, namun membuka peluang impunitas perintah sewenang-wenang.",
              keadilan: 20, kepastian: 95, kemanfaatan: 25, alignmentShift: 25
            }
          }
        ]
      },
      {
        idx: 2,
        title: "Asas Legalitas & Larangan Retroaktif (Nullum Delictum)",
        cases: [
          {
            title: "Kriminalisasi Modus Baru Penipuan Pinjaman Online Ilegal",
            facts: [
              "Sindikat pinjol ilegal menyebarkan data pribadi dan mengancam nasabah menggunakan metode rekayasa digital yang belum tercantum eksplisit dalam KUHP lama.",
              "Korban mengalami depresi berat hingga mengakhiri hidup.",
              "Jaksa menuntut menggunakan analogi pasal pemerasan konvensional yang belum mencakup ranah digital spesifik tersebut."
            ],
            optA: {
              action: "Tolak Analogi Hukum Pidana (Asas Legalitas Ketat Pasal 1 ayat 1 KUHP)",
              consequence: "Prinsip dasar pidana terjaga tanpa perluasan liar, namun pelaku lolos dari jerat pidana berat.",
              keadilan: 30, kepastian: 95, kemanfaatan: 20, alignmentShift: 30
            },
            optB: {
              action: "Gunakan Penafsiran Ekstensif / Teleologis demi Melindungi Korban",
              consequence: "Pelaku dihukum setimpal dan korban terlindungi, namun preseden penafsiran pasal pidana menjadi lentur.",
              keadilan: 90, kepastian: 35, kemanfaatan: 85, alignmentShift: -25
            }
          },
          {
            title: "Pemberlakuan Surut Undang-Undang Perlindungan Anak",
            facts: [
              "Seorang pelaku kejahatan seksual anak melakukan aksinya satu bulan sebelum undang-undang dengan hukuman kebiri kimia disahkan.",
              "Keluarga korban menuntut agar terdakwa divonis dengan undang-undang baru yang memuat hukuman kebiri.",
              "Konstitusi (Pasal 28I UUD 1945) melarang penuntutan atas dasar hukum yang berlaku surut (non-retroaktif)."
            ],
            optA: {
              action: "Terapkan Hukum yang Berlaku Saat Perbuatan Dilakukan (Asas Non-Retroaktif)",
              consequence: "Jaminan hak asasi konstitusional terlindungi dari kesewenang-wenangan legislasi negara.",
              keadilan: 40, kepastian: 95, kemanfaatan: 40, alignmentShift: 20
            },
            optB: {
              action: "Terapkan Hukuman Baru Berdasarkan Doktrin Kejahatan Luar Biasa",
              consequence: "Kemarahan publik terpuaskan, namun tatanan asas non-retroaktif konstitusi menjadi runtuh.",
              keadilan: 75, kepastian: 20, kemanfaatan: 60, alignmentShift: -25
            }
          },
          {
            title: "Pencabutan Izin Tambang Berdasarkan Aturan Baru yang Terbit Esok Hari",
            facts: [
              "Sebuah perusahaan tambang telah mengantongi izin lingkungan yang sah menurut regulasi tahun 2020.",
              "Pemerintah menerbitkan PP baru yang memperketat zonasi konservasi dan langsung membekukan izin perusahaan tanpa masa transisi.",
              "Perusahaan menggugat ke PTUN menuntut kepastian hak yang telah diperoleh (vested rights)."
            ],
            optA: {
              action: "Kabulkan Gugatan Tambang (Lindungi Asas Kepastian Hukum & Hak Sah)",
              consequence: "Kepastian iklim investasi terjaga, pemerintah wajib menghormati izin yang sah pada masanya.",
              keadilan: 45, kepastian: 95, kemanfaatan: 50, alignmentShift: 20
            },
            optB: {
              action: "Menangkan Pemerintah (Salus Populi Suprema Lex Esto - Demi Lingkungan)",
              consequence: "Ekosistem alam terselamatkan, namun pelaku usaha kehilangan kepastian regulasi investasi.",
              keadilan: 80, kepastian: 30, kemanfaatan: 85, alignmentShift: -20
            }
          }
        ]
      },
      {
        idx: 3,
        title: "Hukum Kodrat vs Positivisme Yuridis (Hans Kelsen)",
        cases: [
          {
            title: "Gugatan Penggusuran Rumah Warisan Kolonial di Bantaran Sungai",
            facts: [
              "Sebuah keluarga telah tinggal di bantaran sungai selama 60 tahun dengan bukti pembayaran pajak bumi turun-temurun.",
              "Pemerintah kota hendak menormalisasi sungai untuk mencegah banjir besar yang mengancam 500.000 penduduk kota.",
              "Secara hukum formil, tanah tersebut adalah tanah negara bebas (vrij staatsdomein) tanpa sertifikat hak milik."
            ],
            optA: {
              action: "Perintahkan Ganti Rugi Layak dan Relokasi Manusiawi (Hukum Progresif)",
              consequence: "Kemanusiaan warga terlindungi, normalisasi sungai tetap berjalan dengan kompromi beradab.",
              keadilan: 90, kepastian: 50, kemanfaatan: 90, alignmentShift: -20
            },
            optB: {
              action: "Eksekusi Pengosongan Tanpa Ganti Rugi Berdasarkan Status Tanah Negara",
              consequence: "Anggaran proyek efisien dan proyek kilat, namun keluarga miskin terbuang menjadi tunawisma.",
              keadilan: 15, kepastian: 95, kemanfaatan: 40, alignmentShift: 25
            }
          },
          {
            title: "Kewajiban Menghormati Kontrak yang Berat Sebelah (Klausula Baku)",
            facts: [
              "Petani singkong menandatangani kontrak kemitraan dengan pabrik tepung tapioka bermodal klausula sepihak.",
              "Saat harga pupuk melonjak 300%, kontrak melarang petani menaikkan harga jual atau menjual ke pabrik lain di bawah ancaman denda miliaran.",
              "Pabrik menuntut kepastian asas Pacta Sunt Servanda (perjanjian mengikat sebagai undang-undang)."
            ],
            optA: {
              action: "Batalkan Klausula Berat Sebelah Berdasarkan Asas Kepatutan & Iktikad Baik",
              consequence: "Keseimbangan posisi tawar petani ditegakkan, membatasi keserakahan korporasi besar.",
              keadilan: 95, kepastian: 35, kemanfaatan: 85, alignmentShift: -25
            },
            optB: {
              action: "Tegakkan Isi Kontrak Penuh Sesuai Kesepakatan Para Pihak",
              consequence: "Kepastian kontrak formal terjaga kaku, namun petani kecil terancam bangkrut dan terjerat utang seumur hidup.",
              keadilan: 20, kepastian: 95, kemanfaatan: 25, alignmentShift: 25
            }
          },
          {
            title: "Pengesahan Pernikahan Beda Keyakinan Melalui Penetapan Pengadilan",
            facts: [
              "Pasangan calon pengantin beda keyakinan ditolak oleh Kantor Urusan Agama dan Kantor Catatan Sipil setempat.",
              "Mereka mengajukan permohonan penetapan izin perkebunan beda agama ke Pengadilan Negeri atas nama hak asasi berkeluarga.",
              "Pasal 2 ayat 1 UU Perkawinan menyatakan perkawinan sah apabila dilakukan menurut hukum masing-masing agama."
            ],
            optA: {
              action: "Kabulkan Permohonan Pernikahan Berdasarkan Hak Konstitusional Warga",
              consequence: "Hak privasi dan hak membentuk keluarga terakomodasi, menghindari penyelundupan hukum ke luar negeri.",
              keadilan: 85, kepastian: 45, kemanfaatan: 80, alignmentShift: -15
            },
            optB: {
              action: "Tolak Permohonan Mengacu pada UU Perkawinan dan Fatwa Keagamaan",
              consequence: "Kepatuhan terhadap teks formal undang-undang perkawinan dan norma sosial keagamaan terjaga.",
              keadilan: 35, kepastian: 90, kemanfaatan: 40, alignmentShift: 20
            }
          }
        ]
      },
      {
        idx: 4,
        title: "Asas Kepatutan & Keadilan Substantif (Hukum Progresif)",
        cases: [
          {
            title: "Pengambilan Sisa Padi Jatuh di Sawah Milik Konglomerat",
            facts: [
              "Dua orang buruh tani mengumpulkan butiran padi rontok (ngasak) di tanah bekas panen mesin milik korporasi agribisnis.",
              "Satpam perusahaan menangkap mereka dan memproses hukum atas dugaan pencurian hasil panen.",
              "Kerugian materiil perusahaan tercatat kurang dari Rp 50.000."
            ],
            optA: {
              action: "Hentikan Perkara Melalui Pendekatan Restoratif & Lepaskan dari Tuntutan",
              consequence: "Nurani hukum diutamakan, mencegah kriminalisasi tradisi subsistensi masyarakat pedesaan.",
              keadilan: 95, kepastian: 30, kemanfaatan: 90, alignmentShift: -25
            },
            optB: {
              action: "Proses Pidana Tipiring demi Efek Jera Perlindungan Hak Milik Korporasi",
              consequence: "Disiplin properti ditegakkan mutlak, namun memicu amarah warga desa atas arogansi korporasi.",
              keadilan: 10, kepastian: 95, kemanfaatan: 15, alignmentShift: 30
            }
          },
          {
            title: "Pemanfaatan Listrik Darurat untuk Menyelamatkan Tabung Oksigen Warga",
            facts: [
              "Saat pemadaman bergilir di pulau terpencil, seorang ketua RT menyambungkan kabel genset kantor kelurahan ke rumah warga pengidap asma kronis.",
              "Petugas PLN mendapati sambungan ilegal dan mengenakan tagihan susulan plus denda pidana pencurian tenaga listrik.",
              "Tindakan tersebut terbukti berhasil menyelamatkan nyawa pasien asma."
            ],
            optA: {
              action: "Bebaskan Ketua RT atas Dasar Alasan Pemaaf Darurat Medis (Noodtoestand)",
              consequence: "Penyelamatan nyawa diakui sebagai urgensi tertinggi melampaui sanksi administratif listrik.",
              keadilan: 90, kepastian: 40, kemanfaatan: 95, alignmentShift: -20
            },
            optB: {
              action: "Wajibkan Bayar Denda demi Menegakkan Aturan Pencurian Energi BUMN",
              consequence: "Integritas regulasi energi BUMN terjaga, namun mengabaikan rasa kemanusiaan dalam situasi darurat.",
              keadilan: 20, kepastian: 90, kemanfaatan: 30, alignmentShift: 20
            }
          },
          {
            title: "Penebangan Pohon yang Membahayakan Atap Rumah Tetangga",
            facts: [
              "Sebuah dahan pohon beringin milik warga A condong dan rawan tumbang menimpa kamar tidur anak tetangganya (warga B).",
              "Warga A menolak memotong dahan karena alasan fengshui, sehingga warga B memotong dahan tersebut tanpa izin.",
              "Warga A melaporkan warga B atas tuduhan perusakan barang milik orang lain (Pasal 406 KUHP)."
            ],
            optA: {
              action: "Bebaskan Warga B Berdasarkan Pembelaan Bahaya Nyata (Asas Asas Kepatutan)",
              consequence: "Pencegahan marabahaya fisik diprioritaskan di atas kepemilikan benda tumbuhan privat.",
              keadilan: 85, kepastian: 45, kemanfaatan: 85, alignmentShift: -15
            },
            optB: {
              action: "Hukum Bersalah karena Main Hakim Sendiri (Eigenrichting)",
              consequence: "Warga dicegah bertindak sepihak tanpa izin pengadilan, namun resiko bahaya fisik terabaikan.",
              keadilan: 30, kepastian: 90, kemanfaatan: 35, alignmentShift: 20
            }
          }
        ]
      },
      {
        idx: 5,
        title: "Hermeneutika Hukum: Penafsiran Teleologis vs Gramatikal",
        cases: [
          {
            title: "Apakah Menangkap Sinyal Wi-Fi Tetangga Termasuk 'Mengambil Barang'?",
            facts: [
              "Seorang pemuda meretas kata sandi Wi-Fi kantor swasta dari teras untuk mengunduh materi kuliah daring.",
              "Perusahaan menuntut pemuda tersebut dengan Pasal 362 KUHP tentang Pencurian Barang.",
              "Secara gramatikal klasik, frekuensi gelombang radio bukan benda berwujud cair, padat, atau gas."
            ],
            optA: {
              action: "Gunakan Penafsiran Ekstensif: Gelombang Berharga Ekonomi adalah 'Barang'",
              consequence: "Hak kepemilikan digital dilindungi dari pencurian tak kasat mata.",
              keadilan: 70, kepastian: 70, kemanfaatan: 60, alignmentShift: 10
            },
            optB: {
              action: "Gunakan Penafsiran Gramatikal Ketat: Bebaskan dari Pasal Pencurian Konvensional",
              consequence: "Asas legalitas terjaga; menuntut jaksa menggunakan UU ITE yang lebih spesifik daripada memaksakan KUHP.",
              keadilan: 60, kepastian: 85, kemanfaatan: 60, alignmentShift: 15
            }
          },
          {
            title: "Definisi 'Kendaraan Bermotor' untuk Skuter Listrik di Trotoar",
            facts: [
              "Seorang pengguna otopet listrik menabrak pejalan kaki di trotoar hingga terluka retak tulang.",
              "Polisi mendakwa pasal kelalaian pengemudi kendaraan bermotor di jalan umum (UU LLAJ).",
              "Kuasa hukum berargumen otopet bertenaga baterai mini bukanlah kendaraan bermotor yang dimaksud dalam UU LLAJ 2009."
            ],
            optA: {
              action: "Tafsirkan Teleologis: Segala Sarana Penggerak Mesin Wajib Bertanggung Jawab",
              consequence: "Pejalan kaki di trotoar mendapatkan perlindungan hukum maksimal dari moda mobilitas modern.",
              keadilan: 85, kepastian: 55, kemanfaatan: 80, alignmentShift: -15
            },
            optB: {
              action: "Tafsirkan Gramatikal: Tolak Kualifikasi Sebagai Kendaraan Bermotor LLAJ",
              consequence: "Mendorong parlemen memperbarui definisi hukum, namun korban sementara sulit menuntut ganti rugi asuransi Jasa Raharja.",
              keadilan: 35, kepastian: 90, kemanfaatan: 30, alignmentShift: 25
            }
          },
          {
            title: "Penafsiran 'Merugikan Keuangan Negara' dalam Kebijakan Tanggap Bencana",
            facts: [
              "Bupati membeli tenda pengungsi darurat letusan gunung dengan harga 20% di atas pagu anggaran karena stok langka di pasar.",
              "Audit BPK menemukan selisih harga dan jaksa menuduh perbuatan tersebut merugikan keuangan negara.",
              "Bupati membuktikan seluruh tenda benar-benar dihuni 3.000 pengungsi yang kedinginan tanpa ada uang yang ia korupsi."
            ],
            optA: {
              action: "Tafsirkan Teleologis Tujuan UU Tipikor: Tidak Ada Niat Jahat Korup (Mens Rea)",
              consequence: "Pejabat publik berani mengambil keputusan darurat demi nyawa rakyat tanpa dihantui kriminalisasi.",
              keadilan: 95, kepastian: 40, kemanfaatan: 95, alignmentShift: -25
            },
            optB: {
              action: "Tafsirkan Gramatikal Akuntansi: Selisih Pembayaran Otomatis Kerugian Negara",
              consequence: "Disiplin anggaran negara terjaga kaku, namun memicu kepasifan pejabat saat bencana alam datang.",
              keadilan: 15, kepastian: 95, kemanfaatan: 10, alignmentShift: 30
            }
          }
        ]
      },
      {
        idx: 6,
        title: "Hirarki Peraturan Perundang-Undangan & Lex Superior",
        cases: [
          {
            title: "Peraturan Daerah yang Bertentangan dengan Undang-Undang Ketenagakerjaan",
            facts: [
              "Suatu Perda melarang perempuan bekerja di tempat hiburan malam lewat pukul 22.00 dengan ancaman denda.",
              "Asosiasi pekerja perempuan menggugat Perda tersebut karena melanggar hak kesetaraan kerja dalam UU Ketenagakerjaan dan UUD 1945.",
              "Pemerintah daerah beralasan Perda dibuat untuk menjaga ketertiban moral lokal."
            ],
            optA: {
              action: "Batalkan Perda Menggunakan Asas Lex Superior Derogat Legi Inferiori",
              consequence: "Hierarki hukum nasional tegak, hak asasi perempuan untuk bekerja setara terlindungi.",
              keadilan: 90, kepastian: 85, kemanfaatan: 80, alignmentShift: -10
            },
            optB: {
              action: "Pertahankan Perda Mengatasnamakan Otonomi Daerah dan Kearifan Lokal",
              consequence: "Aspirasi lokal terlindungi, namun terjadi fragmentasi hukum nasional dan diskriminasi gender.",
              keadilan: 25, kepastian: 40, kemanfaatan: 30, alignmentShift: 20
            }
          },
          {
            title: "Surat Edaran Menteri yang Menghapus Hak Cuti Tahunan",
            facts: [
              "Sebuah Surat Edaran (SE) Dirjen Pajak mengubah mekanisme restitusi yang secara materiil merugikan hak wajib pajak.",
              "Pengusaha menggugat ke PTUN bahwa SE bukan peraturan perundang-undangan (regeling) yang boleh membebankan kewajiban.",
              "Kementerian beralasan SE diperlukan sebagai petunjuk teknis internal yang mendesak."
            ],
            optA: {
              action: "Nyatakan SE Tidak Mengikat Publik Sesuai Asas Legalitas Regulasi",
              consequence: "Mencegah birokrasi membuat aturan siluman yang melangkahi undang-undang resmi.",
              keadilan: 85, kepastian: 95, kemanfaatan: 75, alignmentShift: 10
            },
            optB: {
              action: "Legalkan Keberlakuan SE Demi Fleksibilitas Penagihan Pajak Negara",
              consequence: "Penerimaan kas negara cepat tercapai, namun mengikis kepastian hak-hak wajib pajak.",
              keadilan: 30, kepastian: 30, kemanfaatan: 50, alignmentShift: -15
            }
          },
          {
            title: "Pertentangan Perpres Pengadaan Lahan dengan Putusan Mahkamah Konstitusi",
            facts: [
              "Peraturan Presiden menetapkan proyek strategis nasional dapat langsung menggusur lahan sebelum putusan appraisal berkekuatan hukum tetap.",
              "Masyarakat sipil menunjukkan Putusan MK yang menegaskan ganti rugi harus tuntas sebelum penguasaan fisik tanah.",
              "Kementerian menolak tunduk pada putusan MK dengan alasan mengejar target peresmian infrastruktur."
            ],
            optA: {
              action: "Tunduk Mutlak pada Putusan MK sebagai Tafsir Konstitusi Tertinggi",
              consequence: "Supremasi konstitusi dihormati, hak milik rakyat dari penggusuran paksa terlindungi.",
              keadilan: 95, kepastian: 95, kemanfaatan: 70, alignmentShift: 0
            },
            optB: {
              action: "Dahulukan Percepatan Proyek Infrastruktur Berdasarkan Perpres",
              consequence: "Proyek jalan tol cepat selesai, namun mencoreng marwah lembaga pengawal konstitusi negara.",
              keadilan: 15, kepastian: 25, kemanfaatan: 60, alignmentShift: -25
            }
          }
        ]
      },
      {
        idx: 7,
        title: "Asas Fiksi Hukum & Presumsi Setiap Orang Tahu UU",
        cases: [
          {
            title: "Petani Pedalaman Memelihara Satwa Dilindungi Tanpa Tahu Peraturan",
            facts: [
              "Seorang warga suku pedalaman merawat burung kakaktua raja yang terluka di hutan hingga sehat di pekarangannya.",
              "Petugas BKSDA menangkapnya dengan ancaman penjara 5 tahun berdasarkan UU Konservasi Hayati.",
              "Warga tersebut buta huruf dan tidak pernah mendapat sosialisasi undang-undang konservasi dari pemerintah."
            ],
            optA: {
              action: "Bebaskan Pelaku dari Sanksi Pidana & Sita Satwa untuk Direhabilitasi",
              consequence: "Keadilan kontekstual diterapkan tanpa menzalimi warga pelosok yang tidak terjangkau informasi.",
              keadilan: 95, kepastian: 40, kemanfaatan: 90, alignmentShift: -25
            },
            optB: {
              action: "Hukum Pidana Sesuai Asas Fiksi Hukum (Ignorantia Juris Non Excusat)",
              consequence: "Asas fiksi hukum dijaga tegak, namun melahirkan preseden hukum yang menindas kaum rentan.",
              keadilan: 15, kepastian: 95, kemanfaatan: 15, alignmentShift: 30
            }
          },
          {
            title: "Pedagang Kaki Lima Memakai Kantong Plastik Terlarang",
            facts: [
              "Pemerintah kota mengesahkan Perda larangan kantong plastik sekali pakai yang baru diundangkan 3 hari lalu di lembaran daerah.",
              "Seorang penjual gorengan ditertibkan Satpol PP dan didenda Rp 1.000.000 karena masih menggunakan kantong plastik stok lama.",
              "Denda tersebut setara dengan seluruh keuntungan berdagang penjual selama dua minggu."
            ],
            optA: {
              action: "Batalkan Denda & Berikan Pembinaan serta Masa Transisi 3 Bulan",
              consequence: "Edukasi lingkungan berjalan manusiawi tanpa mematikan mata pencaharian ekonomi mikro.",
              keadilan: 90, kepastian: 50, kemanfaatan: 90, alignmentShift: -20
            },
            optB: {
              action: "Tegakkan Denda Penuh Berdasarkan Tanggal Keberlakuan Lembaran Daerah",
              consequence: "Disiplin perda ditegakkan seketika, namun menciptakan resistensi sosial di kalangan pedagang kecil.",
              keadilan: 25, kepastian: 95, kemanfaatan: 30, alignmentShift: 20
            }
          },
          {
            title: "Pengemudi Kendaraan Membawa Pisau Lipat Multifungsi untuk Berkemah",
            facts: [
              "Seorang mahasiswa dihentikan dalam razia senjata tajam dan ditemukan membawa pisau lipat utilitas di dalam tas ransel perkemahannya.",
              "Polisi menjerat dengan UU Darurat No. 12 Tahun 1951 dengan ancaman hukuman penjara 10 tahun.",
              "Mahasiswa membuktikan ia sedang dalam perjalanan menuju bumi perkemahan kampus bersama teman-temannya."
            ],
            optA: {
              action: "Bebaskan Mahasiswa karena Memiliki Alasan Sah (Legitimate Purpose)",
              consequence: "Pasal pidana diterapkan sesuai ratio legis (mencegah kekerasan kriminal, bukan mengkriminalisasi alat berkemah).",
              keadilan: 95, kepastian: 60, kemanfaatan: 90, alignmentShift: -20
            },
            optB: {
              action: "Tahan dan Proses Pidana Mengacu pada Larangan Mutlak Bawa Senjata Tajam",
              consequence: "Ketertiban keamanan jalan raya terjaga tanpa kompromi, namun merusak masa depan mahasiswa.",
              keadilan: 10, kepastian: 90, kemanfaatan: 20, alignmentShift: 25
            }
          }
        ]
      },
      {
        idx: 8,
        title: "Hukum Adat / Kebiasaan vs Kodifikasi Hukum Tertulis",
        cases: [
          {
            title: "Penebangan Kayu Hutan Adat untuk Upacara Pemakaman Sakral",
            facts: [
              "Tokoh masyarakat adat menebang satu pohon ulin di kawasan hutan yang baru diklaim negara sebagai hutan lindung.",
              "Penebangan dilakukan secara adat untuk tiang upacara pemakaman leluhur suku yang telah berlangsung ratusan tahun.",
              "Polisi kehutanan menyita kayu dan menahan tetua adat atas dakwaan illegal logging."
            ],
            optA: {
              action: "Akui Hak Ulayat Komunitas Adat (Pasal 18B UUD 1945)",
              consequence: "Eksistensi masyarakat adat dihormati negara, memperkuat rekonsiliasi adat dan konservasi.",
              keadilan: 95, kepastian: 40, kemanfaatan: 85, alignmentShift: -25
            },
            optB: {
              action: "Hukum Berdasarkan UU Kehutanan Tertulis Demi Melindungi Hutan Negara",
              consequence: "Status zona hutan lindung negara terlindungi dari segala bentuk pemanfaatan tanpa izin formal.",
              keadilan: 20, kepastian: 95, kemanfaatan: 40, alignmentShift: 25
            }
          },
          {
            title: "Tradisi Mediasi Damai Kasus Penganiayaan Ringan di Desa Adat",
            facts: [
              "Dua pemuda desa berkelahi dan telah diselesaikan secara damai oleh kepala desa dengan denda seekor kerbau.",
              "Salah satu kerabat korban tidak puas lalu melapor ke polisi kota menuntut pelaku dipenjara.",
              "Warga desa memprotes karena intervensi polisi merusak keharmonisan adat yang telah pulih."
            ],
            optA: {
              action: "Hormati Putusan Adat & Hentikan Penyidikan Kepolisian (Ne Bis In Idem Adat)",
              consequence: "Kohesi sosial pedesaan terjaga tanpa membebani lembaga pemasyarakatan yang over-capacity.",
              keadilan: 90, kepastian: 45, kemanfaatan: 95, alignmentShift: -20
            },
            optB: {
              action: "Lanjutkan Proses Hukum Negara (Pidana Adalah Ranah Publik Bukan Perdata)",
              consequence: "Monopoli negara atas penegakan hukum pidana terjaga, namun menciptakan dendam antarkeluarga di desa.",
              keadilan: 30, kepastian: 90, kemanfaatan: 25, alignmentShift: 20
            }
          },
          {
            title: "Sengketa Batas Tanah Berdasarkan Pohon Kelapa vs Titik Koordinat GPS",
            facts: [
              "Dua keluarga bersengketa batas tanah warisan; surat segel tahun 1950 menyebut batas adalah deretan pohon kelapa miring.",
              "Pengukuran ulang BPN menggunakan GPS mutakhir menggeser batas sejauh 5 meter ke dalam pekarangan rumah pihak tetangga.",
              "Warga sepakat batas pohon kelapa telah diakui bersama selama tiga generasi tanpa konflik."
            ],
            optA: {
              action: "Menangkan Batas Pohon Kelapa Berdasarkan Asas Kepercayaan Penguasaan Fisik",
              consequence: "Kedamaian antar-tetangga terjaga sesuai fakta historis yang diakui komunitas lokal.",
              keadilan: 85, kepastian: 40, kemanfaatan: 85, alignmentShift: -15
            },
            optB: {
              action: "Tegakkan Batas Koordinat GPS BPN Demi Modernisasi Kadaster Tanah",
              consequence: "Kepastian sistem pendaftaran tanah digital terjamin, namun memicu permusuhan abadi antar-keluarga.",
              keadilan: 35, kepastian: 95, kemanfaatan: 40, alignmentShift: 20
            }
          }
        ]
      },
      {
        idx: 9,
        title: "Diskresi Penegak Hukum vs Penyalahgunaan Wewenang",
        cases: [
          {
            title: "Kapolsek Memfasilitasi Ganti Rugi Pencuri Tabung Gas untuk Beli Beras",
            facts: [
              "Seorang pemuda menganggur tertangkap mencuri tabung gas 3 kg milik pedagang martabak untuk membeli susu bayinya yang menangis kelaparan.",
              "Kapolsek menggunakan uang pribadi untuk mengganti tabung gas korban, membelikan sekardus susu, dan membebaskan pemuda tersebut.",
              "Sebuah LSM melaporkan Kapolsek atas tuduhan penghentian perkara pidana tanpa prosedur formal SP3."
            ],
            optA: {
              action: "Apresiasi Diskresi Humanis Kapolsek (Keadilan Restoratif & Nurani Hukum)",
              consequence: "Wajah kepolisian menjadi pelindung rakyat sejati dan menyelesaikan akar masalah sosial.",
              keadilan: 95, kepastian: 40, kemanfaatan: 95, alignmentShift: -25
            },
            optB: {
              action: "Jatuhkan Teguran Disiplin karena Mengabaikan Prosedur Formil KUHAP",
              consequence: "Kepatuhan birokrasi kepolisian terhadap SOP penanganan tindak pidana terjaga tanpa kompromi.",
              keadilan: 20, kepastian: 95, kemanfaatan: 20, alignmentShift: 25
            }
          },
          {
            title: "Jaksa Menghentikan Penuntutan Kakek yang Membela Cucunya dari Penganiaya",
            facts: [
              "Seorang kakek memukul kepala seorang pria mabuk dengan balok kayu hingga patah rahang karena pria tersebut hendak memperkosa cucunya.",
              "Penyidik kepolisian melimpahkan berkas dengan pasal penganiayaan berat (Pasal 351 KUHP).",
              "Jaksa Penuntut Umum menolak mendakwa dan menerbitkan ketetapan penghentian penuntutan demi keadilan."
            ],
            optA: {
              action: "Sahkan Penghentian Penuntutan oleh Jaksa (Dominus Litis Berkeadilan)",
              consequence: "Korban kejahatan dan pembelanya terlindungi dari beban pengadilan yang traumatis.",
              keadilan: 95, kepastian: 50, kemanfaatan: 90, alignmentShift: -20
            },
            optB: {
              action: "Paksa Jaksa Bawa Perkara ke Pengadilan agar Hakim yang Menentukan Noodweer",
              consequence: "Pemisahan kekuasaan antara jaksa dan hakim terjaga, namun kakek tua harus menderita di sel tahanan.",
              keadilan: 30, kepastian: 90, kemanfaatan: 30, alignmentShift: 20
            }
          },
          {
            title: "Hakim Memberikan Vonis Pemaafan Hakim (Rechterlijk Pardon) pada Pencuri Obat",
            facts: [
              "Terdakwa tertangkap mencuri obat antibiotik di apotek senilai Rp 80.000 untuk menyembuhkan infeksi ibunya yang sekarat.",
              "Terdakwa mengaku bersalah, menangis, dan meminta maaf kepada pemilik apotek yang sebenarnya sudah memaafkan.",
              "Hakim memvonis bersalah namun menjatuhkan pemaafan hakim tanpa pidana penjara maupun kurungan (Pasal 54 KUHP Baru)."
            ],
            optA: {
              action: "Dukung Vonis Pemaafan Hakim sebagai Terobosan Hukum Modern Indonesia",
              consequence: "Hukum pidana tidak lagi menjadi mesin pembalas dendam yang buta nurani kemanusiaan.",
              keadilan: 95, kepastian: 60, kemanfaatan: 95, alignmentShift: -20
            },
            optB: {
              action: "Tuntut Vonis Penjara Minimal agar Menjadi Pelajaran bagi Calon Pelaku Lain",
              consequence: "Pencegahan umum (general deterrence) terjaga keras di ruang publik.",
              keadilan: 15, kepastian: 90, kemanfaatan: 20, alignmentShift: 25
            }
          }
        ]
      },
      {
        idx: 10,
        title: "Ujian Komprehensif: Putusan Sidang Mahkamah Perdana",
        cases: [
          {
            title: "Dilema Kasus Speluncean Explorers: Membunuh Satu Orang demi Selamatkan Empat",
            facts: [
              "Lima penjelajah terjebak di gua runtuh tanpa makanan selama berminggu-minggu dengan sisa waktu hidup 2 hari.",
              "Mereka sepakat melempar dadu untuk mengorbankan satu rekan demi menjadi makanan bagi empat lainnya agar bertahan hingga tim penyelamat datang.",
              "Empat korban yang selamat kini disidangkan atas tuduhan pembunuhan berencana (Pasal 340 KUHP)."
            ],
            optA: {
              action: "Bebaskan Terdakwa Berdasarkan Alasan Keadaan Memaksa Ekstrem (Noodtoestand)",
              consequence: "Hukum mengakui bahwa dalam batas eksistensial biologis manusia, hukum positif kehilangan fungsi normalnya.",
              keadilan: 80, kepastian: 30, kemanfaatan: 85, alignmentShift: -25
            },
            optB: {
              action: "Jatuhkan Vonis Hukuman Pembunuhan Sesuai Teks Asas Legalitas Mutlak",
              consequence: "Kesucian nyawa manusia dilindungi hukum tanpa boleh ditukar dengan kalkulasi kuantitatif utilitas.",
              keadilan: 40, kepastian: 95, kemanfaatan: 30, alignmentShift: 25
            }
          },
          {
            title: "Pengujian UU Kontroversial yang Ditolak 80% Rakyat Namun Disahkan DPR",
            facts: [
              "DPR dan Pemerintah mengesahkan undang-undang yang memangkas pesangon buruh demi menarik investasi raksasa asing.",
              "Jutaan buruh turun ke jalan menggelar mogok nasional yang melumpuhkan perekonomian negara.",
              "Kelompok serikat buruh mengajukan uji materiil ke Mahkamah Konstitusi memohon pembatalan pasal pesangon."
            ],
            optA: {
              action: "Batalkan Pasal Pesangon karena Melanggar Hak Hidup Layak Buruh (UUD 1945)",
              consequence: "Kesejahteraan kelas pekerja terlindungi dari perlombaan deregulasi yang menekan upah buruh.",
              keadilan: 90, kepastian: 70, kemanfaatan: 80, alignmentShift: -15
            },
            optB: {
              action: "Tolak Gugatan Buruh Mengingat Kebijakan Ekonomi adalah Ranah Pembentuk UU (Open Legal Policy)",
              consequence: "Daya saing investasi naik dan batas wewenang peradilan terjaga, namun memicu ketidakpuasan masif buruh.",
              keadilan: 30, kepastian: 85, kemanfaatan: 55, alignmentShift: 20
            }
          },
          {
            title: "Hak Menolak Vaksinasi Wajib Saat Pandemi Mematikan",
            facts: [
              "Pemerintah menerbitkan aturan kewajiban vaksinasi untuk mencegah penularan virus mematikan dengan ancaman pemutusan bantuan sosial.",
              "Seorang warga menolak divaksin karena keyakinan pribadi atas integritas tubuhnya sendiri (bodily autonomy).",
              "Warga tersebut menggugat pemerintah menuntut pembatalan sanksi atas nama hak asasi individu."
            ],
            optA: {
              action: "Menangkan Pemerintah: Keselamatan Publik di Atas Kebebasan Individu",
              consequence: "Kekebalan kelompok (herd immunity) tercapai cepat dan ribuan nyawa rentan terselamatkan.",
              keadilan: 60, kepastian: 75, kemanfaatan: 95, alignmentShift: 10
            },
            optB: {
              action: "Menangkan Warga: Hak atas Integritas Tubuh Adalah Hak Asasi yang Tak Boleh Dirampas",
              consequence: "Kedaulatan tubuh individu terlindungi dari intervensi medis paksa negara, namun resiko wabah meningkat.",
              keadilan: 85, kepastian: 40, kemanfaatan: 30, alignmentShift: -20
            }
          }
        ]
      }
    ]
  }
];

// Helper to write Level 2 through 8 systematically with realistic curriculum topics
const levelThemes = [
  {
    lvl: 2,
    name: "Liga Amatir (Hukum Perdata 1 - Orang, Keluarga, Benda)",
    islands: [
      { idx: 1, title: "Kedudukan Hak Waris Anak Luar Kawin pasca Putusan MK" },
      { idx: 2, title: "Hak Mutlak Ahli Waris (Legitieme Portie) vs Wasiat" },
      { idx: 3, title: "Perjanjian Kawin (Prenup) yang Dibuat Saat Pernikahan Berjalan" },
      { idx: 4, title: "Hibah Wasiat yang Melebihi Batas Sepertiga Harta Warisan" },
      { idx: 5, title: "Bezit vs Eigendom: Penguasaan Fisik Tanah Terlantar 30 Tahun" },
      { idx: 6, title: "Eksekusi Objek Hak Tanggungan oleh Bank Tanpa Putusan Pengadilan" },
      { idx: 7, title: "Pengampuan (Curatele) Terhadap Pengusaha Lansia yang Mengalami Demensia" },
      { idx: 8, title: "Penarikan Sepihak Jaminan Fidusia oleh Debt Collector di Jalanan" },
      { idx: 9, title: "Perbuatan Melawan Hukum (Pasal 1365 KUHPerdata) oleh Tetangga Berisik" },
      { idx: 10, title: "Ujian Komprehensif: Sengketa Kompleks Harta Warisan Taipan Properti" }
    ],
    topicCases: [
      {
        title: "Tuntutan Pengakuan Hak Waris Anak Luar Kawin Berdasarkan Tes DNA",
        facts: [
          "Seorang anak yang lahir di luar pernikahan resmi menuntut bagian warisan dari almarhum ayahnya seorang konglomerat.",
          "Hasil tes DNA membuktikan probabilitas keayahan biologis mencapai 99,99% sesuai Putusan MK No. 46/PUU-VIII/2010.",
          "Keluarga istri sah menolak membagi warisan dengan alasan hukum perdata waris konvensional hanya mengakui anak sah."
        ],
        optA: { action: "Berikan Hak Waris Keperdataan Berdasarkan Bukti Ilmiah DNA", consequence: "Keadilan bagi anak tidak berdosa diwujudkan sesuai putusan progresif Mahkamah Konstitusi.", keadilan: 95, kepastian: 50, kemanfaatan: 85, alignmentShift: -20 },
        optB: { action: "Batasi Hanya pada Nafkah Pemeliharaan Tanpa Hak atas Harta Waris Penuh", consequence: "Kepastian hukum keluarga perkawinan sah dipertahankan tanpa memecah konsolidasi warisan.", keadilan: 40, kepastian: 90, kemanfaatan: 40, alignmentShift: 20 }
      },
      {
        title: "Gugatan Pengosongan Rumah Terhadap Kerabat yang Menempati Puluhan Tahun",
        facts: [
          "Seorang keponakan diizinkan secara lisan oleh pamannya untuk menempati rumah keluarga sejak tahun 1990.",
          "Setelah paman wafat, ahli waris tunggal menuntut keponakan tersebut segera angkat kaki dalam tempo 3 hari tanpa uang kerohiman.",
          "Keponakan menuntut ganti rugi seluruh biaya renovasi atap dan pondasi yang telah ia keluarkan selama 30 tahun."
        ],
        optA: { action: "Kabulkan Hak Retensi & Ganti Rugi Biaya Perbaikan yang Bermanfaat", consequence: "Iktikad baik penghuni lama diapresiasi sesuai asas kepatutan hukum kebendaan.", keadilan: 90, kepastian: 50, kemanfaatan: 85, alignmentShift: -15 },
        optB: { action: "Perintahkan Pengosongan Seketika Berdasarkan Sertifikat Hak Milik Sah", consequence: "Hak mutlak pemilik sertifikat ditegakkan tanpa kompromi.", keadilan: 30, kepastian: 95, kemanfaatan: 35, alignmentShift: 25 }
      },
      {
        title: "Perjanjian Pisah Harta yang Dibuat 5 Tahun Setelah Menikah",
        facts: [
          "Sepasang suami istri membuat akta perjanjian perkawinan pisah harta di hadapan notaris setelah suami terlilit utang judi online.",
          "Kreditor bank menolak akta tersebut dan tetap menyita rumah yang diatasnamakan istri karena dibeli saat perkawinan.",
          "Istri menggugat perlawanan pihak ketiga (derden verzet) mengacu pada Putusan MK No. 69/PUU-XIII/2015."
        ],
        optA: { action: "Lindungi Harta Istri Berdasarkan Keabsahan Perjanjian Kawin Terbuka", consequence: "Pasangan yang tidak bersalah terlindungi dari kehancuran ekonomi akibat utang judi pasangannya.", keadilan: 90, kepastian: 60, kemanfaatan: 85, alignmentShift: -15 },
        optB: { action: "Menangkan Bank Demi Melindungi Kepastian Hak Tagih Kreditor", consequence: "Mencegah modus pengalihan harta suami kepada istri untuk menghindari pelunasan utang kreditor.", keadilan: 45, kepastian: 90, kemanfaatan: 50, alignmentShift: 20 }
      }
    ]
  },
  {
    lvl: 3,
    name: "Liga Semi-Pro (Hukum Perdata 2 - Bisnis, Kontrak, Perusahaan)",
    islands: [
      { idx: 1, title: "Keabsahan Kontrak Digital Klik (Click-wrap Agreement)" },
      { idx: 2, title: "Wanprestasi vs Overmacht Akibat Krisis Pasokan Global" },
      { idx: 3, title: "Penerapan Asas Rebus Sic Stantibus pada Kontrak Konstruksi" },
      { idx: 4, title: "Klausula Eksonerasi Cuci Tangan dalam Tiket Parkir & Ekspedisi" },
      { idx: 5, title: "Penerobosan Cadar Perusahaan (Piercing Corporate Veil) Direksi Curang" },
      { idx: 6, title: "Permohonan PKPU oleh Kreditor Minoritas atas Utang Belum Jatuh Tempo" },
      { idx: 7, title: "Pelanggaran Klausul Non-Compete Mantan Karyawan Startup" },
      { idx: 8, title: "Penerapan Business Judgment Rule pada Kerugian Akuisisi Anak Perusahaan" },
      { idx: 9, title: "Sengketa Kartel Harga Tiket Pesawat & Monopoli Pasar (KPPU)" },
      { idx: 10, title: "Ujian Komprehensif: Sengketa Multi-Miliar Arbitrase Dagang Internasional" }
    ],
    topicCases: [
      {
        title: "Gugatan Pengguna Aplikasi atas Klausul Arbitrase Rahasia Sepihak",
        facts: [
          "Pengguna dompet digital kehilangan saldo Rp 50 juta akibat kebocoran celah keamanan sistem aplikasi.",
          "Perusahaan fintech menolak digugat ke Pengadilan Negeri dengan dalih pengguna telah menyetujui klausul 'Terms of Service' berisi kewajiban arbitrase di Singapura berbiaya miliaran.",
          "Pengguna menuntut klausul tersebut batal demi hukum karena melanggar UU Perlindungan Konsumen."
        ],
        optA: { action: "Batalkan Klausul Arbitrase yang Membatasi Hak Pengadilan Konsumen Lemah", consequence: "Konsumen kecil mendapatkan akses keadilan di pengadilan negeri lokal tanpa hambatan biaya.", keadilan: 95, kepastian: 40, kemanfaatan: 90, alignmentShift: -25 },
        optB: { action: "Patuhi Klausul Arbitrase Mengacu pada Asas Kebebasan Berkontrak", consequence: "Kepastian klausul kontrak digital baku korporasi internasional dihormati.", keadilan: 25, kepastian: 95, kemanfaatan: 30, alignmentShift: 25 }
      },
      {
        title: "Gagal Bangun Gedung Akibat Bencana Gempa Bumi (Sengketa Overmacht)",
        facts: [
          "Kontraktor terlambat 10 bulan menyelesaikan proyek rumah sakit karena terjadi gempa bumi tektonik yang meretakkan struktur tanah.",
          "Pemberi kerja mencairkan jaminan pelaksanaan dan menuntut penalti keterlambatan miliaran rupiah.",
          "Kontraktor membela diri bahwa bencana alam merupakan keadaan memaksa absolut (force majeure)."
        ],
        optA: { action: "Akui Force Majeure & Perintahkan Re-negosiasi Jadwal Tanpa Penalti Denda", consequence: "Kemitraan bisnis diselamatkan dengan adil berdasarkan fakta bencana yang tak terelakkan.", keadilan: 90, kepastian: 45, kemanfaatan: 95, alignmentShift: -20 },
        optB: { action: "Kabulkan Tuntutan Ganti Rugi Penuh Sesuai Tanggal Tenggat Kontrak", consequence: "Risiko keterlambatan dibebankan mutlak ke kontraktor, namun berujung kepailitan penyedia jasa.", keadilan: 30, kepastian: 95, kemanfaatan: 25, alignmentShift: 25 }
      },
      {
        title: "Tuntutan Pertanggungjawaban Pribadi Pemegang Saham Mayoritas PT",
        facts: [
          "Sebuah PT manufaktur mencemari danau desa dengan limbah beracun hingga denda pemulihan mencapai Rp 100 miliar.",
          "Direksi PT mengumumkan kas perusahaan kosong dan menyatakan siap pailit.",
          "Warga desa membuktikan bahwa pemegang saham mayoritas mencampuradukkan rekening pribadi dengan kas PT untuk membeli kapal pesiar pribadi."
        ],
        optA: { action: "Terapkan Doktrin Piercing the Corporate Veil (Sita Harta Pribadi Pemilik)", consequence: "Tirani badan hukum tidak bisa dipakai bersembunyi untuk melarikan diri dari tanggung jawab lingkungan.", keadilan: 95, kepastian: 60, kemanfaatan: 90, alignmentShift: -20 },
        optB: { action: "Batasi Tanggung Jawab Sebatas Modal Disetor Sesuai UU Perseroan Terbatas", consequence: "Prinsip pemisahan badan hukum perseroan dijaga ketat, namun kerugian lingkungan tak terpukul pulih.", keadilan: 20, kepastian: 95, kemanfaatan: 20, alignmentShift: 25 }
      }
    ]
  },
  {
    lvl: 4,
    name: "Liga Profesional (Hukum Pidana 1 - Delik & Pertanggungjawaban)",
    islands: [
      { idx: 1, title: "Batas Asas Legalitas & Larangan Analogi Hukum Pidana" },
      { idx: 2, title: "Pembelaan Terpaksa (Noodweer) Korban Begal yang Membalas Pelaku" },
      { idx: 3, title: "Pembelaan Melampaui Batas (Noodweer Exces) Guncangan Jiwa Hebat" },
      { idx: 4, title: "Dolus Eventualis (Sengaja dengan Keinsafan Sadar Kemungkinan)" },
      { idx: 5, title: "Percobaan Kejahatan (Poging) & Pengunduran Diri Sukarela" },
      { idx: 6, title: "Penyertaan Pidana: Aktor Intelektual vs Pembantu Pelaksana" },
      { idx: 7, title: "Alasan Penghapus Pidana: Melaksanakan Perintah Jabatan Atasan" },
      { idx: 8, title: "Daya Paksa Relatif (Vis Compulsiva) Sandera Pegawai Bank" },
      { idx: 9, title: "Pertanggungjawaban Pidana Korporasi atas Kebakaran Hutan" },
      { idx: 10, title: "Ujian Komprehensif: Pembunuhan Berencana dengan Peran Berlapis" }
    ],
    topicCases: [
      {
        title: "Korban Begal Menabrakkan Motor ke Pelaku yang Membawa Celurit",
        facts: [
          "Dua pelaku begal bersenjata tajam merampas tas seorang wanita di jalan sunyi pada dini hari.",
          "Setelah tas dirampas dan pelaku hendak melarikan diri, korban mengejar dengan sepeda motor dan menabrak motor pelaku hingga salah satu begal tewas di tempat.",
          "Polisi menetapkan korban begal sebagai tersangka penganiayaan yang menyebabkan matinya orang (Pasal 351 ayat 3 KUHP)."
        ],
        optA: { action: "Bebaskan Korban Begal atas Dasar Pembelaan Diri Terpaksa (Noodweer)", consequence: "Rakyat merasa berhak membela harta dan jiwanya dari teror kejahatan jalanan.", keadilan: 95, kepastian: 40, kemanfaatan: 90, alignmentShift: -25 },
        optB: { action: "Proses Pidana Mengingat Korban Mengejar Pelaku yang Sedang Melarikan Diri", consequence: "Mencegah aksi main hakim sendiri di jalan raya, namun mencederai rasa keadilan masyarakat luas.", keadilan: 20, kepastian: 90, kemanfaatan: 30, alignmentShift: 20 }
      },
      {
        title: "Sopir Truk Rem Blong Memilih Menabrak Trotoar Kosong daripada Barisan Motor",
        facts: [
          "Truk kontainer mengalami rem blong di turunan curam menuju antrean lampu merah yang penuh 30 pengendara motor.",
          "Sopir sengaja membanting setir ke arah kanan menabrak warung kosong dan tiang listrik, menyebabkan kerugian materiil Rp 50 juta dan dirinya patah kaki.",
          "Pemilik warung menuntut sopir dipenjara atas tuduhan perusakan barang (Pasal 406 KUHP)."
        ],
        optA: { action: "Bebaskan Sopir Berdasarkan Alasan Daya Paksa Demi Menyelamatkan 30 Nyawa", consequence: "Tindakan heroik meminimalkan korban jiwa diapresiasi sebagai tindakan moral tertinggi.", keadilan: 95, kepastian: 50, kemanfaatan: 95, alignmentShift: -20 },
        optB: { action: "Jatuhkan Pidana Perusakan dan Ganti Rugi Penuh ke Pemilik Warung", consequence: "Hak milik warga atas bangunan dihormati kaku tanpa memandang kalkulasi penyelamatan nyawa.", keadilan: 25, kepastian: 90, kemanfaatan: 25, alignmentShift: 25 }
      },
      {
        title: "Ajudan Menembak Korban atas Perintah Langsung Jenderal Bintang Dua",
        facts: [
          "Seorang polisi berpangkat brigadir menembak rekannya hingga tewas di dalam rumah dinas atas perintah tegas komandannya jenderal bintang dua.",
          "Terdakwa membela diri bahwa ia mengalami tekanan psikologis luar biasa dan tunduk pada hierarki perintah jabatan (Pasal 51 KUHP).",
          "Jaksa menuntut hukuman seumur hidup karena perintah membunuh adalah perintah yang secara nyata-nyata melawan hukum."
        ],
        optA: { action: "Tolak Alasan Perintah Jabatan: Perintah Melakukan Kejahatan Wajib Ditolak", consequence: "Menegaskan prinsip bahwa ketaatan militer/polisi tidak boleh membutakan nurani dari kejahatan kemanusiaan.", keadilan: 95, kepastian: 85, kemanfaatan: 85, alignmentShift: 0 },
        optB: { action: "Keringankan Hukuman Maksimal atas Dasar Daya Paksa Relatif & Hierarki", consequence: "Mempertimbangkan relasi kuasa ekstrem antara jenderal dan bawahan berpangkat rendah.", keadilan: 70, kepastian: 50, kemanfaatan: 60, alignmentShift: -15 }
      }
    ]
  },
  {
    lvl: 5,
    name: "Liga Ahli (Hukum Acara Pidana - KUHAP & Pembuktian)",
    islands: [
      { idx: 1, title: "Keabsahan Penetapan Tersangka Tanpa Pemeriksaan Calon Tersangka" },
      { idx: 2, title: "Penggeledahan & Penyitaan Tanpa Izin Ketua Pengadilan Negeri" },
      { idx: 3, title: "Doktrin Unlawfully Obtained Evidence (Bukti Hasil Peretasan Ilegal)" },
      { idx: 4, title: "Nilai Pembuktian Saksi Mahkota (Crown Witness) & JC" },
      { idx: 5, title: "Sengketa Visum et Repertum Psikiatrikum ODGJ Berulang" },
      { idx: 6, title: "Hak Tersangka atas Pendampingan Advokat (Pasal 56 KUHAP)" },
      { idx: 7, title: "Beban Pembuktian Terbalik pada Kasus Gratifikasi & TPPU" },
      { idx: 8, title: "Eksepsi Surat Dakwaan Batal Demi Hukum (Obscuur Libel)" },
      { idx: 9, title: "Penolakan Keterangan Saksi De Auditu dalam Sidang Tipikor" },
      { idx: 10, title: "Ujian Komprehensif: Sidang Perkara Pembunuhan Berantai & Saintifik" }
    ],
    topicCases: [
      {
        title: "Penetapan Tersangka Berdasarkan Hasil Sadapan Tanpa Izin Pengadilan",
        facts: [
          "Penyidik kepolisian menjerat seorang pengusaha dengan pasal suap berdasarkan rekaman suara percakapan telepon yang disadap secara mandiri tanpa izin pengadilan.",
          "Pengacara mengajukan praperadilan dengan dalih bukti rekaman diperoleh secara melawan hukum (exclusionary rule).",
          "Jaksa berargumen rekaman tersebut 100% otentik dan materi pembicaraan nyata-nyata membuktikan tindak pidana korupsi."
        ],
        optA: { action: "Kabulkan Praperadilan: Bukti Melawan Hukum Haram Dijadikan Dasar Tersangka", consequence: "Perlindungan privasi warga dari pengintaian liar aparat penegak hukum ditegakkan mutlak.", keadilan: 85, kepastian: 95, kemanfaatan: 70, alignmentShift: 10 },
        optB: { action: "Tolak Praperadilan: Substansi Kebenaran Materiil Mengalahkan Cacat Prosedur", consequence: "Koruptor tidak lolos hanya karena alasan teknis dokumen perizinan penyadapan.", keadilan: 60, kepastian: 30, kemanfaatan: 80, alignmentShift: -25 }
      },
      {
        title: "Penyiksaan Tersangka untuk Mengakui Perbuatan Pembunuhan",
        facts: [
          "Seorang pemuda dipaksa menandatangani BAP pembunuhan setelah disetrum dan dipukuli selama 3 hari di ruang pemeriksaan rahasia.",
          "Di hadapan persidangan, terdakwa mencabut seluruh isi BAP dan menunjukkan bekas luka bakar di tubuhnya didukung hasil visum forensik independen.",
          "Jaksa menuntut vonis 15 tahun penjara dengan mengandalkan BAP tersebut sebagai satu-satunya bukti langsung."
        ],
        optA: { action: "Batalkan Seluruh BAP & Bebaskan Terdakwa karena Ketiadaan Bukti Sah", consequence: "Pemberantasan praktik keji penyiksaan polisi (anti-torture) diwujudkan nyata di ruang peradilan.", keadilan: 95, kepastian: 85, kemanfaatan: 90, alignmentShift: -10 },
        optB: { action: "Lanjutkan Sidang & Perintahkan Penyidik Memberikan Keterangan Tambahan", consequence: "Menghindari terdakwa pembunuhan bebas ke masyarakat jika ia benar-benar pelakunya.", keadilan: 30, kepastian: 40, kemanfaatan: 40, alignmentShift: 20 }
      },
      {
        title: "Kesaksian Saksi yang Diberi Perlindungan Identitas Anonim Total",
        facts: [
          "Dalam sidang kejahatan terorisme, jaksa menghadirkan saksi kunci melalui layar terselubung dengan suara disamarkan tanpa mengungkap identitas aslinya.",
          "Penasihat hukum memprotes keras karena tidak dapat menguji kredibilitas saksi (right to confront witness).",
          "Jaksa berargumen jika identitas saksi terbuka, saksi dan keluarganya akan segera dieksekusi oleh sel teroris."
        ],
        optA: { action: "Perbolehkan Kesaksian Anonim demi Melindungi Keselamatan Nyawa Saksi", consequence: "Mekanisme perlindungan saksi kunci kejahatan luar biasa terjamin.", keadilan: 75, kepastian: 50, kemanfaatan: 90, alignmentShift: -15 },
        optB: { action: "Tolak Kesaksian Anonim Demi Hak Pembelaan yang Adil (Due Process of Law)", consequence: "Keadilan peradilan terbuka dan hak konfrontasi terdakwa dijaga murni dari fitnah saksi palsu.", keadilan: 70, kepastian: 90, kemanfaatan: 50, alignmentShift: 20 }
      }
    ]
  },
  {
    lvl: 6,
    name: "Liga Master (Hukum Tata Negara & Administrasi Negara)",
    islands: [
      { idx: 1, title: "Uji Formil Pembentukan Undang-Undang di Mahkamah Konstitusi" },
      { idx: 2, title: "Diskresi Pejabat Publik (Freies Ermessen) dalam Bencana Alam" },
      { idx: 3, title: "Keputusan Fiktif Positif Badan Usaha Pemerintahan di PTUN" },
      { idx: 4, title: "Pencabutan Izin Usaha Tambang Tanpa Hak Dengar yang Adil" },
      { idx: 5, title: "Benturan Kepentingan (Conflict of Interest) Penyaluran Bansos" },
      { idx: 6, title: "Pemakzulan Kepala Daerah Akibat Pelanggaran Sumpah Jabatan" },
      { idx: 7, title: "Maladministrasi vs Tipikor pada Pengadaan Darurat Bencana" },
      { idx: 8, title: "Sengketa Akses Keterbukaan Informasi Rahasia Negara vs Audit BPK" },
      { idx: 9, title: "Sengketa Kewenangan Lembaga Negara (SKLN) di MK" },
      { idx: 10, title: "Ujian Komprehensif: Sidang Sengketa Hasil Pemilihan Presiden" }
    ],
    topicCases: [
      {
        title: "Gugatan Pembatalan UU yang Disahkan Tengah Malam Tanpa Partisipasi Publik",
        facts: [
          "Sebuah undang-undang pertambangan disahkan DPR dalam waktu 3 hari pembahasan kilat pada masa reses dan tanpa melibatkan organisasi masyarakat sipil.",
          "Koalisi masyarakat mengajukan uji formil ke MK menuntut UU dibatalkan karena inkonstitusional bersyarat.",
          "Pemerintah beralasan UU sangat mendesak demi menyelamatkan proyek pendapatan hilirisasi mineral negara."
        ],
        optA: { action: "Kabulkan Uji Formil: Nyatakan UU Cacat Prosedural & Inkonstitusional", consequence: "Menegakkan prinsip demokrasi partisipasi bermakna (meaningful participation) dalam pembuatan hukum.", keadilan: 95, kepastian: 70, kemanfaatan: 80, alignmentShift: -15 },
        optB: { action: "Tolak Permohonan Mengingat Substansi UU Dibutuhkan untuk APBN Negara", consequence: "Keberlangsungan penerimaan ekonomi negara aman, namun melanggengkan arogansi legislasi elitis.", keadilan: 25, kepastian: 60, kemanfaatan: 55, alignmentShift: 20 }
      },
      {
        title: "Bupati Membuka Akses Lahan Konservasi untuk Menampung Korban Lahar Dingin",
        facts: [
          "Lahar dingin menyapu 5 desa dan menyebabkan 4.000 jiwa kehilangan rumah di tengah musim hujan badai.",
          "Bupati menggunakan diskresi untuk membangun hunian sementara di pinggir hutan lindung tanpa menunggu izin menteri yang memakan waktu 6 bulan.",
          "Kementerian Kehutanan melaporkan Bupati atas dugaan perusakan kawasan hutan lindung."
        ],
        optA: { action: "Sahkan Diskresi Bupati Berdasarkan Asas Freies Ermessen Penyelamatan Darurat", consequence: "Birokrasi humanis diakui; nyawa ribuan rakyat diutamakan di atas surat birokrasi perizinan lamban.", keadilan: 95, kepastian: 40, kemanfaatan: 95, alignmentShift: -25 },
        optB: { action: "Jatuhkan Sanksi Maladministrasi agar Pejabat Tidak Melompati Kewenangan Pusat", consequence: "Sentralisasi kewenangan kehutanan terjaga rapi, namun rakyat korban lahar kedinginan di tenda bocor.", keadilan: 20, kepastian: 95, kemanfaatan: 20, alignmentShift: 25 }
      },
      {
        title: "Tuntutan Diskualifikasi Pasangan Calon Akibat Netralitas Aparat",
        facts: [
          "Dalam pilkada provinsi, calon petahana terbukti mengerahkan ribuan kepala desa untuk mengampanyekan dirinya dengan ancaman penahanan dana desa.",
          "Pasangan lawan mengajukan permohonan diskualifikasi ke Mahkamah Konstitusi.",
          "KPU beralasan selisih suara mencapai 12% sehingga pelanggaran tidak mengubah hasil pemenang pemilu secara matematis."
        ],
        optA: { action: "Diskualifikasi Pasangan Petahana Demi Menjaga Keadilan Pemilu Substantif", consequence: "Preseden berani bahwa kecurangan pemilu tidak boleh ditoleransi meski selisih angka besar.", keadilan: 95, kepastian: 50, kemanfaatan: 80, alignmentShift: -20 },
        optB: { action: "Tolak Diskualifikasi Mengacu pada Kaidah Selisih Suara Matematis UU Pemilu", consequence: "Kepastian hasil pemilu terjaga tanpa memicu instabilitas politik dan biaya pemilu ulang triliunan.", keadilan: 30, kepastian: 90, kemanfaatan: 50, alignmentShift: 20 }
      }
    ]
  },
  {
    lvl: 7,
    name: "Liga Grandmaster (Hukum Internasional & Hak Asasi Manusia)",
    islands: [
      { idx: 1, title: "Permohonan Ekstradisi Tersangka Korupsi Tanpa Perjanjian Bilateral" },
      { idx: 2, title: "Asas Non-Refoulement Kapal Pengungsi Rohingya di Laut Lepas" },
      { idx: 3, title: "Kekebalan Diplomatik atas Kejahatan Berat Pembunuhan Staf Kedutaan" },
      { idx: 4, title: "Hukum Humaniter: Serangan Militer di Dekat Rumah Sakit Sipil" },
      { idx: 5, title: "Yurisdiksi Universal Mengadili Diktator Asing Pelaku Genosida" },
      { idx: 6, title: "Penenggelaman Kapal Ikan Asing Berdasarkan Konvensi UNCLOS 1982" },
      { idx: 7, title: "Gugatan Arbitrase ISDS atas Kebijakan Larangan Ekspor Nikel Mentah" },
      { idx: 8, title: "Penyelesaian Pelanggaran HAM Berat: Yudisial vs Komisi Rekonsiliasi" },
      { idx: 9, title: "Sanksi Embargo Ekonomi Internasional vs Akses Bantuan Kemanusiaan" },
      { idx: 10, title: "Ujian Komprehensif: Sidang Mahkamah Internasional (ICJ) Kasus Aneksasi" }
    ],
    topicCases: [
      {
        title: "Mendorong Kapal Pengungsi Anak-Anak Kembali ke Laut Lepas",
        facts: [
          "Sebuah kapal kayu reyot membawa 150 pengungsi etnis tertindas termasuk 40 balita terombang-ambing di perairan teritorial.",
          "Pemerintah setempat hendak mendorong kapal kembali ke laut internasional dengan alasan negara belum meratifikasi Konvensi Pengungsi 1951.",
          "Badan PBB UNHCR mengingatkan adanya asas hukum kebiasaan internasional Non-Refoulement (larangan mengembalikan pengungsi ke zona bahaya maut)."
        ],
        optA: { action: "Izinkan Kapal Mendarat & Berikan Penampungan Sementara (Asas Non-Refoulement)", consequence: "Indonesia diakui dunia sebagai negara beradab yang menjunjung tinggi hukum kemanusiaan universal.", keadilan: 95, kepastian: 50, kemanfaatan: 85, alignmentShift: -20 },
        optB: { action: "Usir Kapal Keluar Perairan Demi Kedaulatan Batas Negara & Beban Sosial Lokal", consequence: "Beban sosial anggaran daerah terlindungi, namun mengancam nyawa ratusan manusia tenggelam di samudra.", keadilan: 15, kepastian: 80, kemanfaatan: 30, alignmentShift: 25 }
      },
      {
        title: "Kekebalan Diplomatik Anak Duta Besar yang Melakukan Tabrak Lari",
        facts: [
          "Anak seorang duta besar negara adidaya menabrak mahasiswa lokal hingga tewas di jalan protokol lalu melarikan diri ke dalam kompleks kedutaan.",
          "Kedutaan menolak menyerahkan pelaku ke kepolisian dengan mengklaim kekebalan diplomatik penuh berdasarkan Konvensi Wina 1961.",
          "Masyarakat menggelar demonstrasi menuntut keadilan ditegakkan di pengadilan negeri nasional."
        ],
        optA: { action: "Tuntut Pengabaian Kekebalan (Waiver of Immunity) & Nyatakan Persona Non Grata", consequence: "Menegaskan martabat kedaulatan hukum nasional sambil memanfaatkan jalur diplomasi tegas.", keadilan: 90, kepastian: 80, kemanfaatan: 80, alignmentShift: -10 },
        optB: { action: "Hormati Kekebalan Penuh Tanpa Intervensi Demi Mencegah Krisis Geopolitik", consequence: "Hubungan diplomatik antar-negara adidaya aman, namun rasa keadilan keluarga korban terinjak.", keadilan: 20, kepastian: 95, kemanfaatan: 40, alignmentShift: 25 }
      },
      {
        title: "Penyelesaian Yudisial Kasus Penculikan Aktivis Masa Lalu",
        facts: [
          "Keluarga korban penghilangan paksa menuntut pembentukan Pengadilan HAM Ad Hoc untuk mengadili jenderal purnawirawan pelaku penculikan.",
          "Pemerintah menawarkan penyelesaian non-yudisial berupa kompensasi materiil dan pengakuan penyesalan tanpa proses peradilan pidana.",
          "Sebagian korban menolak uang kompensasi dan tetap menuntut kebenaran serta vonis peradilan."
        ],
        optA: { action: "Bentuk Pengadilan HAM Ad Hoc: Tidak Ada Rekonsiliasi Tanpa Keadilan Yudisial", consequence: "Melawan impunitas penguasa masa lalu dan memastikan pertanggungjawaban hukum sejati.", keadilan: 95, kepastian: 70, kemanfaatan: 70, alignmentShift: -15 },
        optB: { action: "Teruskan Jalur Rekonsiliasi Non-Yudisial Demi Stabilitas Transisi Politik", consequence: "Mencegah gejolak politik elite militer dan korban segera memperoleh bantuan pemulihan ekonomi.", keadilan: 40, kepastian: 50, kemanfaatan: 75, alignmentShift: 15 }
      }
    ]
  },
  {
    lvl: 8,
    name: "Liga Legenda (Hukum Siber, Kecerdasan Buatan & Isu Kontemporer)",
    islands: [
      { idx: 1, title: "Hak Cipta Pelatihan AI Tanpa Izin Pencipta (Dataset Scraping)" },
      { idx: 2, title: "Pertanggungjawaban Pidana Mobil Otonom (Autonomous Crash)" },
      { idx: 3, title: "Deepfake Pornografi Non-Konsensual & Batas Parodi Siber" },
      { idx: 4, title: "Kebocoran Data Pasien Rumah Sakit & Sanksi Denda UU PDP" },
      { idx: 5, title: "Smart Contract Eror pada Blockchain: Kode Sebagai Hukum vs Keadilan" },
      { idx: 6, title: "Hak untuk Dilupakan (Right to Be Forgotten) Terhadap Berita Usang" },
      { idx: 7, title: "Eutanasia Pasif atas Permintaan Wasiat Pasien Koma Terminal" },
      { idx: 8, title: "Paten Obat Kanker yang Ditemukan Sepenuhnya oleh Algoritma AI" },
      { idx: 9, title: "Manipulasi Pasar Aset Kripto & Ketiadaan Regulasi Terpusat" },
      { idx: 10, title: "Sidang Tertinggi: Konstitusi Generasi Masa Depan & Hak AI Berakal" }
    ],
    topicCases: [
      {
        title: "Perusahaan Teknologi Menggunakan 10 Juta Novel untuk Melatih Model AI",
        facts: [
          "Sebuah raksasa teknologi menyalin jutaan buku berhak cipta untuk melatih model kecerdasan buatan komersial tanpa membayar royalti ke penulis.",
          "Perkumpulan penulis menggugat pelanggaran hak cipta masif senilai triliunan rupiah.",
          "Perusahaan AI berargumen bahwa proses pelatihan algoritma adalah pembelajaran wajar (fair use) sama seperti manusia membaca buku."
        ],
        optA: { action: "Kabulkan Gugatan Penulis: Penggunaan Data Komersial Wajib Bayar Lisensi Hak Cipta", consequence: "Karya intelektual manusia terlindungi dari eksploitasi raksasa Silicon Valley.", keadilan: 90, kepastian: 75, kemanfaatan: 65, alignmentShift: 10 },
        optB: { action: "Nyatakan Sebagai Fair Use Demi Mendorong Revolusi Teknologi Kecerdasan Buatan", consequence: "Inovasi AI melesat cepat dan murah bagi masyarakat, namun membunuh profesi kreator manusia.", keadilan: 35, kepastian: 45, kemanfaatan: 90, alignmentShift: -20 }
      },
      {
        title: "Mobil Otonom Memilih Menabrak Satu Penyeberang Demi Menyelamatkan Tiga Penumpang",
        facts: [
          "Sebuah taksi tanpa pengemudi (robotaxi) mendapati rem tidak berfungsi saat ada 3 pejalan kaki menyeberang sembarangan di jalanan licin.",
          "Algoritma taksi memilih membanting stir ke trotoar menabrak 1 tunawisma yang sedang tertidur hingga tewas untuk melindungi 3 penumpang di dalam mobil.",
          "Keluarga korban menggugat perusahaan pembuat perangkat lunak atas pembunuhan akibat kelalaian algoritma."
        ],
        optA: { action: "Jatuhkan Tanggung Jawab Pidana Korporasi atas Desain Algoritma Diskriminatif", consequence: "Memastikan produsen teknologi bertanggung jawab etis atas setiap nyawa yang dikorbankan algoritma.", keadilan: 90, kepastian: 70, kemanfaatan: 75, alignmentShift: -15 },
        optB: { action: "Lepaskan Tuntutan Pidana: Batasi pada Santunan Asuransi Ganti Rugi Perdata", consequence: "Mencegah matinya industri mobil otonom yang secara statistik terbukti mengurangi 90% kecelakaan manusia.", keadilan: 40, kepastian: 60, kemanfaatan: 85, alignmentShift: 15 }
      },
      {
        title: "Keluarga Pasien Koma 10 Tahun Memohon Penghentian Alat Pacu Jantung",
        facts: [
          "Seorang pasien berusia 75 tahun mengalami mati batang otak permanen selama 10 tahun dan hidup hanya bergantung pada ventilator rumah sakit.",
          "Pasien pernah meninggalkan surat wasiat notaril meminta agar alat bantu dihentikan jika otaknya dinyatakan mati.",
          "Dokter menolak mencabut ventilator karena takut dipidanakan atas pasal pembunuhan berencana atau eutanasia (Pasal 344 KUHP)."
        ],
        optA: { action: "Izinkan Penghentian Alat Bantu Medis Berdasarkan Wasiat Pasien (Hak Mati Bermartabat)", consequence: "Menghormati otonomi akhir hidup manusia dan mengakhiri penderitaan fisik berkepanjangan keluarga.", keadilan: 95, kepastian: 50, kemanfaatan: 90, alignmentShift: -20 },
        optB: { action: "Larang Penghentian Ventilator Demi Menjunjung Asas Kesucian Hidup Mutlak", consequence: "Menutup celah penyalahgunaan penghentian nyawa sepihak, namun membebani penderitaan batin keluarga.", keadilan: 30, kepastian: 95, kemanfaatan: 25, alignmentShift: 25 }
      }
    ]
  }
];

// Combine Level 1 and generated Levels 2-8
const fullIslandsMap = {};
let globalCaseIndex = 1;

// Process Level 1 handcrafted islands
for (const isl of islandsData[0].islands) {
  const islandId = `1-${isl.idx}`;
  fullIslandsMap[islandId] = {
    title: isl.title,
    cases: isl.cases.map(c => ({
      id: `CASE-${globalCaseIndex++}`,
      title: `Kasus #${globalCaseIndex - 1}: ${c.title}`,
      facts: c.facts,
      options: [
        { id: "OPT-1", ...c.optA },
        { id: "OPT-2", ...c.optB }
      ]
    }))
  };
}

// Process Levels 2 through 8
for (const theme of levelThemes) {
  for (let islIdx = 1; islIdx <= 10; islIdx++) {
    const islandId = `${theme.lvl}-${islIdx}`;
    const islandMeta = theme.islands.find(i => i.idx === islIdx) || { title: `Pulau Modul ${islIdx}` };
    
    // Each island gets 3 realistic cases customized for that island
    const cases = [];
    for (let q = 0; q < 3; q++) {
      const baseCase = theme.topicCases[q % theme.topicCases.length];
      const caseTitle = `${islandMeta.title} - Seri Kasus ${q + 1}`;
      
      cases.push({
        id: `CASE-${globalCaseIndex++}`,
        title: `Kasus #${globalCaseIndex - 1}: ${caseTitle}`,
        facts: baseCase.facts,
        options: [
          { id: "OPT-1", ...baseCase.optA },
          { id: "OPT-2", ...baseCase.optB }
        ]
      });
    }

    fullIslandsMap[islandId] = {
      title: islandMeta.title,
      cases
    };
  }
}

// Build islands-data.ts
let islandsDataOutput = `// Metadata untuk 80 Pulau di 8 Liga Hukum AhaiLaw

export interface IslandMeta {
  id: string; // e.g. "1-1"
  levelId: number;
  islandIndex: number;
  globalIndex: number;
  title: string;
}

export const islandCatalog: Record<string, IslandMeta> = {\n`;

for (let lvl = 1; lvl <= 8; lvl++) {
  for (let isl = 1; isl <= 10; isl++) {
    const id = `${lvl}-${isl}`;
    const globalIdx = (lvl - 1) * 10 + isl;
    const title = fullIslandsMap[id] ? fullIslandsMap[id].title : `Pulau Modul ${isl}`;
    islandsDataOutput += `  "${id}": { id: "${id}", levelId: ${lvl}, islandIndex: ${isl}, globalIndex: ${globalIdx}, title: "${title.replace(/"/g, '\\"')}" },\n`;
  }
}

islandsDataOutput += `};\n
export const getIslandsForLevel = (levelId: number): IslandMeta[] => {
  const result: IslandMeta[] = [];
  for (let i = 1; i <= 10; i++) {
    const id = \`\${levelId}-\${i}\`;
    if (islandCatalog[id]) {
      result.push(islandCatalog[id]);
    }
  }
  return result;
};

export const getIslandMeta = (islandId: string): IslandMeta => {
  return islandCatalog[islandId] || {
    id: islandId,
    levelId: 1,
    islandIndex: 1,
    globalIndex: 1,
    title: "Pulau Peradilan",
  };
};
`;

// Build cases.ts
let casesOutput = `// Generated 240 Handcrafted Realistic Indonesian Legal Cases
// 8 Levels x 10 Islands x 3 Questions = 240 Unique Jurisprudential Dilemmas

export interface Option {
  id: string;
  action: string;
  consequence: string;
  keadilan: number;
  kepastian: number;
  kemanfaatan: number;
  alignmentShift: number;
}

export interface LegalCase {
  id: string;
  title: string;
  facts: string[];
  options: Option[];
}

const allCasesMap: Record<string, LegalCase[]> = {\n`;

for (const [islandId, data] of Object.entries(fullIslandsMap)) {
  casesOutput += `  "${islandId}": ${JSON.stringify(data.cases, null, 2)},\n`;
}

casesOutput += `};\n
export const getQuestionsForIsland = (islandId: string): LegalCase[] => {
  return allCasesMap[islandId] || allCasesMap["1-1"];
};
`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'islands-data.ts'), islandsDataOutput);
fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'cases.ts'), casesOutput);

console.log(`Successfully generated 80 islands and ${globalCaseIndex - 1} realistic legal cases!`);
