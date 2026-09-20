export const caseData = {
  "1": {
    id: "CASE-001",
    title: "Pulau Filsafat: UU Diskriminatif (Formula Radbruch)",
    facts: [
      "Sebuah rezim mengeluarkan UU yang mewajibkan penyitaan properti milik ras tertentu.",
      "Anda adalah hakim yang mengadili sengketa penyitaan ini.",
      "Undang-undang tersebut sah secara prosedur ketatanegaraan rezim tersebut."
    ],
    options: [
      {
        id: "OPT-1",
        action: "Terapkan UU, sita properti (Positivisme Murni)",
        consequence: "Kepastian hukum terjaga, namun Anda melanggar hak asasi fundamental.",
        keadilan: 10,
        kepastian: 95,
        kemanfaatan: 40,
        alignmentShift: 20
      },
      {
        id: "OPT-2",
        action: "Tolak UU, lindungi hak milik (Hukum Alam / Radbruch)",
        consequence: "Keadilan substantif ditegakkan, walau bertentangan dengan UU tertulis (Lex Iniusta Non Est Lex).",
        keadilan: 95,
        kepastian: 10,
        kemanfaatan: 60,
        alignmentShift: -20
      }
    ]
  },
  "2": {
    id: "CASE-002",
    title: "Pulau Asas: Lex Specialis vs Lex Generalis",
    facts: [
      "Terdakwa melakukan korupsi dana desa.",
      "Ada UU Tindak Pidana Korupsi (khusus) dan KUHP (umum).",
      "Hukuman di KUHP lebih ringan bagi terdakwa."
    ],
    options: [
      {
        id: "OPT-1",
        action: "Gunakan KUHP yang lebih ringan",
        consequence: "Hakim dinilai tidak memahami asas Lex Specialis Derogat Legi Generali.",
        keadilan: 30,
        kepastian: 20,
        kemanfaatan: 20,
        alignmentShift: -10
      },
      {
        id: "OPT-2",
        action: "Gunakan UU Tipikor",
        consequence: "Tepat! Aturan khusus mengesampingkan aturan umum. Keadilan publik ditegakkan.",
        keadilan: 90,
        kepastian: 90,
        kemanfaatan: 80,
        alignmentShift: 10
      }
    ]
  },
  "3": {
    id: "CASE-003",
    title: "Pulau Perdata: Janji Palsu Pernikahan",
    facts: [
      "Si A berjanji menikahi B, lalu B memberikan sejumlah uang sebagai modal usaha bersama.",
      "A membatalkan pernikahan dan menolak mengembalikan uang tersebut.",
      "B menggugat A atas dasar Wanprestasi."
    ],
    options: [
      {
        id: "OPT-1",
        action: "Kabulkan Gugatan Wanprestasi",
        consequence: "Salah! Janji nikah bukan perjanjian yang mengikat secara hukum (Pasal 58 BW).",
        keadilan: 70,
        kepastian: 10,
        kemanfaatan: 50,
        alignmentShift: -15
      },
      {
        id: "OPT-2",
        action: "Tolak Wanprestasi, Arahkan ke Perbuatan Melawan Hukum (PMH)",
        consequence: "Tepat! Pasal 1365 BW lebih cocok untuk ganti rugi atas janji yang merugikan secara moral dan materiil.",
        keadilan: 85,
        kepastian: 80,
        kemanfaatan: 70,
        alignmentShift: 15
      }
    ]
  },
  "4": {
    id: "CASE-004",
    title: "Pulau Bisnis: Sengketa Kontrak Baku",
    facts: [
      "Sebuah perusahaan aplikasi memiliki klausul eksonerasi: 'Perusahaan tidak bertanggung jawab atas kerugian apa pun'.",
      "Aplikasi tersebut bocor dan merugikan saldo pengguna secara sepihak.",
      "Pengguna menggugat berdasarkan UU Perlindungan Konsumen."
    ],
    options: [
      {
        id: "OPT-1",
        action: "Bela Perusahaan (Kebebasan Berkontrak)",
        consequence: "Anda mengabaikan UU Perlindungan Konsumen. Pengguna menderita kerugian massal.",
        keadilan: 10,
        kepastian: 90,
        kemanfaatan: 20,
        alignmentShift: 25
      },
      {
        id: "OPT-2",
        action: "Batalkan Klausul Eksonerasi",
        consequence: "Sesuai Pasal 18 UU PK, klausul pengalihan tanggung jawab mutlak batal demi hukum.",
        keadilan: 95,
        kepastian: 85,
        kemanfaatan: 90,
        alignmentShift: -10
      }
    ]
  },
  "5": {
    id: "CASE-005",
    title: "Pulau Pidana: Pembelaan Terpaksa (Noodweer)",
    facts: [
      "Seorang wanita dicekik oleh perampok bersenjata tajam di kamarnya.",
      "Wanita itu meraih pisau buah dan menusuk perampok hingga tewas.",
      "Polisi menetapkannya sebagai tersangka pembunuhan."
    ],
    options: [
      {
        id: "OPT-1",
        action: "Hukum wanita tersebut karena membunuh",
        consequence: "Anda kaku pada teks UU. Ini melanggar rasa keadilan masyarakat.",
        keadilan: 5,
        kepastian: 90,
        kemanfaatan: 10,
        alignmentShift: 30
      },
      {
        id: "OPT-2",
        action: "Bebaskan (Alasan Pemaaf/Pembenar)",
        consequence: "Pasal 49 KUHP diterapkan. Noodweer (pembelaan terpaksa) melepaskan pelaku dari hukuman.",
        keadilan: 95,
        kepastian: 70,
        kemanfaatan: 80,
        alignmentShift: -25
      }
    ]
  },
  "6": {
    id: "CASE-006",
    title: "Pulau Acara: Bukti Digital Tidak Sah",
    facts: [
      "Jaksa membawa rekaman CCTV yang diambil secara diam-diam oleh warga, bukan oleh penegak hukum.",
      "Rekaman itu sangat krusial membuktikan pembunuhan.",
      "Pengacara terdakwa menolak bukti tersebut karena tidak sah (Putusan MK MK)."
    ],
    options: [
      {
        id: "OPT-1",
        action: "Terima Bukti demi Keadilan Substantif",
        consequence: "Kebenaran materiil terungkap, tapi Anda melanggar prosedur pembuktian elektronik.",
        keadilan: 85,
        kepastian: 20,
        kemanfaatan: 60,
        alignmentShift: -20
      },
      {
        id: "OPT-2",
        action: "Tolak Bukti (Due Process of Law)",
        consequence: "Terdakwa mungkin bebas, tetapi Anda menjaga keadilan prosedural dan hak asasi manusia.",
        keadilan: 50,
        kepastian: 95,
        kemanfaatan: 50,
        alignmentShift: 20
      }
    ]
  },
  "7": {
    id: "CASE-007",
    title: "Pulau Tata Negara: Asas Fictie Hukum",
    facts: [
      "Seorang warga didenda besar karena melanggar Perda baru yang baru disahkan 1 hari lalu.",
      "Warga tersebut tidak memiliki akses internet dan belum tahu ada aturan baru.",
      "Warga menolak membayar dengan alasan tidak tahu."
    ],
    options: [
      {
        id: "OPT-1",
        action: "Hukum warga (Fictie Hukum)",
        consequence: "Setiap orang dianggap tahu hukum setelah diundangkan. Ketertiban terjaga, keadilan terasa kejam.",
        keadilan: 20,
        kepastian: 100,
        kemanfaatan: 40,
        alignmentShift: 25
      },
      {
        id: "OPT-2",
        action: "Bebaskan dengan asas keadilan (Equity)",
        consequence: "Warga selamat, tetapi Anda menghancurkan kepastian hukum dan wibawa Lembaran Negara.",
        keadilan: 90,
        kepastian: 10,
        kemanfaatan: 50,
        alignmentShift: -25
      }
    ]
  },
  "8": {
    id: "CASE-008",
    title: "Pulau AI Law: Hak Cipta Gambar AI",
    facts: [
      "Seorang seniman menggunakan AI generatif sepenuhnya untuk membuat lukisan.",
      "Lukisan tersebut dijiplak oleh perusahaan besar untuk iklan komersial.",
      "Seniman menggugat pelanggaran Hak Cipta."
    ],
    options: [
      {
        id: "OPT-1",
        action: "Kabulkan Gugatan Seniman",
        consequence: "Anda mengakui AI sebagai alat belaka, memperluas definisi pencipta di era modern.",
        keadilan: 80,
        kepastian: 40,
        kemanfaatan: 70,
        alignmentShift: -15
      },
      {
        id: "OPT-2",
        action: "Tolak Gugatan (Public Domain)",
        consequence: "Karya tanpa kontribusi manusia yang signifikan tidak dilindungi Hak Cipta. Kepastian hukum terjaga.",
        keadilan: 40,
        kepastian: 90,
        kemanfaatan: 80,
        alignmentShift: 15
      }
    ]
  }
};
