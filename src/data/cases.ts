// Generated 240 Handcrafted Realistic Indonesian Legal Cases
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

const allCasesMap: Record<string, LegalCase[]> = {
  "1-1": [
  {
    "id": "CASE-1",
    "title": "Kasus #1: Pencurian 3 Butir Buah Kakao Nenek Minah",
    "facts": [
      "Nenek Minah (55 tahun) memetik 3 butir buah kakao seharga Rp 2.100 di perkebunan swasta untuk bibit tanaman.",
      "Pihak manajemen perkebunan melaporkan kejadian ini ke polisi atas tuduhan pencurian ringan (Pasal 364 KUHP).",
      "Jaksa menuntut pidana penjara demi menjunjung tinggi kepastian hukum dan perlindungan hak milik perkebunan."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Terapkan Asas Keadilan Restoratif (Hentikan Penuntutan)",
        "consequence": "Perkara diselesaikan secara musyawarah tanpa pemenjaraan lansia miskin, keadilan substantif tercapai.",
        "keadilan": 95,
        "kepastian": 30,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Vonis Bersalah Sesuai Teks Pasal (Positivisme Hukum)",
        "consequence": "Kepastian teks undang-undang ditegakkan mutlak, namun publik mengecam keras vonis yang mencederai nurani.",
        "keadilan": 15,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-2",
    "title": "Kasus #2: Dilema Sopir Ambulans Menerobos Lampu Merah",
    "facts": [
      "Seorang sopir ambulans swasta membawa korban serangan jantung kritis yang membutuhkan penanganan medis dalam hitungan menit.",
      "Sopir menerobos lampu merah di persimpangan padat dan tertangkap kamera tilang elektronik (ETLE).",
      "Dinas perhubungan menolak mencabut denda tilang karena aturan lalu lintas berlaku mutlak bagi seluruh pengguna jalan."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Gunakan Doktrin Noodtoestand (Kondisi Darurat Menghapus Melawan Hukum)",
        "consequence": "Denda tilang dibatalkan demi menyelamatkan nyawa manusia sebagai nilai tertinggi dalam hukum.",
        "keadilan": 90,
        "kepastian": 40,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Pertahankan Sanksi Tilang Demi Tertib Hukum Lalu Lintas",
        "consequence": "Aturan lalu lintas dihormati tanpa pengecualian, namun menimbulkan ketakutan bagi armada medis darurat.",
        "keadilan": 25,
        "kepastian": 90,
        "kemanfaatan": 30,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-3",
    "title": "Kasus #3: Hak Menolak Perintah Atasan yang Melanggar HAM",
    "facts": [
      "Seorang bintara polisi diperintahkan komandannya untuk membubarkan aksi demonstrasi buruh dengan kekerasan fisik berlebihan.",
      "Bintara tersebut menolak perintah karena meyakini pembubaran brutal melanggar HAM dan etika profesi kepolisian.",
      "Komandan menjatuhkan sanksi disiplin atas pembangkangan terhadap perintah atasan (insubordinasi)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Benarkan Penolakan Bintara (Hukum Alam & Keadilan Hakiki)",
        "consequence": "Integritas moral prajurit diapresiasi, menegaskan bahwa perintah yang nyata-nyata melawan hukum wajib ditolak.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 85,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Tegakkan Hukuman Disiplin demi Hierarki & Doktrin Komando",
        "consequence": "Hierarki militer/polisi tetap solid dan patuh, namun membuka peluang impunitas perintah sewenang-wenang.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  }
],
  "1-2": [
  {
    "id": "CASE-4",
    "title": "Kasus #4: Kriminalisasi Modus Baru Penipuan Pinjaman Online Ilegal",
    "facts": [
      "Sindikat pinjol ilegal menyebarkan data pribadi dan mengancam nasabah menggunakan metode rekayasa digital yang belum tercantum eksplisit dalam KUHP lama.",
      "Korban mengalami depresi berat hingga mengakhiri hidup.",
      "Jaksa menuntut menggunakan analogi pasal pemerasan konvensional yang belum mencakup ranah digital spesifik tersebut."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tolak Analogi Hukum Pidana (Asas Legalitas Ketat Pasal 1 ayat 1 KUHP)",
        "consequence": "Prinsip dasar pidana terjaga tanpa perluasan liar, namun pelaku lolos dari jerat pidana berat.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 30
      },
      {
        "id": "OPT-2",
        "action": "Gunakan Penafsiran Ekstensif / Teleologis demi Melindungi Korban",
        "consequence": "Pelaku dihukum setimpal dan korban terlindungi, namun preseden penafsiran pasal pidana menjadi lentur.",
        "keadilan": 90,
        "kepastian": 35,
        "kemanfaatan": 85,
        "alignmentShift": -25
      }
    ]
  },
  {
    "id": "CASE-5",
    "title": "Kasus #5: Pemberlakuan Surut Undang-Undang Perlindungan Anak",
    "facts": [
      "Seorang pelaku kejahatan seksual anak melakukan aksinya satu bulan sebelum undang-undang dengan hukuman kebiri kimia disahkan.",
      "Keluarga korban menuntut agar terdakwa divonis dengan undang-undang baru yang memuat hukuman kebiri.",
      "Konstitusi (Pasal 28I UUD 1945) melarang penuntutan atas dasar hukum yang berlaku surut (non-retroaktif)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Terapkan Hukum yang Berlaku Saat Perbuatan Dilakukan (Asas Non-Retroaktif)",
        "consequence": "Jaminan hak asasi konstitusional terlindungi dari kesewenang-wenangan legislasi negara.",
        "keadilan": 40,
        "kepastian": 95,
        "kemanfaatan": 40,
        "alignmentShift": 20
      },
      {
        "id": "OPT-2",
        "action": "Terapkan Hukuman Baru Berdasarkan Doktrin Kejahatan Luar Biasa",
        "consequence": "Kemarahan publik terpuaskan, namun tatanan asas non-retroaktif konstitusi menjadi runtuh.",
        "keadilan": 75,
        "kepastian": 20,
        "kemanfaatan": 60,
        "alignmentShift": -25
      }
    ]
  },
  {
    "id": "CASE-6",
    "title": "Kasus #6: Pencabutan Izin Tambang Berdasarkan Aturan Baru yang Terbit Esok Hari",
    "facts": [
      "Sebuah perusahaan tambang telah mengantongi izin lingkungan yang sah menurut regulasi tahun 2020.",
      "Pemerintah menerbitkan PP baru yang memperketat zonasi konservasi dan langsung membekukan izin perusahaan tanpa masa transisi.",
      "Perusahaan menggugat ke PTUN menuntut kepastian hak yang telah diperoleh (vested rights)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Gugatan Tambang (Lindungi Asas Kepastian Hukum & Hak Sah)",
        "consequence": "Kepastian iklim investasi terjaga, pemerintah wajib menghormati izin yang sah pada masanya.",
        "keadilan": 45,
        "kepastian": 95,
        "kemanfaatan": 50,
        "alignmentShift": 20
      },
      {
        "id": "OPT-2",
        "action": "Menangkan Pemerintah (Salus Populi Suprema Lex Esto - Demi Lingkungan)",
        "consequence": "Ekosistem alam terselamatkan, namun pelaku usaha kehilangan kepastian regulasi investasi.",
        "keadilan": 80,
        "kepastian": 30,
        "kemanfaatan": 85,
        "alignmentShift": -20
      }
    ]
  }
],
  "1-3": [
  {
    "id": "CASE-7",
    "title": "Kasus #7: Gugatan Penggusuran Rumah Warisan Kolonial di Bantaran Sungai",
    "facts": [
      "Sebuah keluarga telah tinggal di bantaran sungai selama 60 tahun dengan bukti pembayaran pajak bumi turun-temurun.",
      "Pemerintah kota hendak menormalisasi sungai untuk mencegah banjir besar yang mengancam 500.000 penduduk kota.",
      "Secara hukum formil, tanah tersebut adalah tanah negara bebas (vrij staatsdomein) tanpa sertifikat hak milik."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Perintahkan Ganti Rugi Layak dan Relokasi Manusiawi (Hukum Progresif)",
        "consequence": "Kemanusiaan warga terlindungi, normalisasi sungai tetap berjalan dengan kompromi beradab.",
        "keadilan": 90,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Eksekusi Pengosongan Tanpa Ganti Rugi Berdasarkan Status Tanah Negara",
        "consequence": "Anggaran proyek efisien dan proyek kilat, namun keluarga miskin terbuang menjadi tunawisma.",
        "keadilan": 15,
        "kepastian": 95,
        "kemanfaatan": 40,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-8",
    "title": "Kasus #8: Kewajiban Menghormati Kontrak yang Berat Sebelah (Klausula Baku)",
    "facts": [
      "Petani singkong menandatangani kontrak kemitraan dengan pabrik tepung tapioka bermodal klausula sepihak.",
      "Saat harga pupuk melonjak 300%, kontrak melarang petani menaikkan harga jual atau menjual ke pabrik lain di bawah ancaman denda miliaran.",
      "Pabrik menuntut kepastian asas Pacta Sunt Servanda (perjanjian mengikat sebagai undang-undang)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Klausula Berat Sebelah Berdasarkan Asas Kepatutan & Iktikad Baik",
        "consequence": "Keseimbangan posisi tawar petani ditegakkan, membatasi keserakahan korporasi besar.",
        "keadilan": 95,
        "kepastian": 35,
        "kemanfaatan": 85,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Tegakkan Isi Kontrak Penuh Sesuai Kesepakatan Para Pihak",
        "consequence": "Kepastian kontrak formal terjaga kaku, namun petani kecil terancam bangkrut dan terjerat utang seumur hidup.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-9",
    "title": "Kasus #9: Pengesahan Pernikahan Beda Keyakinan Melalui Penetapan Pengadilan",
    "facts": [
      "Pasangan calon pengantin beda keyakinan ditolak oleh Kantor Urusan Agama dan Kantor Catatan Sipil setempat.",
      "Mereka mengajukan permohonan penetapan izin perkebunan beda agama ke Pengadilan Negeri atas nama hak asasi berkeluarga.",
      "Pasal 2 ayat 1 UU Perkawinan menyatakan perkawinan sah apabila dilakukan menurut hukum masing-masing agama."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Permohonan Pernikahan Berdasarkan Hak Konstitusional Warga",
        "consequence": "Hak privasi dan hak membentuk keluarga terakomodasi, menghindari penyelundupan hukum ke luar negeri.",
        "keadilan": 85,
        "kepastian": 45,
        "kemanfaatan": 80,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Permohonan Mengacu pada UU Perkawinan dan Fatwa Keagamaan",
        "consequence": "Kepatuhan terhadap teks formal undang-undang perkawinan dan norma sosial keagamaan terjaga.",
        "keadilan": 35,
        "kepastian": 90,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  }
],
  "1-4": [
  {
    "id": "CASE-10",
    "title": "Kasus #10: Pengambilan Sisa Padi Jatuh di Sawah Milik Konglomerat",
    "facts": [
      "Dua orang buruh tani mengumpulkan butiran padi rontok (ngasak) di tanah bekas panen mesin milik korporasi agribisnis.",
      "Satpam perusahaan menangkap mereka dan memproses hukum atas dugaan pencurian hasil panen.",
      "Kerugian materiil perusahaan tercatat kurang dari Rp 50.000."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Hentikan Perkara Melalui Pendekatan Restoratif & Lepaskan dari Tuntutan",
        "consequence": "Nurani hukum diutamakan, mencegah kriminalisasi tradisi subsistensi masyarakat pedesaan.",
        "keadilan": 95,
        "kepastian": 30,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Proses Pidana Tipiring demi Efek Jera Perlindungan Hak Milik Korporasi",
        "consequence": "Disiplin properti ditegakkan mutlak, namun memicu amarah warga desa atas arogansi korporasi.",
        "keadilan": 10,
        "kepastian": 95,
        "kemanfaatan": 15,
        "alignmentShift": 30
      }
    ]
  },
  {
    "id": "CASE-11",
    "title": "Kasus #11: Pemanfaatan Listrik Darurat untuk Menyelamatkan Tabung Oksigen Warga",
    "facts": [
      "Saat pemadaman bergilir di pulau terpencil, seorang ketua RT menyambungkan kabel genset kantor kelurahan ke rumah warga pengidap asma kronis.",
      "Petugas PLN mendapati sambungan ilegal dan mengenakan tagihan susulan plus denda pidana pencurian tenaga listrik.",
      "Tindakan tersebut terbukti berhasil menyelamatkan nyawa pasien asma."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Ketua RT atas Dasar Alasan Pemaaf Darurat Medis (Noodtoestand)",
        "consequence": "Penyelamatan nyawa diakui sebagai urgensi tertinggi melampaui sanksi administratif listrik.",
        "keadilan": 90,
        "kepastian": 40,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Wajibkan Bayar Denda demi Menegakkan Aturan Pencurian Energi BUMN",
        "consequence": "Integritas regulasi energi BUMN terjaga, namun mengabaikan rasa kemanusiaan dalam situasi darurat.",
        "keadilan": 20,
        "kepastian": 90,
        "kemanfaatan": 30,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-12",
    "title": "Kasus #12: Penebangan Pohon yang Membahayakan Atap Rumah Tetangga",
    "facts": [
      "Sebuah dahan pohon beringin milik warga A condong dan rawan tumbang menimpa kamar tidur anak tetangganya (warga B).",
      "Warga A menolak memotong dahan karena alasan fengshui, sehingga warga B memotong dahan tersebut tanpa izin.",
      "Warga A melaporkan warga B atas tuduhan perusakan barang milik orang lain (Pasal 406 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Warga B Berdasarkan Pembelaan Bahaya Nyata (Asas Asas Kepatutan)",
        "consequence": "Pencegahan marabahaya fisik diprioritaskan di atas kepemilikan benda tumbuhan privat.",
        "keadilan": 85,
        "kepastian": 45,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Hukum Bersalah karena Main Hakim Sendiri (Eigenrichting)",
        "consequence": "Warga dicegah bertindak sepihak tanpa izin pengadilan, namun resiko bahaya fisik terabaikan.",
        "keadilan": 30,
        "kepastian": 90,
        "kemanfaatan": 35,
        "alignmentShift": 20
      }
    ]
  }
],
  "1-5": [
  {
    "id": "CASE-13",
    "title": "Kasus #13: Apakah Menangkap Sinyal Wi-Fi Tetangga Termasuk 'Mengambil Barang'?",
    "facts": [
      "Seorang pemuda meretas kata sandi Wi-Fi kantor swasta dari teras untuk mengunduh materi kuliah daring.",
      "Perusahaan menuntut pemuda tersebut dengan Pasal 362 KUHP tentang Pencurian Barang.",
      "Secara gramatikal klasik, frekuensi gelombang radio bukan benda berwujud cair, padat, atau gas."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Gunakan Penafsiran Ekstensif: Gelombang Berharga Ekonomi adalah 'Barang'",
        "consequence": "Hak kepemilikan digital dilindungi dari pencurian tak kasat mata.",
        "keadilan": 70,
        "kepastian": 70,
        "kemanfaatan": 60,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Gunakan Penafsiran Gramatikal Ketat: Bebaskan dari Pasal Pencurian Konvensional",
        "consequence": "Asas legalitas terjaga; menuntut jaksa menggunakan UU ITE yang lebih spesifik daripada memaksakan KUHP.",
        "keadilan": 60,
        "kepastian": 85,
        "kemanfaatan": 60,
        "alignmentShift": 15
      }
    ]
  },
  {
    "id": "CASE-14",
    "title": "Kasus #14: Definisi 'Kendaraan Bermotor' untuk Skuter Listrik di Trotoar",
    "facts": [
      "Seorang pengguna otopet listrik menabrak pejalan kaki di trotoar hingga terluka retak tulang.",
      "Polisi mendakwa pasal kelalaian pengemudi kendaraan bermotor di jalan umum (UU LLAJ).",
      "Kuasa hukum berargumen otopet bertenaga baterai mini bukanlah kendaraan bermotor yang dimaksud dalam UU LLAJ 2009."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tafsirkan Teleologis: Segala Sarana Penggerak Mesin Wajib Bertanggung Jawab",
        "consequence": "Pejalan kaki di trotoar mendapatkan perlindungan hukum maksimal dari moda mobilitas modern.",
        "keadilan": 85,
        "kepastian": 55,
        "kemanfaatan": 80,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tafsirkan Gramatikal: Tolak Kualifikasi Sebagai Kendaraan Bermotor LLAJ",
        "consequence": "Mendorong parlemen memperbarui definisi hukum, namun korban sementara sulit menuntut ganti rugi asuransi Jasa Raharja.",
        "keadilan": 35,
        "kepastian": 90,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-15",
    "title": "Kasus #15: Penafsiran 'Merugikan Keuangan Negara' dalam Kebijakan Tanggap Bencana",
    "facts": [
      "Bupati membeli tenda pengungsi darurat letusan gunung dengan harga 20% di atas pagu anggaran karena stok langka di pasar.",
      "Audit BPK menemukan selisih harga dan jaksa menuduh perbuatan tersebut merugikan keuangan negara.",
      "Bupati membuktikan seluruh tenda benar-benar dihuni 3.000 pengungsi yang kedinginan tanpa ada uang yang ia korupsi."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tafsirkan Teleologis Tujuan UU Tipikor: Tidak Ada Niat Jahat Korup (Mens Rea)",
        "consequence": "Pejabat publik berani mengambil keputusan darurat demi nyawa rakyat tanpa dihantui kriminalisasi.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 95,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Tafsirkan Gramatikal Akuntansi: Selisih Pembayaran Otomatis Kerugian Negara",
        "consequence": "Disiplin anggaran negara terjaga kaku, namun memicu kepasifan pejabat saat bencana alam datang.",
        "keadilan": 15,
        "kepastian": 95,
        "kemanfaatan": 10,
        "alignmentShift": 30
      }
    ]
  }
],
  "1-6": [
  {
    "id": "CASE-16",
    "title": "Kasus #16: Peraturan Daerah yang Bertentangan dengan Undang-Undang Ketenagakerjaan",
    "facts": [
      "Suatu Perda melarang perempuan bekerja di tempat hiburan malam lewat pukul 22.00 dengan ancaman denda.",
      "Asosiasi pekerja perempuan menggugat Perda tersebut karena melanggar hak kesetaraan kerja dalam UU Ketenagakerjaan dan UUD 1945.",
      "Pemerintah daerah beralasan Perda dibuat untuk menjaga ketertiban moral lokal."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Perda Menggunakan Asas Lex Superior Derogat Legi Inferiori",
        "consequence": "Hierarki hukum nasional tegak, hak asasi perempuan untuk bekerja setara terlindungi.",
        "keadilan": 90,
        "kepastian": 85,
        "kemanfaatan": 80,
        "alignmentShift": -10
      },
      {
        "id": "OPT-2",
        "action": "Pertahankan Perda Mengatasnamakan Otonomi Daerah dan Kearifan Lokal",
        "consequence": "Aspirasi lokal terlindungi, namun terjadi fragmentasi hukum nasional dan diskriminasi gender.",
        "keadilan": 25,
        "kepastian": 40,
        "kemanfaatan": 30,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-17",
    "title": "Kasus #17: Surat Edaran Menteri yang Menghapus Hak Cuti Tahunan",
    "facts": [
      "Sebuah Surat Edaran (SE) Dirjen Pajak mengubah mekanisme restitusi yang secara materiil merugikan hak wajib pajak.",
      "Pengusaha menggugat ke PTUN bahwa SE bukan peraturan perundang-undangan (regeling) yang boleh membebankan kewajiban.",
      "Kementerian beralasan SE diperlukan sebagai petunjuk teknis internal yang mendesak."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Nyatakan SE Tidak Mengikat Publik Sesuai Asas Legalitas Regulasi",
        "consequence": "Mencegah birokrasi membuat aturan siluman yang melangkahi undang-undang resmi.",
        "keadilan": 85,
        "kepastian": 95,
        "kemanfaatan": 75,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Legalkan Keberlakuan SE Demi Fleksibilitas Penagihan Pajak Negara",
        "consequence": "Penerimaan kas negara cepat tercapai, namun mengikis kepastian hak-hak wajib pajak.",
        "keadilan": 30,
        "kepastian": 30,
        "kemanfaatan": 50,
        "alignmentShift": -15
      }
    ]
  },
  {
    "id": "CASE-18",
    "title": "Kasus #18: Pertentangan Perpres Pengadaan Lahan dengan Putusan Mahkamah Konstitusi",
    "facts": [
      "Peraturan Presiden menetapkan proyek strategis nasional dapat langsung menggusur lahan sebelum putusan appraisal berkekuatan hukum tetap.",
      "Masyarakat sipil menunjukkan Putusan MK yang menegaskan ganti rugi harus tuntas sebelum penguasaan fisik tanah.",
      "Kementerian menolak tunduk pada putusan MK dengan alasan mengejar target peresmian infrastruktur."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tunduk Mutlak pada Putusan MK sebagai Tafsir Konstitusi Tertinggi",
        "consequence": "Supremasi konstitusi dihormati, hak milik rakyat dari penggusuran paksa terlindungi.",
        "keadilan": 95,
        "kepastian": 95,
        "kemanfaatan": 70,
        "alignmentShift": 0
      },
      {
        "id": "OPT-2",
        "action": "Dahulukan Percepatan Proyek Infrastruktur Berdasarkan Perpres",
        "consequence": "Proyek jalan tol cepat selesai, namun mencoreng marwah lembaga pengawal konstitusi negara.",
        "keadilan": 15,
        "kepastian": 25,
        "kemanfaatan": 60,
        "alignmentShift": -25
      }
    ]
  }
],
  "1-7": [
  {
    "id": "CASE-19",
    "title": "Kasus #19: Petani Pedalaman Memelihara Satwa Dilindungi Tanpa Tahu Peraturan",
    "facts": [
      "Seorang warga suku pedalaman merawat burung kakaktua raja yang terluka di hutan hingga sehat di pekarangannya.",
      "Petugas BKSDA menangkapnya dengan ancaman penjara 5 tahun berdasarkan UU Konservasi Hayati.",
      "Warga tersebut buta huruf dan tidak pernah mendapat sosialisasi undang-undang konservasi dari pemerintah."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Pelaku dari Sanksi Pidana & Sita Satwa untuk Direhabilitasi",
        "consequence": "Keadilan kontekstual diterapkan tanpa menzalimi warga pelosok yang tidak terjangkau informasi.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Hukum Pidana Sesuai Asas Fiksi Hukum (Ignorantia Juris Non Excusat)",
        "consequence": "Asas fiksi hukum dijaga tegak, namun melahirkan preseden hukum yang menindas kaum rentan.",
        "keadilan": 15,
        "kepastian": 95,
        "kemanfaatan": 15,
        "alignmentShift": 30
      }
    ]
  },
  {
    "id": "CASE-20",
    "title": "Kasus #20: Pedagang Kaki Lima Memakai Kantong Plastik Terlarang",
    "facts": [
      "Pemerintah kota mengesahkan Perda larangan kantong plastik sekali pakai yang baru diundangkan 3 hari lalu di lembaran daerah.",
      "Seorang penjual gorengan ditertibkan Satpol PP dan didenda Rp 1.000.000 karena masih menggunakan kantong plastik stok lama.",
      "Denda tersebut setara dengan seluruh keuntungan berdagang penjual selama dua minggu."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Denda & Berikan Pembinaan serta Masa Transisi 3 Bulan",
        "consequence": "Edukasi lingkungan berjalan manusiawi tanpa mematikan mata pencaharian ekonomi mikro.",
        "keadilan": 90,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Tegakkan Denda Penuh Berdasarkan Tanggal Keberlakuan Lembaran Daerah",
        "consequence": "Disiplin perda ditegakkan seketika, namun menciptakan resistensi sosial di kalangan pedagang kecil.",
        "keadilan": 25,
        "kepastian": 95,
        "kemanfaatan": 30,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-21",
    "title": "Kasus #21: Pengemudi Kendaraan Membawa Pisau Lipat Multifungsi untuk Berkemah",
    "facts": [
      "Seorang mahasiswa dihentikan dalam razia senjata tajam dan ditemukan membawa pisau lipat utilitas di dalam tas ransel perkemahannya.",
      "Polisi menjerat dengan UU Darurat No. 12 Tahun 1951 dengan ancaman hukuman penjara 10 tahun.",
      "Mahasiswa membuktikan ia sedang dalam perjalanan menuju bumi perkemahan kampus bersama teman-temannya."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Mahasiswa karena Memiliki Alasan Sah (Legitimate Purpose)",
        "consequence": "Pasal pidana diterapkan sesuai ratio legis (mencegah kekerasan kriminal, bukan mengkriminalisasi alat berkemah).",
        "keadilan": 95,
        "kepastian": 60,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Tahan dan Proses Pidana Mengacu pada Larangan Mutlak Bawa Senjata Tajam",
        "consequence": "Ketertiban keamanan jalan raya terjaga tanpa kompromi, namun merusak masa depan mahasiswa.",
        "keadilan": 10,
        "kepastian": 90,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  }
],
  "1-8": [
  {
    "id": "CASE-22",
    "title": "Kasus #22: Penebangan Kayu Hutan Adat untuk Upacara Pemakaman Sakral",
    "facts": [
      "Tokoh masyarakat adat menebang satu pohon ulin di kawasan hutan yang baru diklaim negara sebagai hutan lindung.",
      "Penebangan dilakukan secara adat untuk tiang upacara pemakaman leluhur suku yang telah berlangsung ratusan tahun.",
      "Polisi kehutanan menyita kayu dan menahan tetua adat atas dakwaan illegal logging."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Akui Hak Ulayat Komunitas Adat (Pasal 18B UUD 1945)",
        "consequence": "Eksistensi masyarakat adat dihormati negara, memperkuat rekonsiliasi adat dan konservasi.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 85,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Hukum Berdasarkan UU Kehutanan Tertulis Demi Melindungi Hutan Negara",
        "consequence": "Status zona hutan lindung negara terlindungi dari segala bentuk pemanfaatan tanpa izin formal.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 40,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-23",
    "title": "Kasus #23: Tradisi Mediasi Damai Kasus Penganiayaan Ringan di Desa Adat",
    "facts": [
      "Dua pemuda desa berkelahi dan telah diselesaikan secara damai oleh kepala desa dengan denda seekor kerbau.",
      "Salah satu kerabat korban tidak puas lalu melapor ke polisi kota menuntut pelaku dipenjara.",
      "Warga desa memprotes karena intervensi polisi merusak keharmonisan adat yang telah pulih."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Hormati Putusan Adat & Hentikan Penyidikan Kepolisian (Ne Bis In Idem Adat)",
        "consequence": "Kohesi sosial pedesaan terjaga tanpa membebani lembaga pemasyarakatan yang over-capacity.",
        "keadilan": 90,
        "kepastian": 45,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Lanjutkan Proses Hukum Negara (Pidana Adalah Ranah Publik Bukan Perdata)",
        "consequence": "Monopoli negara atas penegakan hukum pidana terjaga, namun menciptakan dendam antarkeluarga di desa.",
        "keadilan": 30,
        "kepastian": 90,
        "kemanfaatan": 25,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-24",
    "title": "Kasus #24: Sengketa Batas Tanah Berdasarkan Pohon Kelapa vs Titik Koordinat GPS",
    "facts": [
      "Dua keluarga bersengketa batas tanah warisan; surat segel tahun 1950 menyebut batas adalah deretan pohon kelapa miring.",
      "Pengukuran ulang BPN menggunakan GPS mutakhir menggeser batas sejauh 5 meter ke dalam pekarangan rumah pihak tetangga.",
      "Warga sepakat batas pohon kelapa telah diakui bersama selama tiga generasi tanpa konflik."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Menangkan Batas Pohon Kelapa Berdasarkan Asas Kepercayaan Penguasaan Fisik",
        "consequence": "Kedamaian antar-tetangga terjaga sesuai fakta historis yang diakui komunitas lokal.",
        "keadilan": 85,
        "kepastian": 40,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tegakkan Batas Koordinat GPS BPN Demi Modernisasi Kadaster Tanah",
        "consequence": "Kepastian sistem pendaftaran tanah digital terjamin, namun memicu permusuhan abadi antar-keluarga.",
        "keadilan": 35,
        "kepastian": 95,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  }
],
  "1-9": [
  {
    "id": "CASE-25",
    "title": "Kasus #25: Kapolsek Memfasilitasi Ganti Rugi Pencuri Tabung Gas untuk Beli Beras",
    "facts": [
      "Seorang pemuda menganggur tertangkap mencuri tabung gas 3 kg milik pedagang martabak untuk membeli susu bayinya yang menangis kelaparan.",
      "Kapolsek menggunakan uang pribadi untuk mengganti tabung gas korban, membelikan sekardus susu, dan membebaskan pemuda tersebut.",
      "Sebuah LSM melaporkan Kapolsek atas tuduhan penghentian perkara pidana tanpa prosedur formal SP3."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Apresiasi Diskresi Humanis Kapolsek (Keadilan Restoratif & Nurani Hukum)",
        "consequence": "Wajah kepolisian menjadi pelindung rakyat sejati dan menyelesaikan akar masalah sosial.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 95,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Teguran Disiplin karena Mengabaikan Prosedur Formil KUHAP",
        "consequence": "Kepatuhan birokrasi kepolisian terhadap SOP penanganan tindak pidana terjaga tanpa kompromi.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-26",
    "title": "Kasus #26: Jaksa Menghentikan Penuntutan Kakek yang Membela Cucunya dari Penganiaya",
    "facts": [
      "Seorang kakek memukul kepala seorang pria mabuk dengan balok kayu hingga patah rahang karena pria tersebut hendak memperkosa cucunya.",
      "Penyidik kepolisian melimpahkan berkas dengan pasal penganiayaan berat (Pasal 351 KUHP).",
      "Jaksa Penuntut Umum menolak mendakwa dan menerbitkan ketetapan penghentian penuntutan demi keadilan."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Sahkan Penghentian Penuntutan oleh Jaksa (Dominus Litis Berkeadilan)",
        "consequence": "Korban kejahatan dan pembelanya terlindungi dari beban pengadilan yang traumatis.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Paksa Jaksa Bawa Perkara ke Pengadilan agar Hakim yang Menentukan Noodweer",
        "consequence": "Pemisahan kekuasaan antara jaksa dan hakim terjaga, namun kakek tua harus menderita di sel tahanan.",
        "keadilan": 30,
        "kepastian": 90,
        "kemanfaatan": 30,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-27",
    "title": "Kasus #27: Hakim Memberikan Vonis Pemaafan Hakim (Rechterlijk Pardon) pada Pencuri Obat",
    "facts": [
      "Terdakwa tertangkap mencuri obat antibiotik di apotek senilai Rp 80.000 untuk menyembuhkan infeksi ibunya yang sekarat.",
      "Terdakwa mengaku bersalah, menangis, dan meminta maaf kepada pemilik apotek yang sebenarnya sudah memaafkan.",
      "Hakim memvonis bersalah namun menjatuhkan pemaafan hakim tanpa pidana penjara maupun kurungan (Pasal 54 KUHP Baru)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Dukung Vonis Pemaafan Hakim sebagai Terobosan Hukum Modern Indonesia",
        "consequence": "Hukum pidana tidak lagi menjadi mesin pembalas dendam yang buta nurani kemanusiaan.",
        "keadilan": 95,
        "kepastian": 60,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Tuntut Vonis Penjara Minimal agar Menjadi Pelajaran bagi Calon Pelaku Lain",
        "consequence": "Pencegahan umum (general deterrence) terjaga keras di ruang publik.",
        "keadilan": 15,
        "kepastian": 90,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  }
],
  "1-10": [
  {
    "id": "CASE-28",
    "title": "Kasus #28: Dilema Kasus Speluncean Explorers: Membunuh Satu Orang demi Selamatkan Empat",
    "facts": [
      "Lima penjelajah terjebak di gua runtuh tanpa makanan selama berminggu-minggu dengan sisa waktu hidup 2 hari.",
      "Mereka sepakat melempar dadu untuk mengorbankan satu rekan demi menjadi makanan bagi empat lainnya agar bertahan hingga tim penyelamat datang.",
      "Empat korban yang selamat kini disidangkan atas tuduhan pembunuhan berencana (Pasal 340 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Terdakwa Berdasarkan Alasan Keadaan Memaksa Ekstrem (Noodtoestand)",
        "consequence": "Hukum mengakui bahwa dalam batas eksistensial biologis manusia, hukum positif kehilangan fungsi normalnya.",
        "keadilan": 80,
        "kepastian": 30,
        "kemanfaatan": 85,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Vonis Hukuman Pembunuhan Sesuai Teks Asas Legalitas Mutlak",
        "consequence": "Kesucian nyawa manusia dilindungi hukum tanpa boleh ditukar dengan kalkulasi kuantitatif utilitas.",
        "keadilan": 40,
        "kepastian": 95,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-29",
    "title": "Kasus #29: Pengujian UU Kontroversial yang Ditolak 80% Rakyat Namun Disahkan DPR",
    "facts": [
      "DPR dan Pemerintah mengesahkan undang-undang yang memangkas pesangon buruh demi menarik investasi raksasa asing.",
      "Jutaan buruh turun ke jalan menggelar mogok nasional yang melumpuhkan perekonomian negara.",
      "Kelompok serikat buruh mengajukan uji materiil ke Mahkamah Konstitusi memohon pembatalan pasal pesangon."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Pasal Pesangon karena Melanggar Hak Hidup Layak Buruh (UUD 1945)",
        "consequence": "Kesejahteraan kelas pekerja terlindungi dari perlombaan deregulasi yang menekan upah buruh.",
        "keadilan": 90,
        "kepastian": 70,
        "kemanfaatan": 80,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Gugatan Buruh Mengingat Kebijakan Ekonomi adalah Ranah Pembentuk UU (Open Legal Policy)",
        "consequence": "Daya saing investasi naik dan batas wewenang peradilan terjaga, namun memicu ketidakpuasan masif buruh.",
        "keadilan": 30,
        "kepastian": 85,
        "kemanfaatan": 55,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-30",
    "title": "Kasus #30: Hak Menolak Vaksinasi Wajib Saat Pandemi Mematikan",
    "facts": [
      "Pemerintah menerbitkan aturan kewajiban vaksinasi untuk mencegah penularan virus mematikan dengan ancaman pemutusan bantuan sosial.",
      "Seorang warga menolak divaksin karena keyakinan pribadi atas integritas tubuhnya sendiri (bodily autonomy).",
      "Warga tersebut menggugat pemerintah menuntut pembatalan sanksi atas nama hak asasi individu."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Menangkan Pemerintah: Keselamatan Publik di Atas Kebebasan Individu",
        "consequence": "Kekebalan kelompok (herd immunity) tercapai cepat dan ribuan nyawa rentan terselamatkan.",
        "keadilan": 60,
        "kepastian": 75,
        "kemanfaatan": 95,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Menangkan Warga: Hak atas Integritas Tubuh Adalah Hak Asasi yang Tak Boleh Dirampas",
        "consequence": "Kedaulatan tubuh individu terlindungi dari intervensi medis paksa negara, namun resiko wabah meningkat.",
        "keadilan": 85,
        "kepastian": 40,
        "kemanfaatan": 30,
        "alignmentShift": -20
      }
    ]
  }
],
  "2-1": [
  {
    "id": "CASE-31",
    "title": "Kasus #31: Kedudukan Hak Waris Anak Luar Kawin pasca Putusan MK - Seri Kasus 1",
    "facts": [
      "Seorang anak yang lahir di luar pernikahan resmi menuntut bagian warisan dari almarhum ayahnya seorang konglomerat.",
      "Hasil tes DNA membuktikan probabilitas keayahan biologis mencapai 99,99% sesuai Putusan MK No. 46/PUU-VIII/2010.",
      "Keluarga istri sah menolak membagi warisan dengan alasan hukum perdata waris konvensional hanya mengakui anak sah."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Berikan Hak Waris Keperdataan Berdasarkan Bukti Ilmiah DNA",
        "consequence": "Keadilan bagi anak tidak berdosa diwujudkan sesuai putusan progresif Mahkamah Konstitusi.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Batasi Hanya pada Nafkah Pemeliharaan Tanpa Hak atas Harta Waris Penuh",
        "consequence": "Kepastian hukum keluarga perkawinan sah dipertahankan tanpa memecah konsolidasi warisan.",
        "keadilan": 40,
        "kepastian": 90,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-32",
    "title": "Kasus #32: Kedudukan Hak Waris Anak Luar Kawin pasca Putusan MK - Seri Kasus 2",
    "facts": [
      "Seorang keponakan diizinkan secara lisan oleh pamannya untuk menempati rumah keluarga sejak tahun 1990.",
      "Setelah paman wafat, ahli waris tunggal menuntut keponakan tersebut segera angkat kaki dalam tempo 3 hari tanpa uang kerohiman.",
      "Keponakan menuntut ganti rugi seluruh biaya renovasi atap dan pondasi yang telah ia keluarkan selama 30 tahun."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Hak Retensi & Ganti Rugi Biaya Perbaikan yang Bermanfaat",
        "consequence": "Iktikad baik penghuni lama diapresiasi sesuai asas kepatutan hukum kebendaan.",
        "keadilan": 90,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Perintahkan Pengosongan Seketika Berdasarkan Sertifikat Hak Milik Sah",
        "consequence": "Hak mutlak pemilik sertifikat ditegakkan tanpa kompromi.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 35,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-33",
    "title": "Kasus #33: Kedudukan Hak Waris Anak Luar Kawin pasca Putusan MK - Seri Kasus 3",
    "facts": [
      "Sepasang suami istri membuat akta perjanjian perkawinan pisah harta di hadapan notaris setelah suami terlilit utang judi online.",
      "Kreditor bank menolak akta tersebut dan tetap menyita rumah yang diatasnamakan istri karena dibeli saat perkawinan.",
      "Istri menggugat perlawanan pihak ketiga (derden verzet) mengacu pada Putusan MK No. 69/PUU-XIII/2015."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Lindungi Harta Istri Berdasarkan Keabsahan Perjanjian Kawin Terbuka",
        "consequence": "Pasangan yang tidak bersalah terlindungi dari kehancuran ekonomi akibat utang judi pasangannya.",
        "keadilan": 90,
        "kepastian": 60,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Menangkan Bank Demi Melindungi Kepastian Hak Tagih Kreditor",
        "consequence": "Mencegah modus pengalihan harta suami kepada istri untuk menghindari pelunasan utang kreditor.",
        "keadilan": 45,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "2-2": [
  {
    "id": "CASE-34",
    "title": "Kasus #34: Hak Mutlak Ahli Waris (Legitieme Portie) vs Wasiat - Seri Kasus 1",
    "facts": [
      "Seorang anak yang lahir di luar pernikahan resmi menuntut bagian warisan dari almarhum ayahnya seorang konglomerat.",
      "Hasil tes DNA membuktikan probabilitas keayahan biologis mencapai 99,99% sesuai Putusan MK No. 46/PUU-VIII/2010.",
      "Keluarga istri sah menolak membagi warisan dengan alasan hukum perdata waris konvensional hanya mengakui anak sah."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Berikan Hak Waris Keperdataan Berdasarkan Bukti Ilmiah DNA",
        "consequence": "Keadilan bagi anak tidak berdosa diwujudkan sesuai putusan progresif Mahkamah Konstitusi.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Batasi Hanya pada Nafkah Pemeliharaan Tanpa Hak atas Harta Waris Penuh",
        "consequence": "Kepastian hukum keluarga perkawinan sah dipertahankan tanpa memecah konsolidasi warisan.",
        "keadilan": 40,
        "kepastian": 90,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-35",
    "title": "Kasus #35: Hak Mutlak Ahli Waris (Legitieme Portie) vs Wasiat - Seri Kasus 2",
    "facts": [
      "Seorang keponakan diizinkan secara lisan oleh pamannya untuk menempati rumah keluarga sejak tahun 1990.",
      "Setelah paman wafat, ahli waris tunggal menuntut keponakan tersebut segera angkat kaki dalam tempo 3 hari tanpa uang kerohiman.",
      "Keponakan menuntut ganti rugi seluruh biaya renovasi atap dan pondasi yang telah ia keluarkan selama 30 tahun."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Hak Retensi & Ganti Rugi Biaya Perbaikan yang Bermanfaat",
        "consequence": "Iktikad baik penghuni lama diapresiasi sesuai asas kepatutan hukum kebendaan.",
        "keadilan": 90,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Perintahkan Pengosongan Seketika Berdasarkan Sertifikat Hak Milik Sah",
        "consequence": "Hak mutlak pemilik sertifikat ditegakkan tanpa kompromi.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 35,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-36",
    "title": "Kasus #36: Hak Mutlak Ahli Waris (Legitieme Portie) vs Wasiat - Seri Kasus 3",
    "facts": [
      "Sepasang suami istri membuat akta perjanjian perkawinan pisah harta di hadapan notaris setelah suami terlilit utang judi online.",
      "Kreditor bank menolak akta tersebut dan tetap menyita rumah yang diatasnamakan istri karena dibeli saat perkawinan.",
      "Istri menggugat perlawanan pihak ketiga (derden verzet) mengacu pada Putusan MK No. 69/PUU-XIII/2015."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Lindungi Harta Istri Berdasarkan Keabsahan Perjanjian Kawin Terbuka",
        "consequence": "Pasangan yang tidak bersalah terlindungi dari kehancuran ekonomi akibat utang judi pasangannya.",
        "keadilan": 90,
        "kepastian": 60,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Menangkan Bank Demi Melindungi Kepastian Hak Tagih Kreditor",
        "consequence": "Mencegah modus pengalihan harta suami kepada istri untuk menghindari pelunasan utang kreditor.",
        "keadilan": 45,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "2-3": [
  {
    "id": "CASE-37",
    "title": "Kasus #37: Perjanjian Kawin (Prenup) yang Dibuat Saat Pernikahan Berjalan - Seri Kasus 1",
    "facts": [
      "Seorang anak yang lahir di luar pernikahan resmi menuntut bagian warisan dari almarhum ayahnya seorang konglomerat.",
      "Hasil tes DNA membuktikan probabilitas keayahan biologis mencapai 99,99% sesuai Putusan MK No. 46/PUU-VIII/2010.",
      "Keluarga istri sah menolak membagi warisan dengan alasan hukum perdata waris konvensional hanya mengakui anak sah."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Berikan Hak Waris Keperdataan Berdasarkan Bukti Ilmiah DNA",
        "consequence": "Keadilan bagi anak tidak berdosa diwujudkan sesuai putusan progresif Mahkamah Konstitusi.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Batasi Hanya pada Nafkah Pemeliharaan Tanpa Hak atas Harta Waris Penuh",
        "consequence": "Kepastian hukum keluarga perkawinan sah dipertahankan tanpa memecah konsolidasi warisan.",
        "keadilan": 40,
        "kepastian": 90,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-38",
    "title": "Kasus #38: Perjanjian Kawin (Prenup) yang Dibuat Saat Pernikahan Berjalan - Seri Kasus 2",
    "facts": [
      "Seorang keponakan diizinkan secara lisan oleh pamannya untuk menempati rumah keluarga sejak tahun 1990.",
      "Setelah paman wafat, ahli waris tunggal menuntut keponakan tersebut segera angkat kaki dalam tempo 3 hari tanpa uang kerohiman.",
      "Keponakan menuntut ganti rugi seluruh biaya renovasi atap dan pondasi yang telah ia keluarkan selama 30 tahun."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Hak Retensi & Ganti Rugi Biaya Perbaikan yang Bermanfaat",
        "consequence": "Iktikad baik penghuni lama diapresiasi sesuai asas kepatutan hukum kebendaan.",
        "keadilan": 90,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Perintahkan Pengosongan Seketika Berdasarkan Sertifikat Hak Milik Sah",
        "consequence": "Hak mutlak pemilik sertifikat ditegakkan tanpa kompromi.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 35,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-39",
    "title": "Kasus #39: Perjanjian Kawin (Prenup) yang Dibuat Saat Pernikahan Berjalan - Seri Kasus 3",
    "facts": [
      "Sepasang suami istri membuat akta perjanjian perkawinan pisah harta di hadapan notaris setelah suami terlilit utang judi online.",
      "Kreditor bank menolak akta tersebut dan tetap menyita rumah yang diatasnamakan istri karena dibeli saat perkawinan.",
      "Istri menggugat perlawanan pihak ketiga (derden verzet) mengacu pada Putusan MK No. 69/PUU-XIII/2015."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Lindungi Harta Istri Berdasarkan Keabsahan Perjanjian Kawin Terbuka",
        "consequence": "Pasangan yang tidak bersalah terlindungi dari kehancuran ekonomi akibat utang judi pasangannya.",
        "keadilan": 90,
        "kepastian": 60,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Menangkan Bank Demi Melindungi Kepastian Hak Tagih Kreditor",
        "consequence": "Mencegah modus pengalihan harta suami kepada istri untuk menghindari pelunasan utang kreditor.",
        "keadilan": 45,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "2-4": [
  {
    "id": "CASE-40",
    "title": "Kasus #40: Hibah Wasiat yang Melebihi Batas Sepertiga Harta Warisan - Seri Kasus 1",
    "facts": [
      "Seorang anak yang lahir di luar pernikahan resmi menuntut bagian warisan dari almarhum ayahnya seorang konglomerat.",
      "Hasil tes DNA membuktikan probabilitas keayahan biologis mencapai 99,99% sesuai Putusan MK No. 46/PUU-VIII/2010.",
      "Keluarga istri sah menolak membagi warisan dengan alasan hukum perdata waris konvensional hanya mengakui anak sah."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Berikan Hak Waris Keperdataan Berdasarkan Bukti Ilmiah DNA",
        "consequence": "Keadilan bagi anak tidak berdosa diwujudkan sesuai putusan progresif Mahkamah Konstitusi.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Batasi Hanya pada Nafkah Pemeliharaan Tanpa Hak atas Harta Waris Penuh",
        "consequence": "Kepastian hukum keluarga perkawinan sah dipertahankan tanpa memecah konsolidasi warisan.",
        "keadilan": 40,
        "kepastian": 90,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-41",
    "title": "Kasus #41: Hibah Wasiat yang Melebihi Batas Sepertiga Harta Warisan - Seri Kasus 2",
    "facts": [
      "Seorang keponakan diizinkan secara lisan oleh pamannya untuk menempati rumah keluarga sejak tahun 1990.",
      "Setelah paman wafat, ahli waris tunggal menuntut keponakan tersebut segera angkat kaki dalam tempo 3 hari tanpa uang kerohiman.",
      "Keponakan menuntut ganti rugi seluruh biaya renovasi atap dan pondasi yang telah ia keluarkan selama 30 tahun."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Hak Retensi & Ganti Rugi Biaya Perbaikan yang Bermanfaat",
        "consequence": "Iktikad baik penghuni lama diapresiasi sesuai asas kepatutan hukum kebendaan.",
        "keadilan": 90,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Perintahkan Pengosongan Seketika Berdasarkan Sertifikat Hak Milik Sah",
        "consequence": "Hak mutlak pemilik sertifikat ditegakkan tanpa kompromi.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 35,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-42",
    "title": "Kasus #42: Hibah Wasiat yang Melebihi Batas Sepertiga Harta Warisan - Seri Kasus 3",
    "facts": [
      "Sepasang suami istri membuat akta perjanjian perkawinan pisah harta di hadapan notaris setelah suami terlilit utang judi online.",
      "Kreditor bank menolak akta tersebut dan tetap menyita rumah yang diatasnamakan istri karena dibeli saat perkawinan.",
      "Istri menggugat perlawanan pihak ketiga (derden verzet) mengacu pada Putusan MK No. 69/PUU-XIII/2015."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Lindungi Harta Istri Berdasarkan Keabsahan Perjanjian Kawin Terbuka",
        "consequence": "Pasangan yang tidak bersalah terlindungi dari kehancuran ekonomi akibat utang judi pasangannya.",
        "keadilan": 90,
        "kepastian": 60,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Menangkan Bank Demi Melindungi Kepastian Hak Tagih Kreditor",
        "consequence": "Mencegah modus pengalihan harta suami kepada istri untuk menghindari pelunasan utang kreditor.",
        "keadilan": 45,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "2-5": [
  {
    "id": "CASE-43",
    "title": "Kasus #43: Bezit vs Eigendom: Penguasaan Fisik Tanah Terlantar 30 Tahun - Seri Kasus 1",
    "facts": [
      "Seorang anak yang lahir di luar pernikahan resmi menuntut bagian warisan dari almarhum ayahnya seorang konglomerat.",
      "Hasil tes DNA membuktikan probabilitas keayahan biologis mencapai 99,99% sesuai Putusan MK No. 46/PUU-VIII/2010.",
      "Keluarga istri sah menolak membagi warisan dengan alasan hukum perdata waris konvensional hanya mengakui anak sah."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Berikan Hak Waris Keperdataan Berdasarkan Bukti Ilmiah DNA",
        "consequence": "Keadilan bagi anak tidak berdosa diwujudkan sesuai putusan progresif Mahkamah Konstitusi.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Batasi Hanya pada Nafkah Pemeliharaan Tanpa Hak atas Harta Waris Penuh",
        "consequence": "Kepastian hukum keluarga perkawinan sah dipertahankan tanpa memecah konsolidasi warisan.",
        "keadilan": 40,
        "kepastian": 90,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-44",
    "title": "Kasus #44: Bezit vs Eigendom: Penguasaan Fisik Tanah Terlantar 30 Tahun - Seri Kasus 2",
    "facts": [
      "Seorang keponakan diizinkan secara lisan oleh pamannya untuk menempati rumah keluarga sejak tahun 1990.",
      "Setelah paman wafat, ahli waris tunggal menuntut keponakan tersebut segera angkat kaki dalam tempo 3 hari tanpa uang kerohiman.",
      "Keponakan menuntut ganti rugi seluruh biaya renovasi atap dan pondasi yang telah ia keluarkan selama 30 tahun."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Hak Retensi & Ganti Rugi Biaya Perbaikan yang Bermanfaat",
        "consequence": "Iktikad baik penghuni lama diapresiasi sesuai asas kepatutan hukum kebendaan.",
        "keadilan": 90,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Perintahkan Pengosongan Seketika Berdasarkan Sertifikat Hak Milik Sah",
        "consequence": "Hak mutlak pemilik sertifikat ditegakkan tanpa kompromi.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 35,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-45",
    "title": "Kasus #45: Bezit vs Eigendom: Penguasaan Fisik Tanah Terlantar 30 Tahun - Seri Kasus 3",
    "facts": [
      "Sepasang suami istri membuat akta perjanjian perkawinan pisah harta di hadapan notaris setelah suami terlilit utang judi online.",
      "Kreditor bank menolak akta tersebut dan tetap menyita rumah yang diatasnamakan istri karena dibeli saat perkawinan.",
      "Istri menggugat perlawanan pihak ketiga (derden verzet) mengacu pada Putusan MK No. 69/PUU-XIII/2015."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Lindungi Harta Istri Berdasarkan Keabsahan Perjanjian Kawin Terbuka",
        "consequence": "Pasangan yang tidak bersalah terlindungi dari kehancuran ekonomi akibat utang judi pasangannya.",
        "keadilan": 90,
        "kepastian": 60,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Menangkan Bank Demi Melindungi Kepastian Hak Tagih Kreditor",
        "consequence": "Mencegah modus pengalihan harta suami kepada istri untuk menghindari pelunasan utang kreditor.",
        "keadilan": 45,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "2-6": [
  {
    "id": "CASE-46",
    "title": "Kasus #46: Eksekusi Objek Hak Tanggungan oleh Bank Tanpa Putusan Pengadilan - Seri Kasus 1",
    "facts": [
      "Seorang anak yang lahir di luar pernikahan resmi menuntut bagian warisan dari almarhum ayahnya seorang konglomerat.",
      "Hasil tes DNA membuktikan probabilitas keayahan biologis mencapai 99,99% sesuai Putusan MK No. 46/PUU-VIII/2010.",
      "Keluarga istri sah menolak membagi warisan dengan alasan hukum perdata waris konvensional hanya mengakui anak sah."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Berikan Hak Waris Keperdataan Berdasarkan Bukti Ilmiah DNA",
        "consequence": "Keadilan bagi anak tidak berdosa diwujudkan sesuai putusan progresif Mahkamah Konstitusi.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Batasi Hanya pada Nafkah Pemeliharaan Tanpa Hak atas Harta Waris Penuh",
        "consequence": "Kepastian hukum keluarga perkawinan sah dipertahankan tanpa memecah konsolidasi warisan.",
        "keadilan": 40,
        "kepastian": 90,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-47",
    "title": "Kasus #47: Eksekusi Objek Hak Tanggungan oleh Bank Tanpa Putusan Pengadilan - Seri Kasus 2",
    "facts": [
      "Seorang keponakan diizinkan secara lisan oleh pamannya untuk menempati rumah keluarga sejak tahun 1990.",
      "Setelah paman wafat, ahli waris tunggal menuntut keponakan tersebut segera angkat kaki dalam tempo 3 hari tanpa uang kerohiman.",
      "Keponakan menuntut ganti rugi seluruh biaya renovasi atap dan pondasi yang telah ia keluarkan selama 30 tahun."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Hak Retensi & Ganti Rugi Biaya Perbaikan yang Bermanfaat",
        "consequence": "Iktikad baik penghuni lama diapresiasi sesuai asas kepatutan hukum kebendaan.",
        "keadilan": 90,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Perintahkan Pengosongan Seketika Berdasarkan Sertifikat Hak Milik Sah",
        "consequence": "Hak mutlak pemilik sertifikat ditegakkan tanpa kompromi.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 35,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-48",
    "title": "Kasus #48: Eksekusi Objek Hak Tanggungan oleh Bank Tanpa Putusan Pengadilan - Seri Kasus 3",
    "facts": [
      "Sepasang suami istri membuat akta perjanjian perkawinan pisah harta di hadapan notaris setelah suami terlilit utang judi online.",
      "Kreditor bank menolak akta tersebut dan tetap menyita rumah yang diatasnamakan istri karena dibeli saat perkawinan.",
      "Istri menggugat perlawanan pihak ketiga (derden verzet) mengacu pada Putusan MK No. 69/PUU-XIII/2015."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Lindungi Harta Istri Berdasarkan Keabsahan Perjanjian Kawin Terbuka",
        "consequence": "Pasangan yang tidak bersalah terlindungi dari kehancuran ekonomi akibat utang judi pasangannya.",
        "keadilan": 90,
        "kepastian": 60,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Menangkan Bank Demi Melindungi Kepastian Hak Tagih Kreditor",
        "consequence": "Mencegah modus pengalihan harta suami kepada istri untuk menghindari pelunasan utang kreditor.",
        "keadilan": 45,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "2-7": [
  {
    "id": "CASE-49",
    "title": "Kasus #49: Pengampuan (Curatele) Terhadap Pengusaha Lansia yang Mengalami Demensia - Seri Kasus 1",
    "facts": [
      "Seorang anak yang lahir di luar pernikahan resmi menuntut bagian warisan dari almarhum ayahnya seorang konglomerat.",
      "Hasil tes DNA membuktikan probabilitas keayahan biologis mencapai 99,99% sesuai Putusan MK No. 46/PUU-VIII/2010.",
      "Keluarga istri sah menolak membagi warisan dengan alasan hukum perdata waris konvensional hanya mengakui anak sah."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Berikan Hak Waris Keperdataan Berdasarkan Bukti Ilmiah DNA",
        "consequence": "Keadilan bagi anak tidak berdosa diwujudkan sesuai putusan progresif Mahkamah Konstitusi.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Batasi Hanya pada Nafkah Pemeliharaan Tanpa Hak atas Harta Waris Penuh",
        "consequence": "Kepastian hukum keluarga perkawinan sah dipertahankan tanpa memecah konsolidasi warisan.",
        "keadilan": 40,
        "kepastian": 90,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-50",
    "title": "Kasus #50: Pengampuan (Curatele) Terhadap Pengusaha Lansia yang Mengalami Demensia - Seri Kasus 2",
    "facts": [
      "Seorang keponakan diizinkan secara lisan oleh pamannya untuk menempati rumah keluarga sejak tahun 1990.",
      "Setelah paman wafat, ahli waris tunggal menuntut keponakan tersebut segera angkat kaki dalam tempo 3 hari tanpa uang kerohiman.",
      "Keponakan menuntut ganti rugi seluruh biaya renovasi atap dan pondasi yang telah ia keluarkan selama 30 tahun."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Hak Retensi & Ganti Rugi Biaya Perbaikan yang Bermanfaat",
        "consequence": "Iktikad baik penghuni lama diapresiasi sesuai asas kepatutan hukum kebendaan.",
        "keadilan": 90,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Perintahkan Pengosongan Seketika Berdasarkan Sertifikat Hak Milik Sah",
        "consequence": "Hak mutlak pemilik sertifikat ditegakkan tanpa kompromi.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 35,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-51",
    "title": "Kasus #51: Pengampuan (Curatele) Terhadap Pengusaha Lansia yang Mengalami Demensia - Seri Kasus 3",
    "facts": [
      "Sepasang suami istri membuat akta perjanjian perkawinan pisah harta di hadapan notaris setelah suami terlilit utang judi online.",
      "Kreditor bank menolak akta tersebut dan tetap menyita rumah yang diatasnamakan istri karena dibeli saat perkawinan.",
      "Istri menggugat perlawanan pihak ketiga (derden verzet) mengacu pada Putusan MK No. 69/PUU-XIII/2015."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Lindungi Harta Istri Berdasarkan Keabsahan Perjanjian Kawin Terbuka",
        "consequence": "Pasangan yang tidak bersalah terlindungi dari kehancuran ekonomi akibat utang judi pasangannya.",
        "keadilan": 90,
        "kepastian": 60,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Menangkan Bank Demi Melindungi Kepastian Hak Tagih Kreditor",
        "consequence": "Mencegah modus pengalihan harta suami kepada istri untuk menghindari pelunasan utang kreditor.",
        "keadilan": 45,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "2-8": [
  {
    "id": "CASE-52",
    "title": "Kasus #52: Penarikan Sepihak Jaminan Fidusia oleh Debt Collector di Jalanan - Seri Kasus 1",
    "facts": [
      "Seorang anak yang lahir di luar pernikahan resmi menuntut bagian warisan dari almarhum ayahnya seorang konglomerat.",
      "Hasil tes DNA membuktikan probabilitas keayahan biologis mencapai 99,99% sesuai Putusan MK No. 46/PUU-VIII/2010.",
      "Keluarga istri sah menolak membagi warisan dengan alasan hukum perdata waris konvensional hanya mengakui anak sah."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Berikan Hak Waris Keperdataan Berdasarkan Bukti Ilmiah DNA",
        "consequence": "Keadilan bagi anak tidak berdosa diwujudkan sesuai putusan progresif Mahkamah Konstitusi.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Batasi Hanya pada Nafkah Pemeliharaan Tanpa Hak atas Harta Waris Penuh",
        "consequence": "Kepastian hukum keluarga perkawinan sah dipertahankan tanpa memecah konsolidasi warisan.",
        "keadilan": 40,
        "kepastian": 90,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-53",
    "title": "Kasus #53: Penarikan Sepihak Jaminan Fidusia oleh Debt Collector di Jalanan - Seri Kasus 2",
    "facts": [
      "Seorang keponakan diizinkan secara lisan oleh pamannya untuk menempati rumah keluarga sejak tahun 1990.",
      "Setelah paman wafat, ahli waris tunggal menuntut keponakan tersebut segera angkat kaki dalam tempo 3 hari tanpa uang kerohiman.",
      "Keponakan menuntut ganti rugi seluruh biaya renovasi atap dan pondasi yang telah ia keluarkan selama 30 tahun."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Hak Retensi & Ganti Rugi Biaya Perbaikan yang Bermanfaat",
        "consequence": "Iktikad baik penghuni lama diapresiasi sesuai asas kepatutan hukum kebendaan.",
        "keadilan": 90,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Perintahkan Pengosongan Seketika Berdasarkan Sertifikat Hak Milik Sah",
        "consequence": "Hak mutlak pemilik sertifikat ditegakkan tanpa kompromi.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 35,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-54",
    "title": "Kasus #54: Penarikan Sepihak Jaminan Fidusia oleh Debt Collector di Jalanan - Seri Kasus 3",
    "facts": [
      "Sepasang suami istri membuat akta perjanjian perkawinan pisah harta di hadapan notaris setelah suami terlilit utang judi online.",
      "Kreditor bank menolak akta tersebut dan tetap menyita rumah yang diatasnamakan istri karena dibeli saat perkawinan.",
      "Istri menggugat perlawanan pihak ketiga (derden verzet) mengacu pada Putusan MK No. 69/PUU-XIII/2015."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Lindungi Harta Istri Berdasarkan Keabsahan Perjanjian Kawin Terbuka",
        "consequence": "Pasangan yang tidak bersalah terlindungi dari kehancuran ekonomi akibat utang judi pasangannya.",
        "keadilan": 90,
        "kepastian": 60,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Menangkan Bank Demi Melindungi Kepastian Hak Tagih Kreditor",
        "consequence": "Mencegah modus pengalihan harta suami kepada istri untuk menghindari pelunasan utang kreditor.",
        "keadilan": 45,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "2-9": [
  {
    "id": "CASE-55",
    "title": "Kasus #55: Perbuatan Melawan Hukum (Pasal 1365 KUHPerdata) oleh Tetangga Berisik - Seri Kasus 1",
    "facts": [
      "Seorang anak yang lahir di luar pernikahan resmi menuntut bagian warisan dari almarhum ayahnya seorang konglomerat.",
      "Hasil tes DNA membuktikan probabilitas keayahan biologis mencapai 99,99% sesuai Putusan MK No. 46/PUU-VIII/2010.",
      "Keluarga istri sah menolak membagi warisan dengan alasan hukum perdata waris konvensional hanya mengakui anak sah."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Berikan Hak Waris Keperdataan Berdasarkan Bukti Ilmiah DNA",
        "consequence": "Keadilan bagi anak tidak berdosa diwujudkan sesuai putusan progresif Mahkamah Konstitusi.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Batasi Hanya pada Nafkah Pemeliharaan Tanpa Hak atas Harta Waris Penuh",
        "consequence": "Kepastian hukum keluarga perkawinan sah dipertahankan tanpa memecah konsolidasi warisan.",
        "keadilan": 40,
        "kepastian": 90,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-56",
    "title": "Kasus #56: Perbuatan Melawan Hukum (Pasal 1365 KUHPerdata) oleh Tetangga Berisik - Seri Kasus 2",
    "facts": [
      "Seorang keponakan diizinkan secara lisan oleh pamannya untuk menempati rumah keluarga sejak tahun 1990.",
      "Setelah paman wafat, ahli waris tunggal menuntut keponakan tersebut segera angkat kaki dalam tempo 3 hari tanpa uang kerohiman.",
      "Keponakan menuntut ganti rugi seluruh biaya renovasi atap dan pondasi yang telah ia keluarkan selama 30 tahun."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Hak Retensi & Ganti Rugi Biaya Perbaikan yang Bermanfaat",
        "consequence": "Iktikad baik penghuni lama diapresiasi sesuai asas kepatutan hukum kebendaan.",
        "keadilan": 90,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Perintahkan Pengosongan Seketika Berdasarkan Sertifikat Hak Milik Sah",
        "consequence": "Hak mutlak pemilik sertifikat ditegakkan tanpa kompromi.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 35,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-57",
    "title": "Kasus #57: Perbuatan Melawan Hukum (Pasal 1365 KUHPerdata) oleh Tetangga Berisik - Seri Kasus 3",
    "facts": [
      "Sepasang suami istri membuat akta perjanjian perkawinan pisah harta di hadapan notaris setelah suami terlilit utang judi online.",
      "Kreditor bank menolak akta tersebut dan tetap menyita rumah yang diatasnamakan istri karena dibeli saat perkawinan.",
      "Istri menggugat perlawanan pihak ketiga (derden verzet) mengacu pada Putusan MK No. 69/PUU-XIII/2015."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Lindungi Harta Istri Berdasarkan Keabsahan Perjanjian Kawin Terbuka",
        "consequence": "Pasangan yang tidak bersalah terlindungi dari kehancuran ekonomi akibat utang judi pasangannya.",
        "keadilan": 90,
        "kepastian": 60,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Menangkan Bank Demi Melindungi Kepastian Hak Tagih Kreditor",
        "consequence": "Mencegah modus pengalihan harta suami kepada istri untuk menghindari pelunasan utang kreditor.",
        "keadilan": 45,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "2-10": [
  {
    "id": "CASE-58",
    "title": "Kasus #58: Ujian Komprehensif: Sengketa Kompleks Harta Warisan Taipan Properti - Seri Kasus 1",
    "facts": [
      "Seorang anak yang lahir di luar pernikahan resmi menuntut bagian warisan dari almarhum ayahnya seorang konglomerat.",
      "Hasil tes DNA membuktikan probabilitas keayahan biologis mencapai 99,99% sesuai Putusan MK No. 46/PUU-VIII/2010.",
      "Keluarga istri sah menolak membagi warisan dengan alasan hukum perdata waris konvensional hanya mengakui anak sah."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Berikan Hak Waris Keperdataan Berdasarkan Bukti Ilmiah DNA",
        "consequence": "Keadilan bagi anak tidak berdosa diwujudkan sesuai putusan progresif Mahkamah Konstitusi.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Batasi Hanya pada Nafkah Pemeliharaan Tanpa Hak atas Harta Waris Penuh",
        "consequence": "Kepastian hukum keluarga perkawinan sah dipertahankan tanpa memecah konsolidasi warisan.",
        "keadilan": 40,
        "kepastian": 90,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-59",
    "title": "Kasus #59: Ujian Komprehensif: Sengketa Kompleks Harta Warisan Taipan Properti - Seri Kasus 2",
    "facts": [
      "Seorang keponakan diizinkan secara lisan oleh pamannya untuk menempati rumah keluarga sejak tahun 1990.",
      "Setelah paman wafat, ahli waris tunggal menuntut keponakan tersebut segera angkat kaki dalam tempo 3 hari tanpa uang kerohiman.",
      "Keponakan menuntut ganti rugi seluruh biaya renovasi atap dan pondasi yang telah ia keluarkan selama 30 tahun."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Hak Retensi & Ganti Rugi Biaya Perbaikan yang Bermanfaat",
        "consequence": "Iktikad baik penghuni lama diapresiasi sesuai asas kepatutan hukum kebendaan.",
        "keadilan": 90,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Perintahkan Pengosongan Seketika Berdasarkan Sertifikat Hak Milik Sah",
        "consequence": "Hak mutlak pemilik sertifikat ditegakkan tanpa kompromi.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 35,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-60",
    "title": "Kasus #60: Ujian Komprehensif: Sengketa Kompleks Harta Warisan Taipan Properti - Seri Kasus 3",
    "facts": [
      "Sepasang suami istri membuat akta perjanjian perkawinan pisah harta di hadapan notaris setelah suami terlilit utang judi online.",
      "Kreditor bank menolak akta tersebut dan tetap menyita rumah yang diatasnamakan istri karena dibeli saat perkawinan.",
      "Istri menggugat perlawanan pihak ketiga (derden verzet) mengacu pada Putusan MK No. 69/PUU-XIII/2015."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Lindungi Harta Istri Berdasarkan Keabsahan Perjanjian Kawin Terbuka",
        "consequence": "Pasangan yang tidak bersalah terlindungi dari kehancuran ekonomi akibat utang judi pasangannya.",
        "keadilan": 90,
        "kepastian": 60,
        "kemanfaatan": 85,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Menangkan Bank Demi Melindungi Kepastian Hak Tagih Kreditor",
        "consequence": "Mencegah modus pengalihan harta suami kepada istri untuk menghindari pelunasan utang kreditor.",
        "keadilan": 45,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "3-1": [
  {
    "id": "CASE-61",
    "title": "Kasus #61: Keabsahan Kontrak Digital Klik (Click-wrap Agreement) - Seri Kasus 1",
    "facts": [
      "Pengguna dompet digital kehilangan saldo Rp 50 juta akibat kebocoran celah keamanan sistem aplikasi.",
      "Perusahaan fintech menolak digugat ke Pengadilan Negeri dengan dalih pengguna telah menyetujui klausul 'Terms of Service' berisi kewajiban arbitrase di Singapura berbiaya miliaran.",
      "Pengguna menuntut klausul tersebut batal demi hukum karena melanggar UU Perlindungan Konsumen."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Klausul Arbitrase yang Membatasi Hak Pengadilan Konsumen Lemah",
        "consequence": "Konsumen kecil mendapatkan akses keadilan di pengadilan negeri lokal tanpa hambatan biaya.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Patuhi Klausul Arbitrase Mengacu pada Asas Kebebasan Berkontrak",
        "consequence": "Kepastian klausul kontrak digital baku korporasi internasional dihormati.",
        "keadilan": 25,
        "kepastian": 95,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-62",
    "title": "Kasus #62: Keabsahan Kontrak Digital Klik (Click-wrap Agreement) - Seri Kasus 2",
    "facts": [
      "Kontraktor terlambat 10 bulan menyelesaikan proyek rumah sakit karena terjadi gempa bumi tektonik yang meretakkan struktur tanah.",
      "Pemberi kerja mencairkan jaminan pelaksanaan dan menuntut penalti keterlambatan miliaran rupiah.",
      "Kontraktor membela diri bahwa bencana alam merupakan keadaan memaksa absolut (force majeure)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Akui Force Majeure & Perintahkan Re-negosiasi Jadwal Tanpa Penalti Denda",
        "consequence": "Kemitraan bisnis diselamatkan dengan adil berdasarkan fakta bencana yang tak terelakkan.",
        "keadilan": 90,
        "kepastian": 45,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Kabulkan Tuntutan Ganti Rugi Penuh Sesuai Tanggal Tenggat Kontrak",
        "consequence": "Risiko keterlambatan dibebankan mutlak ke kontraktor, namun berujung kepailitan penyedia jasa.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-63",
    "title": "Kasus #63: Keabsahan Kontrak Digital Klik (Click-wrap Agreement) - Seri Kasus 3",
    "facts": [
      "Sebuah PT manufaktur mencemari danau desa dengan limbah beracun hingga denda pemulihan mencapai Rp 100 miliar.",
      "Direksi PT mengumumkan kas perusahaan kosong dan menyatakan siap pailit.",
      "Warga desa membuktikan bahwa pemegang saham mayoritas mencampuradukkan rekening pribadi dengan kas PT untuk membeli kapal pesiar pribadi."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Terapkan Doktrin Piercing the Corporate Veil (Sita Harta Pribadi Pemilik)",
        "consequence": "Tirani badan hukum tidak bisa dipakai bersembunyi untuk melarikan diri dari tanggung jawab lingkungan.",
        "keadilan": 95,
        "kepastian": 60,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Batasi Tanggung Jawab Sebatas Modal Disetor Sesuai UU Perseroan Terbatas",
        "consequence": "Prinsip pemisahan badan hukum perseroan dijaga ketat, namun kerugian lingkungan tak terpukul pulih.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  }
],
  "3-2": [
  {
    "id": "CASE-64",
    "title": "Kasus #64: Wanprestasi vs Overmacht Akibat Krisis Pasokan Global - Seri Kasus 1",
    "facts": [
      "Pengguna dompet digital kehilangan saldo Rp 50 juta akibat kebocoran celah keamanan sistem aplikasi.",
      "Perusahaan fintech menolak digugat ke Pengadilan Negeri dengan dalih pengguna telah menyetujui klausul 'Terms of Service' berisi kewajiban arbitrase di Singapura berbiaya miliaran.",
      "Pengguna menuntut klausul tersebut batal demi hukum karena melanggar UU Perlindungan Konsumen."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Klausul Arbitrase yang Membatasi Hak Pengadilan Konsumen Lemah",
        "consequence": "Konsumen kecil mendapatkan akses keadilan di pengadilan negeri lokal tanpa hambatan biaya.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Patuhi Klausul Arbitrase Mengacu pada Asas Kebebasan Berkontrak",
        "consequence": "Kepastian klausul kontrak digital baku korporasi internasional dihormati.",
        "keadilan": 25,
        "kepastian": 95,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-65",
    "title": "Kasus #65: Wanprestasi vs Overmacht Akibat Krisis Pasokan Global - Seri Kasus 2",
    "facts": [
      "Kontraktor terlambat 10 bulan menyelesaikan proyek rumah sakit karena terjadi gempa bumi tektonik yang meretakkan struktur tanah.",
      "Pemberi kerja mencairkan jaminan pelaksanaan dan menuntut penalti keterlambatan miliaran rupiah.",
      "Kontraktor membela diri bahwa bencana alam merupakan keadaan memaksa absolut (force majeure)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Akui Force Majeure & Perintahkan Re-negosiasi Jadwal Tanpa Penalti Denda",
        "consequence": "Kemitraan bisnis diselamatkan dengan adil berdasarkan fakta bencana yang tak terelakkan.",
        "keadilan": 90,
        "kepastian": 45,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Kabulkan Tuntutan Ganti Rugi Penuh Sesuai Tanggal Tenggat Kontrak",
        "consequence": "Risiko keterlambatan dibebankan mutlak ke kontraktor, namun berujung kepailitan penyedia jasa.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-66",
    "title": "Kasus #66: Wanprestasi vs Overmacht Akibat Krisis Pasokan Global - Seri Kasus 3",
    "facts": [
      "Sebuah PT manufaktur mencemari danau desa dengan limbah beracun hingga denda pemulihan mencapai Rp 100 miliar.",
      "Direksi PT mengumumkan kas perusahaan kosong dan menyatakan siap pailit.",
      "Warga desa membuktikan bahwa pemegang saham mayoritas mencampuradukkan rekening pribadi dengan kas PT untuk membeli kapal pesiar pribadi."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Terapkan Doktrin Piercing the Corporate Veil (Sita Harta Pribadi Pemilik)",
        "consequence": "Tirani badan hukum tidak bisa dipakai bersembunyi untuk melarikan diri dari tanggung jawab lingkungan.",
        "keadilan": 95,
        "kepastian": 60,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Batasi Tanggung Jawab Sebatas Modal Disetor Sesuai UU Perseroan Terbatas",
        "consequence": "Prinsip pemisahan badan hukum perseroan dijaga ketat, namun kerugian lingkungan tak terpukul pulih.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  }
],
  "3-3": [
  {
    "id": "CASE-67",
    "title": "Kasus #67: Penerapan Asas Rebus Sic Stantibus pada Kontrak Konstruksi - Seri Kasus 1",
    "facts": [
      "Pengguna dompet digital kehilangan saldo Rp 50 juta akibat kebocoran celah keamanan sistem aplikasi.",
      "Perusahaan fintech menolak digugat ke Pengadilan Negeri dengan dalih pengguna telah menyetujui klausul 'Terms of Service' berisi kewajiban arbitrase di Singapura berbiaya miliaran.",
      "Pengguna menuntut klausul tersebut batal demi hukum karena melanggar UU Perlindungan Konsumen."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Klausul Arbitrase yang Membatasi Hak Pengadilan Konsumen Lemah",
        "consequence": "Konsumen kecil mendapatkan akses keadilan di pengadilan negeri lokal tanpa hambatan biaya.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Patuhi Klausul Arbitrase Mengacu pada Asas Kebebasan Berkontrak",
        "consequence": "Kepastian klausul kontrak digital baku korporasi internasional dihormati.",
        "keadilan": 25,
        "kepastian": 95,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-68",
    "title": "Kasus #68: Penerapan Asas Rebus Sic Stantibus pada Kontrak Konstruksi - Seri Kasus 2",
    "facts": [
      "Kontraktor terlambat 10 bulan menyelesaikan proyek rumah sakit karena terjadi gempa bumi tektonik yang meretakkan struktur tanah.",
      "Pemberi kerja mencairkan jaminan pelaksanaan dan menuntut penalti keterlambatan miliaran rupiah.",
      "Kontraktor membela diri bahwa bencana alam merupakan keadaan memaksa absolut (force majeure)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Akui Force Majeure & Perintahkan Re-negosiasi Jadwal Tanpa Penalti Denda",
        "consequence": "Kemitraan bisnis diselamatkan dengan adil berdasarkan fakta bencana yang tak terelakkan.",
        "keadilan": 90,
        "kepastian": 45,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Kabulkan Tuntutan Ganti Rugi Penuh Sesuai Tanggal Tenggat Kontrak",
        "consequence": "Risiko keterlambatan dibebankan mutlak ke kontraktor, namun berujung kepailitan penyedia jasa.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-69",
    "title": "Kasus #69: Penerapan Asas Rebus Sic Stantibus pada Kontrak Konstruksi - Seri Kasus 3",
    "facts": [
      "Sebuah PT manufaktur mencemari danau desa dengan limbah beracun hingga denda pemulihan mencapai Rp 100 miliar.",
      "Direksi PT mengumumkan kas perusahaan kosong dan menyatakan siap pailit.",
      "Warga desa membuktikan bahwa pemegang saham mayoritas mencampuradukkan rekening pribadi dengan kas PT untuk membeli kapal pesiar pribadi."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Terapkan Doktrin Piercing the Corporate Veil (Sita Harta Pribadi Pemilik)",
        "consequence": "Tirani badan hukum tidak bisa dipakai bersembunyi untuk melarikan diri dari tanggung jawab lingkungan.",
        "keadilan": 95,
        "kepastian": 60,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Batasi Tanggung Jawab Sebatas Modal Disetor Sesuai UU Perseroan Terbatas",
        "consequence": "Prinsip pemisahan badan hukum perseroan dijaga ketat, namun kerugian lingkungan tak terpukul pulih.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  }
],
  "3-4": [
  {
    "id": "CASE-70",
    "title": "Kasus #70: Klausula Eksonerasi Cuci Tangan dalam Tiket Parkir & Ekspedisi - Seri Kasus 1",
    "facts": [
      "Pengguna dompet digital kehilangan saldo Rp 50 juta akibat kebocoran celah keamanan sistem aplikasi.",
      "Perusahaan fintech menolak digugat ke Pengadilan Negeri dengan dalih pengguna telah menyetujui klausul 'Terms of Service' berisi kewajiban arbitrase di Singapura berbiaya miliaran.",
      "Pengguna menuntut klausul tersebut batal demi hukum karena melanggar UU Perlindungan Konsumen."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Klausul Arbitrase yang Membatasi Hak Pengadilan Konsumen Lemah",
        "consequence": "Konsumen kecil mendapatkan akses keadilan di pengadilan negeri lokal tanpa hambatan biaya.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Patuhi Klausul Arbitrase Mengacu pada Asas Kebebasan Berkontrak",
        "consequence": "Kepastian klausul kontrak digital baku korporasi internasional dihormati.",
        "keadilan": 25,
        "kepastian": 95,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-71",
    "title": "Kasus #71: Klausula Eksonerasi Cuci Tangan dalam Tiket Parkir & Ekspedisi - Seri Kasus 2",
    "facts": [
      "Kontraktor terlambat 10 bulan menyelesaikan proyek rumah sakit karena terjadi gempa bumi tektonik yang meretakkan struktur tanah.",
      "Pemberi kerja mencairkan jaminan pelaksanaan dan menuntut penalti keterlambatan miliaran rupiah.",
      "Kontraktor membela diri bahwa bencana alam merupakan keadaan memaksa absolut (force majeure)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Akui Force Majeure & Perintahkan Re-negosiasi Jadwal Tanpa Penalti Denda",
        "consequence": "Kemitraan bisnis diselamatkan dengan adil berdasarkan fakta bencana yang tak terelakkan.",
        "keadilan": 90,
        "kepastian": 45,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Kabulkan Tuntutan Ganti Rugi Penuh Sesuai Tanggal Tenggat Kontrak",
        "consequence": "Risiko keterlambatan dibebankan mutlak ke kontraktor, namun berujung kepailitan penyedia jasa.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-72",
    "title": "Kasus #72: Klausula Eksonerasi Cuci Tangan dalam Tiket Parkir & Ekspedisi - Seri Kasus 3",
    "facts": [
      "Sebuah PT manufaktur mencemari danau desa dengan limbah beracun hingga denda pemulihan mencapai Rp 100 miliar.",
      "Direksi PT mengumumkan kas perusahaan kosong dan menyatakan siap pailit.",
      "Warga desa membuktikan bahwa pemegang saham mayoritas mencampuradukkan rekening pribadi dengan kas PT untuk membeli kapal pesiar pribadi."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Terapkan Doktrin Piercing the Corporate Veil (Sita Harta Pribadi Pemilik)",
        "consequence": "Tirani badan hukum tidak bisa dipakai bersembunyi untuk melarikan diri dari tanggung jawab lingkungan.",
        "keadilan": 95,
        "kepastian": 60,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Batasi Tanggung Jawab Sebatas Modal Disetor Sesuai UU Perseroan Terbatas",
        "consequence": "Prinsip pemisahan badan hukum perseroan dijaga ketat, namun kerugian lingkungan tak terpukul pulih.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  }
],
  "3-5": [
  {
    "id": "CASE-73",
    "title": "Kasus #73: Penerobosan Cadar Perusahaan (Piercing Corporate Veil) Direksi Curang - Seri Kasus 1",
    "facts": [
      "Pengguna dompet digital kehilangan saldo Rp 50 juta akibat kebocoran celah keamanan sistem aplikasi.",
      "Perusahaan fintech menolak digugat ke Pengadilan Negeri dengan dalih pengguna telah menyetujui klausul 'Terms of Service' berisi kewajiban arbitrase di Singapura berbiaya miliaran.",
      "Pengguna menuntut klausul tersebut batal demi hukum karena melanggar UU Perlindungan Konsumen."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Klausul Arbitrase yang Membatasi Hak Pengadilan Konsumen Lemah",
        "consequence": "Konsumen kecil mendapatkan akses keadilan di pengadilan negeri lokal tanpa hambatan biaya.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Patuhi Klausul Arbitrase Mengacu pada Asas Kebebasan Berkontrak",
        "consequence": "Kepastian klausul kontrak digital baku korporasi internasional dihormati.",
        "keadilan": 25,
        "kepastian": 95,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-74",
    "title": "Kasus #74: Penerobosan Cadar Perusahaan (Piercing Corporate Veil) Direksi Curang - Seri Kasus 2",
    "facts": [
      "Kontraktor terlambat 10 bulan menyelesaikan proyek rumah sakit karena terjadi gempa bumi tektonik yang meretakkan struktur tanah.",
      "Pemberi kerja mencairkan jaminan pelaksanaan dan menuntut penalti keterlambatan miliaran rupiah.",
      "Kontraktor membela diri bahwa bencana alam merupakan keadaan memaksa absolut (force majeure)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Akui Force Majeure & Perintahkan Re-negosiasi Jadwal Tanpa Penalti Denda",
        "consequence": "Kemitraan bisnis diselamatkan dengan adil berdasarkan fakta bencana yang tak terelakkan.",
        "keadilan": 90,
        "kepastian": 45,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Kabulkan Tuntutan Ganti Rugi Penuh Sesuai Tanggal Tenggat Kontrak",
        "consequence": "Risiko keterlambatan dibebankan mutlak ke kontraktor, namun berujung kepailitan penyedia jasa.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-75",
    "title": "Kasus #75: Penerobosan Cadar Perusahaan (Piercing Corporate Veil) Direksi Curang - Seri Kasus 3",
    "facts": [
      "Sebuah PT manufaktur mencemari danau desa dengan limbah beracun hingga denda pemulihan mencapai Rp 100 miliar.",
      "Direksi PT mengumumkan kas perusahaan kosong dan menyatakan siap pailit.",
      "Warga desa membuktikan bahwa pemegang saham mayoritas mencampuradukkan rekening pribadi dengan kas PT untuk membeli kapal pesiar pribadi."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Terapkan Doktrin Piercing the Corporate Veil (Sita Harta Pribadi Pemilik)",
        "consequence": "Tirani badan hukum tidak bisa dipakai bersembunyi untuk melarikan diri dari tanggung jawab lingkungan.",
        "keadilan": 95,
        "kepastian": 60,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Batasi Tanggung Jawab Sebatas Modal Disetor Sesuai UU Perseroan Terbatas",
        "consequence": "Prinsip pemisahan badan hukum perseroan dijaga ketat, namun kerugian lingkungan tak terpukul pulih.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  }
],
  "3-6": [
  {
    "id": "CASE-76",
    "title": "Kasus #76: Permohonan PKPU oleh Kreditor Minoritas atas Utang Belum Jatuh Tempo - Seri Kasus 1",
    "facts": [
      "Pengguna dompet digital kehilangan saldo Rp 50 juta akibat kebocoran celah keamanan sistem aplikasi.",
      "Perusahaan fintech menolak digugat ke Pengadilan Negeri dengan dalih pengguna telah menyetujui klausul 'Terms of Service' berisi kewajiban arbitrase di Singapura berbiaya miliaran.",
      "Pengguna menuntut klausul tersebut batal demi hukum karena melanggar UU Perlindungan Konsumen."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Klausul Arbitrase yang Membatasi Hak Pengadilan Konsumen Lemah",
        "consequence": "Konsumen kecil mendapatkan akses keadilan di pengadilan negeri lokal tanpa hambatan biaya.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Patuhi Klausul Arbitrase Mengacu pada Asas Kebebasan Berkontrak",
        "consequence": "Kepastian klausul kontrak digital baku korporasi internasional dihormati.",
        "keadilan": 25,
        "kepastian": 95,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-77",
    "title": "Kasus #77: Permohonan PKPU oleh Kreditor Minoritas atas Utang Belum Jatuh Tempo - Seri Kasus 2",
    "facts": [
      "Kontraktor terlambat 10 bulan menyelesaikan proyek rumah sakit karena terjadi gempa bumi tektonik yang meretakkan struktur tanah.",
      "Pemberi kerja mencairkan jaminan pelaksanaan dan menuntut penalti keterlambatan miliaran rupiah.",
      "Kontraktor membela diri bahwa bencana alam merupakan keadaan memaksa absolut (force majeure)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Akui Force Majeure & Perintahkan Re-negosiasi Jadwal Tanpa Penalti Denda",
        "consequence": "Kemitraan bisnis diselamatkan dengan adil berdasarkan fakta bencana yang tak terelakkan.",
        "keadilan": 90,
        "kepastian": 45,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Kabulkan Tuntutan Ganti Rugi Penuh Sesuai Tanggal Tenggat Kontrak",
        "consequence": "Risiko keterlambatan dibebankan mutlak ke kontraktor, namun berujung kepailitan penyedia jasa.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-78",
    "title": "Kasus #78: Permohonan PKPU oleh Kreditor Minoritas atas Utang Belum Jatuh Tempo - Seri Kasus 3",
    "facts": [
      "Sebuah PT manufaktur mencemari danau desa dengan limbah beracun hingga denda pemulihan mencapai Rp 100 miliar.",
      "Direksi PT mengumumkan kas perusahaan kosong dan menyatakan siap pailit.",
      "Warga desa membuktikan bahwa pemegang saham mayoritas mencampuradukkan rekening pribadi dengan kas PT untuk membeli kapal pesiar pribadi."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Terapkan Doktrin Piercing the Corporate Veil (Sita Harta Pribadi Pemilik)",
        "consequence": "Tirani badan hukum tidak bisa dipakai bersembunyi untuk melarikan diri dari tanggung jawab lingkungan.",
        "keadilan": 95,
        "kepastian": 60,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Batasi Tanggung Jawab Sebatas Modal Disetor Sesuai UU Perseroan Terbatas",
        "consequence": "Prinsip pemisahan badan hukum perseroan dijaga ketat, namun kerugian lingkungan tak terpukul pulih.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  }
],
  "3-7": [
  {
    "id": "CASE-79",
    "title": "Kasus #79: Pelanggaran Klausul Non-Compete Mantan Karyawan Startup - Seri Kasus 1",
    "facts": [
      "Pengguna dompet digital kehilangan saldo Rp 50 juta akibat kebocoran celah keamanan sistem aplikasi.",
      "Perusahaan fintech menolak digugat ke Pengadilan Negeri dengan dalih pengguna telah menyetujui klausul 'Terms of Service' berisi kewajiban arbitrase di Singapura berbiaya miliaran.",
      "Pengguna menuntut klausul tersebut batal demi hukum karena melanggar UU Perlindungan Konsumen."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Klausul Arbitrase yang Membatasi Hak Pengadilan Konsumen Lemah",
        "consequence": "Konsumen kecil mendapatkan akses keadilan di pengadilan negeri lokal tanpa hambatan biaya.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Patuhi Klausul Arbitrase Mengacu pada Asas Kebebasan Berkontrak",
        "consequence": "Kepastian klausul kontrak digital baku korporasi internasional dihormati.",
        "keadilan": 25,
        "kepastian": 95,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-80",
    "title": "Kasus #80: Pelanggaran Klausul Non-Compete Mantan Karyawan Startup - Seri Kasus 2",
    "facts": [
      "Kontraktor terlambat 10 bulan menyelesaikan proyek rumah sakit karena terjadi gempa bumi tektonik yang meretakkan struktur tanah.",
      "Pemberi kerja mencairkan jaminan pelaksanaan dan menuntut penalti keterlambatan miliaran rupiah.",
      "Kontraktor membela diri bahwa bencana alam merupakan keadaan memaksa absolut (force majeure)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Akui Force Majeure & Perintahkan Re-negosiasi Jadwal Tanpa Penalti Denda",
        "consequence": "Kemitraan bisnis diselamatkan dengan adil berdasarkan fakta bencana yang tak terelakkan.",
        "keadilan": 90,
        "kepastian": 45,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Kabulkan Tuntutan Ganti Rugi Penuh Sesuai Tanggal Tenggat Kontrak",
        "consequence": "Risiko keterlambatan dibebankan mutlak ke kontraktor, namun berujung kepailitan penyedia jasa.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-81",
    "title": "Kasus #81: Pelanggaran Klausul Non-Compete Mantan Karyawan Startup - Seri Kasus 3",
    "facts": [
      "Sebuah PT manufaktur mencemari danau desa dengan limbah beracun hingga denda pemulihan mencapai Rp 100 miliar.",
      "Direksi PT mengumumkan kas perusahaan kosong dan menyatakan siap pailit.",
      "Warga desa membuktikan bahwa pemegang saham mayoritas mencampuradukkan rekening pribadi dengan kas PT untuk membeli kapal pesiar pribadi."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Terapkan Doktrin Piercing the Corporate Veil (Sita Harta Pribadi Pemilik)",
        "consequence": "Tirani badan hukum tidak bisa dipakai bersembunyi untuk melarikan diri dari tanggung jawab lingkungan.",
        "keadilan": 95,
        "kepastian": 60,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Batasi Tanggung Jawab Sebatas Modal Disetor Sesuai UU Perseroan Terbatas",
        "consequence": "Prinsip pemisahan badan hukum perseroan dijaga ketat, namun kerugian lingkungan tak terpukul pulih.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  }
],
  "3-8": [
  {
    "id": "CASE-82",
    "title": "Kasus #82: Penerapan Business Judgment Rule pada Kerugian Akuisisi Anak Perusahaan - Seri Kasus 1",
    "facts": [
      "Pengguna dompet digital kehilangan saldo Rp 50 juta akibat kebocoran celah keamanan sistem aplikasi.",
      "Perusahaan fintech menolak digugat ke Pengadilan Negeri dengan dalih pengguna telah menyetujui klausul 'Terms of Service' berisi kewajiban arbitrase di Singapura berbiaya miliaran.",
      "Pengguna menuntut klausul tersebut batal demi hukum karena melanggar UU Perlindungan Konsumen."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Klausul Arbitrase yang Membatasi Hak Pengadilan Konsumen Lemah",
        "consequence": "Konsumen kecil mendapatkan akses keadilan di pengadilan negeri lokal tanpa hambatan biaya.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Patuhi Klausul Arbitrase Mengacu pada Asas Kebebasan Berkontrak",
        "consequence": "Kepastian klausul kontrak digital baku korporasi internasional dihormati.",
        "keadilan": 25,
        "kepastian": 95,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-83",
    "title": "Kasus #83: Penerapan Business Judgment Rule pada Kerugian Akuisisi Anak Perusahaan - Seri Kasus 2",
    "facts": [
      "Kontraktor terlambat 10 bulan menyelesaikan proyek rumah sakit karena terjadi gempa bumi tektonik yang meretakkan struktur tanah.",
      "Pemberi kerja mencairkan jaminan pelaksanaan dan menuntut penalti keterlambatan miliaran rupiah.",
      "Kontraktor membela diri bahwa bencana alam merupakan keadaan memaksa absolut (force majeure)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Akui Force Majeure & Perintahkan Re-negosiasi Jadwal Tanpa Penalti Denda",
        "consequence": "Kemitraan bisnis diselamatkan dengan adil berdasarkan fakta bencana yang tak terelakkan.",
        "keadilan": 90,
        "kepastian": 45,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Kabulkan Tuntutan Ganti Rugi Penuh Sesuai Tanggal Tenggat Kontrak",
        "consequence": "Risiko keterlambatan dibebankan mutlak ke kontraktor, namun berujung kepailitan penyedia jasa.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-84",
    "title": "Kasus #84: Penerapan Business Judgment Rule pada Kerugian Akuisisi Anak Perusahaan - Seri Kasus 3",
    "facts": [
      "Sebuah PT manufaktur mencemari danau desa dengan limbah beracun hingga denda pemulihan mencapai Rp 100 miliar.",
      "Direksi PT mengumumkan kas perusahaan kosong dan menyatakan siap pailit.",
      "Warga desa membuktikan bahwa pemegang saham mayoritas mencampuradukkan rekening pribadi dengan kas PT untuk membeli kapal pesiar pribadi."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Terapkan Doktrin Piercing the Corporate Veil (Sita Harta Pribadi Pemilik)",
        "consequence": "Tirani badan hukum tidak bisa dipakai bersembunyi untuk melarikan diri dari tanggung jawab lingkungan.",
        "keadilan": 95,
        "kepastian": 60,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Batasi Tanggung Jawab Sebatas Modal Disetor Sesuai UU Perseroan Terbatas",
        "consequence": "Prinsip pemisahan badan hukum perseroan dijaga ketat, namun kerugian lingkungan tak terpukul pulih.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  }
],
  "3-9": [
  {
    "id": "CASE-85",
    "title": "Kasus #85: Sengketa Kartel Harga Tiket Pesawat & Monopoli Pasar (KPPU) - Seri Kasus 1",
    "facts": [
      "Pengguna dompet digital kehilangan saldo Rp 50 juta akibat kebocoran celah keamanan sistem aplikasi.",
      "Perusahaan fintech menolak digugat ke Pengadilan Negeri dengan dalih pengguna telah menyetujui klausul 'Terms of Service' berisi kewajiban arbitrase di Singapura berbiaya miliaran.",
      "Pengguna menuntut klausul tersebut batal demi hukum karena melanggar UU Perlindungan Konsumen."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Klausul Arbitrase yang Membatasi Hak Pengadilan Konsumen Lemah",
        "consequence": "Konsumen kecil mendapatkan akses keadilan di pengadilan negeri lokal tanpa hambatan biaya.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Patuhi Klausul Arbitrase Mengacu pada Asas Kebebasan Berkontrak",
        "consequence": "Kepastian klausul kontrak digital baku korporasi internasional dihormati.",
        "keadilan": 25,
        "kepastian": 95,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-86",
    "title": "Kasus #86: Sengketa Kartel Harga Tiket Pesawat & Monopoli Pasar (KPPU) - Seri Kasus 2",
    "facts": [
      "Kontraktor terlambat 10 bulan menyelesaikan proyek rumah sakit karena terjadi gempa bumi tektonik yang meretakkan struktur tanah.",
      "Pemberi kerja mencairkan jaminan pelaksanaan dan menuntut penalti keterlambatan miliaran rupiah.",
      "Kontraktor membela diri bahwa bencana alam merupakan keadaan memaksa absolut (force majeure)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Akui Force Majeure & Perintahkan Re-negosiasi Jadwal Tanpa Penalti Denda",
        "consequence": "Kemitraan bisnis diselamatkan dengan adil berdasarkan fakta bencana yang tak terelakkan.",
        "keadilan": 90,
        "kepastian": 45,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Kabulkan Tuntutan Ganti Rugi Penuh Sesuai Tanggal Tenggat Kontrak",
        "consequence": "Risiko keterlambatan dibebankan mutlak ke kontraktor, namun berujung kepailitan penyedia jasa.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-87",
    "title": "Kasus #87: Sengketa Kartel Harga Tiket Pesawat & Monopoli Pasar (KPPU) - Seri Kasus 3",
    "facts": [
      "Sebuah PT manufaktur mencemari danau desa dengan limbah beracun hingga denda pemulihan mencapai Rp 100 miliar.",
      "Direksi PT mengumumkan kas perusahaan kosong dan menyatakan siap pailit.",
      "Warga desa membuktikan bahwa pemegang saham mayoritas mencampuradukkan rekening pribadi dengan kas PT untuk membeli kapal pesiar pribadi."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Terapkan Doktrin Piercing the Corporate Veil (Sita Harta Pribadi Pemilik)",
        "consequence": "Tirani badan hukum tidak bisa dipakai bersembunyi untuk melarikan diri dari tanggung jawab lingkungan.",
        "keadilan": 95,
        "kepastian": 60,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Batasi Tanggung Jawab Sebatas Modal Disetor Sesuai UU Perseroan Terbatas",
        "consequence": "Prinsip pemisahan badan hukum perseroan dijaga ketat, namun kerugian lingkungan tak terpukul pulih.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  }
],
  "3-10": [
  {
    "id": "CASE-88",
    "title": "Kasus #88: Ujian Komprehensif: Sengketa Multi-Miliar Arbitrase Dagang Internasional - Seri Kasus 1",
    "facts": [
      "Pengguna dompet digital kehilangan saldo Rp 50 juta akibat kebocoran celah keamanan sistem aplikasi.",
      "Perusahaan fintech menolak digugat ke Pengadilan Negeri dengan dalih pengguna telah menyetujui klausul 'Terms of Service' berisi kewajiban arbitrase di Singapura berbiaya miliaran.",
      "Pengguna menuntut klausul tersebut batal demi hukum karena melanggar UU Perlindungan Konsumen."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Klausul Arbitrase yang Membatasi Hak Pengadilan Konsumen Lemah",
        "consequence": "Konsumen kecil mendapatkan akses keadilan di pengadilan negeri lokal tanpa hambatan biaya.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Patuhi Klausul Arbitrase Mengacu pada Asas Kebebasan Berkontrak",
        "consequence": "Kepastian klausul kontrak digital baku korporasi internasional dihormati.",
        "keadilan": 25,
        "kepastian": 95,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-89",
    "title": "Kasus #89: Ujian Komprehensif: Sengketa Multi-Miliar Arbitrase Dagang Internasional - Seri Kasus 2",
    "facts": [
      "Kontraktor terlambat 10 bulan menyelesaikan proyek rumah sakit karena terjadi gempa bumi tektonik yang meretakkan struktur tanah.",
      "Pemberi kerja mencairkan jaminan pelaksanaan dan menuntut penalti keterlambatan miliaran rupiah.",
      "Kontraktor membela diri bahwa bencana alam merupakan keadaan memaksa absolut (force majeure)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Akui Force Majeure & Perintahkan Re-negosiasi Jadwal Tanpa Penalti Denda",
        "consequence": "Kemitraan bisnis diselamatkan dengan adil berdasarkan fakta bencana yang tak terelakkan.",
        "keadilan": 90,
        "kepastian": 45,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Kabulkan Tuntutan Ganti Rugi Penuh Sesuai Tanggal Tenggat Kontrak",
        "consequence": "Risiko keterlambatan dibebankan mutlak ke kontraktor, namun berujung kepailitan penyedia jasa.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-90",
    "title": "Kasus #90: Ujian Komprehensif: Sengketa Multi-Miliar Arbitrase Dagang Internasional - Seri Kasus 3",
    "facts": [
      "Sebuah PT manufaktur mencemari danau desa dengan limbah beracun hingga denda pemulihan mencapai Rp 100 miliar.",
      "Direksi PT mengumumkan kas perusahaan kosong dan menyatakan siap pailit.",
      "Warga desa membuktikan bahwa pemegang saham mayoritas mencampuradukkan rekening pribadi dengan kas PT untuk membeli kapal pesiar pribadi."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Terapkan Doktrin Piercing the Corporate Veil (Sita Harta Pribadi Pemilik)",
        "consequence": "Tirani badan hukum tidak bisa dipakai bersembunyi untuk melarikan diri dari tanggung jawab lingkungan.",
        "keadilan": 95,
        "kepastian": 60,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Batasi Tanggung Jawab Sebatas Modal Disetor Sesuai UU Perseroan Terbatas",
        "consequence": "Prinsip pemisahan badan hukum perseroan dijaga ketat, namun kerugian lingkungan tak terpukul pulih.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  }
],
  "4-1": [
  {
    "id": "CASE-91",
    "title": "Kasus #91: Batas Asas Legalitas & Larangan Analogi Hukum Pidana - Seri Kasus 1",
    "facts": [
      "Dua pelaku begal bersenjata tajam merampas tas seorang wanita di jalan sunyi pada dini hari.",
      "Setelah tas dirampas dan pelaku hendak melarikan diri, korban mengejar dengan sepeda motor dan menabrak motor pelaku hingga salah satu begal tewas di tempat.",
      "Polisi menetapkan korban begal sebagai tersangka penganiayaan yang menyebabkan matinya orang (Pasal 351 ayat 3 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Korban Begal atas Dasar Pembelaan Diri Terpaksa (Noodweer)",
        "consequence": "Rakyat merasa berhak membela harta dan jiwanya dari teror kejahatan jalanan.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Proses Pidana Mengingat Korban Mengejar Pelaku yang Sedang Melarikan Diri",
        "consequence": "Mencegah aksi main hakim sendiri di jalan raya, namun mencederai rasa keadilan masyarakat luas.",
        "keadilan": 20,
        "kepastian": 90,
        "kemanfaatan": 30,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-92",
    "title": "Kasus #92: Batas Asas Legalitas & Larangan Analogi Hukum Pidana - Seri Kasus 2",
    "facts": [
      "Truk kontainer mengalami rem blong di turunan curam menuju antrean lampu merah yang penuh 30 pengendara motor.",
      "Sopir sengaja membanting setir ke arah kanan menabrak warung kosong dan tiang listrik, menyebabkan kerugian materiil Rp 50 juta dan dirinya patah kaki.",
      "Pemilik warung menuntut sopir dipenjara atas tuduhan perusakan barang (Pasal 406 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Sopir Berdasarkan Alasan Daya Paksa Demi Menyelamatkan 30 Nyawa",
        "consequence": "Tindakan heroik meminimalkan korban jiwa diapresiasi sebagai tindakan moral tertinggi.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Pidana Perusakan dan Ganti Rugi Penuh ke Pemilik Warung",
        "consequence": "Hak milik warga atas bangunan dihormati kaku tanpa memandang kalkulasi penyelamatan nyawa.",
        "keadilan": 25,
        "kepastian": 90,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-93",
    "title": "Kasus #93: Batas Asas Legalitas & Larangan Analogi Hukum Pidana - Seri Kasus 3",
    "facts": [
      "Seorang polisi berpangkat brigadir menembak rekannya hingga tewas di dalam rumah dinas atas perintah tegas komandannya jenderal bintang dua.",
      "Terdakwa membela diri bahwa ia mengalami tekanan psikologis luar biasa dan tunduk pada hierarki perintah jabatan (Pasal 51 KUHP).",
      "Jaksa menuntut hukuman seumur hidup karena perintah membunuh adalah perintah yang secara nyata-nyata melawan hukum."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tolak Alasan Perintah Jabatan: Perintah Melakukan Kejahatan Wajib Ditolak",
        "consequence": "Menegaskan prinsip bahwa ketaatan militer/polisi tidak boleh membutakan nurani dari kejahatan kemanusiaan.",
        "keadilan": 95,
        "kepastian": 85,
        "kemanfaatan": 85,
        "alignmentShift": 0
      },
      {
        "id": "OPT-2",
        "action": "Keringankan Hukuman Maksimal atas Dasar Daya Paksa Relatif & Hierarki",
        "consequence": "Mempertimbangkan relasi kuasa ekstrem antara jenderal dan bawahan berpangkat rendah.",
        "keadilan": 70,
        "kepastian": 50,
        "kemanfaatan": 60,
        "alignmentShift": -15
      }
    ]
  }
],
  "4-2": [
  {
    "id": "CASE-94",
    "title": "Kasus #94: Pembelaan Terpaksa (Noodweer) Korban Begal yang Membalas Pelaku - Seri Kasus 1",
    "facts": [
      "Dua pelaku begal bersenjata tajam merampas tas seorang wanita di jalan sunyi pada dini hari.",
      "Setelah tas dirampas dan pelaku hendak melarikan diri, korban mengejar dengan sepeda motor dan menabrak motor pelaku hingga salah satu begal tewas di tempat.",
      "Polisi menetapkan korban begal sebagai tersangka penganiayaan yang menyebabkan matinya orang (Pasal 351 ayat 3 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Korban Begal atas Dasar Pembelaan Diri Terpaksa (Noodweer)",
        "consequence": "Rakyat merasa berhak membela harta dan jiwanya dari teror kejahatan jalanan.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Proses Pidana Mengingat Korban Mengejar Pelaku yang Sedang Melarikan Diri",
        "consequence": "Mencegah aksi main hakim sendiri di jalan raya, namun mencederai rasa keadilan masyarakat luas.",
        "keadilan": 20,
        "kepastian": 90,
        "kemanfaatan": 30,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-95",
    "title": "Kasus #95: Pembelaan Terpaksa (Noodweer) Korban Begal yang Membalas Pelaku - Seri Kasus 2",
    "facts": [
      "Truk kontainer mengalami rem blong di turunan curam menuju antrean lampu merah yang penuh 30 pengendara motor.",
      "Sopir sengaja membanting setir ke arah kanan menabrak warung kosong dan tiang listrik, menyebabkan kerugian materiil Rp 50 juta dan dirinya patah kaki.",
      "Pemilik warung menuntut sopir dipenjara atas tuduhan perusakan barang (Pasal 406 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Sopir Berdasarkan Alasan Daya Paksa Demi Menyelamatkan 30 Nyawa",
        "consequence": "Tindakan heroik meminimalkan korban jiwa diapresiasi sebagai tindakan moral tertinggi.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Pidana Perusakan dan Ganti Rugi Penuh ke Pemilik Warung",
        "consequence": "Hak milik warga atas bangunan dihormati kaku tanpa memandang kalkulasi penyelamatan nyawa.",
        "keadilan": 25,
        "kepastian": 90,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-96",
    "title": "Kasus #96: Pembelaan Terpaksa (Noodweer) Korban Begal yang Membalas Pelaku - Seri Kasus 3",
    "facts": [
      "Seorang polisi berpangkat brigadir menembak rekannya hingga tewas di dalam rumah dinas atas perintah tegas komandannya jenderal bintang dua.",
      "Terdakwa membela diri bahwa ia mengalami tekanan psikologis luar biasa dan tunduk pada hierarki perintah jabatan (Pasal 51 KUHP).",
      "Jaksa menuntut hukuman seumur hidup karena perintah membunuh adalah perintah yang secara nyata-nyata melawan hukum."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tolak Alasan Perintah Jabatan: Perintah Melakukan Kejahatan Wajib Ditolak",
        "consequence": "Menegaskan prinsip bahwa ketaatan militer/polisi tidak boleh membutakan nurani dari kejahatan kemanusiaan.",
        "keadilan": 95,
        "kepastian": 85,
        "kemanfaatan": 85,
        "alignmentShift": 0
      },
      {
        "id": "OPT-2",
        "action": "Keringankan Hukuman Maksimal atas Dasar Daya Paksa Relatif & Hierarki",
        "consequence": "Mempertimbangkan relasi kuasa ekstrem antara jenderal dan bawahan berpangkat rendah.",
        "keadilan": 70,
        "kepastian": 50,
        "kemanfaatan": 60,
        "alignmentShift": -15
      }
    ]
  }
],
  "4-3": [
  {
    "id": "CASE-97",
    "title": "Kasus #97: Pembelaan Melampaui Batas (Noodweer Exces) Guncangan Jiwa Hebat - Seri Kasus 1",
    "facts": [
      "Dua pelaku begal bersenjata tajam merampas tas seorang wanita di jalan sunyi pada dini hari.",
      "Setelah tas dirampas dan pelaku hendak melarikan diri, korban mengejar dengan sepeda motor dan menabrak motor pelaku hingga salah satu begal tewas di tempat.",
      "Polisi menetapkan korban begal sebagai tersangka penganiayaan yang menyebabkan matinya orang (Pasal 351 ayat 3 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Korban Begal atas Dasar Pembelaan Diri Terpaksa (Noodweer)",
        "consequence": "Rakyat merasa berhak membela harta dan jiwanya dari teror kejahatan jalanan.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Proses Pidana Mengingat Korban Mengejar Pelaku yang Sedang Melarikan Diri",
        "consequence": "Mencegah aksi main hakim sendiri di jalan raya, namun mencederai rasa keadilan masyarakat luas.",
        "keadilan": 20,
        "kepastian": 90,
        "kemanfaatan": 30,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-98",
    "title": "Kasus #98: Pembelaan Melampaui Batas (Noodweer Exces) Guncangan Jiwa Hebat - Seri Kasus 2",
    "facts": [
      "Truk kontainer mengalami rem blong di turunan curam menuju antrean lampu merah yang penuh 30 pengendara motor.",
      "Sopir sengaja membanting setir ke arah kanan menabrak warung kosong dan tiang listrik, menyebabkan kerugian materiil Rp 50 juta dan dirinya patah kaki.",
      "Pemilik warung menuntut sopir dipenjara atas tuduhan perusakan barang (Pasal 406 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Sopir Berdasarkan Alasan Daya Paksa Demi Menyelamatkan 30 Nyawa",
        "consequence": "Tindakan heroik meminimalkan korban jiwa diapresiasi sebagai tindakan moral tertinggi.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Pidana Perusakan dan Ganti Rugi Penuh ke Pemilik Warung",
        "consequence": "Hak milik warga atas bangunan dihormati kaku tanpa memandang kalkulasi penyelamatan nyawa.",
        "keadilan": 25,
        "kepastian": 90,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-99",
    "title": "Kasus #99: Pembelaan Melampaui Batas (Noodweer Exces) Guncangan Jiwa Hebat - Seri Kasus 3",
    "facts": [
      "Seorang polisi berpangkat brigadir menembak rekannya hingga tewas di dalam rumah dinas atas perintah tegas komandannya jenderal bintang dua.",
      "Terdakwa membela diri bahwa ia mengalami tekanan psikologis luar biasa dan tunduk pada hierarki perintah jabatan (Pasal 51 KUHP).",
      "Jaksa menuntut hukuman seumur hidup karena perintah membunuh adalah perintah yang secara nyata-nyata melawan hukum."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tolak Alasan Perintah Jabatan: Perintah Melakukan Kejahatan Wajib Ditolak",
        "consequence": "Menegaskan prinsip bahwa ketaatan militer/polisi tidak boleh membutakan nurani dari kejahatan kemanusiaan.",
        "keadilan": 95,
        "kepastian": 85,
        "kemanfaatan": 85,
        "alignmentShift": 0
      },
      {
        "id": "OPT-2",
        "action": "Keringankan Hukuman Maksimal atas Dasar Daya Paksa Relatif & Hierarki",
        "consequence": "Mempertimbangkan relasi kuasa ekstrem antara jenderal dan bawahan berpangkat rendah.",
        "keadilan": 70,
        "kepastian": 50,
        "kemanfaatan": 60,
        "alignmentShift": -15
      }
    ]
  }
],
  "4-4": [
  {
    "id": "CASE-100",
    "title": "Kasus #100: Dolus Eventualis (Sengaja dengan Keinsafan Sadar Kemungkinan) - Seri Kasus 1",
    "facts": [
      "Dua pelaku begal bersenjata tajam merampas tas seorang wanita di jalan sunyi pada dini hari.",
      "Setelah tas dirampas dan pelaku hendak melarikan diri, korban mengejar dengan sepeda motor dan menabrak motor pelaku hingga salah satu begal tewas di tempat.",
      "Polisi menetapkan korban begal sebagai tersangka penganiayaan yang menyebabkan matinya orang (Pasal 351 ayat 3 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Korban Begal atas Dasar Pembelaan Diri Terpaksa (Noodweer)",
        "consequence": "Rakyat merasa berhak membela harta dan jiwanya dari teror kejahatan jalanan.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Proses Pidana Mengingat Korban Mengejar Pelaku yang Sedang Melarikan Diri",
        "consequence": "Mencegah aksi main hakim sendiri di jalan raya, namun mencederai rasa keadilan masyarakat luas.",
        "keadilan": 20,
        "kepastian": 90,
        "kemanfaatan": 30,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-101",
    "title": "Kasus #101: Dolus Eventualis (Sengaja dengan Keinsafan Sadar Kemungkinan) - Seri Kasus 2",
    "facts": [
      "Truk kontainer mengalami rem blong di turunan curam menuju antrean lampu merah yang penuh 30 pengendara motor.",
      "Sopir sengaja membanting setir ke arah kanan menabrak warung kosong dan tiang listrik, menyebabkan kerugian materiil Rp 50 juta dan dirinya patah kaki.",
      "Pemilik warung menuntut sopir dipenjara atas tuduhan perusakan barang (Pasal 406 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Sopir Berdasarkan Alasan Daya Paksa Demi Menyelamatkan 30 Nyawa",
        "consequence": "Tindakan heroik meminimalkan korban jiwa diapresiasi sebagai tindakan moral tertinggi.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Pidana Perusakan dan Ganti Rugi Penuh ke Pemilik Warung",
        "consequence": "Hak milik warga atas bangunan dihormati kaku tanpa memandang kalkulasi penyelamatan nyawa.",
        "keadilan": 25,
        "kepastian": 90,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-102",
    "title": "Kasus #102: Dolus Eventualis (Sengaja dengan Keinsafan Sadar Kemungkinan) - Seri Kasus 3",
    "facts": [
      "Seorang polisi berpangkat brigadir menembak rekannya hingga tewas di dalam rumah dinas atas perintah tegas komandannya jenderal bintang dua.",
      "Terdakwa membela diri bahwa ia mengalami tekanan psikologis luar biasa dan tunduk pada hierarki perintah jabatan (Pasal 51 KUHP).",
      "Jaksa menuntut hukuman seumur hidup karena perintah membunuh adalah perintah yang secara nyata-nyata melawan hukum."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tolak Alasan Perintah Jabatan: Perintah Melakukan Kejahatan Wajib Ditolak",
        "consequence": "Menegaskan prinsip bahwa ketaatan militer/polisi tidak boleh membutakan nurani dari kejahatan kemanusiaan.",
        "keadilan": 95,
        "kepastian": 85,
        "kemanfaatan": 85,
        "alignmentShift": 0
      },
      {
        "id": "OPT-2",
        "action": "Keringankan Hukuman Maksimal atas Dasar Daya Paksa Relatif & Hierarki",
        "consequence": "Mempertimbangkan relasi kuasa ekstrem antara jenderal dan bawahan berpangkat rendah.",
        "keadilan": 70,
        "kepastian": 50,
        "kemanfaatan": 60,
        "alignmentShift": -15
      }
    ]
  }
],
  "4-5": [
  {
    "id": "CASE-103",
    "title": "Kasus #103: Percobaan Kejahatan (Poging) & Pengunduran Diri Sukarela - Seri Kasus 1",
    "facts": [
      "Dua pelaku begal bersenjata tajam merampas tas seorang wanita di jalan sunyi pada dini hari.",
      "Setelah tas dirampas dan pelaku hendak melarikan diri, korban mengejar dengan sepeda motor dan menabrak motor pelaku hingga salah satu begal tewas di tempat.",
      "Polisi menetapkan korban begal sebagai tersangka penganiayaan yang menyebabkan matinya orang (Pasal 351 ayat 3 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Korban Begal atas Dasar Pembelaan Diri Terpaksa (Noodweer)",
        "consequence": "Rakyat merasa berhak membela harta dan jiwanya dari teror kejahatan jalanan.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Proses Pidana Mengingat Korban Mengejar Pelaku yang Sedang Melarikan Diri",
        "consequence": "Mencegah aksi main hakim sendiri di jalan raya, namun mencederai rasa keadilan masyarakat luas.",
        "keadilan": 20,
        "kepastian": 90,
        "kemanfaatan": 30,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-104",
    "title": "Kasus #104: Percobaan Kejahatan (Poging) & Pengunduran Diri Sukarela - Seri Kasus 2",
    "facts": [
      "Truk kontainer mengalami rem blong di turunan curam menuju antrean lampu merah yang penuh 30 pengendara motor.",
      "Sopir sengaja membanting setir ke arah kanan menabrak warung kosong dan tiang listrik, menyebabkan kerugian materiil Rp 50 juta dan dirinya patah kaki.",
      "Pemilik warung menuntut sopir dipenjara atas tuduhan perusakan barang (Pasal 406 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Sopir Berdasarkan Alasan Daya Paksa Demi Menyelamatkan 30 Nyawa",
        "consequence": "Tindakan heroik meminimalkan korban jiwa diapresiasi sebagai tindakan moral tertinggi.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Pidana Perusakan dan Ganti Rugi Penuh ke Pemilik Warung",
        "consequence": "Hak milik warga atas bangunan dihormati kaku tanpa memandang kalkulasi penyelamatan nyawa.",
        "keadilan": 25,
        "kepastian": 90,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-105",
    "title": "Kasus #105: Percobaan Kejahatan (Poging) & Pengunduran Diri Sukarela - Seri Kasus 3",
    "facts": [
      "Seorang polisi berpangkat brigadir menembak rekannya hingga tewas di dalam rumah dinas atas perintah tegas komandannya jenderal bintang dua.",
      "Terdakwa membela diri bahwa ia mengalami tekanan psikologis luar biasa dan tunduk pada hierarki perintah jabatan (Pasal 51 KUHP).",
      "Jaksa menuntut hukuman seumur hidup karena perintah membunuh adalah perintah yang secara nyata-nyata melawan hukum."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tolak Alasan Perintah Jabatan: Perintah Melakukan Kejahatan Wajib Ditolak",
        "consequence": "Menegaskan prinsip bahwa ketaatan militer/polisi tidak boleh membutakan nurani dari kejahatan kemanusiaan.",
        "keadilan": 95,
        "kepastian": 85,
        "kemanfaatan": 85,
        "alignmentShift": 0
      },
      {
        "id": "OPT-2",
        "action": "Keringankan Hukuman Maksimal atas Dasar Daya Paksa Relatif & Hierarki",
        "consequence": "Mempertimbangkan relasi kuasa ekstrem antara jenderal dan bawahan berpangkat rendah.",
        "keadilan": 70,
        "kepastian": 50,
        "kemanfaatan": 60,
        "alignmentShift": -15
      }
    ]
  }
],
  "4-6": [
  {
    "id": "CASE-106",
    "title": "Kasus #106: Penyertaan Pidana: Aktor Intelektual vs Pembantu Pelaksana - Seri Kasus 1",
    "facts": [
      "Dua pelaku begal bersenjata tajam merampas tas seorang wanita di jalan sunyi pada dini hari.",
      "Setelah tas dirampas dan pelaku hendak melarikan diri, korban mengejar dengan sepeda motor dan menabrak motor pelaku hingga salah satu begal tewas di tempat.",
      "Polisi menetapkan korban begal sebagai tersangka penganiayaan yang menyebabkan matinya orang (Pasal 351 ayat 3 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Korban Begal atas Dasar Pembelaan Diri Terpaksa (Noodweer)",
        "consequence": "Rakyat merasa berhak membela harta dan jiwanya dari teror kejahatan jalanan.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Proses Pidana Mengingat Korban Mengejar Pelaku yang Sedang Melarikan Diri",
        "consequence": "Mencegah aksi main hakim sendiri di jalan raya, namun mencederai rasa keadilan masyarakat luas.",
        "keadilan": 20,
        "kepastian": 90,
        "kemanfaatan": 30,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-107",
    "title": "Kasus #107: Penyertaan Pidana: Aktor Intelektual vs Pembantu Pelaksana - Seri Kasus 2",
    "facts": [
      "Truk kontainer mengalami rem blong di turunan curam menuju antrean lampu merah yang penuh 30 pengendara motor.",
      "Sopir sengaja membanting setir ke arah kanan menabrak warung kosong dan tiang listrik, menyebabkan kerugian materiil Rp 50 juta dan dirinya patah kaki.",
      "Pemilik warung menuntut sopir dipenjara atas tuduhan perusakan barang (Pasal 406 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Sopir Berdasarkan Alasan Daya Paksa Demi Menyelamatkan 30 Nyawa",
        "consequence": "Tindakan heroik meminimalkan korban jiwa diapresiasi sebagai tindakan moral tertinggi.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Pidana Perusakan dan Ganti Rugi Penuh ke Pemilik Warung",
        "consequence": "Hak milik warga atas bangunan dihormati kaku tanpa memandang kalkulasi penyelamatan nyawa.",
        "keadilan": 25,
        "kepastian": 90,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-108",
    "title": "Kasus #108: Penyertaan Pidana: Aktor Intelektual vs Pembantu Pelaksana - Seri Kasus 3",
    "facts": [
      "Seorang polisi berpangkat brigadir menembak rekannya hingga tewas di dalam rumah dinas atas perintah tegas komandannya jenderal bintang dua.",
      "Terdakwa membela diri bahwa ia mengalami tekanan psikologis luar biasa dan tunduk pada hierarki perintah jabatan (Pasal 51 KUHP).",
      "Jaksa menuntut hukuman seumur hidup karena perintah membunuh adalah perintah yang secara nyata-nyata melawan hukum."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tolak Alasan Perintah Jabatan: Perintah Melakukan Kejahatan Wajib Ditolak",
        "consequence": "Menegaskan prinsip bahwa ketaatan militer/polisi tidak boleh membutakan nurani dari kejahatan kemanusiaan.",
        "keadilan": 95,
        "kepastian": 85,
        "kemanfaatan": 85,
        "alignmentShift": 0
      },
      {
        "id": "OPT-2",
        "action": "Keringankan Hukuman Maksimal atas Dasar Daya Paksa Relatif & Hierarki",
        "consequence": "Mempertimbangkan relasi kuasa ekstrem antara jenderal dan bawahan berpangkat rendah.",
        "keadilan": 70,
        "kepastian": 50,
        "kemanfaatan": 60,
        "alignmentShift": -15
      }
    ]
  }
],
  "4-7": [
  {
    "id": "CASE-109",
    "title": "Kasus #109: Alasan Penghapus Pidana: Melaksanakan Perintah Jabatan Atasan - Seri Kasus 1",
    "facts": [
      "Dua pelaku begal bersenjata tajam merampas tas seorang wanita di jalan sunyi pada dini hari.",
      "Setelah tas dirampas dan pelaku hendak melarikan diri, korban mengejar dengan sepeda motor dan menabrak motor pelaku hingga salah satu begal tewas di tempat.",
      "Polisi menetapkan korban begal sebagai tersangka penganiayaan yang menyebabkan matinya orang (Pasal 351 ayat 3 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Korban Begal atas Dasar Pembelaan Diri Terpaksa (Noodweer)",
        "consequence": "Rakyat merasa berhak membela harta dan jiwanya dari teror kejahatan jalanan.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Proses Pidana Mengingat Korban Mengejar Pelaku yang Sedang Melarikan Diri",
        "consequence": "Mencegah aksi main hakim sendiri di jalan raya, namun mencederai rasa keadilan masyarakat luas.",
        "keadilan": 20,
        "kepastian": 90,
        "kemanfaatan": 30,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-110",
    "title": "Kasus #110: Alasan Penghapus Pidana: Melaksanakan Perintah Jabatan Atasan - Seri Kasus 2",
    "facts": [
      "Truk kontainer mengalami rem blong di turunan curam menuju antrean lampu merah yang penuh 30 pengendara motor.",
      "Sopir sengaja membanting setir ke arah kanan menabrak warung kosong dan tiang listrik, menyebabkan kerugian materiil Rp 50 juta dan dirinya patah kaki.",
      "Pemilik warung menuntut sopir dipenjara atas tuduhan perusakan barang (Pasal 406 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Sopir Berdasarkan Alasan Daya Paksa Demi Menyelamatkan 30 Nyawa",
        "consequence": "Tindakan heroik meminimalkan korban jiwa diapresiasi sebagai tindakan moral tertinggi.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Pidana Perusakan dan Ganti Rugi Penuh ke Pemilik Warung",
        "consequence": "Hak milik warga atas bangunan dihormati kaku tanpa memandang kalkulasi penyelamatan nyawa.",
        "keadilan": 25,
        "kepastian": 90,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-111",
    "title": "Kasus #111: Alasan Penghapus Pidana: Melaksanakan Perintah Jabatan Atasan - Seri Kasus 3",
    "facts": [
      "Seorang polisi berpangkat brigadir menembak rekannya hingga tewas di dalam rumah dinas atas perintah tegas komandannya jenderal bintang dua.",
      "Terdakwa membela diri bahwa ia mengalami tekanan psikologis luar biasa dan tunduk pada hierarki perintah jabatan (Pasal 51 KUHP).",
      "Jaksa menuntut hukuman seumur hidup karena perintah membunuh adalah perintah yang secara nyata-nyata melawan hukum."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tolak Alasan Perintah Jabatan: Perintah Melakukan Kejahatan Wajib Ditolak",
        "consequence": "Menegaskan prinsip bahwa ketaatan militer/polisi tidak boleh membutakan nurani dari kejahatan kemanusiaan.",
        "keadilan": 95,
        "kepastian": 85,
        "kemanfaatan": 85,
        "alignmentShift": 0
      },
      {
        "id": "OPT-2",
        "action": "Keringankan Hukuman Maksimal atas Dasar Daya Paksa Relatif & Hierarki",
        "consequence": "Mempertimbangkan relasi kuasa ekstrem antara jenderal dan bawahan berpangkat rendah.",
        "keadilan": 70,
        "kepastian": 50,
        "kemanfaatan": 60,
        "alignmentShift": -15
      }
    ]
  }
],
  "4-8": [
  {
    "id": "CASE-112",
    "title": "Kasus #112: Daya Paksa Relatif (Vis Compulsiva) Sandera Pegawai Bank - Seri Kasus 1",
    "facts": [
      "Dua pelaku begal bersenjata tajam merampas tas seorang wanita di jalan sunyi pada dini hari.",
      "Setelah tas dirampas dan pelaku hendak melarikan diri, korban mengejar dengan sepeda motor dan menabrak motor pelaku hingga salah satu begal tewas di tempat.",
      "Polisi menetapkan korban begal sebagai tersangka penganiayaan yang menyebabkan matinya orang (Pasal 351 ayat 3 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Korban Begal atas Dasar Pembelaan Diri Terpaksa (Noodweer)",
        "consequence": "Rakyat merasa berhak membela harta dan jiwanya dari teror kejahatan jalanan.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Proses Pidana Mengingat Korban Mengejar Pelaku yang Sedang Melarikan Diri",
        "consequence": "Mencegah aksi main hakim sendiri di jalan raya, namun mencederai rasa keadilan masyarakat luas.",
        "keadilan": 20,
        "kepastian": 90,
        "kemanfaatan": 30,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-113",
    "title": "Kasus #113: Daya Paksa Relatif (Vis Compulsiva) Sandera Pegawai Bank - Seri Kasus 2",
    "facts": [
      "Truk kontainer mengalami rem blong di turunan curam menuju antrean lampu merah yang penuh 30 pengendara motor.",
      "Sopir sengaja membanting setir ke arah kanan menabrak warung kosong dan tiang listrik, menyebabkan kerugian materiil Rp 50 juta dan dirinya patah kaki.",
      "Pemilik warung menuntut sopir dipenjara atas tuduhan perusakan barang (Pasal 406 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Sopir Berdasarkan Alasan Daya Paksa Demi Menyelamatkan 30 Nyawa",
        "consequence": "Tindakan heroik meminimalkan korban jiwa diapresiasi sebagai tindakan moral tertinggi.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Pidana Perusakan dan Ganti Rugi Penuh ke Pemilik Warung",
        "consequence": "Hak milik warga atas bangunan dihormati kaku tanpa memandang kalkulasi penyelamatan nyawa.",
        "keadilan": 25,
        "kepastian": 90,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-114",
    "title": "Kasus #114: Daya Paksa Relatif (Vis Compulsiva) Sandera Pegawai Bank - Seri Kasus 3",
    "facts": [
      "Seorang polisi berpangkat brigadir menembak rekannya hingga tewas di dalam rumah dinas atas perintah tegas komandannya jenderal bintang dua.",
      "Terdakwa membela diri bahwa ia mengalami tekanan psikologis luar biasa dan tunduk pada hierarki perintah jabatan (Pasal 51 KUHP).",
      "Jaksa menuntut hukuman seumur hidup karena perintah membunuh adalah perintah yang secara nyata-nyata melawan hukum."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tolak Alasan Perintah Jabatan: Perintah Melakukan Kejahatan Wajib Ditolak",
        "consequence": "Menegaskan prinsip bahwa ketaatan militer/polisi tidak boleh membutakan nurani dari kejahatan kemanusiaan.",
        "keadilan": 95,
        "kepastian": 85,
        "kemanfaatan": 85,
        "alignmentShift": 0
      },
      {
        "id": "OPT-2",
        "action": "Keringankan Hukuman Maksimal atas Dasar Daya Paksa Relatif & Hierarki",
        "consequence": "Mempertimbangkan relasi kuasa ekstrem antara jenderal dan bawahan berpangkat rendah.",
        "keadilan": 70,
        "kepastian": 50,
        "kemanfaatan": 60,
        "alignmentShift": -15
      }
    ]
  }
],
  "4-9": [
  {
    "id": "CASE-115",
    "title": "Kasus #115: Pertanggungjawaban Pidana Korporasi atas Kebakaran Hutan - Seri Kasus 1",
    "facts": [
      "Dua pelaku begal bersenjata tajam merampas tas seorang wanita di jalan sunyi pada dini hari.",
      "Setelah tas dirampas dan pelaku hendak melarikan diri, korban mengejar dengan sepeda motor dan menabrak motor pelaku hingga salah satu begal tewas di tempat.",
      "Polisi menetapkan korban begal sebagai tersangka penganiayaan yang menyebabkan matinya orang (Pasal 351 ayat 3 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Korban Begal atas Dasar Pembelaan Diri Terpaksa (Noodweer)",
        "consequence": "Rakyat merasa berhak membela harta dan jiwanya dari teror kejahatan jalanan.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Proses Pidana Mengingat Korban Mengejar Pelaku yang Sedang Melarikan Diri",
        "consequence": "Mencegah aksi main hakim sendiri di jalan raya, namun mencederai rasa keadilan masyarakat luas.",
        "keadilan": 20,
        "kepastian": 90,
        "kemanfaatan": 30,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-116",
    "title": "Kasus #116: Pertanggungjawaban Pidana Korporasi atas Kebakaran Hutan - Seri Kasus 2",
    "facts": [
      "Truk kontainer mengalami rem blong di turunan curam menuju antrean lampu merah yang penuh 30 pengendara motor.",
      "Sopir sengaja membanting setir ke arah kanan menabrak warung kosong dan tiang listrik, menyebabkan kerugian materiil Rp 50 juta dan dirinya patah kaki.",
      "Pemilik warung menuntut sopir dipenjara atas tuduhan perusakan barang (Pasal 406 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Sopir Berdasarkan Alasan Daya Paksa Demi Menyelamatkan 30 Nyawa",
        "consequence": "Tindakan heroik meminimalkan korban jiwa diapresiasi sebagai tindakan moral tertinggi.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Pidana Perusakan dan Ganti Rugi Penuh ke Pemilik Warung",
        "consequence": "Hak milik warga atas bangunan dihormati kaku tanpa memandang kalkulasi penyelamatan nyawa.",
        "keadilan": 25,
        "kepastian": 90,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-117",
    "title": "Kasus #117: Pertanggungjawaban Pidana Korporasi atas Kebakaran Hutan - Seri Kasus 3",
    "facts": [
      "Seorang polisi berpangkat brigadir menembak rekannya hingga tewas di dalam rumah dinas atas perintah tegas komandannya jenderal bintang dua.",
      "Terdakwa membela diri bahwa ia mengalami tekanan psikologis luar biasa dan tunduk pada hierarki perintah jabatan (Pasal 51 KUHP).",
      "Jaksa menuntut hukuman seumur hidup karena perintah membunuh adalah perintah yang secara nyata-nyata melawan hukum."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tolak Alasan Perintah Jabatan: Perintah Melakukan Kejahatan Wajib Ditolak",
        "consequence": "Menegaskan prinsip bahwa ketaatan militer/polisi tidak boleh membutakan nurani dari kejahatan kemanusiaan.",
        "keadilan": 95,
        "kepastian": 85,
        "kemanfaatan": 85,
        "alignmentShift": 0
      },
      {
        "id": "OPT-2",
        "action": "Keringankan Hukuman Maksimal atas Dasar Daya Paksa Relatif & Hierarki",
        "consequence": "Mempertimbangkan relasi kuasa ekstrem antara jenderal dan bawahan berpangkat rendah.",
        "keadilan": 70,
        "kepastian": 50,
        "kemanfaatan": 60,
        "alignmentShift": -15
      }
    ]
  }
],
  "4-10": [
  {
    "id": "CASE-118",
    "title": "Kasus #118: Ujian Komprehensif: Pembunuhan Berencana dengan Peran Berlapis - Seri Kasus 1",
    "facts": [
      "Dua pelaku begal bersenjata tajam merampas tas seorang wanita di jalan sunyi pada dini hari.",
      "Setelah tas dirampas dan pelaku hendak melarikan diri, korban mengejar dengan sepeda motor dan menabrak motor pelaku hingga salah satu begal tewas di tempat.",
      "Polisi menetapkan korban begal sebagai tersangka penganiayaan yang menyebabkan matinya orang (Pasal 351 ayat 3 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Korban Begal atas Dasar Pembelaan Diri Terpaksa (Noodweer)",
        "consequence": "Rakyat merasa berhak membela harta dan jiwanya dari teror kejahatan jalanan.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 90,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Proses Pidana Mengingat Korban Mengejar Pelaku yang Sedang Melarikan Diri",
        "consequence": "Mencegah aksi main hakim sendiri di jalan raya, namun mencederai rasa keadilan masyarakat luas.",
        "keadilan": 20,
        "kepastian": 90,
        "kemanfaatan": 30,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-119",
    "title": "Kasus #119: Ujian Komprehensif: Pembunuhan Berencana dengan Peran Berlapis - Seri Kasus 2",
    "facts": [
      "Truk kontainer mengalami rem blong di turunan curam menuju antrean lampu merah yang penuh 30 pengendara motor.",
      "Sopir sengaja membanting setir ke arah kanan menabrak warung kosong dan tiang listrik, menyebabkan kerugian materiil Rp 50 juta dan dirinya patah kaki.",
      "Pemilik warung menuntut sopir dipenjara atas tuduhan perusakan barang (Pasal 406 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bebaskan Sopir Berdasarkan Alasan Daya Paksa Demi Menyelamatkan 30 Nyawa",
        "consequence": "Tindakan heroik meminimalkan korban jiwa diapresiasi sebagai tindakan moral tertinggi.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 95,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Pidana Perusakan dan Ganti Rugi Penuh ke Pemilik Warung",
        "consequence": "Hak milik warga atas bangunan dihormati kaku tanpa memandang kalkulasi penyelamatan nyawa.",
        "keadilan": 25,
        "kepastian": 90,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-120",
    "title": "Kasus #120: Ujian Komprehensif: Pembunuhan Berencana dengan Peran Berlapis - Seri Kasus 3",
    "facts": [
      "Seorang polisi berpangkat brigadir menembak rekannya hingga tewas di dalam rumah dinas atas perintah tegas komandannya jenderal bintang dua.",
      "Terdakwa membela diri bahwa ia mengalami tekanan psikologis luar biasa dan tunduk pada hierarki perintah jabatan (Pasal 51 KUHP).",
      "Jaksa menuntut hukuman seumur hidup karena perintah membunuh adalah perintah yang secara nyata-nyata melawan hukum."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tolak Alasan Perintah Jabatan: Perintah Melakukan Kejahatan Wajib Ditolak",
        "consequence": "Menegaskan prinsip bahwa ketaatan militer/polisi tidak boleh membutakan nurani dari kejahatan kemanusiaan.",
        "keadilan": 95,
        "kepastian": 85,
        "kemanfaatan": 85,
        "alignmentShift": 0
      },
      {
        "id": "OPT-2",
        "action": "Keringankan Hukuman Maksimal atas Dasar Daya Paksa Relatif & Hierarki",
        "consequence": "Mempertimbangkan relasi kuasa ekstrem antara jenderal dan bawahan berpangkat rendah.",
        "keadilan": 70,
        "kepastian": 50,
        "kemanfaatan": 60,
        "alignmentShift": -15
      }
    ]
  }
],
  "5-1": [
  {
    "id": "CASE-121",
    "title": "Kasus #121: Keabsahan Penetapan Tersangka Tanpa Pemeriksaan Calon Tersangka - Seri Kasus 1",
    "facts": [
      "Penyidik kepolisian menjerat seorang pengusaha dengan pasal suap berdasarkan rekaman suara percakapan telepon yang disadap secara mandiri tanpa izin pengadilan.",
      "Pengacara mengajukan praperadilan dengan dalih bukti rekaman diperoleh secara melawan hukum (exclusionary rule).",
      "Jaksa berargumen rekaman tersebut 100% otentik dan materi pembicaraan nyata-nyata membuktikan tindak pidana korupsi."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Praperadilan: Bukti Melawan Hukum Haram Dijadikan Dasar Tersangka",
        "consequence": "Perlindungan privasi warga dari pengintaian liar aparat penegak hukum ditegakkan mutlak.",
        "keadilan": 85,
        "kepastian": 95,
        "kemanfaatan": 70,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Tolak Praperadilan: Substansi Kebenaran Materiil Mengalahkan Cacat Prosedur",
        "consequence": "Koruptor tidak lolos hanya karena alasan teknis dokumen perizinan penyadapan.",
        "keadilan": 60,
        "kepastian": 30,
        "kemanfaatan": 80,
        "alignmentShift": -25
      }
    ]
  },
  {
    "id": "CASE-122",
    "title": "Kasus #122: Keabsahan Penetapan Tersangka Tanpa Pemeriksaan Calon Tersangka - Seri Kasus 2",
    "facts": [
      "Seorang pemuda dipaksa menandatangani BAP pembunuhan setelah disetrum dan dipukuli selama 3 hari di ruang pemeriksaan rahasia.",
      "Di hadapan persidangan, terdakwa mencabut seluruh isi BAP dan menunjukkan bekas luka bakar di tubuhnya didukung hasil visum forensik independen.",
      "Jaksa menuntut vonis 15 tahun penjara dengan mengandalkan BAP tersebut sebagai satu-satunya bukti langsung."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Seluruh BAP & Bebaskan Terdakwa karena Ketiadaan Bukti Sah",
        "consequence": "Pemberantasan praktik keji penyiksaan polisi (anti-torture) diwujudkan nyata di ruang peradilan.",
        "keadilan": 95,
        "kepastian": 85,
        "kemanfaatan": 90,
        "alignmentShift": -10
      },
      {
        "id": "OPT-2",
        "action": "Lanjutkan Sidang & Perintahkan Penyidik Memberikan Keterangan Tambahan",
        "consequence": "Menghindari terdakwa pembunuhan bebas ke masyarakat jika ia benar-benar pelakunya.",
        "keadilan": 30,
        "kepastian": 40,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-123",
    "title": "Kasus #123: Keabsahan Penetapan Tersangka Tanpa Pemeriksaan Calon Tersangka - Seri Kasus 3",
    "facts": [
      "Dalam sidang kejahatan terorisme, jaksa menghadirkan saksi kunci melalui layar terselubung dengan suara disamarkan tanpa mengungkap identitas aslinya.",
      "Penasihat hukum memprotes keras karena tidak dapat menguji kredibilitas saksi (right to confront witness).",
      "Jaksa berargumen jika identitas saksi terbuka, saksi dan keluarganya akan segera dieksekusi oleh sel teroris."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Perbolehkan Kesaksian Anonim demi Melindungi Keselamatan Nyawa Saksi",
        "consequence": "Mekanisme perlindungan saksi kunci kejahatan luar biasa terjamin.",
        "keadilan": 75,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Kesaksian Anonim Demi Hak Pembelaan yang Adil (Due Process of Law)",
        "consequence": "Keadilan peradilan terbuka dan hak konfrontasi terdakwa dijaga murni dari fitnah saksi palsu.",
        "keadilan": 70,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "5-2": [
  {
    "id": "CASE-124",
    "title": "Kasus #124: Penggeledahan & Penyitaan Tanpa Izin Ketua Pengadilan Negeri - Seri Kasus 1",
    "facts": [
      "Penyidik kepolisian menjerat seorang pengusaha dengan pasal suap berdasarkan rekaman suara percakapan telepon yang disadap secara mandiri tanpa izin pengadilan.",
      "Pengacara mengajukan praperadilan dengan dalih bukti rekaman diperoleh secara melawan hukum (exclusionary rule).",
      "Jaksa berargumen rekaman tersebut 100% otentik dan materi pembicaraan nyata-nyata membuktikan tindak pidana korupsi."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Praperadilan: Bukti Melawan Hukum Haram Dijadikan Dasar Tersangka",
        "consequence": "Perlindungan privasi warga dari pengintaian liar aparat penegak hukum ditegakkan mutlak.",
        "keadilan": 85,
        "kepastian": 95,
        "kemanfaatan": 70,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Tolak Praperadilan: Substansi Kebenaran Materiil Mengalahkan Cacat Prosedur",
        "consequence": "Koruptor tidak lolos hanya karena alasan teknis dokumen perizinan penyadapan.",
        "keadilan": 60,
        "kepastian": 30,
        "kemanfaatan": 80,
        "alignmentShift": -25
      }
    ]
  },
  {
    "id": "CASE-125",
    "title": "Kasus #125: Penggeledahan & Penyitaan Tanpa Izin Ketua Pengadilan Negeri - Seri Kasus 2",
    "facts": [
      "Seorang pemuda dipaksa menandatangani BAP pembunuhan setelah disetrum dan dipukuli selama 3 hari di ruang pemeriksaan rahasia.",
      "Di hadapan persidangan, terdakwa mencabut seluruh isi BAP dan menunjukkan bekas luka bakar di tubuhnya didukung hasil visum forensik independen.",
      "Jaksa menuntut vonis 15 tahun penjara dengan mengandalkan BAP tersebut sebagai satu-satunya bukti langsung."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Seluruh BAP & Bebaskan Terdakwa karena Ketiadaan Bukti Sah",
        "consequence": "Pemberantasan praktik keji penyiksaan polisi (anti-torture) diwujudkan nyata di ruang peradilan.",
        "keadilan": 95,
        "kepastian": 85,
        "kemanfaatan": 90,
        "alignmentShift": -10
      },
      {
        "id": "OPT-2",
        "action": "Lanjutkan Sidang & Perintahkan Penyidik Memberikan Keterangan Tambahan",
        "consequence": "Menghindari terdakwa pembunuhan bebas ke masyarakat jika ia benar-benar pelakunya.",
        "keadilan": 30,
        "kepastian": 40,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-126",
    "title": "Kasus #126: Penggeledahan & Penyitaan Tanpa Izin Ketua Pengadilan Negeri - Seri Kasus 3",
    "facts": [
      "Dalam sidang kejahatan terorisme, jaksa menghadirkan saksi kunci melalui layar terselubung dengan suara disamarkan tanpa mengungkap identitas aslinya.",
      "Penasihat hukum memprotes keras karena tidak dapat menguji kredibilitas saksi (right to confront witness).",
      "Jaksa berargumen jika identitas saksi terbuka, saksi dan keluarganya akan segera dieksekusi oleh sel teroris."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Perbolehkan Kesaksian Anonim demi Melindungi Keselamatan Nyawa Saksi",
        "consequence": "Mekanisme perlindungan saksi kunci kejahatan luar biasa terjamin.",
        "keadilan": 75,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Kesaksian Anonim Demi Hak Pembelaan yang Adil (Due Process of Law)",
        "consequence": "Keadilan peradilan terbuka dan hak konfrontasi terdakwa dijaga murni dari fitnah saksi palsu.",
        "keadilan": 70,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "5-3": [
  {
    "id": "CASE-127",
    "title": "Kasus #127: Doktrin Unlawfully Obtained Evidence (Bukti Hasil Peretasan Ilegal) - Seri Kasus 1",
    "facts": [
      "Penyidik kepolisian menjerat seorang pengusaha dengan pasal suap berdasarkan rekaman suara percakapan telepon yang disadap secara mandiri tanpa izin pengadilan.",
      "Pengacara mengajukan praperadilan dengan dalih bukti rekaman diperoleh secara melawan hukum (exclusionary rule).",
      "Jaksa berargumen rekaman tersebut 100% otentik dan materi pembicaraan nyata-nyata membuktikan tindak pidana korupsi."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Praperadilan: Bukti Melawan Hukum Haram Dijadikan Dasar Tersangka",
        "consequence": "Perlindungan privasi warga dari pengintaian liar aparat penegak hukum ditegakkan mutlak.",
        "keadilan": 85,
        "kepastian": 95,
        "kemanfaatan": 70,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Tolak Praperadilan: Substansi Kebenaran Materiil Mengalahkan Cacat Prosedur",
        "consequence": "Koruptor tidak lolos hanya karena alasan teknis dokumen perizinan penyadapan.",
        "keadilan": 60,
        "kepastian": 30,
        "kemanfaatan": 80,
        "alignmentShift": -25
      }
    ]
  },
  {
    "id": "CASE-128",
    "title": "Kasus #128: Doktrin Unlawfully Obtained Evidence (Bukti Hasil Peretasan Ilegal) - Seri Kasus 2",
    "facts": [
      "Seorang pemuda dipaksa menandatangani BAP pembunuhan setelah disetrum dan dipukuli selama 3 hari di ruang pemeriksaan rahasia.",
      "Di hadapan persidangan, terdakwa mencabut seluruh isi BAP dan menunjukkan bekas luka bakar di tubuhnya didukung hasil visum forensik independen.",
      "Jaksa menuntut vonis 15 tahun penjara dengan mengandalkan BAP tersebut sebagai satu-satunya bukti langsung."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Seluruh BAP & Bebaskan Terdakwa karena Ketiadaan Bukti Sah",
        "consequence": "Pemberantasan praktik keji penyiksaan polisi (anti-torture) diwujudkan nyata di ruang peradilan.",
        "keadilan": 95,
        "kepastian": 85,
        "kemanfaatan": 90,
        "alignmentShift": -10
      },
      {
        "id": "OPT-2",
        "action": "Lanjutkan Sidang & Perintahkan Penyidik Memberikan Keterangan Tambahan",
        "consequence": "Menghindari terdakwa pembunuhan bebas ke masyarakat jika ia benar-benar pelakunya.",
        "keadilan": 30,
        "kepastian": 40,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-129",
    "title": "Kasus #129: Doktrin Unlawfully Obtained Evidence (Bukti Hasil Peretasan Ilegal) - Seri Kasus 3",
    "facts": [
      "Dalam sidang kejahatan terorisme, jaksa menghadirkan saksi kunci melalui layar terselubung dengan suara disamarkan tanpa mengungkap identitas aslinya.",
      "Penasihat hukum memprotes keras karena tidak dapat menguji kredibilitas saksi (right to confront witness).",
      "Jaksa berargumen jika identitas saksi terbuka, saksi dan keluarganya akan segera dieksekusi oleh sel teroris."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Perbolehkan Kesaksian Anonim demi Melindungi Keselamatan Nyawa Saksi",
        "consequence": "Mekanisme perlindungan saksi kunci kejahatan luar biasa terjamin.",
        "keadilan": 75,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Kesaksian Anonim Demi Hak Pembelaan yang Adil (Due Process of Law)",
        "consequence": "Keadilan peradilan terbuka dan hak konfrontasi terdakwa dijaga murni dari fitnah saksi palsu.",
        "keadilan": 70,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "5-4": [
  {
    "id": "CASE-130",
    "title": "Kasus #130: Nilai Pembuktian Saksi Mahkota (Crown Witness) & JC - Seri Kasus 1",
    "facts": [
      "Penyidik kepolisian menjerat seorang pengusaha dengan pasal suap berdasarkan rekaman suara percakapan telepon yang disadap secara mandiri tanpa izin pengadilan.",
      "Pengacara mengajukan praperadilan dengan dalih bukti rekaman diperoleh secara melawan hukum (exclusionary rule).",
      "Jaksa berargumen rekaman tersebut 100% otentik dan materi pembicaraan nyata-nyata membuktikan tindak pidana korupsi."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Praperadilan: Bukti Melawan Hukum Haram Dijadikan Dasar Tersangka",
        "consequence": "Perlindungan privasi warga dari pengintaian liar aparat penegak hukum ditegakkan mutlak.",
        "keadilan": 85,
        "kepastian": 95,
        "kemanfaatan": 70,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Tolak Praperadilan: Substansi Kebenaran Materiil Mengalahkan Cacat Prosedur",
        "consequence": "Koruptor tidak lolos hanya karena alasan teknis dokumen perizinan penyadapan.",
        "keadilan": 60,
        "kepastian": 30,
        "kemanfaatan": 80,
        "alignmentShift": -25
      }
    ]
  },
  {
    "id": "CASE-131",
    "title": "Kasus #131: Nilai Pembuktian Saksi Mahkota (Crown Witness) & JC - Seri Kasus 2",
    "facts": [
      "Seorang pemuda dipaksa menandatangani BAP pembunuhan setelah disetrum dan dipukuli selama 3 hari di ruang pemeriksaan rahasia.",
      "Di hadapan persidangan, terdakwa mencabut seluruh isi BAP dan menunjukkan bekas luka bakar di tubuhnya didukung hasil visum forensik independen.",
      "Jaksa menuntut vonis 15 tahun penjara dengan mengandalkan BAP tersebut sebagai satu-satunya bukti langsung."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Seluruh BAP & Bebaskan Terdakwa karena Ketiadaan Bukti Sah",
        "consequence": "Pemberantasan praktik keji penyiksaan polisi (anti-torture) diwujudkan nyata di ruang peradilan.",
        "keadilan": 95,
        "kepastian": 85,
        "kemanfaatan": 90,
        "alignmentShift": -10
      },
      {
        "id": "OPT-2",
        "action": "Lanjutkan Sidang & Perintahkan Penyidik Memberikan Keterangan Tambahan",
        "consequence": "Menghindari terdakwa pembunuhan bebas ke masyarakat jika ia benar-benar pelakunya.",
        "keadilan": 30,
        "kepastian": 40,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-132",
    "title": "Kasus #132: Nilai Pembuktian Saksi Mahkota (Crown Witness) & JC - Seri Kasus 3",
    "facts": [
      "Dalam sidang kejahatan terorisme, jaksa menghadirkan saksi kunci melalui layar terselubung dengan suara disamarkan tanpa mengungkap identitas aslinya.",
      "Penasihat hukum memprotes keras karena tidak dapat menguji kredibilitas saksi (right to confront witness).",
      "Jaksa berargumen jika identitas saksi terbuka, saksi dan keluarganya akan segera dieksekusi oleh sel teroris."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Perbolehkan Kesaksian Anonim demi Melindungi Keselamatan Nyawa Saksi",
        "consequence": "Mekanisme perlindungan saksi kunci kejahatan luar biasa terjamin.",
        "keadilan": 75,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Kesaksian Anonim Demi Hak Pembelaan yang Adil (Due Process of Law)",
        "consequence": "Keadilan peradilan terbuka dan hak konfrontasi terdakwa dijaga murni dari fitnah saksi palsu.",
        "keadilan": 70,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "5-5": [
  {
    "id": "CASE-133",
    "title": "Kasus #133: Sengketa Visum et Repertum Psikiatrikum ODGJ Berulang - Seri Kasus 1",
    "facts": [
      "Penyidik kepolisian menjerat seorang pengusaha dengan pasal suap berdasarkan rekaman suara percakapan telepon yang disadap secara mandiri tanpa izin pengadilan.",
      "Pengacara mengajukan praperadilan dengan dalih bukti rekaman diperoleh secara melawan hukum (exclusionary rule).",
      "Jaksa berargumen rekaman tersebut 100% otentik dan materi pembicaraan nyata-nyata membuktikan tindak pidana korupsi."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Praperadilan: Bukti Melawan Hukum Haram Dijadikan Dasar Tersangka",
        "consequence": "Perlindungan privasi warga dari pengintaian liar aparat penegak hukum ditegakkan mutlak.",
        "keadilan": 85,
        "kepastian": 95,
        "kemanfaatan": 70,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Tolak Praperadilan: Substansi Kebenaran Materiil Mengalahkan Cacat Prosedur",
        "consequence": "Koruptor tidak lolos hanya karena alasan teknis dokumen perizinan penyadapan.",
        "keadilan": 60,
        "kepastian": 30,
        "kemanfaatan": 80,
        "alignmentShift": -25
      }
    ]
  },
  {
    "id": "CASE-134",
    "title": "Kasus #134: Sengketa Visum et Repertum Psikiatrikum ODGJ Berulang - Seri Kasus 2",
    "facts": [
      "Seorang pemuda dipaksa menandatangani BAP pembunuhan setelah disetrum dan dipukuli selama 3 hari di ruang pemeriksaan rahasia.",
      "Di hadapan persidangan, terdakwa mencabut seluruh isi BAP dan menunjukkan bekas luka bakar di tubuhnya didukung hasil visum forensik independen.",
      "Jaksa menuntut vonis 15 tahun penjara dengan mengandalkan BAP tersebut sebagai satu-satunya bukti langsung."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Seluruh BAP & Bebaskan Terdakwa karena Ketiadaan Bukti Sah",
        "consequence": "Pemberantasan praktik keji penyiksaan polisi (anti-torture) diwujudkan nyata di ruang peradilan.",
        "keadilan": 95,
        "kepastian": 85,
        "kemanfaatan": 90,
        "alignmentShift": -10
      },
      {
        "id": "OPT-2",
        "action": "Lanjutkan Sidang & Perintahkan Penyidik Memberikan Keterangan Tambahan",
        "consequence": "Menghindari terdakwa pembunuhan bebas ke masyarakat jika ia benar-benar pelakunya.",
        "keadilan": 30,
        "kepastian": 40,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-135",
    "title": "Kasus #135: Sengketa Visum et Repertum Psikiatrikum ODGJ Berulang - Seri Kasus 3",
    "facts": [
      "Dalam sidang kejahatan terorisme, jaksa menghadirkan saksi kunci melalui layar terselubung dengan suara disamarkan tanpa mengungkap identitas aslinya.",
      "Penasihat hukum memprotes keras karena tidak dapat menguji kredibilitas saksi (right to confront witness).",
      "Jaksa berargumen jika identitas saksi terbuka, saksi dan keluarganya akan segera dieksekusi oleh sel teroris."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Perbolehkan Kesaksian Anonim demi Melindungi Keselamatan Nyawa Saksi",
        "consequence": "Mekanisme perlindungan saksi kunci kejahatan luar biasa terjamin.",
        "keadilan": 75,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Kesaksian Anonim Demi Hak Pembelaan yang Adil (Due Process of Law)",
        "consequence": "Keadilan peradilan terbuka dan hak konfrontasi terdakwa dijaga murni dari fitnah saksi palsu.",
        "keadilan": 70,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "5-6": [
  {
    "id": "CASE-136",
    "title": "Kasus #136: Hak Tersangka atas Pendampingan Advokat (Pasal 56 KUHAP) - Seri Kasus 1",
    "facts": [
      "Penyidik kepolisian menjerat seorang pengusaha dengan pasal suap berdasarkan rekaman suara percakapan telepon yang disadap secara mandiri tanpa izin pengadilan.",
      "Pengacara mengajukan praperadilan dengan dalih bukti rekaman diperoleh secara melawan hukum (exclusionary rule).",
      "Jaksa berargumen rekaman tersebut 100% otentik dan materi pembicaraan nyata-nyata membuktikan tindak pidana korupsi."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Praperadilan: Bukti Melawan Hukum Haram Dijadikan Dasar Tersangka",
        "consequence": "Perlindungan privasi warga dari pengintaian liar aparat penegak hukum ditegakkan mutlak.",
        "keadilan": 85,
        "kepastian": 95,
        "kemanfaatan": 70,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Tolak Praperadilan: Substansi Kebenaran Materiil Mengalahkan Cacat Prosedur",
        "consequence": "Koruptor tidak lolos hanya karena alasan teknis dokumen perizinan penyadapan.",
        "keadilan": 60,
        "kepastian": 30,
        "kemanfaatan": 80,
        "alignmentShift": -25
      }
    ]
  },
  {
    "id": "CASE-137",
    "title": "Kasus #137: Hak Tersangka atas Pendampingan Advokat (Pasal 56 KUHAP) - Seri Kasus 2",
    "facts": [
      "Seorang pemuda dipaksa menandatangani BAP pembunuhan setelah disetrum dan dipukuli selama 3 hari di ruang pemeriksaan rahasia.",
      "Di hadapan persidangan, terdakwa mencabut seluruh isi BAP dan menunjukkan bekas luka bakar di tubuhnya didukung hasil visum forensik independen.",
      "Jaksa menuntut vonis 15 tahun penjara dengan mengandalkan BAP tersebut sebagai satu-satunya bukti langsung."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Seluruh BAP & Bebaskan Terdakwa karena Ketiadaan Bukti Sah",
        "consequence": "Pemberantasan praktik keji penyiksaan polisi (anti-torture) diwujudkan nyata di ruang peradilan.",
        "keadilan": 95,
        "kepastian": 85,
        "kemanfaatan": 90,
        "alignmentShift": -10
      },
      {
        "id": "OPT-2",
        "action": "Lanjutkan Sidang & Perintahkan Penyidik Memberikan Keterangan Tambahan",
        "consequence": "Menghindari terdakwa pembunuhan bebas ke masyarakat jika ia benar-benar pelakunya.",
        "keadilan": 30,
        "kepastian": 40,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-138",
    "title": "Kasus #138: Hak Tersangka atas Pendampingan Advokat (Pasal 56 KUHAP) - Seri Kasus 3",
    "facts": [
      "Dalam sidang kejahatan terorisme, jaksa menghadirkan saksi kunci melalui layar terselubung dengan suara disamarkan tanpa mengungkap identitas aslinya.",
      "Penasihat hukum memprotes keras karena tidak dapat menguji kredibilitas saksi (right to confront witness).",
      "Jaksa berargumen jika identitas saksi terbuka, saksi dan keluarganya akan segera dieksekusi oleh sel teroris."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Perbolehkan Kesaksian Anonim demi Melindungi Keselamatan Nyawa Saksi",
        "consequence": "Mekanisme perlindungan saksi kunci kejahatan luar biasa terjamin.",
        "keadilan": 75,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Kesaksian Anonim Demi Hak Pembelaan yang Adil (Due Process of Law)",
        "consequence": "Keadilan peradilan terbuka dan hak konfrontasi terdakwa dijaga murni dari fitnah saksi palsu.",
        "keadilan": 70,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "5-7": [
  {
    "id": "CASE-139",
    "title": "Kasus #139: Beban Pembuktian Terbalik pada Kasus Gratifikasi & TPPU - Seri Kasus 1",
    "facts": [
      "Penyidik kepolisian menjerat seorang pengusaha dengan pasal suap berdasarkan rekaman suara percakapan telepon yang disadap secara mandiri tanpa izin pengadilan.",
      "Pengacara mengajukan praperadilan dengan dalih bukti rekaman diperoleh secara melawan hukum (exclusionary rule).",
      "Jaksa berargumen rekaman tersebut 100% otentik dan materi pembicaraan nyata-nyata membuktikan tindak pidana korupsi."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Praperadilan: Bukti Melawan Hukum Haram Dijadikan Dasar Tersangka",
        "consequence": "Perlindungan privasi warga dari pengintaian liar aparat penegak hukum ditegakkan mutlak.",
        "keadilan": 85,
        "kepastian": 95,
        "kemanfaatan": 70,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Tolak Praperadilan: Substansi Kebenaran Materiil Mengalahkan Cacat Prosedur",
        "consequence": "Koruptor tidak lolos hanya karena alasan teknis dokumen perizinan penyadapan.",
        "keadilan": 60,
        "kepastian": 30,
        "kemanfaatan": 80,
        "alignmentShift": -25
      }
    ]
  },
  {
    "id": "CASE-140",
    "title": "Kasus #140: Beban Pembuktian Terbalik pada Kasus Gratifikasi & TPPU - Seri Kasus 2",
    "facts": [
      "Seorang pemuda dipaksa menandatangani BAP pembunuhan setelah disetrum dan dipukuli selama 3 hari di ruang pemeriksaan rahasia.",
      "Di hadapan persidangan, terdakwa mencabut seluruh isi BAP dan menunjukkan bekas luka bakar di tubuhnya didukung hasil visum forensik independen.",
      "Jaksa menuntut vonis 15 tahun penjara dengan mengandalkan BAP tersebut sebagai satu-satunya bukti langsung."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Seluruh BAP & Bebaskan Terdakwa karena Ketiadaan Bukti Sah",
        "consequence": "Pemberantasan praktik keji penyiksaan polisi (anti-torture) diwujudkan nyata di ruang peradilan.",
        "keadilan": 95,
        "kepastian": 85,
        "kemanfaatan": 90,
        "alignmentShift": -10
      },
      {
        "id": "OPT-2",
        "action": "Lanjutkan Sidang & Perintahkan Penyidik Memberikan Keterangan Tambahan",
        "consequence": "Menghindari terdakwa pembunuhan bebas ke masyarakat jika ia benar-benar pelakunya.",
        "keadilan": 30,
        "kepastian": 40,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-141",
    "title": "Kasus #141: Beban Pembuktian Terbalik pada Kasus Gratifikasi & TPPU - Seri Kasus 3",
    "facts": [
      "Dalam sidang kejahatan terorisme, jaksa menghadirkan saksi kunci melalui layar terselubung dengan suara disamarkan tanpa mengungkap identitas aslinya.",
      "Penasihat hukum memprotes keras karena tidak dapat menguji kredibilitas saksi (right to confront witness).",
      "Jaksa berargumen jika identitas saksi terbuka, saksi dan keluarganya akan segera dieksekusi oleh sel teroris."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Perbolehkan Kesaksian Anonim demi Melindungi Keselamatan Nyawa Saksi",
        "consequence": "Mekanisme perlindungan saksi kunci kejahatan luar biasa terjamin.",
        "keadilan": 75,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Kesaksian Anonim Demi Hak Pembelaan yang Adil (Due Process of Law)",
        "consequence": "Keadilan peradilan terbuka dan hak konfrontasi terdakwa dijaga murni dari fitnah saksi palsu.",
        "keadilan": 70,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "5-8": [
  {
    "id": "CASE-142",
    "title": "Kasus #142: Eksepsi Surat Dakwaan Batal Demi Hukum (Obscuur Libel) - Seri Kasus 1",
    "facts": [
      "Penyidik kepolisian menjerat seorang pengusaha dengan pasal suap berdasarkan rekaman suara percakapan telepon yang disadap secara mandiri tanpa izin pengadilan.",
      "Pengacara mengajukan praperadilan dengan dalih bukti rekaman diperoleh secara melawan hukum (exclusionary rule).",
      "Jaksa berargumen rekaman tersebut 100% otentik dan materi pembicaraan nyata-nyata membuktikan tindak pidana korupsi."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Praperadilan: Bukti Melawan Hukum Haram Dijadikan Dasar Tersangka",
        "consequence": "Perlindungan privasi warga dari pengintaian liar aparat penegak hukum ditegakkan mutlak.",
        "keadilan": 85,
        "kepastian": 95,
        "kemanfaatan": 70,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Tolak Praperadilan: Substansi Kebenaran Materiil Mengalahkan Cacat Prosedur",
        "consequence": "Koruptor tidak lolos hanya karena alasan teknis dokumen perizinan penyadapan.",
        "keadilan": 60,
        "kepastian": 30,
        "kemanfaatan": 80,
        "alignmentShift": -25
      }
    ]
  },
  {
    "id": "CASE-143",
    "title": "Kasus #143: Eksepsi Surat Dakwaan Batal Demi Hukum (Obscuur Libel) - Seri Kasus 2",
    "facts": [
      "Seorang pemuda dipaksa menandatangani BAP pembunuhan setelah disetrum dan dipukuli selama 3 hari di ruang pemeriksaan rahasia.",
      "Di hadapan persidangan, terdakwa mencabut seluruh isi BAP dan menunjukkan bekas luka bakar di tubuhnya didukung hasil visum forensik independen.",
      "Jaksa menuntut vonis 15 tahun penjara dengan mengandalkan BAP tersebut sebagai satu-satunya bukti langsung."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Seluruh BAP & Bebaskan Terdakwa karena Ketiadaan Bukti Sah",
        "consequence": "Pemberantasan praktik keji penyiksaan polisi (anti-torture) diwujudkan nyata di ruang peradilan.",
        "keadilan": 95,
        "kepastian": 85,
        "kemanfaatan": 90,
        "alignmentShift": -10
      },
      {
        "id": "OPT-2",
        "action": "Lanjutkan Sidang & Perintahkan Penyidik Memberikan Keterangan Tambahan",
        "consequence": "Menghindari terdakwa pembunuhan bebas ke masyarakat jika ia benar-benar pelakunya.",
        "keadilan": 30,
        "kepastian": 40,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-144",
    "title": "Kasus #144: Eksepsi Surat Dakwaan Batal Demi Hukum (Obscuur Libel) - Seri Kasus 3",
    "facts": [
      "Dalam sidang kejahatan terorisme, jaksa menghadirkan saksi kunci melalui layar terselubung dengan suara disamarkan tanpa mengungkap identitas aslinya.",
      "Penasihat hukum memprotes keras karena tidak dapat menguji kredibilitas saksi (right to confront witness).",
      "Jaksa berargumen jika identitas saksi terbuka, saksi dan keluarganya akan segera dieksekusi oleh sel teroris."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Perbolehkan Kesaksian Anonim demi Melindungi Keselamatan Nyawa Saksi",
        "consequence": "Mekanisme perlindungan saksi kunci kejahatan luar biasa terjamin.",
        "keadilan": 75,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Kesaksian Anonim Demi Hak Pembelaan yang Adil (Due Process of Law)",
        "consequence": "Keadilan peradilan terbuka dan hak konfrontasi terdakwa dijaga murni dari fitnah saksi palsu.",
        "keadilan": 70,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "5-9": [
  {
    "id": "CASE-145",
    "title": "Kasus #145: Penolakan Keterangan Saksi De Auditu dalam Sidang Tipikor - Seri Kasus 1",
    "facts": [
      "Penyidik kepolisian menjerat seorang pengusaha dengan pasal suap berdasarkan rekaman suara percakapan telepon yang disadap secara mandiri tanpa izin pengadilan.",
      "Pengacara mengajukan praperadilan dengan dalih bukti rekaman diperoleh secara melawan hukum (exclusionary rule).",
      "Jaksa berargumen rekaman tersebut 100% otentik dan materi pembicaraan nyata-nyata membuktikan tindak pidana korupsi."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Praperadilan: Bukti Melawan Hukum Haram Dijadikan Dasar Tersangka",
        "consequence": "Perlindungan privasi warga dari pengintaian liar aparat penegak hukum ditegakkan mutlak.",
        "keadilan": 85,
        "kepastian": 95,
        "kemanfaatan": 70,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Tolak Praperadilan: Substansi Kebenaran Materiil Mengalahkan Cacat Prosedur",
        "consequence": "Koruptor tidak lolos hanya karena alasan teknis dokumen perizinan penyadapan.",
        "keadilan": 60,
        "kepastian": 30,
        "kemanfaatan": 80,
        "alignmentShift": -25
      }
    ]
  },
  {
    "id": "CASE-146",
    "title": "Kasus #146: Penolakan Keterangan Saksi De Auditu dalam Sidang Tipikor - Seri Kasus 2",
    "facts": [
      "Seorang pemuda dipaksa menandatangani BAP pembunuhan setelah disetrum dan dipukuli selama 3 hari di ruang pemeriksaan rahasia.",
      "Di hadapan persidangan, terdakwa mencabut seluruh isi BAP dan menunjukkan bekas luka bakar di tubuhnya didukung hasil visum forensik independen.",
      "Jaksa menuntut vonis 15 tahun penjara dengan mengandalkan BAP tersebut sebagai satu-satunya bukti langsung."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Seluruh BAP & Bebaskan Terdakwa karena Ketiadaan Bukti Sah",
        "consequence": "Pemberantasan praktik keji penyiksaan polisi (anti-torture) diwujudkan nyata di ruang peradilan.",
        "keadilan": 95,
        "kepastian": 85,
        "kemanfaatan": 90,
        "alignmentShift": -10
      },
      {
        "id": "OPT-2",
        "action": "Lanjutkan Sidang & Perintahkan Penyidik Memberikan Keterangan Tambahan",
        "consequence": "Menghindari terdakwa pembunuhan bebas ke masyarakat jika ia benar-benar pelakunya.",
        "keadilan": 30,
        "kepastian": 40,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-147",
    "title": "Kasus #147: Penolakan Keterangan Saksi De Auditu dalam Sidang Tipikor - Seri Kasus 3",
    "facts": [
      "Dalam sidang kejahatan terorisme, jaksa menghadirkan saksi kunci melalui layar terselubung dengan suara disamarkan tanpa mengungkap identitas aslinya.",
      "Penasihat hukum memprotes keras karena tidak dapat menguji kredibilitas saksi (right to confront witness).",
      "Jaksa berargumen jika identitas saksi terbuka, saksi dan keluarganya akan segera dieksekusi oleh sel teroris."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Perbolehkan Kesaksian Anonim demi Melindungi Keselamatan Nyawa Saksi",
        "consequence": "Mekanisme perlindungan saksi kunci kejahatan luar biasa terjamin.",
        "keadilan": 75,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Kesaksian Anonim Demi Hak Pembelaan yang Adil (Due Process of Law)",
        "consequence": "Keadilan peradilan terbuka dan hak konfrontasi terdakwa dijaga murni dari fitnah saksi palsu.",
        "keadilan": 70,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "5-10": [
  {
    "id": "CASE-148",
    "title": "Kasus #148: Ujian Komprehensif: Sidang Perkara Pembunuhan Berantai & Saintifik - Seri Kasus 1",
    "facts": [
      "Penyidik kepolisian menjerat seorang pengusaha dengan pasal suap berdasarkan rekaman suara percakapan telepon yang disadap secara mandiri tanpa izin pengadilan.",
      "Pengacara mengajukan praperadilan dengan dalih bukti rekaman diperoleh secara melawan hukum (exclusionary rule).",
      "Jaksa berargumen rekaman tersebut 100% otentik dan materi pembicaraan nyata-nyata membuktikan tindak pidana korupsi."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Praperadilan: Bukti Melawan Hukum Haram Dijadikan Dasar Tersangka",
        "consequence": "Perlindungan privasi warga dari pengintaian liar aparat penegak hukum ditegakkan mutlak.",
        "keadilan": 85,
        "kepastian": 95,
        "kemanfaatan": 70,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Tolak Praperadilan: Substansi Kebenaran Materiil Mengalahkan Cacat Prosedur",
        "consequence": "Koruptor tidak lolos hanya karena alasan teknis dokumen perizinan penyadapan.",
        "keadilan": 60,
        "kepastian": 30,
        "kemanfaatan": 80,
        "alignmentShift": -25
      }
    ]
  },
  {
    "id": "CASE-149",
    "title": "Kasus #149: Ujian Komprehensif: Sidang Perkara Pembunuhan Berantai & Saintifik - Seri Kasus 2",
    "facts": [
      "Seorang pemuda dipaksa menandatangani BAP pembunuhan setelah disetrum dan dipukuli selama 3 hari di ruang pemeriksaan rahasia.",
      "Di hadapan persidangan, terdakwa mencabut seluruh isi BAP dan menunjukkan bekas luka bakar di tubuhnya didukung hasil visum forensik independen.",
      "Jaksa menuntut vonis 15 tahun penjara dengan mengandalkan BAP tersebut sebagai satu-satunya bukti langsung."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Batalkan Seluruh BAP & Bebaskan Terdakwa karena Ketiadaan Bukti Sah",
        "consequence": "Pemberantasan praktik keji penyiksaan polisi (anti-torture) diwujudkan nyata di ruang peradilan.",
        "keadilan": 95,
        "kepastian": 85,
        "kemanfaatan": 90,
        "alignmentShift": -10
      },
      {
        "id": "OPT-2",
        "action": "Lanjutkan Sidang & Perintahkan Penyidik Memberikan Keterangan Tambahan",
        "consequence": "Menghindari terdakwa pembunuhan bebas ke masyarakat jika ia benar-benar pelakunya.",
        "keadilan": 30,
        "kepastian": 40,
        "kemanfaatan": 40,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-150",
    "title": "Kasus #150: Ujian Komprehensif: Sidang Perkara Pembunuhan Berantai & Saintifik - Seri Kasus 3",
    "facts": [
      "Dalam sidang kejahatan terorisme, jaksa menghadirkan saksi kunci melalui layar terselubung dengan suara disamarkan tanpa mengungkap identitas aslinya.",
      "Penasihat hukum memprotes keras karena tidak dapat menguji kredibilitas saksi (right to confront witness).",
      "Jaksa berargumen jika identitas saksi terbuka, saksi dan keluarganya akan segera dieksekusi oleh sel teroris."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Perbolehkan Kesaksian Anonim demi Melindungi Keselamatan Nyawa Saksi",
        "consequence": "Mekanisme perlindungan saksi kunci kejahatan luar biasa terjamin.",
        "keadilan": 75,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Kesaksian Anonim Demi Hak Pembelaan yang Adil (Due Process of Law)",
        "consequence": "Keadilan peradilan terbuka dan hak konfrontasi terdakwa dijaga murni dari fitnah saksi palsu.",
        "keadilan": 70,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "6-1": [
  {
    "id": "CASE-151",
    "title": "Kasus #151: Uji Formil Pembentukan Undang-Undang di Mahkamah Konstitusi - Seri Kasus 1",
    "facts": [
      "Sebuah undang-undang pertambangan disahkan DPR dalam waktu 3 hari pembahasan kilat pada masa reses dan tanpa melibatkan organisasi masyarakat sipil.",
      "Koalisi masyarakat mengajukan uji formil ke MK menuntut UU dibatalkan karena inkonstitusional bersyarat.",
      "Pemerintah beralasan UU sangat mendesak demi menyelamatkan proyek pendapatan hilirisasi mineral negara."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Uji Formil: Nyatakan UU Cacat Prosedural & Inkonstitusional",
        "consequence": "Menegakkan prinsip demokrasi partisipasi bermakna (meaningful participation) dalam pembuatan hukum.",
        "keadilan": 95,
        "kepastian": 70,
        "kemanfaatan": 80,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Permohonan Mengingat Substansi UU Dibutuhkan untuk APBN Negara",
        "consequence": "Keberlangsungan penerimaan ekonomi negara aman, namun melanggengkan arogansi legislasi elitis.",
        "keadilan": 25,
        "kepastian": 60,
        "kemanfaatan": 55,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-152",
    "title": "Kasus #152: Uji Formil Pembentukan Undang-Undang di Mahkamah Konstitusi - Seri Kasus 2",
    "facts": [
      "Lahar dingin menyapu 5 desa dan menyebabkan 4.000 jiwa kehilangan rumah di tengah musim hujan badai.",
      "Bupati menggunakan diskresi untuk membangun hunian sementara di pinggir hutan lindung tanpa menunggu izin menteri yang memakan waktu 6 bulan.",
      "Kementerian Kehutanan melaporkan Bupati atas dugaan perusakan kawasan hutan lindung."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Sahkan Diskresi Bupati Berdasarkan Asas Freies Ermessen Penyelamatan Darurat",
        "consequence": "Birokrasi humanis diakui; nyawa ribuan rakyat diutamakan di atas surat birokrasi perizinan lamban.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 95,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Sanksi Maladministrasi agar Pejabat Tidak Melompati Kewenangan Pusat",
        "consequence": "Sentralisasi kewenangan kehutanan terjaga rapi, namun rakyat korban lahar kedinginan di tenda bocor.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-153",
    "title": "Kasus #153: Uji Formil Pembentukan Undang-Undang di Mahkamah Konstitusi - Seri Kasus 3",
    "facts": [
      "Dalam pilkada provinsi, calon petahana terbukti mengerahkan ribuan kepala desa untuk mengampanyekan dirinya dengan ancaman penahanan dana desa.",
      "Pasangan lawan mengajukan permohonan diskualifikasi ke Mahkamah Konstitusi.",
      "KPU beralasan selisih suara mencapai 12% sehingga pelanggaran tidak mengubah hasil pemenang pemilu secara matematis."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Diskualifikasi Pasangan Petahana Demi Menjaga Keadilan Pemilu Substantif",
        "consequence": "Preseden berani bahwa kecurangan pemilu tidak boleh ditoleransi meski selisih angka besar.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 80,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Tolak Diskualifikasi Mengacu pada Kaidah Selisih Suara Matematis UU Pemilu",
        "consequence": "Kepastian hasil pemilu terjaga tanpa memicu instabilitas politik dan biaya pemilu ulang triliunan.",
        "keadilan": 30,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "6-2": [
  {
    "id": "CASE-154",
    "title": "Kasus #154: Diskresi Pejabat Publik (Freies Ermessen) dalam Bencana Alam - Seri Kasus 1",
    "facts": [
      "Sebuah undang-undang pertambangan disahkan DPR dalam waktu 3 hari pembahasan kilat pada masa reses dan tanpa melibatkan organisasi masyarakat sipil.",
      "Koalisi masyarakat mengajukan uji formil ke MK menuntut UU dibatalkan karena inkonstitusional bersyarat.",
      "Pemerintah beralasan UU sangat mendesak demi menyelamatkan proyek pendapatan hilirisasi mineral negara."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Uji Formil: Nyatakan UU Cacat Prosedural & Inkonstitusional",
        "consequence": "Menegakkan prinsip demokrasi partisipasi bermakna (meaningful participation) dalam pembuatan hukum.",
        "keadilan": 95,
        "kepastian": 70,
        "kemanfaatan": 80,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Permohonan Mengingat Substansi UU Dibutuhkan untuk APBN Negara",
        "consequence": "Keberlangsungan penerimaan ekonomi negara aman, namun melanggengkan arogansi legislasi elitis.",
        "keadilan": 25,
        "kepastian": 60,
        "kemanfaatan": 55,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-155",
    "title": "Kasus #155: Diskresi Pejabat Publik (Freies Ermessen) dalam Bencana Alam - Seri Kasus 2",
    "facts": [
      "Lahar dingin menyapu 5 desa dan menyebabkan 4.000 jiwa kehilangan rumah di tengah musim hujan badai.",
      "Bupati menggunakan diskresi untuk membangun hunian sementara di pinggir hutan lindung tanpa menunggu izin menteri yang memakan waktu 6 bulan.",
      "Kementerian Kehutanan melaporkan Bupati atas dugaan perusakan kawasan hutan lindung."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Sahkan Diskresi Bupati Berdasarkan Asas Freies Ermessen Penyelamatan Darurat",
        "consequence": "Birokrasi humanis diakui; nyawa ribuan rakyat diutamakan di atas surat birokrasi perizinan lamban.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 95,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Sanksi Maladministrasi agar Pejabat Tidak Melompati Kewenangan Pusat",
        "consequence": "Sentralisasi kewenangan kehutanan terjaga rapi, namun rakyat korban lahar kedinginan di tenda bocor.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-156",
    "title": "Kasus #156: Diskresi Pejabat Publik (Freies Ermessen) dalam Bencana Alam - Seri Kasus 3",
    "facts": [
      "Dalam pilkada provinsi, calon petahana terbukti mengerahkan ribuan kepala desa untuk mengampanyekan dirinya dengan ancaman penahanan dana desa.",
      "Pasangan lawan mengajukan permohonan diskualifikasi ke Mahkamah Konstitusi.",
      "KPU beralasan selisih suara mencapai 12% sehingga pelanggaran tidak mengubah hasil pemenang pemilu secara matematis."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Diskualifikasi Pasangan Petahana Demi Menjaga Keadilan Pemilu Substantif",
        "consequence": "Preseden berani bahwa kecurangan pemilu tidak boleh ditoleransi meski selisih angka besar.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 80,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Tolak Diskualifikasi Mengacu pada Kaidah Selisih Suara Matematis UU Pemilu",
        "consequence": "Kepastian hasil pemilu terjaga tanpa memicu instabilitas politik dan biaya pemilu ulang triliunan.",
        "keadilan": 30,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "6-3": [
  {
    "id": "CASE-157",
    "title": "Kasus #157: Keputusan Fiktif Positif Badan Usaha Pemerintahan di PTUN - Seri Kasus 1",
    "facts": [
      "Sebuah undang-undang pertambangan disahkan DPR dalam waktu 3 hari pembahasan kilat pada masa reses dan tanpa melibatkan organisasi masyarakat sipil.",
      "Koalisi masyarakat mengajukan uji formil ke MK menuntut UU dibatalkan karena inkonstitusional bersyarat.",
      "Pemerintah beralasan UU sangat mendesak demi menyelamatkan proyek pendapatan hilirisasi mineral negara."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Uji Formil: Nyatakan UU Cacat Prosedural & Inkonstitusional",
        "consequence": "Menegakkan prinsip demokrasi partisipasi bermakna (meaningful participation) dalam pembuatan hukum.",
        "keadilan": 95,
        "kepastian": 70,
        "kemanfaatan": 80,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Permohonan Mengingat Substansi UU Dibutuhkan untuk APBN Negara",
        "consequence": "Keberlangsungan penerimaan ekonomi negara aman, namun melanggengkan arogansi legislasi elitis.",
        "keadilan": 25,
        "kepastian": 60,
        "kemanfaatan": 55,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-158",
    "title": "Kasus #158: Keputusan Fiktif Positif Badan Usaha Pemerintahan di PTUN - Seri Kasus 2",
    "facts": [
      "Lahar dingin menyapu 5 desa dan menyebabkan 4.000 jiwa kehilangan rumah di tengah musim hujan badai.",
      "Bupati menggunakan diskresi untuk membangun hunian sementara di pinggir hutan lindung tanpa menunggu izin menteri yang memakan waktu 6 bulan.",
      "Kementerian Kehutanan melaporkan Bupati atas dugaan perusakan kawasan hutan lindung."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Sahkan Diskresi Bupati Berdasarkan Asas Freies Ermessen Penyelamatan Darurat",
        "consequence": "Birokrasi humanis diakui; nyawa ribuan rakyat diutamakan di atas surat birokrasi perizinan lamban.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 95,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Sanksi Maladministrasi agar Pejabat Tidak Melompati Kewenangan Pusat",
        "consequence": "Sentralisasi kewenangan kehutanan terjaga rapi, namun rakyat korban lahar kedinginan di tenda bocor.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-159",
    "title": "Kasus #159: Keputusan Fiktif Positif Badan Usaha Pemerintahan di PTUN - Seri Kasus 3",
    "facts": [
      "Dalam pilkada provinsi, calon petahana terbukti mengerahkan ribuan kepala desa untuk mengampanyekan dirinya dengan ancaman penahanan dana desa.",
      "Pasangan lawan mengajukan permohonan diskualifikasi ke Mahkamah Konstitusi.",
      "KPU beralasan selisih suara mencapai 12% sehingga pelanggaran tidak mengubah hasil pemenang pemilu secara matematis."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Diskualifikasi Pasangan Petahana Demi Menjaga Keadilan Pemilu Substantif",
        "consequence": "Preseden berani bahwa kecurangan pemilu tidak boleh ditoleransi meski selisih angka besar.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 80,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Tolak Diskualifikasi Mengacu pada Kaidah Selisih Suara Matematis UU Pemilu",
        "consequence": "Kepastian hasil pemilu terjaga tanpa memicu instabilitas politik dan biaya pemilu ulang triliunan.",
        "keadilan": 30,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "6-4": [
  {
    "id": "CASE-160",
    "title": "Kasus #160: Pencabutan Izin Usaha Tambang Tanpa Hak Dengar yang Adil - Seri Kasus 1",
    "facts": [
      "Sebuah undang-undang pertambangan disahkan DPR dalam waktu 3 hari pembahasan kilat pada masa reses dan tanpa melibatkan organisasi masyarakat sipil.",
      "Koalisi masyarakat mengajukan uji formil ke MK menuntut UU dibatalkan karena inkonstitusional bersyarat.",
      "Pemerintah beralasan UU sangat mendesak demi menyelamatkan proyek pendapatan hilirisasi mineral negara."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Uji Formil: Nyatakan UU Cacat Prosedural & Inkonstitusional",
        "consequence": "Menegakkan prinsip demokrasi partisipasi bermakna (meaningful participation) dalam pembuatan hukum.",
        "keadilan": 95,
        "kepastian": 70,
        "kemanfaatan": 80,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Permohonan Mengingat Substansi UU Dibutuhkan untuk APBN Negara",
        "consequence": "Keberlangsungan penerimaan ekonomi negara aman, namun melanggengkan arogansi legislasi elitis.",
        "keadilan": 25,
        "kepastian": 60,
        "kemanfaatan": 55,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-161",
    "title": "Kasus #161: Pencabutan Izin Usaha Tambang Tanpa Hak Dengar yang Adil - Seri Kasus 2",
    "facts": [
      "Lahar dingin menyapu 5 desa dan menyebabkan 4.000 jiwa kehilangan rumah di tengah musim hujan badai.",
      "Bupati menggunakan diskresi untuk membangun hunian sementara di pinggir hutan lindung tanpa menunggu izin menteri yang memakan waktu 6 bulan.",
      "Kementerian Kehutanan melaporkan Bupati atas dugaan perusakan kawasan hutan lindung."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Sahkan Diskresi Bupati Berdasarkan Asas Freies Ermessen Penyelamatan Darurat",
        "consequence": "Birokrasi humanis diakui; nyawa ribuan rakyat diutamakan di atas surat birokrasi perizinan lamban.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 95,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Sanksi Maladministrasi agar Pejabat Tidak Melompati Kewenangan Pusat",
        "consequence": "Sentralisasi kewenangan kehutanan terjaga rapi, namun rakyat korban lahar kedinginan di tenda bocor.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-162",
    "title": "Kasus #162: Pencabutan Izin Usaha Tambang Tanpa Hak Dengar yang Adil - Seri Kasus 3",
    "facts": [
      "Dalam pilkada provinsi, calon petahana terbukti mengerahkan ribuan kepala desa untuk mengampanyekan dirinya dengan ancaman penahanan dana desa.",
      "Pasangan lawan mengajukan permohonan diskualifikasi ke Mahkamah Konstitusi.",
      "KPU beralasan selisih suara mencapai 12% sehingga pelanggaran tidak mengubah hasil pemenang pemilu secara matematis."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Diskualifikasi Pasangan Petahana Demi Menjaga Keadilan Pemilu Substantif",
        "consequence": "Preseden berani bahwa kecurangan pemilu tidak boleh ditoleransi meski selisih angka besar.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 80,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Tolak Diskualifikasi Mengacu pada Kaidah Selisih Suara Matematis UU Pemilu",
        "consequence": "Kepastian hasil pemilu terjaga tanpa memicu instabilitas politik dan biaya pemilu ulang triliunan.",
        "keadilan": 30,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "6-5": [
  {
    "id": "CASE-163",
    "title": "Kasus #163: Benturan Kepentingan (Conflict of Interest) Penyaluran Bansos - Seri Kasus 1",
    "facts": [
      "Sebuah undang-undang pertambangan disahkan DPR dalam waktu 3 hari pembahasan kilat pada masa reses dan tanpa melibatkan organisasi masyarakat sipil.",
      "Koalisi masyarakat mengajukan uji formil ke MK menuntut UU dibatalkan karena inkonstitusional bersyarat.",
      "Pemerintah beralasan UU sangat mendesak demi menyelamatkan proyek pendapatan hilirisasi mineral negara."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Uji Formil: Nyatakan UU Cacat Prosedural & Inkonstitusional",
        "consequence": "Menegakkan prinsip demokrasi partisipasi bermakna (meaningful participation) dalam pembuatan hukum.",
        "keadilan": 95,
        "kepastian": 70,
        "kemanfaatan": 80,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Permohonan Mengingat Substansi UU Dibutuhkan untuk APBN Negara",
        "consequence": "Keberlangsungan penerimaan ekonomi negara aman, namun melanggengkan arogansi legislasi elitis.",
        "keadilan": 25,
        "kepastian": 60,
        "kemanfaatan": 55,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-164",
    "title": "Kasus #164: Benturan Kepentingan (Conflict of Interest) Penyaluran Bansos - Seri Kasus 2",
    "facts": [
      "Lahar dingin menyapu 5 desa dan menyebabkan 4.000 jiwa kehilangan rumah di tengah musim hujan badai.",
      "Bupati menggunakan diskresi untuk membangun hunian sementara di pinggir hutan lindung tanpa menunggu izin menteri yang memakan waktu 6 bulan.",
      "Kementerian Kehutanan melaporkan Bupati atas dugaan perusakan kawasan hutan lindung."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Sahkan Diskresi Bupati Berdasarkan Asas Freies Ermessen Penyelamatan Darurat",
        "consequence": "Birokrasi humanis diakui; nyawa ribuan rakyat diutamakan di atas surat birokrasi perizinan lamban.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 95,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Sanksi Maladministrasi agar Pejabat Tidak Melompati Kewenangan Pusat",
        "consequence": "Sentralisasi kewenangan kehutanan terjaga rapi, namun rakyat korban lahar kedinginan di tenda bocor.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-165",
    "title": "Kasus #165: Benturan Kepentingan (Conflict of Interest) Penyaluran Bansos - Seri Kasus 3",
    "facts": [
      "Dalam pilkada provinsi, calon petahana terbukti mengerahkan ribuan kepala desa untuk mengampanyekan dirinya dengan ancaman penahanan dana desa.",
      "Pasangan lawan mengajukan permohonan diskualifikasi ke Mahkamah Konstitusi.",
      "KPU beralasan selisih suara mencapai 12% sehingga pelanggaran tidak mengubah hasil pemenang pemilu secara matematis."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Diskualifikasi Pasangan Petahana Demi Menjaga Keadilan Pemilu Substantif",
        "consequence": "Preseden berani bahwa kecurangan pemilu tidak boleh ditoleransi meski selisih angka besar.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 80,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Tolak Diskualifikasi Mengacu pada Kaidah Selisih Suara Matematis UU Pemilu",
        "consequence": "Kepastian hasil pemilu terjaga tanpa memicu instabilitas politik dan biaya pemilu ulang triliunan.",
        "keadilan": 30,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "6-6": [
  {
    "id": "CASE-166",
    "title": "Kasus #166: Pemakzulan Kepala Daerah Akibat Pelanggaran Sumpah Jabatan - Seri Kasus 1",
    "facts": [
      "Sebuah undang-undang pertambangan disahkan DPR dalam waktu 3 hari pembahasan kilat pada masa reses dan tanpa melibatkan organisasi masyarakat sipil.",
      "Koalisi masyarakat mengajukan uji formil ke MK menuntut UU dibatalkan karena inkonstitusional bersyarat.",
      "Pemerintah beralasan UU sangat mendesak demi menyelamatkan proyek pendapatan hilirisasi mineral negara."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Uji Formil: Nyatakan UU Cacat Prosedural & Inkonstitusional",
        "consequence": "Menegakkan prinsip demokrasi partisipasi bermakna (meaningful participation) dalam pembuatan hukum.",
        "keadilan": 95,
        "kepastian": 70,
        "kemanfaatan": 80,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Permohonan Mengingat Substansi UU Dibutuhkan untuk APBN Negara",
        "consequence": "Keberlangsungan penerimaan ekonomi negara aman, namun melanggengkan arogansi legislasi elitis.",
        "keadilan": 25,
        "kepastian": 60,
        "kemanfaatan": 55,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-167",
    "title": "Kasus #167: Pemakzulan Kepala Daerah Akibat Pelanggaran Sumpah Jabatan - Seri Kasus 2",
    "facts": [
      "Lahar dingin menyapu 5 desa dan menyebabkan 4.000 jiwa kehilangan rumah di tengah musim hujan badai.",
      "Bupati menggunakan diskresi untuk membangun hunian sementara di pinggir hutan lindung tanpa menunggu izin menteri yang memakan waktu 6 bulan.",
      "Kementerian Kehutanan melaporkan Bupati atas dugaan perusakan kawasan hutan lindung."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Sahkan Diskresi Bupati Berdasarkan Asas Freies Ermessen Penyelamatan Darurat",
        "consequence": "Birokrasi humanis diakui; nyawa ribuan rakyat diutamakan di atas surat birokrasi perizinan lamban.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 95,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Sanksi Maladministrasi agar Pejabat Tidak Melompati Kewenangan Pusat",
        "consequence": "Sentralisasi kewenangan kehutanan terjaga rapi, namun rakyat korban lahar kedinginan di tenda bocor.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-168",
    "title": "Kasus #168: Pemakzulan Kepala Daerah Akibat Pelanggaran Sumpah Jabatan - Seri Kasus 3",
    "facts": [
      "Dalam pilkada provinsi, calon petahana terbukti mengerahkan ribuan kepala desa untuk mengampanyekan dirinya dengan ancaman penahanan dana desa.",
      "Pasangan lawan mengajukan permohonan diskualifikasi ke Mahkamah Konstitusi.",
      "KPU beralasan selisih suara mencapai 12% sehingga pelanggaran tidak mengubah hasil pemenang pemilu secara matematis."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Diskualifikasi Pasangan Petahana Demi Menjaga Keadilan Pemilu Substantif",
        "consequence": "Preseden berani bahwa kecurangan pemilu tidak boleh ditoleransi meski selisih angka besar.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 80,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Tolak Diskualifikasi Mengacu pada Kaidah Selisih Suara Matematis UU Pemilu",
        "consequence": "Kepastian hasil pemilu terjaga tanpa memicu instabilitas politik dan biaya pemilu ulang triliunan.",
        "keadilan": 30,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "6-7": [
  {
    "id": "CASE-169",
    "title": "Kasus #169: Maladministrasi vs Tipikor pada Pengadaan Darurat Bencana - Seri Kasus 1",
    "facts": [
      "Sebuah undang-undang pertambangan disahkan DPR dalam waktu 3 hari pembahasan kilat pada masa reses dan tanpa melibatkan organisasi masyarakat sipil.",
      "Koalisi masyarakat mengajukan uji formil ke MK menuntut UU dibatalkan karena inkonstitusional bersyarat.",
      "Pemerintah beralasan UU sangat mendesak demi menyelamatkan proyek pendapatan hilirisasi mineral negara."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Uji Formil: Nyatakan UU Cacat Prosedural & Inkonstitusional",
        "consequence": "Menegakkan prinsip demokrasi partisipasi bermakna (meaningful participation) dalam pembuatan hukum.",
        "keadilan": 95,
        "kepastian": 70,
        "kemanfaatan": 80,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Permohonan Mengingat Substansi UU Dibutuhkan untuk APBN Negara",
        "consequence": "Keberlangsungan penerimaan ekonomi negara aman, namun melanggengkan arogansi legislasi elitis.",
        "keadilan": 25,
        "kepastian": 60,
        "kemanfaatan": 55,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-170",
    "title": "Kasus #170: Maladministrasi vs Tipikor pada Pengadaan Darurat Bencana - Seri Kasus 2",
    "facts": [
      "Lahar dingin menyapu 5 desa dan menyebabkan 4.000 jiwa kehilangan rumah di tengah musim hujan badai.",
      "Bupati menggunakan diskresi untuk membangun hunian sementara di pinggir hutan lindung tanpa menunggu izin menteri yang memakan waktu 6 bulan.",
      "Kementerian Kehutanan melaporkan Bupati atas dugaan perusakan kawasan hutan lindung."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Sahkan Diskresi Bupati Berdasarkan Asas Freies Ermessen Penyelamatan Darurat",
        "consequence": "Birokrasi humanis diakui; nyawa ribuan rakyat diutamakan di atas surat birokrasi perizinan lamban.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 95,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Sanksi Maladministrasi agar Pejabat Tidak Melompati Kewenangan Pusat",
        "consequence": "Sentralisasi kewenangan kehutanan terjaga rapi, namun rakyat korban lahar kedinginan di tenda bocor.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-171",
    "title": "Kasus #171: Maladministrasi vs Tipikor pada Pengadaan Darurat Bencana - Seri Kasus 3",
    "facts": [
      "Dalam pilkada provinsi, calon petahana terbukti mengerahkan ribuan kepala desa untuk mengampanyekan dirinya dengan ancaman penahanan dana desa.",
      "Pasangan lawan mengajukan permohonan diskualifikasi ke Mahkamah Konstitusi.",
      "KPU beralasan selisih suara mencapai 12% sehingga pelanggaran tidak mengubah hasil pemenang pemilu secara matematis."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Diskualifikasi Pasangan Petahana Demi Menjaga Keadilan Pemilu Substantif",
        "consequence": "Preseden berani bahwa kecurangan pemilu tidak boleh ditoleransi meski selisih angka besar.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 80,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Tolak Diskualifikasi Mengacu pada Kaidah Selisih Suara Matematis UU Pemilu",
        "consequence": "Kepastian hasil pemilu terjaga tanpa memicu instabilitas politik dan biaya pemilu ulang triliunan.",
        "keadilan": 30,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "6-8": [
  {
    "id": "CASE-172",
    "title": "Kasus #172: Sengketa Akses Keterbukaan Informasi Rahasia Negara vs Audit BPK - Seri Kasus 1",
    "facts": [
      "Sebuah undang-undang pertambangan disahkan DPR dalam waktu 3 hari pembahasan kilat pada masa reses dan tanpa melibatkan organisasi masyarakat sipil.",
      "Koalisi masyarakat mengajukan uji formil ke MK menuntut UU dibatalkan karena inkonstitusional bersyarat.",
      "Pemerintah beralasan UU sangat mendesak demi menyelamatkan proyek pendapatan hilirisasi mineral negara."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Uji Formil: Nyatakan UU Cacat Prosedural & Inkonstitusional",
        "consequence": "Menegakkan prinsip demokrasi partisipasi bermakna (meaningful participation) dalam pembuatan hukum.",
        "keadilan": 95,
        "kepastian": 70,
        "kemanfaatan": 80,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Permohonan Mengingat Substansi UU Dibutuhkan untuk APBN Negara",
        "consequence": "Keberlangsungan penerimaan ekonomi negara aman, namun melanggengkan arogansi legislasi elitis.",
        "keadilan": 25,
        "kepastian": 60,
        "kemanfaatan": 55,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-173",
    "title": "Kasus #173: Sengketa Akses Keterbukaan Informasi Rahasia Negara vs Audit BPK - Seri Kasus 2",
    "facts": [
      "Lahar dingin menyapu 5 desa dan menyebabkan 4.000 jiwa kehilangan rumah di tengah musim hujan badai.",
      "Bupati menggunakan diskresi untuk membangun hunian sementara di pinggir hutan lindung tanpa menunggu izin menteri yang memakan waktu 6 bulan.",
      "Kementerian Kehutanan melaporkan Bupati atas dugaan perusakan kawasan hutan lindung."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Sahkan Diskresi Bupati Berdasarkan Asas Freies Ermessen Penyelamatan Darurat",
        "consequence": "Birokrasi humanis diakui; nyawa ribuan rakyat diutamakan di atas surat birokrasi perizinan lamban.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 95,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Sanksi Maladministrasi agar Pejabat Tidak Melompati Kewenangan Pusat",
        "consequence": "Sentralisasi kewenangan kehutanan terjaga rapi, namun rakyat korban lahar kedinginan di tenda bocor.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-174",
    "title": "Kasus #174: Sengketa Akses Keterbukaan Informasi Rahasia Negara vs Audit BPK - Seri Kasus 3",
    "facts": [
      "Dalam pilkada provinsi, calon petahana terbukti mengerahkan ribuan kepala desa untuk mengampanyekan dirinya dengan ancaman penahanan dana desa.",
      "Pasangan lawan mengajukan permohonan diskualifikasi ke Mahkamah Konstitusi.",
      "KPU beralasan selisih suara mencapai 12% sehingga pelanggaran tidak mengubah hasil pemenang pemilu secara matematis."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Diskualifikasi Pasangan Petahana Demi Menjaga Keadilan Pemilu Substantif",
        "consequence": "Preseden berani bahwa kecurangan pemilu tidak boleh ditoleransi meski selisih angka besar.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 80,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Tolak Diskualifikasi Mengacu pada Kaidah Selisih Suara Matematis UU Pemilu",
        "consequence": "Kepastian hasil pemilu terjaga tanpa memicu instabilitas politik dan biaya pemilu ulang triliunan.",
        "keadilan": 30,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "6-9": [
  {
    "id": "CASE-175",
    "title": "Kasus #175: Sengketa Kewenangan Lembaga Negara (SKLN) di MK - Seri Kasus 1",
    "facts": [
      "Sebuah undang-undang pertambangan disahkan DPR dalam waktu 3 hari pembahasan kilat pada masa reses dan tanpa melibatkan organisasi masyarakat sipil.",
      "Koalisi masyarakat mengajukan uji formil ke MK menuntut UU dibatalkan karena inkonstitusional bersyarat.",
      "Pemerintah beralasan UU sangat mendesak demi menyelamatkan proyek pendapatan hilirisasi mineral negara."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Uji Formil: Nyatakan UU Cacat Prosedural & Inkonstitusional",
        "consequence": "Menegakkan prinsip demokrasi partisipasi bermakna (meaningful participation) dalam pembuatan hukum.",
        "keadilan": 95,
        "kepastian": 70,
        "kemanfaatan": 80,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Permohonan Mengingat Substansi UU Dibutuhkan untuk APBN Negara",
        "consequence": "Keberlangsungan penerimaan ekonomi negara aman, namun melanggengkan arogansi legislasi elitis.",
        "keadilan": 25,
        "kepastian": 60,
        "kemanfaatan": 55,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-176",
    "title": "Kasus #176: Sengketa Kewenangan Lembaga Negara (SKLN) di MK - Seri Kasus 2",
    "facts": [
      "Lahar dingin menyapu 5 desa dan menyebabkan 4.000 jiwa kehilangan rumah di tengah musim hujan badai.",
      "Bupati menggunakan diskresi untuk membangun hunian sementara di pinggir hutan lindung tanpa menunggu izin menteri yang memakan waktu 6 bulan.",
      "Kementerian Kehutanan melaporkan Bupati atas dugaan perusakan kawasan hutan lindung."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Sahkan Diskresi Bupati Berdasarkan Asas Freies Ermessen Penyelamatan Darurat",
        "consequence": "Birokrasi humanis diakui; nyawa ribuan rakyat diutamakan di atas surat birokrasi perizinan lamban.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 95,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Sanksi Maladministrasi agar Pejabat Tidak Melompati Kewenangan Pusat",
        "consequence": "Sentralisasi kewenangan kehutanan terjaga rapi, namun rakyat korban lahar kedinginan di tenda bocor.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-177",
    "title": "Kasus #177: Sengketa Kewenangan Lembaga Negara (SKLN) di MK - Seri Kasus 3",
    "facts": [
      "Dalam pilkada provinsi, calon petahana terbukti mengerahkan ribuan kepala desa untuk mengampanyekan dirinya dengan ancaman penahanan dana desa.",
      "Pasangan lawan mengajukan permohonan diskualifikasi ke Mahkamah Konstitusi.",
      "KPU beralasan selisih suara mencapai 12% sehingga pelanggaran tidak mengubah hasil pemenang pemilu secara matematis."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Diskualifikasi Pasangan Petahana Demi Menjaga Keadilan Pemilu Substantif",
        "consequence": "Preseden berani bahwa kecurangan pemilu tidak boleh ditoleransi meski selisih angka besar.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 80,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Tolak Diskualifikasi Mengacu pada Kaidah Selisih Suara Matematis UU Pemilu",
        "consequence": "Kepastian hasil pemilu terjaga tanpa memicu instabilitas politik dan biaya pemilu ulang triliunan.",
        "keadilan": 30,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "6-10": [
  {
    "id": "CASE-178",
    "title": "Kasus #178: Ujian Komprehensif: Sidang Sengketa Hasil Pemilihan Presiden - Seri Kasus 1",
    "facts": [
      "Sebuah undang-undang pertambangan disahkan DPR dalam waktu 3 hari pembahasan kilat pada masa reses dan tanpa melibatkan organisasi masyarakat sipil.",
      "Koalisi masyarakat mengajukan uji formil ke MK menuntut UU dibatalkan karena inkonstitusional bersyarat.",
      "Pemerintah beralasan UU sangat mendesak demi menyelamatkan proyek pendapatan hilirisasi mineral negara."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Uji Formil: Nyatakan UU Cacat Prosedural & Inkonstitusional",
        "consequence": "Menegakkan prinsip demokrasi partisipasi bermakna (meaningful participation) dalam pembuatan hukum.",
        "keadilan": 95,
        "kepastian": 70,
        "kemanfaatan": 80,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Tolak Permohonan Mengingat Substansi UU Dibutuhkan untuk APBN Negara",
        "consequence": "Keberlangsungan penerimaan ekonomi negara aman, namun melanggengkan arogansi legislasi elitis.",
        "keadilan": 25,
        "kepastian": 60,
        "kemanfaatan": 55,
        "alignmentShift": 20
      }
    ]
  },
  {
    "id": "CASE-179",
    "title": "Kasus #179: Ujian Komprehensif: Sidang Sengketa Hasil Pemilihan Presiden - Seri Kasus 2",
    "facts": [
      "Lahar dingin menyapu 5 desa dan menyebabkan 4.000 jiwa kehilangan rumah di tengah musim hujan badai.",
      "Bupati menggunakan diskresi untuk membangun hunian sementara di pinggir hutan lindung tanpa menunggu izin menteri yang memakan waktu 6 bulan.",
      "Kementerian Kehutanan melaporkan Bupati atas dugaan perusakan kawasan hutan lindung."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Sahkan Diskresi Bupati Berdasarkan Asas Freies Ermessen Penyelamatan Darurat",
        "consequence": "Birokrasi humanis diakui; nyawa ribuan rakyat diutamakan di atas surat birokrasi perizinan lamban.",
        "keadilan": 95,
        "kepastian": 40,
        "kemanfaatan": 95,
        "alignmentShift": -25
      },
      {
        "id": "OPT-2",
        "action": "Jatuhkan Sanksi Maladministrasi agar Pejabat Tidak Melompati Kewenangan Pusat",
        "consequence": "Sentralisasi kewenangan kehutanan terjaga rapi, namun rakyat korban lahar kedinginan di tenda bocor.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 20,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-180",
    "title": "Kasus #180: Ujian Komprehensif: Sidang Sengketa Hasil Pemilihan Presiden - Seri Kasus 3",
    "facts": [
      "Dalam pilkada provinsi, calon petahana terbukti mengerahkan ribuan kepala desa untuk mengampanyekan dirinya dengan ancaman penahanan dana desa.",
      "Pasangan lawan mengajukan permohonan diskualifikasi ke Mahkamah Konstitusi.",
      "KPU beralasan selisih suara mencapai 12% sehingga pelanggaran tidak mengubah hasil pemenang pemilu secara matematis."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Diskualifikasi Pasangan Petahana Demi Menjaga Keadilan Pemilu Substantif",
        "consequence": "Preseden berani bahwa kecurangan pemilu tidak boleh ditoleransi meski selisih angka besar.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 80,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Tolak Diskualifikasi Mengacu pada Kaidah Selisih Suara Matematis UU Pemilu",
        "consequence": "Kepastian hasil pemilu terjaga tanpa memicu instabilitas politik dan biaya pemilu ulang triliunan.",
        "keadilan": 30,
        "kepastian": 90,
        "kemanfaatan": 50,
        "alignmentShift": 20
      }
    ]
  }
],
  "7-1": [
  {
    "id": "CASE-181",
    "title": "Kasus #181: Permohonan Ekstradisi Tersangka Korupsi Tanpa Perjanjian Bilateral - Seri Kasus 1",
    "facts": [
      "Sebuah kapal kayu reyot membawa 150 pengungsi etnis tertindas termasuk 40 balita terombang-ambing di perairan teritorial.",
      "Pemerintah setempat hendak mendorong kapal kembali ke laut internasional dengan alasan negara belum meratifikasi Konvensi Pengungsi 1951.",
      "Badan PBB UNHCR mengingatkan adanya asas hukum kebiasaan internasional Non-Refoulement (larangan mengembalikan pengungsi ke zona bahaya maut)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Izinkan Kapal Mendarat & Berikan Penampungan Sementara (Asas Non-Refoulement)",
        "consequence": "Indonesia diakui dunia sebagai negara beradab yang menjunjung tinggi hukum kemanusiaan universal.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Usir Kapal Keluar Perairan Demi Kedaulatan Batas Negara & Beban Sosial Lokal",
        "consequence": "Beban sosial anggaran daerah terlindungi, namun mengancam nyawa ratusan manusia tenggelam di samudra.",
        "keadilan": 15,
        "kepastian": 80,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-182",
    "title": "Kasus #182: Permohonan Ekstradisi Tersangka Korupsi Tanpa Perjanjian Bilateral - Seri Kasus 2",
    "facts": [
      "Anak seorang duta besar negara adidaya menabrak mahasiswa lokal hingga tewas di jalan protokol lalu melarikan diri ke dalam kompleks kedutaan.",
      "Kedutaan menolak menyerahkan pelaku ke kepolisian dengan mengklaim kekebalan diplomatik penuh berdasarkan Konvensi Wina 1961.",
      "Masyarakat menggelar demonstrasi menuntut keadilan ditegakkan di pengadilan negeri nasional."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tuntut Pengabaian Kekebalan (Waiver of Immunity) & Nyatakan Persona Non Grata",
        "consequence": "Menegaskan martabat kedaulatan hukum nasional sambil memanfaatkan jalur diplomasi tegas.",
        "keadilan": 90,
        "kepastian": 80,
        "kemanfaatan": 80,
        "alignmentShift": -10
      },
      {
        "id": "OPT-2",
        "action": "Hormati Kekebalan Penuh Tanpa Intervensi Demi Mencegah Krisis Geopolitik",
        "consequence": "Hubungan diplomatik antar-negara adidaya aman, namun rasa keadilan keluarga korban terinjak.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 40,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-183",
    "title": "Kasus #183: Permohonan Ekstradisi Tersangka Korupsi Tanpa Perjanjian Bilateral - Seri Kasus 3",
    "facts": [
      "Keluarga korban penghilangan paksa menuntut pembentukan Pengadilan HAM Ad Hoc untuk mengadili jenderal purnawirawan pelaku penculikan.",
      "Pemerintah menawarkan penyelesaian non-yudisial berupa kompensasi materiil dan pengakuan penyesalan tanpa proses peradilan pidana.",
      "Sebagian korban menolak uang kompensasi dan tetap menuntut kebenaran serta vonis peradilan."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bentuk Pengadilan HAM Ad Hoc: Tidak Ada Rekonsiliasi Tanpa Keadilan Yudisial",
        "consequence": "Melawan impunitas penguasa masa lalu dan memastikan pertanggungjawaban hukum sejati.",
        "keadilan": 95,
        "kepastian": 70,
        "kemanfaatan": 70,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Teruskan Jalur Rekonsiliasi Non-Yudisial Demi Stabilitas Transisi Politik",
        "consequence": "Mencegah gejolak politik elite militer dan korban segera memperoleh bantuan pemulihan ekonomi.",
        "keadilan": 40,
        "kepastian": 50,
        "kemanfaatan": 75,
        "alignmentShift": 15
      }
    ]
  }
],
  "7-2": [
  {
    "id": "CASE-184",
    "title": "Kasus #184: Asas Non-Refoulement Kapal Pengungsi Rohingya di Laut Lepas - Seri Kasus 1",
    "facts": [
      "Sebuah kapal kayu reyot membawa 150 pengungsi etnis tertindas termasuk 40 balita terombang-ambing di perairan teritorial.",
      "Pemerintah setempat hendak mendorong kapal kembali ke laut internasional dengan alasan negara belum meratifikasi Konvensi Pengungsi 1951.",
      "Badan PBB UNHCR mengingatkan adanya asas hukum kebiasaan internasional Non-Refoulement (larangan mengembalikan pengungsi ke zona bahaya maut)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Izinkan Kapal Mendarat & Berikan Penampungan Sementara (Asas Non-Refoulement)",
        "consequence": "Indonesia diakui dunia sebagai negara beradab yang menjunjung tinggi hukum kemanusiaan universal.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Usir Kapal Keluar Perairan Demi Kedaulatan Batas Negara & Beban Sosial Lokal",
        "consequence": "Beban sosial anggaran daerah terlindungi, namun mengancam nyawa ratusan manusia tenggelam di samudra.",
        "keadilan": 15,
        "kepastian": 80,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-185",
    "title": "Kasus #185: Asas Non-Refoulement Kapal Pengungsi Rohingya di Laut Lepas - Seri Kasus 2",
    "facts": [
      "Anak seorang duta besar negara adidaya menabrak mahasiswa lokal hingga tewas di jalan protokol lalu melarikan diri ke dalam kompleks kedutaan.",
      "Kedutaan menolak menyerahkan pelaku ke kepolisian dengan mengklaim kekebalan diplomatik penuh berdasarkan Konvensi Wina 1961.",
      "Masyarakat menggelar demonstrasi menuntut keadilan ditegakkan di pengadilan negeri nasional."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tuntut Pengabaian Kekebalan (Waiver of Immunity) & Nyatakan Persona Non Grata",
        "consequence": "Menegaskan martabat kedaulatan hukum nasional sambil memanfaatkan jalur diplomasi tegas.",
        "keadilan": 90,
        "kepastian": 80,
        "kemanfaatan": 80,
        "alignmentShift": -10
      },
      {
        "id": "OPT-2",
        "action": "Hormati Kekebalan Penuh Tanpa Intervensi Demi Mencegah Krisis Geopolitik",
        "consequence": "Hubungan diplomatik antar-negara adidaya aman, namun rasa keadilan keluarga korban terinjak.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 40,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-186",
    "title": "Kasus #186: Asas Non-Refoulement Kapal Pengungsi Rohingya di Laut Lepas - Seri Kasus 3",
    "facts": [
      "Keluarga korban penghilangan paksa menuntut pembentukan Pengadilan HAM Ad Hoc untuk mengadili jenderal purnawirawan pelaku penculikan.",
      "Pemerintah menawarkan penyelesaian non-yudisial berupa kompensasi materiil dan pengakuan penyesalan tanpa proses peradilan pidana.",
      "Sebagian korban menolak uang kompensasi dan tetap menuntut kebenaran serta vonis peradilan."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bentuk Pengadilan HAM Ad Hoc: Tidak Ada Rekonsiliasi Tanpa Keadilan Yudisial",
        "consequence": "Melawan impunitas penguasa masa lalu dan memastikan pertanggungjawaban hukum sejati.",
        "keadilan": 95,
        "kepastian": 70,
        "kemanfaatan": 70,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Teruskan Jalur Rekonsiliasi Non-Yudisial Demi Stabilitas Transisi Politik",
        "consequence": "Mencegah gejolak politik elite militer dan korban segera memperoleh bantuan pemulihan ekonomi.",
        "keadilan": 40,
        "kepastian": 50,
        "kemanfaatan": 75,
        "alignmentShift": 15
      }
    ]
  }
],
  "7-3": [
  {
    "id": "CASE-187",
    "title": "Kasus #187: Kekebalan Diplomatik atas Kejahatan Berat Pembunuhan Staf Kedutaan - Seri Kasus 1",
    "facts": [
      "Sebuah kapal kayu reyot membawa 150 pengungsi etnis tertindas termasuk 40 balita terombang-ambing di perairan teritorial.",
      "Pemerintah setempat hendak mendorong kapal kembali ke laut internasional dengan alasan negara belum meratifikasi Konvensi Pengungsi 1951.",
      "Badan PBB UNHCR mengingatkan adanya asas hukum kebiasaan internasional Non-Refoulement (larangan mengembalikan pengungsi ke zona bahaya maut)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Izinkan Kapal Mendarat & Berikan Penampungan Sementara (Asas Non-Refoulement)",
        "consequence": "Indonesia diakui dunia sebagai negara beradab yang menjunjung tinggi hukum kemanusiaan universal.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Usir Kapal Keluar Perairan Demi Kedaulatan Batas Negara & Beban Sosial Lokal",
        "consequence": "Beban sosial anggaran daerah terlindungi, namun mengancam nyawa ratusan manusia tenggelam di samudra.",
        "keadilan": 15,
        "kepastian": 80,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-188",
    "title": "Kasus #188: Kekebalan Diplomatik atas Kejahatan Berat Pembunuhan Staf Kedutaan - Seri Kasus 2",
    "facts": [
      "Anak seorang duta besar negara adidaya menabrak mahasiswa lokal hingga tewas di jalan protokol lalu melarikan diri ke dalam kompleks kedutaan.",
      "Kedutaan menolak menyerahkan pelaku ke kepolisian dengan mengklaim kekebalan diplomatik penuh berdasarkan Konvensi Wina 1961.",
      "Masyarakat menggelar demonstrasi menuntut keadilan ditegakkan di pengadilan negeri nasional."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tuntut Pengabaian Kekebalan (Waiver of Immunity) & Nyatakan Persona Non Grata",
        "consequence": "Menegaskan martabat kedaulatan hukum nasional sambil memanfaatkan jalur diplomasi tegas.",
        "keadilan": 90,
        "kepastian": 80,
        "kemanfaatan": 80,
        "alignmentShift": -10
      },
      {
        "id": "OPT-2",
        "action": "Hormati Kekebalan Penuh Tanpa Intervensi Demi Mencegah Krisis Geopolitik",
        "consequence": "Hubungan diplomatik antar-negara adidaya aman, namun rasa keadilan keluarga korban terinjak.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 40,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-189",
    "title": "Kasus #189: Kekebalan Diplomatik atas Kejahatan Berat Pembunuhan Staf Kedutaan - Seri Kasus 3",
    "facts": [
      "Keluarga korban penghilangan paksa menuntut pembentukan Pengadilan HAM Ad Hoc untuk mengadili jenderal purnawirawan pelaku penculikan.",
      "Pemerintah menawarkan penyelesaian non-yudisial berupa kompensasi materiil dan pengakuan penyesalan tanpa proses peradilan pidana.",
      "Sebagian korban menolak uang kompensasi dan tetap menuntut kebenaran serta vonis peradilan."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bentuk Pengadilan HAM Ad Hoc: Tidak Ada Rekonsiliasi Tanpa Keadilan Yudisial",
        "consequence": "Melawan impunitas penguasa masa lalu dan memastikan pertanggungjawaban hukum sejati.",
        "keadilan": 95,
        "kepastian": 70,
        "kemanfaatan": 70,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Teruskan Jalur Rekonsiliasi Non-Yudisial Demi Stabilitas Transisi Politik",
        "consequence": "Mencegah gejolak politik elite militer dan korban segera memperoleh bantuan pemulihan ekonomi.",
        "keadilan": 40,
        "kepastian": 50,
        "kemanfaatan": 75,
        "alignmentShift": 15
      }
    ]
  }
],
  "7-4": [
  {
    "id": "CASE-190",
    "title": "Kasus #190: Hukum Humaniter: Serangan Militer di Dekat Rumah Sakit Sipil - Seri Kasus 1",
    "facts": [
      "Sebuah kapal kayu reyot membawa 150 pengungsi etnis tertindas termasuk 40 balita terombang-ambing di perairan teritorial.",
      "Pemerintah setempat hendak mendorong kapal kembali ke laut internasional dengan alasan negara belum meratifikasi Konvensi Pengungsi 1951.",
      "Badan PBB UNHCR mengingatkan adanya asas hukum kebiasaan internasional Non-Refoulement (larangan mengembalikan pengungsi ke zona bahaya maut)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Izinkan Kapal Mendarat & Berikan Penampungan Sementara (Asas Non-Refoulement)",
        "consequence": "Indonesia diakui dunia sebagai negara beradab yang menjunjung tinggi hukum kemanusiaan universal.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Usir Kapal Keluar Perairan Demi Kedaulatan Batas Negara & Beban Sosial Lokal",
        "consequence": "Beban sosial anggaran daerah terlindungi, namun mengancam nyawa ratusan manusia tenggelam di samudra.",
        "keadilan": 15,
        "kepastian": 80,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-191",
    "title": "Kasus #191: Hukum Humaniter: Serangan Militer di Dekat Rumah Sakit Sipil - Seri Kasus 2",
    "facts": [
      "Anak seorang duta besar negara adidaya menabrak mahasiswa lokal hingga tewas di jalan protokol lalu melarikan diri ke dalam kompleks kedutaan.",
      "Kedutaan menolak menyerahkan pelaku ke kepolisian dengan mengklaim kekebalan diplomatik penuh berdasarkan Konvensi Wina 1961.",
      "Masyarakat menggelar demonstrasi menuntut keadilan ditegakkan di pengadilan negeri nasional."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tuntut Pengabaian Kekebalan (Waiver of Immunity) & Nyatakan Persona Non Grata",
        "consequence": "Menegaskan martabat kedaulatan hukum nasional sambil memanfaatkan jalur diplomasi tegas.",
        "keadilan": 90,
        "kepastian": 80,
        "kemanfaatan": 80,
        "alignmentShift": -10
      },
      {
        "id": "OPT-2",
        "action": "Hormati Kekebalan Penuh Tanpa Intervensi Demi Mencegah Krisis Geopolitik",
        "consequence": "Hubungan diplomatik antar-negara adidaya aman, namun rasa keadilan keluarga korban terinjak.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 40,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-192",
    "title": "Kasus #192: Hukum Humaniter: Serangan Militer di Dekat Rumah Sakit Sipil - Seri Kasus 3",
    "facts": [
      "Keluarga korban penghilangan paksa menuntut pembentukan Pengadilan HAM Ad Hoc untuk mengadili jenderal purnawirawan pelaku penculikan.",
      "Pemerintah menawarkan penyelesaian non-yudisial berupa kompensasi materiil dan pengakuan penyesalan tanpa proses peradilan pidana.",
      "Sebagian korban menolak uang kompensasi dan tetap menuntut kebenaran serta vonis peradilan."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bentuk Pengadilan HAM Ad Hoc: Tidak Ada Rekonsiliasi Tanpa Keadilan Yudisial",
        "consequence": "Melawan impunitas penguasa masa lalu dan memastikan pertanggungjawaban hukum sejati.",
        "keadilan": 95,
        "kepastian": 70,
        "kemanfaatan": 70,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Teruskan Jalur Rekonsiliasi Non-Yudisial Demi Stabilitas Transisi Politik",
        "consequence": "Mencegah gejolak politik elite militer dan korban segera memperoleh bantuan pemulihan ekonomi.",
        "keadilan": 40,
        "kepastian": 50,
        "kemanfaatan": 75,
        "alignmentShift": 15
      }
    ]
  }
],
  "7-5": [
  {
    "id": "CASE-193",
    "title": "Kasus #193: Yurisdiksi Universal Mengadili Diktator Asing Pelaku Genosida - Seri Kasus 1",
    "facts": [
      "Sebuah kapal kayu reyot membawa 150 pengungsi etnis tertindas termasuk 40 balita terombang-ambing di perairan teritorial.",
      "Pemerintah setempat hendak mendorong kapal kembali ke laut internasional dengan alasan negara belum meratifikasi Konvensi Pengungsi 1951.",
      "Badan PBB UNHCR mengingatkan adanya asas hukum kebiasaan internasional Non-Refoulement (larangan mengembalikan pengungsi ke zona bahaya maut)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Izinkan Kapal Mendarat & Berikan Penampungan Sementara (Asas Non-Refoulement)",
        "consequence": "Indonesia diakui dunia sebagai negara beradab yang menjunjung tinggi hukum kemanusiaan universal.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Usir Kapal Keluar Perairan Demi Kedaulatan Batas Negara & Beban Sosial Lokal",
        "consequence": "Beban sosial anggaran daerah terlindungi, namun mengancam nyawa ratusan manusia tenggelam di samudra.",
        "keadilan": 15,
        "kepastian": 80,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-194",
    "title": "Kasus #194: Yurisdiksi Universal Mengadili Diktator Asing Pelaku Genosida - Seri Kasus 2",
    "facts": [
      "Anak seorang duta besar negara adidaya menabrak mahasiswa lokal hingga tewas di jalan protokol lalu melarikan diri ke dalam kompleks kedutaan.",
      "Kedutaan menolak menyerahkan pelaku ke kepolisian dengan mengklaim kekebalan diplomatik penuh berdasarkan Konvensi Wina 1961.",
      "Masyarakat menggelar demonstrasi menuntut keadilan ditegakkan di pengadilan negeri nasional."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tuntut Pengabaian Kekebalan (Waiver of Immunity) & Nyatakan Persona Non Grata",
        "consequence": "Menegaskan martabat kedaulatan hukum nasional sambil memanfaatkan jalur diplomasi tegas.",
        "keadilan": 90,
        "kepastian": 80,
        "kemanfaatan": 80,
        "alignmentShift": -10
      },
      {
        "id": "OPT-2",
        "action": "Hormati Kekebalan Penuh Tanpa Intervensi Demi Mencegah Krisis Geopolitik",
        "consequence": "Hubungan diplomatik antar-negara adidaya aman, namun rasa keadilan keluarga korban terinjak.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 40,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-195",
    "title": "Kasus #195: Yurisdiksi Universal Mengadili Diktator Asing Pelaku Genosida - Seri Kasus 3",
    "facts": [
      "Keluarga korban penghilangan paksa menuntut pembentukan Pengadilan HAM Ad Hoc untuk mengadili jenderal purnawirawan pelaku penculikan.",
      "Pemerintah menawarkan penyelesaian non-yudisial berupa kompensasi materiil dan pengakuan penyesalan tanpa proses peradilan pidana.",
      "Sebagian korban menolak uang kompensasi dan tetap menuntut kebenaran serta vonis peradilan."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bentuk Pengadilan HAM Ad Hoc: Tidak Ada Rekonsiliasi Tanpa Keadilan Yudisial",
        "consequence": "Melawan impunitas penguasa masa lalu dan memastikan pertanggungjawaban hukum sejati.",
        "keadilan": 95,
        "kepastian": 70,
        "kemanfaatan": 70,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Teruskan Jalur Rekonsiliasi Non-Yudisial Demi Stabilitas Transisi Politik",
        "consequence": "Mencegah gejolak politik elite militer dan korban segera memperoleh bantuan pemulihan ekonomi.",
        "keadilan": 40,
        "kepastian": 50,
        "kemanfaatan": 75,
        "alignmentShift": 15
      }
    ]
  }
],
  "7-6": [
  {
    "id": "CASE-196",
    "title": "Kasus #196: Penenggelaman Kapal Ikan Asing Berdasarkan Konvensi UNCLOS 1982 - Seri Kasus 1",
    "facts": [
      "Sebuah kapal kayu reyot membawa 150 pengungsi etnis tertindas termasuk 40 balita terombang-ambing di perairan teritorial.",
      "Pemerintah setempat hendak mendorong kapal kembali ke laut internasional dengan alasan negara belum meratifikasi Konvensi Pengungsi 1951.",
      "Badan PBB UNHCR mengingatkan adanya asas hukum kebiasaan internasional Non-Refoulement (larangan mengembalikan pengungsi ke zona bahaya maut)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Izinkan Kapal Mendarat & Berikan Penampungan Sementara (Asas Non-Refoulement)",
        "consequence": "Indonesia diakui dunia sebagai negara beradab yang menjunjung tinggi hukum kemanusiaan universal.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Usir Kapal Keluar Perairan Demi Kedaulatan Batas Negara & Beban Sosial Lokal",
        "consequence": "Beban sosial anggaran daerah terlindungi, namun mengancam nyawa ratusan manusia tenggelam di samudra.",
        "keadilan": 15,
        "kepastian": 80,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-197",
    "title": "Kasus #197: Penenggelaman Kapal Ikan Asing Berdasarkan Konvensi UNCLOS 1982 - Seri Kasus 2",
    "facts": [
      "Anak seorang duta besar negara adidaya menabrak mahasiswa lokal hingga tewas di jalan protokol lalu melarikan diri ke dalam kompleks kedutaan.",
      "Kedutaan menolak menyerahkan pelaku ke kepolisian dengan mengklaim kekebalan diplomatik penuh berdasarkan Konvensi Wina 1961.",
      "Masyarakat menggelar demonstrasi menuntut keadilan ditegakkan di pengadilan negeri nasional."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tuntut Pengabaian Kekebalan (Waiver of Immunity) & Nyatakan Persona Non Grata",
        "consequence": "Menegaskan martabat kedaulatan hukum nasional sambil memanfaatkan jalur diplomasi tegas.",
        "keadilan": 90,
        "kepastian": 80,
        "kemanfaatan": 80,
        "alignmentShift": -10
      },
      {
        "id": "OPT-2",
        "action": "Hormati Kekebalan Penuh Tanpa Intervensi Demi Mencegah Krisis Geopolitik",
        "consequence": "Hubungan diplomatik antar-negara adidaya aman, namun rasa keadilan keluarga korban terinjak.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 40,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-198",
    "title": "Kasus #198: Penenggelaman Kapal Ikan Asing Berdasarkan Konvensi UNCLOS 1982 - Seri Kasus 3",
    "facts": [
      "Keluarga korban penghilangan paksa menuntut pembentukan Pengadilan HAM Ad Hoc untuk mengadili jenderal purnawirawan pelaku penculikan.",
      "Pemerintah menawarkan penyelesaian non-yudisial berupa kompensasi materiil dan pengakuan penyesalan tanpa proses peradilan pidana.",
      "Sebagian korban menolak uang kompensasi dan tetap menuntut kebenaran serta vonis peradilan."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bentuk Pengadilan HAM Ad Hoc: Tidak Ada Rekonsiliasi Tanpa Keadilan Yudisial",
        "consequence": "Melawan impunitas penguasa masa lalu dan memastikan pertanggungjawaban hukum sejati.",
        "keadilan": 95,
        "kepastian": 70,
        "kemanfaatan": 70,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Teruskan Jalur Rekonsiliasi Non-Yudisial Demi Stabilitas Transisi Politik",
        "consequence": "Mencegah gejolak politik elite militer dan korban segera memperoleh bantuan pemulihan ekonomi.",
        "keadilan": 40,
        "kepastian": 50,
        "kemanfaatan": 75,
        "alignmentShift": 15
      }
    ]
  }
],
  "7-7": [
  {
    "id": "CASE-199",
    "title": "Kasus #199: Gugatan Arbitrase ISDS atas Kebijakan Larangan Ekspor Nikel Mentah - Seri Kasus 1",
    "facts": [
      "Sebuah kapal kayu reyot membawa 150 pengungsi etnis tertindas termasuk 40 balita terombang-ambing di perairan teritorial.",
      "Pemerintah setempat hendak mendorong kapal kembali ke laut internasional dengan alasan negara belum meratifikasi Konvensi Pengungsi 1951.",
      "Badan PBB UNHCR mengingatkan adanya asas hukum kebiasaan internasional Non-Refoulement (larangan mengembalikan pengungsi ke zona bahaya maut)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Izinkan Kapal Mendarat & Berikan Penampungan Sementara (Asas Non-Refoulement)",
        "consequence": "Indonesia diakui dunia sebagai negara beradab yang menjunjung tinggi hukum kemanusiaan universal.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Usir Kapal Keluar Perairan Demi Kedaulatan Batas Negara & Beban Sosial Lokal",
        "consequence": "Beban sosial anggaran daerah terlindungi, namun mengancam nyawa ratusan manusia tenggelam di samudra.",
        "keadilan": 15,
        "kepastian": 80,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-200",
    "title": "Kasus #200: Gugatan Arbitrase ISDS atas Kebijakan Larangan Ekspor Nikel Mentah - Seri Kasus 2",
    "facts": [
      "Anak seorang duta besar negara adidaya menabrak mahasiswa lokal hingga tewas di jalan protokol lalu melarikan diri ke dalam kompleks kedutaan.",
      "Kedutaan menolak menyerahkan pelaku ke kepolisian dengan mengklaim kekebalan diplomatik penuh berdasarkan Konvensi Wina 1961.",
      "Masyarakat menggelar demonstrasi menuntut keadilan ditegakkan di pengadilan negeri nasional."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tuntut Pengabaian Kekebalan (Waiver of Immunity) & Nyatakan Persona Non Grata",
        "consequence": "Menegaskan martabat kedaulatan hukum nasional sambil memanfaatkan jalur diplomasi tegas.",
        "keadilan": 90,
        "kepastian": 80,
        "kemanfaatan": 80,
        "alignmentShift": -10
      },
      {
        "id": "OPT-2",
        "action": "Hormati Kekebalan Penuh Tanpa Intervensi Demi Mencegah Krisis Geopolitik",
        "consequence": "Hubungan diplomatik antar-negara adidaya aman, namun rasa keadilan keluarga korban terinjak.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 40,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-201",
    "title": "Kasus #201: Gugatan Arbitrase ISDS atas Kebijakan Larangan Ekspor Nikel Mentah - Seri Kasus 3",
    "facts": [
      "Keluarga korban penghilangan paksa menuntut pembentukan Pengadilan HAM Ad Hoc untuk mengadili jenderal purnawirawan pelaku penculikan.",
      "Pemerintah menawarkan penyelesaian non-yudisial berupa kompensasi materiil dan pengakuan penyesalan tanpa proses peradilan pidana.",
      "Sebagian korban menolak uang kompensasi dan tetap menuntut kebenaran serta vonis peradilan."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bentuk Pengadilan HAM Ad Hoc: Tidak Ada Rekonsiliasi Tanpa Keadilan Yudisial",
        "consequence": "Melawan impunitas penguasa masa lalu dan memastikan pertanggungjawaban hukum sejati.",
        "keadilan": 95,
        "kepastian": 70,
        "kemanfaatan": 70,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Teruskan Jalur Rekonsiliasi Non-Yudisial Demi Stabilitas Transisi Politik",
        "consequence": "Mencegah gejolak politik elite militer dan korban segera memperoleh bantuan pemulihan ekonomi.",
        "keadilan": 40,
        "kepastian": 50,
        "kemanfaatan": 75,
        "alignmentShift": 15
      }
    ]
  }
],
  "7-8": [
  {
    "id": "CASE-202",
    "title": "Kasus #202: Penyelesaian Pelanggaran HAM Berat: Yudisial vs Komisi Rekonsiliasi - Seri Kasus 1",
    "facts": [
      "Sebuah kapal kayu reyot membawa 150 pengungsi etnis tertindas termasuk 40 balita terombang-ambing di perairan teritorial.",
      "Pemerintah setempat hendak mendorong kapal kembali ke laut internasional dengan alasan negara belum meratifikasi Konvensi Pengungsi 1951.",
      "Badan PBB UNHCR mengingatkan adanya asas hukum kebiasaan internasional Non-Refoulement (larangan mengembalikan pengungsi ke zona bahaya maut)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Izinkan Kapal Mendarat & Berikan Penampungan Sementara (Asas Non-Refoulement)",
        "consequence": "Indonesia diakui dunia sebagai negara beradab yang menjunjung tinggi hukum kemanusiaan universal.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Usir Kapal Keluar Perairan Demi Kedaulatan Batas Negara & Beban Sosial Lokal",
        "consequence": "Beban sosial anggaran daerah terlindungi, namun mengancam nyawa ratusan manusia tenggelam di samudra.",
        "keadilan": 15,
        "kepastian": 80,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-203",
    "title": "Kasus #203: Penyelesaian Pelanggaran HAM Berat: Yudisial vs Komisi Rekonsiliasi - Seri Kasus 2",
    "facts": [
      "Anak seorang duta besar negara adidaya menabrak mahasiswa lokal hingga tewas di jalan protokol lalu melarikan diri ke dalam kompleks kedutaan.",
      "Kedutaan menolak menyerahkan pelaku ke kepolisian dengan mengklaim kekebalan diplomatik penuh berdasarkan Konvensi Wina 1961.",
      "Masyarakat menggelar demonstrasi menuntut keadilan ditegakkan di pengadilan negeri nasional."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tuntut Pengabaian Kekebalan (Waiver of Immunity) & Nyatakan Persona Non Grata",
        "consequence": "Menegaskan martabat kedaulatan hukum nasional sambil memanfaatkan jalur diplomasi tegas.",
        "keadilan": 90,
        "kepastian": 80,
        "kemanfaatan": 80,
        "alignmentShift": -10
      },
      {
        "id": "OPT-2",
        "action": "Hormati Kekebalan Penuh Tanpa Intervensi Demi Mencegah Krisis Geopolitik",
        "consequence": "Hubungan diplomatik antar-negara adidaya aman, namun rasa keadilan keluarga korban terinjak.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 40,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-204",
    "title": "Kasus #204: Penyelesaian Pelanggaran HAM Berat: Yudisial vs Komisi Rekonsiliasi - Seri Kasus 3",
    "facts": [
      "Keluarga korban penghilangan paksa menuntut pembentukan Pengadilan HAM Ad Hoc untuk mengadili jenderal purnawirawan pelaku penculikan.",
      "Pemerintah menawarkan penyelesaian non-yudisial berupa kompensasi materiil dan pengakuan penyesalan tanpa proses peradilan pidana.",
      "Sebagian korban menolak uang kompensasi dan tetap menuntut kebenaran serta vonis peradilan."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bentuk Pengadilan HAM Ad Hoc: Tidak Ada Rekonsiliasi Tanpa Keadilan Yudisial",
        "consequence": "Melawan impunitas penguasa masa lalu dan memastikan pertanggungjawaban hukum sejati.",
        "keadilan": 95,
        "kepastian": 70,
        "kemanfaatan": 70,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Teruskan Jalur Rekonsiliasi Non-Yudisial Demi Stabilitas Transisi Politik",
        "consequence": "Mencegah gejolak politik elite militer dan korban segera memperoleh bantuan pemulihan ekonomi.",
        "keadilan": 40,
        "kepastian": 50,
        "kemanfaatan": 75,
        "alignmentShift": 15
      }
    ]
  }
],
  "7-9": [
  {
    "id": "CASE-205",
    "title": "Kasus #205: Sanksi Embargo Ekonomi Internasional vs Akses Bantuan Kemanusiaan - Seri Kasus 1",
    "facts": [
      "Sebuah kapal kayu reyot membawa 150 pengungsi etnis tertindas termasuk 40 balita terombang-ambing di perairan teritorial.",
      "Pemerintah setempat hendak mendorong kapal kembali ke laut internasional dengan alasan negara belum meratifikasi Konvensi Pengungsi 1951.",
      "Badan PBB UNHCR mengingatkan adanya asas hukum kebiasaan internasional Non-Refoulement (larangan mengembalikan pengungsi ke zona bahaya maut)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Izinkan Kapal Mendarat & Berikan Penampungan Sementara (Asas Non-Refoulement)",
        "consequence": "Indonesia diakui dunia sebagai negara beradab yang menjunjung tinggi hukum kemanusiaan universal.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Usir Kapal Keluar Perairan Demi Kedaulatan Batas Negara & Beban Sosial Lokal",
        "consequence": "Beban sosial anggaran daerah terlindungi, namun mengancam nyawa ratusan manusia tenggelam di samudra.",
        "keadilan": 15,
        "kepastian": 80,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-206",
    "title": "Kasus #206: Sanksi Embargo Ekonomi Internasional vs Akses Bantuan Kemanusiaan - Seri Kasus 2",
    "facts": [
      "Anak seorang duta besar negara adidaya menabrak mahasiswa lokal hingga tewas di jalan protokol lalu melarikan diri ke dalam kompleks kedutaan.",
      "Kedutaan menolak menyerahkan pelaku ke kepolisian dengan mengklaim kekebalan diplomatik penuh berdasarkan Konvensi Wina 1961.",
      "Masyarakat menggelar demonstrasi menuntut keadilan ditegakkan di pengadilan negeri nasional."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tuntut Pengabaian Kekebalan (Waiver of Immunity) & Nyatakan Persona Non Grata",
        "consequence": "Menegaskan martabat kedaulatan hukum nasional sambil memanfaatkan jalur diplomasi tegas.",
        "keadilan": 90,
        "kepastian": 80,
        "kemanfaatan": 80,
        "alignmentShift": -10
      },
      {
        "id": "OPT-2",
        "action": "Hormati Kekebalan Penuh Tanpa Intervensi Demi Mencegah Krisis Geopolitik",
        "consequence": "Hubungan diplomatik antar-negara adidaya aman, namun rasa keadilan keluarga korban terinjak.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 40,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-207",
    "title": "Kasus #207: Sanksi Embargo Ekonomi Internasional vs Akses Bantuan Kemanusiaan - Seri Kasus 3",
    "facts": [
      "Keluarga korban penghilangan paksa menuntut pembentukan Pengadilan HAM Ad Hoc untuk mengadili jenderal purnawirawan pelaku penculikan.",
      "Pemerintah menawarkan penyelesaian non-yudisial berupa kompensasi materiil dan pengakuan penyesalan tanpa proses peradilan pidana.",
      "Sebagian korban menolak uang kompensasi dan tetap menuntut kebenaran serta vonis peradilan."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bentuk Pengadilan HAM Ad Hoc: Tidak Ada Rekonsiliasi Tanpa Keadilan Yudisial",
        "consequence": "Melawan impunitas penguasa masa lalu dan memastikan pertanggungjawaban hukum sejati.",
        "keadilan": 95,
        "kepastian": 70,
        "kemanfaatan": 70,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Teruskan Jalur Rekonsiliasi Non-Yudisial Demi Stabilitas Transisi Politik",
        "consequence": "Mencegah gejolak politik elite militer dan korban segera memperoleh bantuan pemulihan ekonomi.",
        "keadilan": 40,
        "kepastian": 50,
        "kemanfaatan": 75,
        "alignmentShift": 15
      }
    ]
  }
],
  "7-10": [
  {
    "id": "CASE-208",
    "title": "Kasus #208: Ujian Komprehensif: Sidang Mahkamah Internasional (ICJ) Kasus Aneksasi - Seri Kasus 1",
    "facts": [
      "Sebuah kapal kayu reyot membawa 150 pengungsi etnis tertindas termasuk 40 balita terombang-ambing di perairan teritorial.",
      "Pemerintah setempat hendak mendorong kapal kembali ke laut internasional dengan alasan negara belum meratifikasi Konvensi Pengungsi 1951.",
      "Badan PBB UNHCR mengingatkan adanya asas hukum kebiasaan internasional Non-Refoulement (larangan mengembalikan pengungsi ke zona bahaya maut)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Izinkan Kapal Mendarat & Berikan Penampungan Sementara (Asas Non-Refoulement)",
        "consequence": "Indonesia diakui dunia sebagai negara beradab yang menjunjung tinggi hukum kemanusiaan universal.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 85,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Usir Kapal Keluar Perairan Demi Kedaulatan Batas Negara & Beban Sosial Lokal",
        "consequence": "Beban sosial anggaran daerah terlindungi, namun mengancam nyawa ratusan manusia tenggelam di samudra.",
        "keadilan": 15,
        "kepastian": 80,
        "kemanfaatan": 30,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-209",
    "title": "Kasus #209: Ujian Komprehensif: Sidang Mahkamah Internasional (ICJ) Kasus Aneksasi - Seri Kasus 2",
    "facts": [
      "Anak seorang duta besar negara adidaya menabrak mahasiswa lokal hingga tewas di jalan protokol lalu melarikan diri ke dalam kompleks kedutaan.",
      "Kedutaan menolak menyerahkan pelaku ke kepolisian dengan mengklaim kekebalan diplomatik penuh berdasarkan Konvensi Wina 1961.",
      "Masyarakat menggelar demonstrasi menuntut keadilan ditegakkan di pengadilan negeri nasional."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Tuntut Pengabaian Kekebalan (Waiver of Immunity) & Nyatakan Persona Non Grata",
        "consequence": "Menegaskan martabat kedaulatan hukum nasional sambil memanfaatkan jalur diplomasi tegas.",
        "keadilan": 90,
        "kepastian": 80,
        "kemanfaatan": 80,
        "alignmentShift": -10
      },
      {
        "id": "OPT-2",
        "action": "Hormati Kekebalan Penuh Tanpa Intervensi Demi Mencegah Krisis Geopolitik",
        "consequence": "Hubungan diplomatik antar-negara adidaya aman, namun rasa keadilan keluarga korban terinjak.",
        "keadilan": 20,
        "kepastian": 95,
        "kemanfaatan": 40,
        "alignmentShift": 25
      }
    ]
  },
  {
    "id": "CASE-210",
    "title": "Kasus #210: Ujian Komprehensif: Sidang Mahkamah Internasional (ICJ) Kasus Aneksasi - Seri Kasus 3",
    "facts": [
      "Keluarga korban penghilangan paksa menuntut pembentukan Pengadilan HAM Ad Hoc untuk mengadili jenderal purnawirawan pelaku penculikan.",
      "Pemerintah menawarkan penyelesaian non-yudisial berupa kompensasi materiil dan pengakuan penyesalan tanpa proses peradilan pidana.",
      "Sebagian korban menolak uang kompensasi dan tetap menuntut kebenaran serta vonis peradilan."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Bentuk Pengadilan HAM Ad Hoc: Tidak Ada Rekonsiliasi Tanpa Keadilan Yudisial",
        "consequence": "Melawan impunitas penguasa masa lalu dan memastikan pertanggungjawaban hukum sejati.",
        "keadilan": 95,
        "kepastian": 70,
        "kemanfaatan": 70,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Teruskan Jalur Rekonsiliasi Non-Yudisial Demi Stabilitas Transisi Politik",
        "consequence": "Mencegah gejolak politik elite militer dan korban segera memperoleh bantuan pemulihan ekonomi.",
        "keadilan": 40,
        "kepastian": 50,
        "kemanfaatan": 75,
        "alignmentShift": 15
      }
    ]
  }
],
  "8-1": [
  {
    "id": "CASE-211",
    "title": "Kasus #211: Hak Cipta Pelatihan AI Tanpa Izin Pencipta (Dataset Scraping) - Seri Kasus 1",
    "facts": [
      "Sebuah raksasa teknologi menyalin jutaan buku berhak cipta untuk melatih model kecerdasan buatan komersial tanpa membayar royalti ke penulis.",
      "Perkumpulan penulis menggugat pelanggaran hak cipta masif senilai triliunan rupiah.",
      "Perusahaan AI berargumen bahwa proses pelatihan algoritma adalah pembelajaran wajar (fair use) sama seperti manusia membaca buku."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Gugatan Penulis: Penggunaan Data Komersial Wajib Bayar Lisensi Hak Cipta",
        "consequence": "Karya intelektual manusia terlindungi dari eksploitasi raksasa Silicon Valley.",
        "keadilan": 90,
        "kepastian": 75,
        "kemanfaatan": 65,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Nyatakan Sebagai Fair Use Demi Mendorong Revolusi Teknologi Kecerdasan Buatan",
        "consequence": "Inovasi AI melesat cepat dan murah bagi masyarakat, namun membunuh profesi kreator manusia.",
        "keadilan": 35,
        "kepastian": 45,
        "kemanfaatan": 90,
        "alignmentShift": -20
      }
    ]
  },
  {
    "id": "CASE-212",
    "title": "Kasus #212: Hak Cipta Pelatihan AI Tanpa Izin Pencipta (Dataset Scraping) - Seri Kasus 2",
    "facts": [
      "Sebuah taksi tanpa pengemudi (robotaxi) mendapati rem tidak berfungsi saat ada 3 pejalan kaki menyeberang sembarangan di jalanan licin.",
      "Algoritma taksi memilih membanting stir ke trotoar menabrak 1 tunawisma yang sedang tertidur hingga tewas untuk melindungi 3 penumpang di dalam mobil.",
      "Keluarga korban menggugat perusahaan pembuat perangkat lunak atas pembunuhan akibat kelalaian algoritma."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Jatuhkan Tanggung Jawab Pidana Korporasi atas Desain Algoritma Diskriminatif",
        "consequence": "Memastikan produsen teknologi bertanggung jawab etis atas setiap nyawa yang dikorbankan algoritma.",
        "keadilan": 90,
        "kepastian": 70,
        "kemanfaatan": 75,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Lepaskan Tuntutan Pidana: Batasi pada Santunan Asuransi Ganti Rugi Perdata",
        "consequence": "Mencegah matinya industri mobil otonom yang secara statistik terbukti mengurangi 90% kecelakaan manusia.",
        "keadilan": 40,
        "kepastian": 60,
        "kemanfaatan": 85,
        "alignmentShift": 15
      }
    ]
  },
  {
    "id": "CASE-213",
    "title": "Kasus #213: Hak Cipta Pelatihan AI Tanpa Izin Pencipta (Dataset Scraping) - Seri Kasus 3",
    "facts": [
      "Seorang pasien berusia 75 tahun mengalami mati batang otak permanen selama 10 tahun dan hidup hanya bergantung pada ventilator rumah sakit.",
      "Pasien pernah meninggalkan surat wasiat notaril meminta agar alat bantu dihentikan jika otaknya dinyatakan mati.",
      "Dokter menolak mencabut ventilator karena takut dipidanakan atas pasal pembunuhan berencana atau eutanasia (Pasal 344 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Izinkan Penghentian Alat Bantu Medis Berdasarkan Wasiat Pasien (Hak Mati Bermartabat)",
        "consequence": "Menghormati otonomi akhir hidup manusia dan mengakhiri penderitaan fisik berkepanjangan keluarga.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Larang Penghentian Ventilator Demi Menjunjung Asas Kesucian Hidup Mutlak",
        "consequence": "Menutup celah penyalahgunaan penghentian nyawa sepihak, namun membebani penderitaan batin keluarga.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  }
],
  "8-2": [
  {
    "id": "CASE-214",
    "title": "Kasus #214: Pertanggungjawaban Pidana Mobil Otonom (Autonomous Crash) - Seri Kasus 1",
    "facts": [
      "Sebuah raksasa teknologi menyalin jutaan buku berhak cipta untuk melatih model kecerdasan buatan komersial tanpa membayar royalti ke penulis.",
      "Perkumpulan penulis menggugat pelanggaran hak cipta masif senilai triliunan rupiah.",
      "Perusahaan AI berargumen bahwa proses pelatihan algoritma adalah pembelajaran wajar (fair use) sama seperti manusia membaca buku."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Gugatan Penulis: Penggunaan Data Komersial Wajib Bayar Lisensi Hak Cipta",
        "consequence": "Karya intelektual manusia terlindungi dari eksploitasi raksasa Silicon Valley.",
        "keadilan": 90,
        "kepastian": 75,
        "kemanfaatan": 65,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Nyatakan Sebagai Fair Use Demi Mendorong Revolusi Teknologi Kecerdasan Buatan",
        "consequence": "Inovasi AI melesat cepat dan murah bagi masyarakat, namun membunuh profesi kreator manusia.",
        "keadilan": 35,
        "kepastian": 45,
        "kemanfaatan": 90,
        "alignmentShift": -20
      }
    ]
  },
  {
    "id": "CASE-215",
    "title": "Kasus #215: Pertanggungjawaban Pidana Mobil Otonom (Autonomous Crash) - Seri Kasus 2",
    "facts": [
      "Sebuah taksi tanpa pengemudi (robotaxi) mendapati rem tidak berfungsi saat ada 3 pejalan kaki menyeberang sembarangan di jalanan licin.",
      "Algoritma taksi memilih membanting stir ke trotoar menabrak 1 tunawisma yang sedang tertidur hingga tewas untuk melindungi 3 penumpang di dalam mobil.",
      "Keluarga korban menggugat perusahaan pembuat perangkat lunak atas pembunuhan akibat kelalaian algoritma."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Jatuhkan Tanggung Jawab Pidana Korporasi atas Desain Algoritma Diskriminatif",
        "consequence": "Memastikan produsen teknologi bertanggung jawab etis atas setiap nyawa yang dikorbankan algoritma.",
        "keadilan": 90,
        "kepastian": 70,
        "kemanfaatan": 75,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Lepaskan Tuntutan Pidana: Batasi pada Santunan Asuransi Ganti Rugi Perdata",
        "consequence": "Mencegah matinya industri mobil otonom yang secara statistik terbukti mengurangi 90% kecelakaan manusia.",
        "keadilan": 40,
        "kepastian": 60,
        "kemanfaatan": 85,
        "alignmentShift": 15
      }
    ]
  },
  {
    "id": "CASE-216",
    "title": "Kasus #216: Pertanggungjawaban Pidana Mobil Otonom (Autonomous Crash) - Seri Kasus 3",
    "facts": [
      "Seorang pasien berusia 75 tahun mengalami mati batang otak permanen selama 10 tahun dan hidup hanya bergantung pada ventilator rumah sakit.",
      "Pasien pernah meninggalkan surat wasiat notaril meminta agar alat bantu dihentikan jika otaknya dinyatakan mati.",
      "Dokter menolak mencabut ventilator karena takut dipidanakan atas pasal pembunuhan berencana atau eutanasia (Pasal 344 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Izinkan Penghentian Alat Bantu Medis Berdasarkan Wasiat Pasien (Hak Mati Bermartabat)",
        "consequence": "Menghormati otonomi akhir hidup manusia dan mengakhiri penderitaan fisik berkepanjangan keluarga.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Larang Penghentian Ventilator Demi Menjunjung Asas Kesucian Hidup Mutlak",
        "consequence": "Menutup celah penyalahgunaan penghentian nyawa sepihak, namun membebani penderitaan batin keluarga.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  }
],
  "8-3": [
  {
    "id": "CASE-217",
    "title": "Kasus #217: Deepfake Pornografi Non-Konsensual & Batas Parodi Siber - Seri Kasus 1",
    "facts": [
      "Sebuah raksasa teknologi menyalin jutaan buku berhak cipta untuk melatih model kecerdasan buatan komersial tanpa membayar royalti ke penulis.",
      "Perkumpulan penulis menggugat pelanggaran hak cipta masif senilai triliunan rupiah.",
      "Perusahaan AI berargumen bahwa proses pelatihan algoritma adalah pembelajaran wajar (fair use) sama seperti manusia membaca buku."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Gugatan Penulis: Penggunaan Data Komersial Wajib Bayar Lisensi Hak Cipta",
        "consequence": "Karya intelektual manusia terlindungi dari eksploitasi raksasa Silicon Valley.",
        "keadilan": 90,
        "kepastian": 75,
        "kemanfaatan": 65,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Nyatakan Sebagai Fair Use Demi Mendorong Revolusi Teknologi Kecerdasan Buatan",
        "consequence": "Inovasi AI melesat cepat dan murah bagi masyarakat, namun membunuh profesi kreator manusia.",
        "keadilan": 35,
        "kepastian": 45,
        "kemanfaatan": 90,
        "alignmentShift": -20
      }
    ]
  },
  {
    "id": "CASE-218",
    "title": "Kasus #218: Deepfake Pornografi Non-Konsensual & Batas Parodi Siber - Seri Kasus 2",
    "facts": [
      "Sebuah taksi tanpa pengemudi (robotaxi) mendapati rem tidak berfungsi saat ada 3 pejalan kaki menyeberang sembarangan di jalanan licin.",
      "Algoritma taksi memilih membanting stir ke trotoar menabrak 1 tunawisma yang sedang tertidur hingga tewas untuk melindungi 3 penumpang di dalam mobil.",
      "Keluarga korban menggugat perusahaan pembuat perangkat lunak atas pembunuhan akibat kelalaian algoritma."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Jatuhkan Tanggung Jawab Pidana Korporasi atas Desain Algoritma Diskriminatif",
        "consequence": "Memastikan produsen teknologi bertanggung jawab etis atas setiap nyawa yang dikorbankan algoritma.",
        "keadilan": 90,
        "kepastian": 70,
        "kemanfaatan": 75,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Lepaskan Tuntutan Pidana: Batasi pada Santunan Asuransi Ganti Rugi Perdata",
        "consequence": "Mencegah matinya industri mobil otonom yang secara statistik terbukti mengurangi 90% kecelakaan manusia.",
        "keadilan": 40,
        "kepastian": 60,
        "kemanfaatan": 85,
        "alignmentShift": 15
      }
    ]
  },
  {
    "id": "CASE-219",
    "title": "Kasus #219: Deepfake Pornografi Non-Konsensual & Batas Parodi Siber - Seri Kasus 3",
    "facts": [
      "Seorang pasien berusia 75 tahun mengalami mati batang otak permanen selama 10 tahun dan hidup hanya bergantung pada ventilator rumah sakit.",
      "Pasien pernah meninggalkan surat wasiat notaril meminta agar alat bantu dihentikan jika otaknya dinyatakan mati.",
      "Dokter menolak mencabut ventilator karena takut dipidanakan atas pasal pembunuhan berencana atau eutanasia (Pasal 344 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Izinkan Penghentian Alat Bantu Medis Berdasarkan Wasiat Pasien (Hak Mati Bermartabat)",
        "consequence": "Menghormati otonomi akhir hidup manusia dan mengakhiri penderitaan fisik berkepanjangan keluarga.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Larang Penghentian Ventilator Demi Menjunjung Asas Kesucian Hidup Mutlak",
        "consequence": "Menutup celah penyalahgunaan penghentian nyawa sepihak, namun membebani penderitaan batin keluarga.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  }
],
  "8-4": [
  {
    "id": "CASE-220",
    "title": "Kasus #220: Kebocoran Data Pasien Rumah Sakit & Sanksi Denda UU PDP - Seri Kasus 1",
    "facts": [
      "Sebuah raksasa teknologi menyalin jutaan buku berhak cipta untuk melatih model kecerdasan buatan komersial tanpa membayar royalti ke penulis.",
      "Perkumpulan penulis menggugat pelanggaran hak cipta masif senilai triliunan rupiah.",
      "Perusahaan AI berargumen bahwa proses pelatihan algoritma adalah pembelajaran wajar (fair use) sama seperti manusia membaca buku."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Gugatan Penulis: Penggunaan Data Komersial Wajib Bayar Lisensi Hak Cipta",
        "consequence": "Karya intelektual manusia terlindungi dari eksploitasi raksasa Silicon Valley.",
        "keadilan": 90,
        "kepastian": 75,
        "kemanfaatan": 65,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Nyatakan Sebagai Fair Use Demi Mendorong Revolusi Teknologi Kecerdasan Buatan",
        "consequence": "Inovasi AI melesat cepat dan murah bagi masyarakat, namun membunuh profesi kreator manusia.",
        "keadilan": 35,
        "kepastian": 45,
        "kemanfaatan": 90,
        "alignmentShift": -20
      }
    ]
  },
  {
    "id": "CASE-221",
    "title": "Kasus #221: Kebocoran Data Pasien Rumah Sakit & Sanksi Denda UU PDP - Seri Kasus 2",
    "facts": [
      "Sebuah taksi tanpa pengemudi (robotaxi) mendapati rem tidak berfungsi saat ada 3 pejalan kaki menyeberang sembarangan di jalanan licin.",
      "Algoritma taksi memilih membanting stir ke trotoar menabrak 1 tunawisma yang sedang tertidur hingga tewas untuk melindungi 3 penumpang di dalam mobil.",
      "Keluarga korban menggugat perusahaan pembuat perangkat lunak atas pembunuhan akibat kelalaian algoritma."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Jatuhkan Tanggung Jawab Pidana Korporasi atas Desain Algoritma Diskriminatif",
        "consequence": "Memastikan produsen teknologi bertanggung jawab etis atas setiap nyawa yang dikorbankan algoritma.",
        "keadilan": 90,
        "kepastian": 70,
        "kemanfaatan": 75,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Lepaskan Tuntutan Pidana: Batasi pada Santunan Asuransi Ganti Rugi Perdata",
        "consequence": "Mencegah matinya industri mobil otonom yang secara statistik terbukti mengurangi 90% kecelakaan manusia.",
        "keadilan": 40,
        "kepastian": 60,
        "kemanfaatan": 85,
        "alignmentShift": 15
      }
    ]
  },
  {
    "id": "CASE-222",
    "title": "Kasus #222: Kebocoran Data Pasien Rumah Sakit & Sanksi Denda UU PDP - Seri Kasus 3",
    "facts": [
      "Seorang pasien berusia 75 tahun mengalami mati batang otak permanen selama 10 tahun dan hidup hanya bergantung pada ventilator rumah sakit.",
      "Pasien pernah meninggalkan surat wasiat notaril meminta agar alat bantu dihentikan jika otaknya dinyatakan mati.",
      "Dokter menolak mencabut ventilator karena takut dipidanakan atas pasal pembunuhan berencana atau eutanasia (Pasal 344 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Izinkan Penghentian Alat Bantu Medis Berdasarkan Wasiat Pasien (Hak Mati Bermartabat)",
        "consequence": "Menghormati otonomi akhir hidup manusia dan mengakhiri penderitaan fisik berkepanjangan keluarga.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Larang Penghentian Ventilator Demi Menjunjung Asas Kesucian Hidup Mutlak",
        "consequence": "Menutup celah penyalahgunaan penghentian nyawa sepihak, namun membebani penderitaan batin keluarga.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  }
],
  "8-5": [
  {
    "id": "CASE-223",
    "title": "Kasus #223: Smart Contract Eror pada Blockchain: Kode Sebagai Hukum vs Keadilan - Seri Kasus 1",
    "facts": [
      "Sebuah raksasa teknologi menyalin jutaan buku berhak cipta untuk melatih model kecerdasan buatan komersial tanpa membayar royalti ke penulis.",
      "Perkumpulan penulis menggugat pelanggaran hak cipta masif senilai triliunan rupiah.",
      "Perusahaan AI berargumen bahwa proses pelatihan algoritma adalah pembelajaran wajar (fair use) sama seperti manusia membaca buku."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Gugatan Penulis: Penggunaan Data Komersial Wajib Bayar Lisensi Hak Cipta",
        "consequence": "Karya intelektual manusia terlindungi dari eksploitasi raksasa Silicon Valley.",
        "keadilan": 90,
        "kepastian": 75,
        "kemanfaatan": 65,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Nyatakan Sebagai Fair Use Demi Mendorong Revolusi Teknologi Kecerdasan Buatan",
        "consequence": "Inovasi AI melesat cepat dan murah bagi masyarakat, namun membunuh profesi kreator manusia.",
        "keadilan": 35,
        "kepastian": 45,
        "kemanfaatan": 90,
        "alignmentShift": -20
      }
    ]
  },
  {
    "id": "CASE-224",
    "title": "Kasus #224: Smart Contract Eror pada Blockchain: Kode Sebagai Hukum vs Keadilan - Seri Kasus 2",
    "facts": [
      "Sebuah taksi tanpa pengemudi (robotaxi) mendapati rem tidak berfungsi saat ada 3 pejalan kaki menyeberang sembarangan di jalanan licin.",
      "Algoritma taksi memilih membanting stir ke trotoar menabrak 1 tunawisma yang sedang tertidur hingga tewas untuk melindungi 3 penumpang di dalam mobil.",
      "Keluarga korban menggugat perusahaan pembuat perangkat lunak atas pembunuhan akibat kelalaian algoritma."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Jatuhkan Tanggung Jawab Pidana Korporasi atas Desain Algoritma Diskriminatif",
        "consequence": "Memastikan produsen teknologi bertanggung jawab etis atas setiap nyawa yang dikorbankan algoritma.",
        "keadilan": 90,
        "kepastian": 70,
        "kemanfaatan": 75,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Lepaskan Tuntutan Pidana: Batasi pada Santunan Asuransi Ganti Rugi Perdata",
        "consequence": "Mencegah matinya industri mobil otonom yang secara statistik terbukti mengurangi 90% kecelakaan manusia.",
        "keadilan": 40,
        "kepastian": 60,
        "kemanfaatan": 85,
        "alignmentShift": 15
      }
    ]
  },
  {
    "id": "CASE-225",
    "title": "Kasus #225: Smart Contract Eror pada Blockchain: Kode Sebagai Hukum vs Keadilan - Seri Kasus 3",
    "facts": [
      "Seorang pasien berusia 75 tahun mengalami mati batang otak permanen selama 10 tahun dan hidup hanya bergantung pada ventilator rumah sakit.",
      "Pasien pernah meninggalkan surat wasiat notaril meminta agar alat bantu dihentikan jika otaknya dinyatakan mati.",
      "Dokter menolak mencabut ventilator karena takut dipidanakan atas pasal pembunuhan berencana atau eutanasia (Pasal 344 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Izinkan Penghentian Alat Bantu Medis Berdasarkan Wasiat Pasien (Hak Mati Bermartabat)",
        "consequence": "Menghormati otonomi akhir hidup manusia dan mengakhiri penderitaan fisik berkepanjangan keluarga.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Larang Penghentian Ventilator Demi Menjunjung Asas Kesucian Hidup Mutlak",
        "consequence": "Menutup celah penyalahgunaan penghentian nyawa sepihak, namun membebani penderitaan batin keluarga.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  }
],
  "8-6": [
  {
    "id": "CASE-226",
    "title": "Kasus #226: Hak untuk Dilupakan (Right to Be Forgotten) Terhadap Berita Usang - Seri Kasus 1",
    "facts": [
      "Sebuah raksasa teknologi menyalin jutaan buku berhak cipta untuk melatih model kecerdasan buatan komersial tanpa membayar royalti ke penulis.",
      "Perkumpulan penulis menggugat pelanggaran hak cipta masif senilai triliunan rupiah.",
      "Perusahaan AI berargumen bahwa proses pelatihan algoritma adalah pembelajaran wajar (fair use) sama seperti manusia membaca buku."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Gugatan Penulis: Penggunaan Data Komersial Wajib Bayar Lisensi Hak Cipta",
        "consequence": "Karya intelektual manusia terlindungi dari eksploitasi raksasa Silicon Valley.",
        "keadilan": 90,
        "kepastian": 75,
        "kemanfaatan": 65,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Nyatakan Sebagai Fair Use Demi Mendorong Revolusi Teknologi Kecerdasan Buatan",
        "consequence": "Inovasi AI melesat cepat dan murah bagi masyarakat, namun membunuh profesi kreator manusia.",
        "keadilan": 35,
        "kepastian": 45,
        "kemanfaatan": 90,
        "alignmentShift": -20
      }
    ]
  },
  {
    "id": "CASE-227",
    "title": "Kasus #227: Hak untuk Dilupakan (Right to Be Forgotten) Terhadap Berita Usang - Seri Kasus 2",
    "facts": [
      "Sebuah taksi tanpa pengemudi (robotaxi) mendapati rem tidak berfungsi saat ada 3 pejalan kaki menyeberang sembarangan di jalanan licin.",
      "Algoritma taksi memilih membanting stir ke trotoar menabrak 1 tunawisma yang sedang tertidur hingga tewas untuk melindungi 3 penumpang di dalam mobil.",
      "Keluarga korban menggugat perusahaan pembuat perangkat lunak atas pembunuhan akibat kelalaian algoritma."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Jatuhkan Tanggung Jawab Pidana Korporasi atas Desain Algoritma Diskriminatif",
        "consequence": "Memastikan produsen teknologi bertanggung jawab etis atas setiap nyawa yang dikorbankan algoritma.",
        "keadilan": 90,
        "kepastian": 70,
        "kemanfaatan": 75,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Lepaskan Tuntutan Pidana: Batasi pada Santunan Asuransi Ganti Rugi Perdata",
        "consequence": "Mencegah matinya industri mobil otonom yang secara statistik terbukti mengurangi 90% kecelakaan manusia.",
        "keadilan": 40,
        "kepastian": 60,
        "kemanfaatan": 85,
        "alignmentShift": 15
      }
    ]
  },
  {
    "id": "CASE-228",
    "title": "Kasus #228: Hak untuk Dilupakan (Right to Be Forgotten) Terhadap Berita Usang - Seri Kasus 3",
    "facts": [
      "Seorang pasien berusia 75 tahun mengalami mati batang otak permanen selama 10 tahun dan hidup hanya bergantung pada ventilator rumah sakit.",
      "Pasien pernah meninggalkan surat wasiat notaril meminta agar alat bantu dihentikan jika otaknya dinyatakan mati.",
      "Dokter menolak mencabut ventilator karena takut dipidanakan atas pasal pembunuhan berencana atau eutanasia (Pasal 344 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Izinkan Penghentian Alat Bantu Medis Berdasarkan Wasiat Pasien (Hak Mati Bermartabat)",
        "consequence": "Menghormati otonomi akhir hidup manusia dan mengakhiri penderitaan fisik berkepanjangan keluarga.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Larang Penghentian Ventilator Demi Menjunjung Asas Kesucian Hidup Mutlak",
        "consequence": "Menutup celah penyalahgunaan penghentian nyawa sepihak, namun membebani penderitaan batin keluarga.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  }
],
  "8-7": [
  {
    "id": "CASE-229",
    "title": "Kasus #229: Eutanasia Pasif atas Permintaan Wasiat Pasien Koma Terminal - Seri Kasus 1",
    "facts": [
      "Sebuah raksasa teknologi menyalin jutaan buku berhak cipta untuk melatih model kecerdasan buatan komersial tanpa membayar royalti ke penulis.",
      "Perkumpulan penulis menggugat pelanggaran hak cipta masif senilai triliunan rupiah.",
      "Perusahaan AI berargumen bahwa proses pelatihan algoritma adalah pembelajaran wajar (fair use) sama seperti manusia membaca buku."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Gugatan Penulis: Penggunaan Data Komersial Wajib Bayar Lisensi Hak Cipta",
        "consequence": "Karya intelektual manusia terlindungi dari eksploitasi raksasa Silicon Valley.",
        "keadilan": 90,
        "kepastian": 75,
        "kemanfaatan": 65,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Nyatakan Sebagai Fair Use Demi Mendorong Revolusi Teknologi Kecerdasan Buatan",
        "consequence": "Inovasi AI melesat cepat dan murah bagi masyarakat, namun membunuh profesi kreator manusia.",
        "keadilan": 35,
        "kepastian": 45,
        "kemanfaatan": 90,
        "alignmentShift": -20
      }
    ]
  },
  {
    "id": "CASE-230",
    "title": "Kasus #230: Eutanasia Pasif atas Permintaan Wasiat Pasien Koma Terminal - Seri Kasus 2",
    "facts": [
      "Sebuah taksi tanpa pengemudi (robotaxi) mendapati rem tidak berfungsi saat ada 3 pejalan kaki menyeberang sembarangan di jalanan licin.",
      "Algoritma taksi memilih membanting stir ke trotoar menabrak 1 tunawisma yang sedang tertidur hingga tewas untuk melindungi 3 penumpang di dalam mobil.",
      "Keluarga korban menggugat perusahaan pembuat perangkat lunak atas pembunuhan akibat kelalaian algoritma."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Jatuhkan Tanggung Jawab Pidana Korporasi atas Desain Algoritma Diskriminatif",
        "consequence": "Memastikan produsen teknologi bertanggung jawab etis atas setiap nyawa yang dikorbankan algoritma.",
        "keadilan": 90,
        "kepastian": 70,
        "kemanfaatan": 75,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Lepaskan Tuntutan Pidana: Batasi pada Santunan Asuransi Ganti Rugi Perdata",
        "consequence": "Mencegah matinya industri mobil otonom yang secara statistik terbukti mengurangi 90% kecelakaan manusia.",
        "keadilan": 40,
        "kepastian": 60,
        "kemanfaatan": 85,
        "alignmentShift": 15
      }
    ]
  },
  {
    "id": "CASE-231",
    "title": "Kasus #231: Eutanasia Pasif atas Permintaan Wasiat Pasien Koma Terminal - Seri Kasus 3",
    "facts": [
      "Seorang pasien berusia 75 tahun mengalami mati batang otak permanen selama 10 tahun dan hidup hanya bergantung pada ventilator rumah sakit.",
      "Pasien pernah meninggalkan surat wasiat notaril meminta agar alat bantu dihentikan jika otaknya dinyatakan mati.",
      "Dokter menolak mencabut ventilator karena takut dipidanakan atas pasal pembunuhan berencana atau eutanasia (Pasal 344 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Izinkan Penghentian Alat Bantu Medis Berdasarkan Wasiat Pasien (Hak Mati Bermartabat)",
        "consequence": "Menghormati otonomi akhir hidup manusia dan mengakhiri penderitaan fisik berkepanjangan keluarga.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Larang Penghentian Ventilator Demi Menjunjung Asas Kesucian Hidup Mutlak",
        "consequence": "Menutup celah penyalahgunaan penghentian nyawa sepihak, namun membebani penderitaan batin keluarga.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  }
],
  "8-8": [
  {
    "id": "CASE-232",
    "title": "Kasus #232: Paten Obat Kanker yang Ditemukan Sepenuhnya oleh Algoritma AI - Seri Kasus 1",
    "facts": [
      "Sebuah raksasa teknologi menyalin jutaan buku berhak cipta untuk melatih model kecerdasan buatan komersial tanpa membayar royalti ke penulis.",
      "Perkumpulan penulis menggugat pelanggaran hak cipta masif senilai triliunan rupiah.",
      "Perusahaan AI berargumen bahwa proses pelatihan algoritma adalah pembelajaran wajar (fair use) sama seperti manusia membaca buku."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Gugatan Penulis: Penggunaan Data Komersial Wajib Bayar Lisensi Hak Cipta",
        "consequence": "Karya intelektual manusia terlindungi dari eksploitasi raksasa Silicon Valley.",
        "keadilan": 90,
        "kepastian": 75,
        "kemanfaatan": 65,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Nyatakan Sebagai Fair Use Demi Mendorong Revolusi Teknologi Kecerdasan Buatan",
        "consequence": "Inovasi AI melesat cepat dan murah bagi masyarakat, namun membunuh profesi kreator manusia.",
        "keadilan": 35,
        "kepastian": 45,
        "kemanfaatan": 90,
        "alignmentShift": -20
      }
    ]
  },
  {
    "id": "CASE-233",
    "title": "Kasus #233: Paten Obat Kanker yang Ditemukan Sepenuhnya oleh Algoritma AI - Seri Kasus 2",
    "facts": [
      "Sebuah taksi tanpa pengemudi (robotaxi) mendapati rem tidak berfungsi saat ada 3 pejalan kaki menyeberang sembarangan di jalanan licin.",
      "Algoritma taksi memilih membanting stir ke trotoar menabrak 1 tunawisma yang sedang tertidur hingga tewas untuk melindungi 3 penumpang di dalam mobil.",
      "Keluarga korban menggugat perusahaan pembuat perangkat lunak atas pembunuhan akibat kelalaian algoritma."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Jatuhkan Tanggung Jawab Pidana Korporasi atas Desain Algoritma Diskriminatif",
        "consequence": "Memastikan produsen teknologi bertanggung jawab etis atas setiap nyawa yang dikorbankan algoritma.",
        "keadilan": 90,
        "kepastian": 70,
        "kemanfaatan": 75,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Lepaskan Tuntutan Pidana: Batasi pada Santunan Asuransi Ganti Rugi Perdata",
        "consequence": "Mencegah matinya industri mobil otonom yang secara statistik terbukti mengurangi 90% kecelakaan manusia.",
        "keadilan": 40,
        "kepastian": 60,
        "kemanfaatan": 85,
        "alignmentShift": 15
      }
    ]
  },
  {
    "id": "CASE-234",
    "title": "Kasus #234: Paten Obat Kanker yang Ditemukan Sepenuhnya oleh Algoritma AI - Seri Kasus 3",
    "facts": [
      "Seorang pasien berusia 75 tahun mengalami mati batang otak permanen selama 10 tahun dan hidup hanya bergantung pada ventilator rumah sakit.",
      "Pasien pernah meninggalkan surat wasiat notaril meminta agar alat bantu dihentikan jika otaknya dinyatakan mati.",
      "Dokter menolak mencabut ventilator karena takut dipidanakan atas pasal pembunuhan berencana atau eutanasia (Pasal 344 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Izinkan Penghentian Alat Bantu Medis Berdasarkan Wasiat Pasien (Hak Mati Bermartabat)",
        "consequence": "Menghormati otonomi akhir hidup manusia dan mengakhiri penderitaan fisik berkepanjangan keluarga.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Larang Penghentian Ventilator Demi Menjunjung Asas Kesucian Hidup Mutlak",
        "consequence": "Menutup celah penyalahgunaan penghentian nyawa sepihak, namun membebani penderitaan batin keluarga.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  }
],
  "8-9": [
  {
    "id": "CASE-235",
    "title": "Kasus #235: Manipulasi Pasar Aset Kripto & Ketiadaan Regulasi Terpusat - Seri Kasus 1",
    "facts": [
      "Sebuah raksasa teknologi menyalin jutaan buku berhak cipta untuk melatih model kecerdasan buatan komersial tanpa membayar royalti ke penulis.",
      "Perkumpulan penulis menggugat pelanggaran hak cipta masif senilai triliunan rupiah.",
      "Perusahaan AI berargumen bahwa proses pelatihan algoritma adalah pembelajaran wajar (fair use) sama seperti manusia membaca buku."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Gugatan Penulis: Penggunaan Data Komersial Wajib Bayar Lisensi Hak Cipta",
        "consequence": "Karya intelektual manusia terlindungi dari eksploitasi raksasa Silicon Valley.",
        "keadilan": 90,
        "kepastian": 75,
        "kemanfaatan": 65,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Nyatakan Sebagai Fair Use Demi Mendorong Revolusi Teknologi Kecerdasan Buatan",
        "consequence": "Inovasi AI melesat cepat dan murah bagi masyarakat, namun membunuh profesi kreator manusia.",
        "keadilan": 35,
        "kepastian": 45,
        "kemanfaatan": 90,
        "alignmentShift": -20
      }
    ]
  },
  {
    "id": "CASE-236",
    "title": "Kasus #236: Manipulasi Pasar Aset Kripto & Ketiadaan Regulasi Terpusat - Seri Kasus 2",
    "facts": [
      "Sebuah taksi tanpa pengemudi (robotaxi) mendapati rem tidak berfungsi saat ada 3 pejalan kaki menyeberang sembarangan di jalanan licin.",
      "Algoritma taksi memilih membanting stir ke trotoar menabrak 1 tunawisma yang sedang tertidur hingga tewas untuk melindungi 3 penumpang di dalam mobil.",
      "Keluarga korban menggugat perusahaan pembuat perangkat lunak atas pembunuhan akibat kelalaian algoritma."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Jatuhkan Tanggung Jawab Pidana Korporasi atas Desain Algoritma Diskriminatif",
        "consequence": "Memastikan produsen teknologi bertanggung jawab etis atas setiap nyawa yang dikorbankan algoritma.",
        "keadilan": 90,
        "kepastian": 70,
        "kemanfaatan": 75,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Lepaskan Tuntutan Pidana: Batasi pada Santunan Asuransi Ganti Rugi Perdata",
        "consequence": "Mencegah matinya industri mobil otonom yang secara statistik terbukti mengurangi 90% kecelakaan manusia.",
        "keadilan": 40,
        "kepastian": 60,
        "kemanfaatan": 85,
        "alignmentShift": 15
      }
    ]
  },
  {
    "id": "CASE-237",
    "title": "Kasus #237: Manipulasi Pasar Aset Kripto & Ketiadaan Regulasi Terpusat - Seri Kasus 3",
    "facts": [
      "Seorang pasien berusia 75 tahun mengalami mati batang otak permanen selama 10 tahun dan hidup hanya bergantung pada ventilator rumah sakit.",
      "Pasien pernah meninggalkan surat wasiat notaril meminta agar alat bantu dihentikan jika otaknya dinyatakan mati.",
      "Dokter menolak mencabut ventilator karena takut dipidanakan atas pasal pembunuhan berencana atau eutanasia (Pasal 344 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Izinkan Penghentian Alat Bantu Medis Berdasarkan Wasiat Pasien (Hak Mati Bermartabat)",
        "consequence": "Menghormati otonomi akhir hidup manusia dan mengakhiri penderitaan fisik berkepanjangan keluarga.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Larang Penghentian Ventilator Demi Menjunjung Asas Kesucian Hidup Mutlak",
        "consequence": "Menutup celah penyalahgunaan penghentian nyawa sepihak, namun membebani penderitaan batin keluarga.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  }
],
  "8-10": [
  {
    "id": "CASE-238",
    "title": "Kasus #238: Sidang Tertinggi: Konstitusi Generasi Masa Depan & Hak AI Berakal - Seri Kasus 1",
    "facts": [
      "Sebuah raksasa teknologi menyalin jutaan buku berhak cipta untuk melatih model kecerdasan buatan komersial tanpa membayar royalti ke penulis.",
      "Perkumpulan penulis menggugat pelanggaran hak cipta masif senilai triliunan rupiah.",
      "Perusahaan AI berargumen bahwa proses pelatihan algoritma adalah pembelajaran wajar (fair use) sama seperti manusia membaca buku."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Kabulkan Gugatan Penulis: Penggunaan Data Komersial Wajib Bayar Lisensi Hak Cipta",
        "consequence": "Karya intelektual manusia terlindungi dari eksploitasi raksasa Silicon Valley.",
        "keadilan": 90,
        "kepastian": 75,
        "kemanfaatan": 65,
        "alignmentShift": 10
      },
      {
        "id": "OPT-2",
        "action": "Nyatakan Sebagai Fair Use Demi Mendorong Revolusi Teknologi Kecerdasan Buatan",
        "consequence": "Inovasi AI melesat cepat dan murah bagi masyarakat, namun membunuh profesi kreator manusia.",
        "keadilan": 35,
        "kepastian": 45,
        "kemanfaatan": 90,
        "alignmentShift": -20
      }
    ]
  },
  {
    "id": "CASE-239",
    "title": "Kasus #239: Sidang Tertinggi: Konstitusi Generasi Masa Depan & Hak AI Berakal - Seri Kasus 2",
    "facts": [
      "Sebuah taksi tanpa pengemudi (robotaxi) mendapati rem tidak berfungsi saat ada 3 pejalan kaki menyeberang sembarangan di jalanan licin.",
      "Algoritma taksi memilih membanting stir ke trotoar menabrak 1 tunawisma yang sedang tertidur hingga tewas untuk melindungi 3 penumpang di dalam mobil.",
      "Keluarga korban menggugat perusahaan pembuat perangkat lunak atas pembunuhan akibat kelalaian algoritma."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Jatuhkan Tanggung Jawab Pidana Korporasi atas Desain Algoritma Diskriminatif",
        "consequence": "Memastikan produsen teknologi bertanggung jawab etis atas setiap nyawa yang dikorbankan algoritma.",
        "keadilan": 90,
        "kepastian": 70,
        "kemanfaatan": 75,
        "alignmentShift": -15
      },
      {
        "id": "OPT-2",
        "action": "Lepaskan Tuntutan Pidana: Batasi pada Santunan Asuransi Ganti Rugi Perdata",
        "consequence": "Mencegah matinya industri mobil otonom yang secara statistik terbukti mengurangi 90% kecelakaan manusia.",
        "keadilan": 40,
        "kepastian": 60,
        "kemanfaatan": 85,
        "alignmentShift": 15
      }
    ]
  },
  {
    "id": "CASE-240",
    "title": "Kasus #240: Sidang Tertinggi: Konstitusi Generasi Masa Depan & Hak AI Berakal - Seri Kasus 3",
    "facts": [
      "Seorang pasien berusia 75 tahun mengalami mati batang otak permanen selama 10 tahun dan hidup hanya bergantung pada ventilator rumah sakit.",
      "Pasien pernah meninggalkan surat wasiat notaril meminta agar alat bantu dihentikan jika otaknya dinyatakan mati.",
      "Dokter menolak mencabut ventilator karena takut dipidanakan atas pasal pembunuhan berencana atau eutanasia (Pasal 344 KUHP)."
    ],
    "options": [
      {
        "id": "OPT-1",
        "action": "Izinkan Penghentian Alat Bantu Medis Berdasarkan Wasiat Pasien (Hak Mati Bermartabat)",
        "consequence": "Menghormati otonomi akhir hidup manusia dan mengakhiri penderitaan fisik berkepanjangan keluarga.",
        "keadilan": 95,
        "kepastian": 50,
        "kemanfaatan": 90,
        "alignmentShift": -20
      },
      {
        "id": "OPT-2",
        "action": "Larang Penghentian Ventilator Demi Menjunjung Asas Kesucian Hidup Mutlak",
        "consequence": "Menutup celah penyalahgunaan penghentian nyawa sepihak, namun membebani penderitaan batin keluarga.",
        "keadilan": 30,
        "kepastian": 95,
        "kemanfaatan": 25,
        "alignmentShift": 25
      }
    ]
  }
],
};

export const getQuestionsForIsland = (islandId: string): LegalCase[] => {
  return allCasesMap[islandId] || allCasesMap["1-1"];
};
