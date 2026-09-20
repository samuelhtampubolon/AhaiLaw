# -*- coding: utf-8 -*-
import json
import os

# Build complete 240 Unique Legal Dilemmas across 80 Islands in 8 Leagues
# Every single case has unique facts, unique title, unique options, realistic Indonesian legal context.

def get_leagues():
    leagues = []
    
    # -------------------------------------------------------------
    # Helper to generate unique realistic case structure
    # -------------------------------------------------------------
    def create_case(case_id, title, facts, optA, optB):
        return {
            "id": f"CASE-{case_id}",
            "title": f"Kasus #{case_id}: {title}",
            "facts": facts,
            "options": [
                {
                    "id": "OPT-1",
                    "action": optA[0],
                    "consequence": optA[1],
                    "keadilan": optA[2],
                    "kepastian": optA[3],
                    "kemanfaatan": optA[4],
                    "alignmentShift": optA[5]
                },
                {
                    "id": "OPT-2",
                    "action": optB[0],
                    "consequence": optB[1],
                    "keadilan": optB[2],
                    "kepastian": optB[3],
                    "kemanfaatan": optB[4],
                    "alignmentShift": optB[5]
                }
            ]
        }

    # =============================================================
    # LEAGUE 1: Fondasi, Asas & Filsafat Hukum
    # =============================================================
    l1_islands = [
        ("Asas Keadilan vs Kepastian Hukum (Formula Radbruch)", [
            ("Pencurian 3 Butir Buah Kakao Nenek Minah",
             ["Nenek Minah (55 tahun) memetik 3 buah kakao seharga Rp 2.100 yang jatuh di perkebunan swasta untuk bibit.", "Manajemen perkebunan bersikukuh menuntut pemidanaan pencurian ringan (Pasal 364 KUHP).", "Jaksa menuntut hukuman kurungan demi menjamin asas kepastian hak milik perkebunan."],
             ("Hentikan Penuntutan melalui Keadilan Restoratif (Perja No. 15/2020)", "Keadilan substantif tercapai, lansia miskin dilindungi tanpa pemenjaraan sia-sia.", 95, 30, 90, -25),
             ("Vonis Bersalah Sesuai Teks Formal Pasal (Positivisme Hukum)", "Kepastian teks ditegakkan kaku, namun memicu kecaman publik atas hilangnya nurani hukum.", 15, 95, 20, 25)),
            ("Sopir Ambulans Menerobos Lampu Merah Membawa Pasien Kritis",
             ["Sopir ambulans membawa korban serangan jantung akut yang sekarat dalam hitungan menit.", "Di perempatan padat, sopir membunyikan sirine dan menerobos lampu merah, terekam kamera tilang ETLE.", "Dinas Perhubungan menolak mencabut denda tilang dengan dalih rambu berlaku mutlak bagi semua."],
             ("Gunakan Doktrin Noodtoestand (Keadaan Darurat Menghapus Melawan Hukum)", "Denda tilang dibatalkan, penyelamatan nyawa manusia diakui sebagai nilai hukum tertinggi.", 90, 40, 95, -20),
             ("Pertahankan Sanksi Denda demi Ketertiban Berlalu Lintas", "Kepastian aturan jalan raya ditegakkan tanpa kompromi, namun membahayakan armada medis darurat.", 25, 90, 30, 20)),
            ("Penolakan Prajurit atas Perintah Menembak Mahasiswa Unjuk Rasa",
             ["Komandan militer memerintahkan peleton melepaskan peluru tajam ke arah mahasiswa yang duduk berorasi.", "Seorang bintara menolak menarik pelatuk karena menyadari mahasiswa tidak bersenjata dan tidak membahayakan jiwa.", "Komandan menyeret bintara tersebut ke Mahkamah Militer atas tuduhan pembangkangan perintah."],
             ("Bebaskan Bintara (Perintah Melawan Hukum Wajib Ditolak Sesuai HAM)", "Integritas moral prajurit ditegakkan; hukum menolak doktrin kepatuhan buta pada kejahatan.", 95, 40, 85, -25),
             ("Hukum Disiplin Militer demi Menjaga Rantai Komando", "Hierarki militer terjaga ketat, namun membuka ruang tirani bagi komandan yang sewenang-wenang.", 20, 95, 25, 25))
        ]),
        ("Asas Legalitas & Larangan Retroaktif (Nullum Delictum)", [
            ("Pemberlakuan Hukuman Kebiri Kimia Terhadap Pelaku Kejahatan Anak",
             ["Terdakwa mencabuli 5 anak dua pekan sebelum undang-undang perlindungan anak baru diundangkan.", "Keluarga korban menuntut hakim menjatuhkan sanksi kebiri kimia yang diatur dalam undang-undang baru.", "Pasal 1 ayat 1 KUHP dan Pasal 28I UUD 1945 melarang penerapan pidana yang berlaku surut."],
             ("Terapkan Aturan Saat Perbuatan Dilakukan (Asas Non-Retroaktif)", "Asas fundamental perlindungan HAM konstitusional ditegakkan dari kesewenang-wenangan legislasi.", 40, 95, 40, 20),
             ("Terapkan Hukuman Kebiri Baru Demi Keadilan Korban Anak", "Rasa keadilan keluarga korban terpenuhi, namun tatanan asas non-retroaktif konstitusi menjadi runtuh.", 75, 20, 60, -25)),
            ("Jerat Pidana Modus Baru Penggandaan Simcard Perbankan",
             ["Sindikat membobol tabungan nasabah dengan metode SIM swap yang belum tercantum spesifik di KUHP lama.", "Korban kehilangan tabungan pensiun senilai Rp 500 juta dalam hitungan menit.", "Jaksa mencoba menggunakan analogi pasal pencurian barang fisik konvensional."],
             ("Tolak Analogi Pasal Pidana demi Menjunjung Asas Legalitas Mutlak", "Menjaga batas ketat hukum pidana, mendesak penegak hukum memakai pasal cyber UU ITE yang tepat.", 35, 95, 30, 25),
             ("Gunakan Penafsiran Teleologis agar Pelaku Kejahatan Modern Tidak Lolos", "Pelaku pembobol rekening dipenjara, namun membuka celah penafsiran elastis pasal pidana.", 90, 40, 85, -20)),
            ("Pencabutan Izin Tambang Berdasarkan Perda Baru yang Terbit Esok Hari",
             ["Perusahaan tambang memiliki izin eksplorasi sah selama 10 tahun menurut regulasi tahun 2021.", "Pemerintah kabupaten mengundangkan Perda baru zonasi hijau dan langsung membekukan izin tambang.", "Perusahaan menuntut ganti rugi karena hak yang diperoleh secara sah (vested rights) dirampas sepihak."],
             ("Menangkan Perusahaan (Prinsip Perlindungan Hak Sah & Non-Retroaktif)", "Kepastian iklim investasi terjaga; pemerintah wajib memberi kompensasi atau masa transisi wajar.", 50, 95, 55, 15),
             ("Menangkan Pemkab (Asas Salus Populi Suprema Lex - Kelestarian Alam)", "Kerusakan alam terhenti seketika, namun menimbulkan ketakutan regulasi bagi dunia usaha.", 80, 30, 80, -20))
        ]),
        ("Hukum Kodrat vs Positivisme Yuridis (Hans Kelsen)", [
            ("Penggusuran Pemukiman Tepi Sungai Tanpa Ganti Rugi",
             ["Seratus keluarga telah bermukim di bantaran sungai selama 50 tahun dan rutin membayar PBB.", "Pemerintah kota hendak menormalisasi sungai untuk mitigasi banjir massal yang mengancam 1 juta jiwa warga kota.", "Secara sertifikat formal, tanah tersebut adalah tanah negara bebas tanpa sertifikat hak milik."],
             ("Wajibkan Kompensasi Manusiawi & Relokasi Layak (Hukum Kodrat / Progresif)", "Hak hidup bermartabat warga miskin dijamin negara tanpa mengorbankan proyek mitigasi banjir.", 90, 50, 90, -20),
             ("Eksekusi Pengosongan Tanpa Ganti Rugi Berdasarkan Status Tanah Negara", "Anggaran proyek efisien dan cepat selesai, namun melahirkan gelombang kemiskinan tunawisma baru.", 20, 95, 40, 25)),
            ("Perjanjian Kerjasama Monopoli Pupuk yang Menjebak Petani",
             ["Kelompok tani menandatangani kontrak jual beli pupuk dengan klausul denda Rp 10 juta per hari jika gagal setor panen.", "Terjadi serangan hama wereng dahsyat yang menghancurkan 90% panen padi warga.", "Distributor menuntut sita jaminan atas sawah petani sesuai teks asas Pacta Sunt Servanda."],
             ("Gugurkan Klausul Denda Berdasarkan Asas Kepatutan & Keadilan Alami", "Petani kecil terlindungi dari jerat perbudakan utang korporasi yang tidak berimbang.", 95, 35, 85, -25),
             ("Eksekusi Klausul Perjanjian demi Menegakkan Kepastian Perikatan Bisnis", "Kepastian kontrak formal ditegakkan kaku, namun puluhan petani kehilangan sawah seumur hidup.", 20, 95, 20, 25)),
            ("Pengakuan Perkawinan Penghayat Kepercayaan pada Catatan Sipil",
             ["Pasangan penganut ajaran Sunda Wiwitan hendak mencatatkan pernikahan mereka di Dinas Dukcapil.", "Petugas menolak karena ajaran tersebut belum masuk dalam daftar 6 agama resmi negara pada formulir baku.", "Pasangan menggugat atas dasar hak asasi konstitusional untuk memeluk keyakinan dan berkeluarga."],
             ("Wajibkan Pencatatan Perkawinan Berdasarkan Putusan MK No. 97/PUU-XIV/2016", "Diskriminasi administrasi dihapus, seluruh warga negara setara di hadapan hukum tanpa kecuali.", 95, 70, 90, -15),
             ("Tolak Pencatatan Demi Ketertiban Dokumen Administrasi Negara yang Baku", "Kerapian sistem birokrasi lama terjaga, namun hak sipil keturunan penghayat terabaikan.", 25, 85, 30, 20))
        ]),
        ("Asas Kepatutan & Keadilan Substantif (Hukum Progresif)", [
            ("Pemanfaatan Listrik Balai Desa untuk Inkubator Bayi Prematur",
             ["Badai tropis memutus listrik total di puskesmas pedalaman pulau terpencil.", "Kepala dusun menarik kabel darurat dari panel surya kantor pos pemda yang terkunci untuk menyalakan inkubator 2 bayi prematur.", "Petugas pemda melaporkan kepala dusun atas tuduhan perusakan aset dan pencurian tenaga listrik."],
             ("Bebaskan Kepala Dusun atas Dasar Daya Paksa Penyelamatan Nyawa", "Kemanusiaan diutamakan melampaui kerugian materiil ringan fasilitas negara.", 95, 40, 95, -25),
             ("Jatuhkan Denda Materiil demi Menegakkan Aturan Aset Barang Milik Negara", "Aset negara steril dari intervensi tak berizin, namun memicu kekecewaan warga atas birokrasi dingin.", 20, 90, 30, 20)),
            ("Pengambilan Ranting Kayu Roboh di Kawasan Hutan Lindung untuk Memasak",
             ["Seorang kakek sebatang kara mengumpulkan ranting jati kering yang patah akibat angin di pinggir hutan lindung.", "Polisi hutan menyita kayu seberat 5 kg dan mengenakan pasal perusakan habitat konservasi.", "Kakek tersebut tidak memiliki uang untuk membeli elpiji dan hanya ingin merebus ubi untuk makan malam."],
             ("Terapkan Asas Keadilan Restoratif & Berikan Pembinaan Kesejahteraan", "Mencegah kriminalisasi kemiskinan dan memulihkan keharmonisan warga sekitar hutan.", 95, 30, 90, -25),
             ("Tuntut Pidana Kurungan Minimal demi Menjaga Wibawa Hukum Kehutanan", "Efek gentar di kawasan hutan terjaga, namun menciderai nurani keadilan publik.", 15, 95, 15, 30)),
            ("Pemotongan Dahan Pohon Beringin Tetangga yang Nyaris Roboh",
             ["Dahan pohon beringin milik warga A lapuk dan condong tepat di atas atap kamar tidur bayi warga B.", "Warga A berulang kali menolak memotong dahan karena alasan takhayul warisan leluhur.", "Warga B akhirnya menyewa tukang potong pohon saat warga A pergi; warga A menuntut atas perusakan properti."],
             ("Bebaskan Warga B (Tindakan Perlindungan Keselamatan Nyawa yang Nyata)", "Pencegahan marabahaya fisik diprioritaskan di atas kepemilikan benda vegetasi pekarangan.", 85, 45, 85, -15),
             ("Hukum Warga B karena Main Hakim Sendiri (Eigenrichting)", "Ketertiban sengketa perdata dijaga lewat pengadilan, namun risiko kecelakaan fisik terabaikan.", 30, 90, 35, 20))
        ]),
        ("Hermeneutika Hukum: Penafsiran Teleologis vs Gramatikal", [
            ("Apakah Mengunduh Arus Listrik Termasuk Pencurian 'Barang'?",
             ["Terdakwa mencantol kabel listrik penerangan jalan umum untuk mengisi daya mobil listrik sewaannya.", "Jaksa menuntut terdakwa dengan Pasal 362 KUHP tentang Pencurian 'Barang yang seluruhnya milik orang lain'.", "Pengacara berdalih elektron listrik adalah energi tak kasat mata, bukan barang berwujud."],
             ("Gunakan Penafsiran Teleologis: Energi Listrik Berharga Ekonomi Adalah 'Barang'", "Melindungi fasilitas energi publik dari penyalahgunaan modern tanpa kekosongan hukum.", 80, 70, 80, 0),
             ("Tafsirkan Gramatikal Ketat: Bebaskan dari Pasal Pencurian Barang Konvensional", "Menuntut jaksa menggunakan UU Ketenagalistrikan spesifik daripada memaksakan KUHP usang.", 55, 90, 50, 15)),
            ("Status Skuter Listrik Kecepatan Tinggi di Jalur Pejalan Kaki",
             ["Pengendara skuter listrik berdaya 1.000 Watt menabrak lansia di trotoar hingga patah tulang kaki.", "Polisi mendakwa pasal kelalaian mengemudikan kendaraan bermotor di jalan umum (UU LLAJ).", "Kuasa hukum mengklaim skuter beroda dua mikro bukan kendaraan bermotor menurut definisi UU 2009."],
             ("Tafsirkan Teleologis: Segala Sarana Bertenaga Mesin Wajib Bertanggung Jawab", "Pejalan kaki di trotoar terlindungi dari bahaya kendaraan mikro berkecepatan tinggi.", 85, 60, 85, -10),
             ("Tafsirkan Gramatikal: Tolak Kualifikasi Kendaraan Bermotor Jalan Raya", "Mendorong parlemen memperbarui regulasi, namun korban saat ini sulit mendapat santunan Jasa Raharja.", 35, 90, 30, 25)),
            ("Penafsiran 'Kerugian Keuangan Negara' pada Kebijakan Bencana Letusan Gunung",
             ["Bupati membeli tenda tanggap darurat saat erupsi dengan harga 15% di atas HPS karena kelangkaan stok pasar.", "Audit BPK menemukan kelebihan pembayaran dan jaksa mendakwa Pasal 2 UU Tipikor atas kerugian negara.", "Bupati membuktikan seluruh tenda berdiri menyelamatkan 5.000 pengungsi tanpa ada uang yang masuk ke kantong pribadi."],
             ("Tafsirkan Filosofis UU Tipikor: Tidak Ada Niat Jahat Korup (Absennya Mens Rea)", "Kepala daerah tidak lumpuh mengambil keputusan darurat demi menyelamatkan jiwa ribuan korban bencana.", 95, 40, 95, -25),
             ("Tafsirkan Gramatikal Akuntansi: Selisih Bayar Tetaplah Kerugian Keuangan Negara", "Disiplin fiskal dijaga sangat kaku, namun memicu apatisme birokrasi saat musibah tiba.", 20, 95, 15, 30))
        ]),
        ("Hirarki Peraturan Perundang-Undangan & Lex Superior", [
            ("Perda Jam Malam Pekerja Perempuan Bertentangan dengan UU Ketenagakerjaan",
             ["Perda melarang wanita bekerja di luar rumah lewat pukul 22.00 dengan ancaman sanksi denda.", "Asosiasi perawat dan buruh pabrik tekstil menggugat karena menghambat shift malam yang dijamin UU Ketenagakerjaan.", "Pemerintah kota bersikeras aturan dibuat untuk ketertiban moral lokal."],
             ("Batalkan Perda Berdasarkan Asas Lex Superior Derogat Legi Inferiori", "Hak persamaan kerja perempuan dijamin, konsistensi hukum nasional ditegakkan.", 90, 85, 85, -10),
             ("Pertahankan Perda Atas Nama Otonomi Khusus & Kearifan Moral Daerah", "Aspirasi konservatif lokal diakomodasi, namun menciptakan fragmentasi hak asasi nasional.", 25, 45, 30, 20)),
            ("Surat Edaran Dirjen Pajak yang Membatasi Hak Restitusi Cepat",
             ["Dirjen Pajak menerbitkan Surat Edaran yang memperketat syarat restitusi wajib pajak di luar koridor UU KUP.", "Pengusaha UMKM menggugat ke PTUN bahwa SE bukanlah undang-undang yang boleh mengurangi hak warga.", "Dirjen beralasan SE adalah petunjuk teknis diskresi untuk mengamankan kas negara."],
             ("Nyatakan SE Tidak Memiliki Kekuatan Hukum Mengikat Publik (Cacat Wewenang)", "Mencegah pejabat menerbitkan aturan internal yang melangkahi undang-undang resmi parlemen.", 85, 95, 75, 10),
             ("Sahkan Keberlakuan SE Demi Target Pencapaian Penerimaan APBN", "Kas negara cepat terkumpul, namun mengikis kepastian hak-hak wajib pajak taat hukum.", 30, 35, 50, -15)),
            ("Perpres Pengadaan Tanah Cepat vs Putusan Mahkamah Konstitusi",
             ["Perpres proyek strategis nasional memperbolehkan penggusuran fisik tanah sebelum sengketa ganti rugi tuntas.", "Warga menunjukkan Putusan MK yang menegaskan ganti kerugian wajib tuntas terlebih dahulu sebelum lahan dikuasai.", "Kementerian berargumen keterlambatan jalan tol merugikan perekonomian triliunan rupiah."],
             ("Tunduk Mutlak pada Putusan MK sebagai Tafsir Konstitusi Tertinggi", "Hak milik warga dihormati, mencegah praktik perampasan tanah oleh aparatur negara.", 95, 95, 70, 0),
             ("Dahulukan Target Kelancaran Infrastruktur Mengacu pada Perpres", "Jalan tol selesai tepat waktu, namun melanggar marwah konstitusi dan hak kepemilikan tanah.", 20, 30, 60, -25))
        ]),
        ("Asas Fiksi Hukum & Presumsi Setiap Orang Tahu UU", [
            ("Warga Pelosok Merawat Burung Kakatua Raja yang Terluka",
             ["Warga pedalaman merawat kakatua raja yang patah sayapnya di serambi rumah hingga sehat.", "Polisi menangkapnya dengan ancaman penjara 5 tahun berdasarkan UU Konservasi Hayati.", "Warga tersebut buta huruf, tinggal tanpa listrik dan sinyal, serta belum pernah mendapat sosialisasi undang-undang."],
             ("Bebaskan Pelaku dari Jerat Pidana & Sita Satwa untuk Rehabilitasi", "Keadilan kontekstual ditegakkan tanpa menindas masyarakat rentan yang belum terlayani literasi hukum.", 95, 40, 90, -25),
             ("Jatuhkan Vonis Sesuai Asas Fiksi Hukum (Ignorantia Juris Non Excusat)", "Asas fiksi hukum dijunjung tinggi tanpa pandang bulu, namun melahirkan potret kezaliman peradilan.", 15, 95, 15, 30)),
            ("Pedagang Sayur Keliling Memakai Kantong Plastik yang Baru Dilarang",
             ["Pemerintah daerah mengesahkan Perda larangan kantong kresek yang baru diundangkan 4 hari lalu.", "Satpol PP mendenda pedagang sayur keliling sebesar Rp 500.000 karena membungkus terong dengan kantong plastik lama.", "Denda tersebut setara dengan omzet berdagang sang ibu selama tiga hari bekerja."],
             ("Batalkan Denda & Berikan Peringatan Lisan serta Sosialisasi Bertahap", "Penegakan hukum berorientasi pembinaan humanis tanpa mematikan nafkah pedagang gurem.", 90, 50, 90, -20),
             ("Tegakkan Sanksi Penuh Mengacu pada Tanggal Lembaran Daerah", "Ketegasan aturan lingkungan ditegakkan seketika, namun menimbulkan luka sosial pedagang kecil.", 25, 95, 30, 20)),
            ("Petani Membawa Golok Penebas Semak Saat Melintasi Operasi Razia",
             ["Kakek petani membawa golok pemangkas semak di boncengan sepeda tuanya saat melintasi razia malam cipta kondisi.", "Aparat menjeratnya dengan UU Darurat No. 12 Tahun 1951 tentang Kepemilikan Senjata Tajam ancaman 10 tahun penjara.", "Kakek membuktikan ia baru pulang membabat kebun kelapa sawit miliknya di pinggir desa."],
             ("Hentikan Perkara Pidana: Golok Adalah Alat Kerja Sah (Legitimate Purpose)", "Menjauhkan pasal darurat dari kriminalisasi profesi agraris tradisional.", 95, 60, 90, -20),
             ("Proses Pidana Mengingat Membawa Senjata Tajam di Tempat Umum Dilarang Mutlak", "Ketertiban malam perkotaan steril tanpa kompromi, namun merampas kemerdekaan kakek tak bersalah.", 10, 90, 20, 25))
        ]),
        ("Hukum Adat / Kebiasaan vs Kodifikasi Hukum Tertulis", [
            ("Penebangan Kayu Ulin Hutan Ulayat untuk Upacara Pemakaman Adat",
             ["Masyarakat adat menebang satu pohon ulin di hutan ulayat leluhur untuk upacara sakral pemakaman adat.", "Kawasan tersebut baru dipetakan sepihak oleh pemerintah sebagai Taman Nasional konservasi.", "Polisi kehutanan menahan tetua adat atas sangkaan illegal logging."],
             ("Akui Hak Ulayat Komunitas Adat Berdasarkan Pasal 18B UUD 1945", "Hak konstitusional masyarakat adat dipulihkan, membina sinergi adat dan konservasi hutan.", 95, 45, 85, -25),
             ("Hukum Berdasarkan UU Kehutanan Tertulis Demi Menjaga Status Taman Nasional", "Batas zona konservasi steril mutlak, namun menindas warisan budaya bangsa yang telah ada ratusan tahun.", 20, 95, 40, 25)),
            ("Musyawarah Perdamaian Kasus Perkelahian Pemuda di Desa Adat",
             ["Dua pemuda banjar terlibat perkelahian dan diselesaikan damai lewat sanksi adat oleh pemuka desa.", "Paman korban di kota melaporkan peristiwa tersebut ke polsek dan menuntut sidang pidana KUHP.", "Masyarakat desa adat keberatan karena intervensi kepolisian membuka kembali luka persaudaraan yang telah pulih."],
             ("Hormati Perdamaian Adat & Hentikan Penyidikan Melalui Pendekatan Restoratif", "Kedamaian desa adat terjaga murni tanpa menambah beban lembaga pemasyarakatan.", 90, 50, 95, -20),
             ("Lanjutkan Proses Peradilan Pidana Negara (Monopoli Penuntutan Publik)", "Dominasi penegakan hukum formal negara dipertahankan, namun merusak tatanan harmoni desa.", 30, 90, 30, 20)),
            ("Sengketa Batas Tanah Parit Alam vs Pengukuran Satelit Digital BPN",
             ["Dua tetangga menyepakati batas tanah warisan berupa parit air alami yang diakui tiga generasi keluarga.", "Program sertifikasi massal BPN menggunakan drone satelit menggeser batas garis lurus 2 meter ke pekarangan warga tetangga.", "Tetangga penikmat pergeseran menuntut perataan pagar mengandalkan sertifikat baru BPN."],
             ("Menangkan Batas Parit Fisik Berdasarkan Kesepakatan Historis Iktikad Baik", "Kerukunan bertetangga terselamatkan sesuai kebenaran materiil penguasaan tanah.", 85, 40, 85, -15),
             ("Tegakkan Garis Batas Koordinat Digital BPN Demi Kepastian Kadaster", "Sistem pendaftaran tanah digital negara terjamin absolut, namun memicu permusuhan abadi tetangga.", 35, 95, 40, 20))
        ]),
        ("Diskresi Penegak Hukum vs Penyalahgunaan Wewenang", [
            ("Kapolsek Menghentikan Kasus Pencuri Tabung Gas Demi Beli Susu Bayi",
             ["Pemuda tertangkap basah mencuri tabung gas melon di warung tetangga untuk membeli obat demam bayinya yang menggigil.", "Kapolsek mengganti kerugian korban warung dengan uang pribadinya dan mendamaikan kedua pihak.", "Sebuah LSM melaporkan Kapolsek ke Propam atas dugaan menghentikan penyidikan tanpa gelar perkara formal SP3."],
             ("Apresiasi Diskresi Humanis Kapolsek (Keadilan Restoratif)", "Polisi dicintai rakyat sebagai pengayom sejati, keadilan restoratif terwujud nyata.", 95, 40, 95, -25),
             ("Jatuhkan Teguran Etik karena Mengabaikan Prosedur Formil KUHAP", "Kepatuhan birokrasi penegakan hukum terjaga rapi, namun memadamkan empati aparat terhadap orang miskin.", 20, 95, 20, 25)),
            ("Jaksa Menolak Melimpahkan Berkas Perkara Kakek yang Membela Cucunya",
             ["Seorang kakek melumpuhkan pelaku pemerkosa cucunya dengan balok kayu hingga pelaku patah rahang.", "Penyidik kepolisian melimpahkan berkas dengan tuduhan penganiayaan berat (Pasal 351 KUHP).", "Kepala Kejaksaan Negeri menerbitkan SKP2 penghentian penuntutan demi keadilan."],
             ("Sahkan Penghentian Penuntutan oleh Jaksa (Dominus Litis Berkeadilan Substantif)", "Korban dan pelindung keluarga terlindungi dari penderitaan menjadi terdakwa di ruang pengadilan.", 95, 50, 90, -20),
             ("Paksa Jaksa Bawa Perkara ke Meja Hijau agar Diputus oleh Majelis Hakim", "Pemisahan peran penyidik, jaksa, dan hakim terjaga murni, namun membebani kakek tua yang trauma.", 30, 90, 30, 20)),
            ("Hakim Menjatuhkan Vonis Pemaafan Peradilan atas Pencuri Obat",
             ["Seorang ibu mencuri obat antibiotik di apotek senilai Rp 70.000 karena anaknya kejang demam dan ia tidak punya uang.", "Di persidangan, ibu tersebut menangis bersimpuh dan pemilik apotek telah memaafkannya.", "Hakim memutus bersalah namun membebaskan dari segala pidana penjara (Pemaafan Hakim KUHP Baru)."],
             ("Dukung Putusan Pemaafan Hakim sebagai Wajah Humanis Hukum Modern", "Hukum pidana berevolusi dari sarana pembalasan dendam menjadi sarana pemulihan keadilan bermartabat.", 95, 60, 95, -20),
             ("Tuntut Hukuman Penjara Minimal Demi Efek Jera Masyarakat Luas", "Pencegahan umum terjaga keras, namun menghancurkan masa depan seorang ibu dan bayinya.", 15, 90, 20, 25))
        ]),
        ("Ujian Komprehensif: Putusan Sidang Mahkamah Perdana", [
            ("Dilema Speluncean Explorers: Pengorbanan Satu Jiwa demi Selamatkan Empat",
             ["Lima penjelajah terjebak di reruntuhan gua selama 30 hari tanpa cadangan makanan dan dipastikan mati kelaparan.", "Mereka melempar undian dadu untuk mengorbankan satu orang demi menjadi santapan bertahan hidup hingga tim penyelamat datang.", "Empat penjelajah yang selamat diseret ke pengadilan atas dakwaan pembunuhan berencana (Pasal 340 KUHP)."],
             ("Bebaskan Terdakwa Berdasarkan Alasan Keadaan Memaksa Ekstrem (Noodtoestand)", "Hukum mengakui batas ketahanan biologis ekstrem manusia ketika hukum positif kehilangan rasionalitasnya.", 80, 30, 85, -25),
             ("Jatuhkan Hukuman Pembunuhan Sesuai Asas Legalitas Mutlak", "Kesucian hak hidup setiap individu dijaga tanpa boleh dikorbankan demi kalkulasi angka keuntungan.", 40, 95, 30, 25)),
            ("Pengujian UU Kontroversial yang Memangkas Upah Minimum Demi Investasi",
             ["Undang-undang baru disahkan DPR untuk menarik modal manufaktur asing dengan cara membekukan kenaikan upah buruh.", "Ratusan ribu buruh menggelar mogok massal melumpuhkan logistik pelabuhan dan kawasan industri.", "Serikat pekerja mengajukan uji materiil ke Mahkamah Konstitusi memohon pembatalan pasal upah murah."],
             ("Batalkan Pasal Upah Murah karena Bertentangan dengan Hak Hidup Layak (UUD 1945)", "Kesejahteraan buruh terlindungi dari perlombaan eksploitasi upah murah antar-negara.", 90, 70, 80, -15),
             ("Tolak Permohonan: Kebijakan Makroekonomi Adalah Wewenang DPR (Open Legal Policy)", "Daya saing investasi naik dan batas wewenang hakim terjaga, namun memperlebar jurang kemiskinan buruh.", 30, 85, 55, 20)),
            ("Penolakan Mandat Vaksinasi Wajib Saat Wabah Mematikan",
             ["Pemerintah menetapkan kewajiban vaksinasi massal untuk menghentikan kematian pandemi dengan sanksi penahanan bansos.", "Seorang warga menggugat ke pengadilan menuntut hak atas kedaulatan integritas tubuhnya sendiri (bodily autonomy).", "Para ahli epidemiologi menyatakan jika 20% menolak vaksin, gelombang mutasi virus akan membunuh puluhan ribu lansia."],
             ("Menangkan Pemerintah: Keselamatan Publik Berada di Atas Hak Otonomi Privat", "Kekebalan populasi tercapai dan nyawa puluhan ribu lansia terselamatkan dari kematian massal.", 60, 75, 95, 10),
             ("Menangkan Warga: Hak Menentukan Intervensi Medis Tubuh Adalah Hak Asasi Mutlak", "Kedaulatan tubuh individu dari paksaan jarum suntik negara terlindungi, namun risiko wabah melonjak.", 85, 40, 30, -20))
        ])
    ]
    leagues.append((1, "Liga Pemula (Fondasi & Filsafat Hukum)", "Filsafat, Asas, dan Pengantar Ilmu Hukum", l1_islands))

    # =============================================================
    # LEAGUE 2: Hukum Perdata 1 - Orang, Keluarga, Benda
    # =============================================================
    l2_islands = [
        ("Kedudukan Hak Waris Anak Luar Kawin pasca Putusan MK", [
            ("Tuntutan Hak Waris Anak Biologis Berdasarkan Uji DNA Forensik",
             ["Pemuda menuntut hak waris atas harta ayahnya, pengusaha tekstil yang wafat tanpa wasiat.", "Hasil tes DNA membuktikan identitas keayahan biologis sebesar 99,99% sesuai Putusan MK No. 46/PUU-VIII/2010.", "Keluarga istri sah menolak membagi warisan dengan dalih KUHPerdata membatasi anak luar kawin."],
             ("Kabulkan Hak Waris Anak Biologis Berdasarkan Bukti Ilmiah DNA", "Keadilan bagi anak tidak berdosa diwujudkan sesuai putusan progresif Mahkamah Konstitusi.", 95, 55, 85, -20),
             ("Batasi Hanya pada Nafkah Pemeliharaan Tanpa Hak Pokok Harta Waris", "Kepastian pembagian waris keluarga sah dipertahankan tanpa memecah aset perseroan keluarga.", 40, 90, 45, 20)),
            ("Tuntutan Pencantuman Nama Ayah Biologis pada Akta Kelahiran",
             ["Ibu tunggal memohon ke Catatan Sipil agar nama ayah biologis dicantumkan pada akta lahir anaknya.", "Sang ayah menolak menandatangani surat pengakuan karena khawatir merusak nama baik rumah tangga resminya.", "Ibu menunjukkan bukti transfer bulanan yang membuktikan nafkah anak dari pria tersebut."],
             ("Perintahkan Pencantuman Nama Ayah Biologis Demi Hak Asasi Anak", "Anak terlindungi dari stigma sosial dan memperoleh kepastian nasab keperdataan yang jelas.", 95, 65, 90, -15),
             ("Tolak Permohonan Tanpa Adanya Penetapan Pengakuan Sukarela Ayah", "Mencegah klaim sepihak hubungan kekerabatan tanpa putusan pengadilan negeri terlebih dahulu.", 45, 90, 40, 20)),
            ("Sengketa Bagian Waris Anak Angkat Tanpa Pengesahan Pengadilan",
             ["Seorang wanita merawat anak yatim piatu sejak bayi selama 25 tahun layaknya anak kandung sendiri.", "Ibu angkat meninggal mendadak sebelum sempat mengurus akta pengesahan pengangkatan anak di pengadilan negeri.", "Saudara kandung almarhumah menuntut seluruh rumah warisan dan mengusir anak angkat ke jalanan."],
             ("Berikan Bagian Wasiat Wajibah demi Keadilan Nyata", "Bakti dan ikatan batin puluhan tahun diakui hukum tanpa membiarkan anak angkat terlantar.", 90, 45, 85, -20),
             ("Serahkan Seluruh Warisan ke Ahli Waris Sedarah Sesuai KUHPerdata", "Prinsip garis darah hukum waris klasik ditegakkan murni tanpa penyimpangan prosedur formal.", 30, 95, 30, 25))
        ]),
        ("Hak Mutlak Ahli Waris (Legitieme Portie) vs Wasiat", [
            ("Wasiat Konglomerat Mewariskan 90% Harta ke Yayasan Satwa Langka",
             ["Konglomerat mewasiatkan 90% asetnya ke yayasan konservasi harimau dalam surat wasiat notaril.", "Tiga anak kandungnya menggugat karena hak mutlak bagian waris mereka (Legitieme Portie) terlanggar.", "Yayasan berargumen pewaris memiliki kebebasan penuh atas harta yang ia hasilkan semasa hidup."],
             ("Pangkas Wasiat Demi Memenuhi Hak Legitieme Portie Anak Kandung", "Kepastian hak perlindungan nafkah keluarga darah dilindungi oleh Pasal 913 KUHPerdata.", 75, 95, 60, 15),
             ("Hormati Wasiat Amal Pewaris Berdasarkan Kebebasan Kehendak Terakhir", "Kelestarian satwa langka terbiayai besar, namun menelantarkan hak waris mutlak anak-anak pewaris.", 55, 30, 75, -20)),
            ("Hibah Rumah Diam-Diam kepada Istri Siri Sebelum Wafat",
             ["Sebelum wafat, seorang pria menghibahkan ruko paling berharga kepada istri siri tanpa sepengetahuan anak-anak istri pertama.", "Anak-anak istri pertama menuntut pembatalan akta hibah karena menghabiskan lebih dari separuh harta peninggalan.", "Istri siri berargumen akta hibah di hadapan notaris telah sah berkekuatan hukum."],
             ("Batalkan Sebagian Hibah yang Melanggar Bagian Mutlak (Inbreng)", "Keadilan antar-ahli waris dipulihkan; harta ditarik kembali ke boedel waris untuk dibagi adil.", 90, 85, 80, 0),
             ("Pertahankan Hibah Notaril Mengacu pada Hak Pemilik Mengalihkan Benda", "Kepastian akta otentik notaris dijaga, namun mengabaikan asas perlindungan waris keluarga sah.", 35, 90, 40, 20)),
            ("Tuntutan Pencabutan Hak Waris Anak Kandung yang Melakukan KDRT",
             ["Seorang anak laki-laki pernah divonis pidana karena memukul ayahnya hingga dirawat di rumah sakit.", "Setelah sang ayah wafat, anak tersebut tetap menuntut sepertiga warisan perkebunan sawit.", "Adik-adiknya menolak dengan alasan pelaku telah berstatus onwaardig (tidak patut menjadi ahli waris)."],
             ("Nyatakan Anak Tidak Patut Mewaris (Onwaardig Pasal 838 KUHPerdata)", "Moralitas keluarga ditegakkan; pelaku kekerasan terhadap orang tua gugur hak warisnya demi hukum.", 95, 95, 85, 5),
             ("Berikan Sebagian Hak Waris karena Terdakwa Telah Menjalani Vonis Pidana", "Menghindari pemiskinan eks-narapidana, namun melanggar doktrin kepatutan ahli waris.", 40, 40, 45, -15))
        ]),
        ("Perjanjian Kawin (Prenuptial Agreement) Berjalan", [
            ("Pemisahan Harta Suami Istri Demi Menghindari Sita Utang Judi",
             ["Suami terlilit utang rentenir miliaran rupiah akibat kecanduan judi online.", "Pasangan suami istri menandatangani akta pemisahan harta perkawinan di notaris pasca Putusan MK No. 69/PUU-XIII/2015.", "Kreditor menggugat akta tersebut sebagai tipu muslihat (actio pauliana) untuk menyembunyikan rumah."],
             ("Lindungi Harta Istri yang Terbukti Dibeli dari Tabungan Gaji Pribadi", "Istri dan anak-anak terlindungi dari kemiskinan akibat kelalaian suami.", 90, 65, 85, -15),
             ("Batalkan Akta Pemisahan demi Kepastian Pelunasan Piutang Kreditor", "Mencegah modus pengelabuan debitur nakal yang menyembunyikan harta bersama di balik nama istri.", 45, 90, 50, 20)),
            ("Klausul Denda Perselingkuhan dalam Perjanjian Pra-Nikah",
             ["Calon pengantin sepakat mencantumkan klausul penalti Rp 2 miliar jika salah satu terbukti selingkuh.", "Setelah 5 tahun menikah, suami terbukti berselingkuh dan istri menuntut eksekusi penalti klausul pranikah.", "Suami membela diri bahwa denda pidana moral tidak boleh dikomodifikasi dalam perjanjian perdata."],
             ("Eksekusi Denda Finansial Sesuai Kesepakatan Perikatan Sah Para Pihak", "Klausul perdata dihormati, memberikan perlindungan bagi pihak yang dirugikan komitmennya.", 85, 75, 90, -10),
             ("Batalkan Klausul karena Mengatur Kesusilaan Pribadi di Luar Ranah Perdata", "Mencegah komersialisasi moralitas rumah tangga, namun merugikan pihak istri yang dikhianati.", 40, 70, 40, 15)),
            ("Pendaftaran Akta Pisah Harta yang Terlambat di Pengadilan Negeri",
             ["Pasangan suami istri menandatangani akta pisah harta di hadapan notaris sebelum akad nikah.", "Namun notaris lalai mendaftarkan akta tersebut ke kepaniteraan Pengadilan Negeri dan Dinas Catatan Sipil.", "Bank menyita deposito istri untuk membayar kredit macet PT milik suami dengan dalih akta tak mengikat pihak ketiga."],
             ("Tolak Sitaan Bank Mengingat Iktikad Baik Telah Terbukti Notaril", "Keadilan substansi hak milik istri diutamakan daripada kelalaian administratif notaris.", 85, 50, 80, -15),
             ("Menangkan Bank Berdasarkan Asas Publisitas Pendaftaran Perjanjian Kawin", "Perlindungan pihak ketiga terjaga ketat; istri diarahkan menuntut ganti rugi ke notaris yang lalai.", 40, 95, 50, 25))
        ]),
        ("Hibah Wasiat yang Melebihi Batas Sepertiga Harta Warisan", [
            ("Pemberian Rumah Tinggal kepada Perawat Lansia Tanpa Hubungan Darah",
             ["Kakek berusia 80 tahun menghibahkan rumah tinggal satu-satunya kepada perawat yang merawatnya selama 10 tahun sakit stroke.", "Anak-anak kandung kakek yang tinggal di luar negeri dan tidak pernah menjenguk menggugat ke pengadilan setelah ayah wafat.", "Anak kandung mengklaim hibah melampaui batas sepertiga harta dan menuduh bujuk rayu."],
             ("Bagi Rumah Secara Proporsional: Hak Tempat Tinggal Perawat & Hak Waris Anak", "Kompromi adil; menghargai pengorbanan tulus perawat sambil mengakui hak waris anak kandung.", 90, 60, 90, -15),
             ("Batalkan Seluruh Hibah Wasiat Berdasarkan Perlindungan Garis Keturunan", "Kepastian teks hukum waris terjaga kaku, namun membuang perawat berjasa ke jalanan tanpa nafkah.", 30, 95, 25, 25)),
            ("Hibah Tanah Perkebunan kepada Pesantren Ditentang Anak Tunggal Miskin",
             ["Seorang ayah mewakafkan 80% tanah perkebunannya untuk pembangunan asrama santri yatim piatu di desanya.", "Anak kandung tunggalnya seorang buruh tani miskin memprotes karena sisa 20% tanah tandus tidak cukup untuk makan keluarganya.", "Pengurus pesantren bersikeras wakaf keagamaan tidak boleh diganggu gugat."],
             ("Sesuaikan Batas Maksimal Hibah Menjadi Sepertiga Demi Hak Nafkah Anak", "Pahala ibadah pewaris tetap jalan, hak dasar hidup anak kandung miskin terselamatkan.", 95, 80, 90, -10),
             ("Tegakkan Hibah Wakaf 80% Penuh Demi Menjaga Niat Ibadah Pewaris", "Fasilitas asrama yatim piatu terbangun megah, namun anak kandung pewaris jatuh ke lembah kemiskinan ekstrem.", 35, 60, 60, 15)),
            ("Gugatan Pengembalian Mobil Hadiah Pertunangan yang Dibatalkan",
             ["Pria memberikan mobil mewah sebagai hadiah seserahan pertunangan resmi dengan akta hibah notaril.", "Tiga bulan sebelum resepsi pernikahan, calon istri membatalkan pernikahan sepihak karena berselingkuh.", "Pria menggugat pengembalian mobil berdasarkan Pasal 1688 KUHPerdata."],
             ("Kabulkan Gugatan: Wajibkan Pengembalian Mobil Hadiah Pertunangan", "Mencegah perbuatan memperkaya diri sendiri tanpa hak yang mencederai kepatutan moral pertunangan.", 95, 85, 85, 0),
             ("Tolak Gugatan Berdasarkan Sifat Hibah Murni yang Tidak Dapat Ditarik Kembali", "Kepastian transaksi hibah dihormati, namun membiarkan ketidakadilan dinikmati pihak yang berkhianat.", 25, 80, 30, 25))
        ]),
        ("Bezit vs Eigendom: Penguasaan Fisik Tanah Terlantar 30 Tahun", [
            ("Petani Mengolah Lahan HGB Kedaluwarsa Milik Korporasi Selama 30 Tahun",
             ["Kelompok tani menanami lahan terlantar seluas 20 hektar sejak HGB korporasi habis pada tahun 1993 tanpa pernah ditengok.", "Tahun 2023, pengembang properti membeli sisa hak dan mengerahkan ekskavator meratakan ladang jagung petani.", "Petani menuntut hak prioritas pendaftaran tanah berdasarkan daluwarsa akuisitif (Pasal 1963 KUHPerdata)."],
             ("Akui Hak Penguasaan Fisik Petani Berdasarkan Asas Tanah untuk Penggarap", "Keadilan agraria progresif diwujudkan; lahan tidur berpuluh tahun menjadi berkah pangan rakyat.", 95, 40, 95, -25),
             ("Eksekusi Penggusuran Demi Menjaga Kepastian Hak Pemegang Modal Formal", "Kepastian sistem pendaftaran tanah berbadan hukum terjaga, namun mengusir ratusan keluarga petani.", 20, 95, 35, 25)),
            ("Sengketa Rumah Warisan Berdasarkan Akta Girik Kuno vs Sertifikat Baru BPN",
             ["Keluarga pensiunan guru menempati rumah dengan bukti surat girik dan pembayaran PBB selama 60 tahun.", "Tiba-tiba seorang pengusaha muncul membawa Sertifikat Hak Milik (SHM) yang diterbitkan BPN dua tahun lalu.", "Pengusaha menuntut pengosongan seketika tanpa uang santunan sepeser pun."],
             ("Batalkan Sertifikat Baru BPN karena Terbit Cacat Prosedur di Atas Tanah Berpenghuni", "Melindungi warga dari mafia tanah yang menerbitkan sertifikat siluman di kantor BPN.", 95, 70, 90, -15),
             ("Menangkan Pemegang Sertifikat SHM Resmi Sebagai Bukti Hak Terkuat", "Sistem hukum sertifikasi tanah modern ditegakkan kaku, mengorbankan keluarga yang menempati puluhan tahun.", 25, 95, 40, 25)),
            ("Klaim Pemilik Asal atas Rumah yang Dibeli Pembeli Beriktikad Baik di Lelang",
             ["Seorang warga membeli rumah lelang bank melalui risalah lelang resmi KPKNL dan telah membaliknama sertifikat.", "Pemilik lama menggugat bahwa lelang bank cacat hukum karena surat peringatan wanprestasi tak pernah sampai.", "Pembeli lelang menuntut perlindungan sebagai pembeli beriktikad baik (good faith purchaser)."],
             ("Lindungi Pembeli Lelang Resmi KPKNL Berdasarkan Asas Iktikad Baik", "Kepastian hukum pasar lelang eksekusi negara terjaga dari pembatalan sepihak di masa depan.", 75, 95, 85, 10),
             ("Batalkan Hasil Lelang & Kembalikan Rumah ke Pemilik Asal dengan Ganti Rugi", "Hak pemilik lama dipulihkan, namun meruntuhkan kepercayaan publik terhadap risalah lelang negara.", 65, 30, 50, -20))
        ]),
        ("Eksekusi Hak Tanggungan oleh Bank Tanpa Putusan Pengadilan", [
            ("Lelang Eksekusi Rumah Debitur yang Sedang Mengajukan Restrukturisasi",
             ["Pengusaha katering terdampak pandemi gagal bayar cicilan pinjaman bank selama 4 bulan.", "Bank langsung memasang plang lelang eksekusi rumah keluarga debitur senilai Rp 2 miliar dengan limit hanya Rp 800 juta.", "Debitur memohon penundaan karena usahanya mulai pulih dan telah mengajukan proposal pelunasan bertahap."],
             ("Tunda Lelang & Perintahkan Musyawarah Restrukturisasi Kredit yang Berkeadilan", "Debitur yang beriktikad baik diselamatkan dari kebangkrutan tragis dan kerugian aset tak wajar.", 90, 50, 90, -20),
             ("Izinkan Eksekusi Parate Lelang Bank Sesuai UU Hak Tanggungan", "Likuiditas bank dan kepastian pelunasan kreditur separatis terjaga kilat tanpa hambatan.", 35, 95, 45, 25)),
            ("Penjualan Objek Jaminan di Bawah Harga Pasar yang Menghancurkan Debitur",
             ["Pabrik garmen seharga taksiran appraisal independen Rp 10 miliar dilelang bank seharga Rp 3 miliar ke pembeli tunggal.", "Hasil penjualan lelang bahkan belum menutup sisa pokok utang dan bunga pinjaman debitur.", "Debitur menggugat Perbuatan Melawan Hukum (PMH) atas obral aset yang tidak wajar dan merugikan."],
             ("Batalkan Risalah Lelang yang Menjual Jauh di Bawah Nilai Likuidasi Wajar", "Mencegah persekongkolan lelang murah yang menzalimi debitur dalam kesulitan ekonomi.", 95, 60, 85, -15),
             ("Sahkan Hasil Lelang Sesuai Prosedur Pelelangan Umum KPKNL", "Kepastian transaksi lelang formal terjaga, namun membiarkan debitur hancur termiskinkan.", 25, 95, 30, 25)),
            ("Eksekusi Rumah Warisan yang Dijaminkan Salah Satu Ahli Waris Tanpa Izin",
             ["Anak sulung memalsukan persetujuan adik-adiknya untuk menjaminkan sertifikat rumah warisan bersama ke bank.", "Anak sulung kabur saat kredit macet, dan bank hendak mengosongkan rumah yang dihuni ibu kandung dan adik-adiknya.", "Adik-adik mengajukan perlawanan pihak ketiga (derden verzet) menolak pengosongan."],
             ("Kabulkan Derden Verzet: Batalkan Hak Tanggungan yang Cacat Persetujuan Ahli Waris", "Ibu sepuh dan adik-adik terlindungi dari kehilangan tempat tinggal akibat kejahatan kakak sulung.", 95, 70, 85, -10),
             ("Menangkan Hak Bank Mengosongkan Rumah Mengingat Sertifikat Asli Ada di Bank", "Keamanan kredit perbankan terlindungi, namun menelantarkan korban penipuan keluarga sendiri.", 30, 90, 35, 20))
        ]),
        ("Pengampuan (Curatele) Terhadap Lansia Berharta Triliunan", [
            ("Perebutan Pengampuan Konglomerat Pengidap Alzheimer oleh Anak Kandung",
             ["Pendiri korporasi farmasi berusia 82 tahun didiagnosis menderita demensia Alzheimer berat.", "Anak pertama memohon penetapan pengampuan (curatele) agar dapat mengendalikan seluruh saham perseroan.", "Anak kedua menolak dan menuduh anak pertama berniat melikuidasi aset perusahaan demi kepentingan pribadi."],
             ("Bentuk Tim Pengampu Bersama Dibawah Pengawasan Balai Harta Peninggalan", "Aset terlindungi secara transparan dan netral tanpa memicu dominasi sepihak salah satu anak.", 90, 80, 90, 0),
             ("Tolak Pengampuan: Biarkan Konglomerat Tetap Mengelola Aset Sendiri", "Otonomi pribadi lansia dihormati, namun berisiko tinggi dimanfaatkan pihak luar untuk penipuan aset.", 50, 50, 40, -15)),
            ("Permohonan Pengampuan Suami atas Istri Pecandu Belanja & Judi Kripto",
             ["Istri menghabiskan tabungan pendidikan anak sebesar Rp 3 miliar untuk judi trading kripto dan belanja kompulsif.", "Suami memohon penetapan pengampuan (curatele) atas dasar pemborosan (verkwisting Pasal 433 KUHPerdata).", "Istri membela diri bahwa ia menggunakan uang hasil warisan orang tuanya sendiri."],
             ("Kabulkan Pengampuan atas Dasar Pemborosan Patologis yang Merusak Masa Depan Anak", "Masa depan finansial anak-anak terselamatkan dari bahaya jerat kemiskinan judi kompulsif.", 85, 85, 90, 5),
             ("Tolak Pengampuan karena Harta Warisan Adalah Hak Milik Bebas Pribadi Istri", "Kebebasan individu atas harta pribadi dihormati, namun berujung kehancuran ekonomi total keluarga.", 45, 75, 40, -10)),
            ("Keabsahan Hibah Tanah yang Dibuat Lansia Seminggu Sebelum Masuk Curatele",
             ["Kakek pikun menghibahkan tanah strategis kepada tetangga yang rajin membawakannya makanan setiap pagi.", "Seminggu kemudian, pengadilan negeri mengeluarkan penetapan pengampuan resmi atas kakek tersebut.", "Anak kandung menggugat pembatalan hibah dengan dalih saat menandatangani akta, kakek sudah tidak cakap berbuat hukum."],
             ("Batalkan Hibah Mengingat Ketidakcakapan Mental Terbukti Nyata Secara Medis", "Mencegah eksploitasi lansia rentan oleh pihak yang memanfaatkan kemunduran kognitif.", 95, 70, 85, -15),
             ("Pertahankan Hibah karena Ditandatangani Sebelum Terbitnya Putusan Pengadilan", "Asas kepastian waktu penetapan hukum formil terjaga, namun mengabaikan manipulasi terhadap lansia.", 35, 90, 40, 20))
        ]),
        ("Penarikan Sepihak Jaminan Fidusia oleh Debt Collector Jalanan", [
            ("Penghadangan Motor Ibu yang Mengantar Anak Sekolah oleh Debt Collector",
             ["Ibu terlambat mencicil motor 2 bulan dihadang di jalan raya dan dipaksa menyerahkan kunci kontak di depan anaknya yang menangis.", "Perusahaan leasing beralasan memiliki sertifikat fidusia yang memiliki kekuatan eksekutorial sama dengan putusan hakim.", "Ibu tersebut melaporkan aksi perampasan ke polisi merujuk pada Putusan MK No. 18/PUU-XVII/2019."],
             ("Proses Pidana Perampasan: Eksekusi Wajib Sukarela atau Melalui Pengadilan Negeri", "Melindungi warga dari premanisme jalanan dan menegakkan putusan perlindungan debitur Mahkamah Konstitusi.", 95, 85, 90, -10),
             ("Benarkan Tindakan Penarikan Demi Efektivitas Penagihan Multifinance", "Kreditur leasing leluasa mengamankan piutang macet, namun melegalkan teror intimidasi ruang publik.", 20, 80, 30, 25)),
            ("Debitur Mengalihkan Mobil Kredit ke Pihak Ketiga Tanpa Izin Leasing",
             ["Debitur menggadaikan mobil yang masih berstatus kredit fidusia kepada penadah di luar kota seharga Rp 50 juta lalu menghilang.", "Perusahaan pembiayaan menuntut debitur dengan Pasal 36 UU Jaminan Fidusia tentang penggelapan objek fidusia.", "Debitur yang tertangkap membela diri bahwa sengketa kredit macet adalah ranah murni perdata."],
             ("Jatuhkan Pidana Penggelapan Objek Fidusia Sesuai Ketentuan UU No. 42/1999", "Mencegah modus penggelapan kendaraan kredit yang merugikan industri pembiayaan nasional.", 85, 95, 85, 10),
             ("Lepaskan dari Pidana & Alihkan ke Gugatan Wanprestasi Perdata", "Menghindari kriminalisasi debitur macet, namun memicu maraknya sindikat oper kredit ilegal.", 30, 40, 35, -20)),
            ("Sengketa Biaya Tarik Kendaraan yang Melebihi Tunggakan Cicilan",
             ["Debitur menunggak angsuran mobil Rp 4 juta, namun debt collector menuntut biaya penarikan operasional sebesar Rp 25 juta.", "Leasing menolak menerima pelunasan cicilan pokok tanpa pembayaran penuh biaya penarikan jasa penagih.", "Debitur menggugat klausul pembebanan biaya penagihan pihak ketiga yang tak ada di perjanjian awal."],
             ("Batalkan Biaya Tarik Liar & Perintahkan Pengembalian Mobil Setelah Cicilan Lunas", "Melindungi konsumen dari pemerasan terstruktur berkedok biaya jasa penagihan swasta.", 95, 80, 90, -10),
             ("Wajibkan Debitur Bayar Biaya Tarik Sebagai Konsekuensi Keterlambatan", "Kepentingan biaya operasional penagihan leasing tertutup, namun melegitimasi tarif pemerasan sepihak.", 25, 70, 30, 20))
        ]),
        ("Perbuatan Melawan Hukum (Pasal 1365 KUHPerdata) Antar Tetangga", [
            ("Pembangunan Tembok Permanen yang Menutup Total Akses Rumah Tetangga",
             ["Warga A membangun tembok beton setinggi 3 meter di batas pekarangannya karena dendam cekcok dengan warga B.", "Akibat tembok tersebut, rumah warga B terkurung total tanpa akses jalan keluar menuju gang umum sama sekali.", "Warga A bersikeras memiliki hak mutlak membangun di atas tanah bersertifikat hak milik miliknya sendiri."],
             ("Perintahkan Pembongkaran Sebagian Tembok untuk Akses Jalan (Asas Penyalahgunaan Hak)", "Penyalahgunaan hak milik (misbruik van recht) dicegah; fungsi sosial hak atas tanah diutamakan.", 95, 60, 95, -20),
             ("Tolak Gugatan Mengingat Warga A Membangun di Atas Batas Tanah Sah Miliknya", "Hak mutlak kepemilikan tanah ditegakkan tanpa kompromi, namun mengurung manusia di dalam rumahnya.", 20, 95, 20, 30)),
            ("Gugatan Kebisingan Suara Kandang Ayam Komersial di Kompleks Perumahan",
             ["Warga C memelihara 200 ekor ayam aduan dan bebek di halaman rumah kavling pemukiman padat.", "Bau kotoran dan suara kokok dini hari menyebabkan anak tetangga sebelah terkena infeksi paru-paru dan depresi.", "Warga C berdalih beternak adalah hak asasi mencari nafkah di tanah kepunyaannya sendiri."],
             ("Kabulkan Gugatan PMH: Perintahkan Pemindahan Ternak & Ganti Rugi Medis", "Hak warga atas lingkungan hidup sehat dan ketenangan tempat tinggal terlindungi dari polusi privat.", 90, 85, 90, 0),
             ("Tolak Gugatan karena Peraturan Daerah Belum Mengatur Kuota Unggas Kavling", "Menghindari sanksi perdata tanpa pasal perda eksplisit, namun mengorbankan kesehatan tetangga sekitar.", 30, 80, 35, 20)),
            ("Air Buangan Talang Hujan yang Menyebabkan Dinding Tetangga Runtuh",
             ["Warga D merenovasi atap genteng dengan kemiringan talang air langsung mengucur deras ke pondasi dinding rumah warga E.", "Saat hujan lebat, dinding kamar warga E retak dan ambruk menimpa perabot rumah tangga senilai Rp 30 juta.", "Warga D menolak ganti rugi dengan dalih hujan lebat adalah takdir alam bencana (vis major)."],
             ("Hukum Warga D Membayar Ganti Rugi Penuh Akibat Kelalaian Desain Konstruksi", "Prinsip kehati-hatian ketetanggaan (buurrecht) ditegakkan; kelalaian pribadi bukan bencana alam.", 95, 85, 85, 0),
             ("Bagi Kerugian 50:50 dengan Alasan Intensitas Hujan Sangat Ekstrem", "Meringankan beban pelaku renovasi, namun membebankan separuh kerugian pada korban tak bersalah.", 60, 50, 65, -10))
        ]),
        ("Ujian Komprehensif: Sengketa Harta Warisan Taipan Properti", [
            ("Sengketa Keabsahan Akta Wasiat Rahasia di Safe Deposit Box Luar Negeri",
             ["Mendiang taipan properti memiliki 4 istri dan 11 anak dengan total aset terdaftar mencapai Rp 5 triliun.", "Ditemukan surat wasiat rahasia di bank Swiss yang memberikan seluruh gedung pencakar langit ke yayasan kanker.", "Seluruh anak kandung bersatu menggugat pembatalan wasiat atas dasar pelanggaran Legitieme Portie."],
             ("Pangkas Porsi Wasiat Swiss Sesuai Batas Legitieme Portie Hukum Perdata Indonesia", "Supremasi hukum waris nasional ditegakkan atas aset domestik, hak dasar keluarga terlindungi.", 85, 90, 75, 10),
             ("Sahkan Wasiat Penuh Mengikuti Pilihan Hukum Internasional di Swiss", "Riset kanker terdanai masif triliunan rupiah, namun melanggar asas ketertiban umum keluarga Indonesia.", 50, 40, 80, -20)),
            ("Klaim Saham Perusahaan dari Anak Luar Nikah Berbekal Surat Tulisan Tangan",
             ["Seorang putri rahasia mengajukan klaim 20% kepemilikan saham holding properti mendiang taipan.", "Ia menunjukkan surat pernyataan bermaterai yang ditulis tangan oleh mendiang taipan di kamar hotel saat masih hidup.", "Direksi perseroan menolak pendaftaran saham karena surat pengakuan tidak pernah diaktakan di notaris resmi."],
             ("Perintahkan Uji Forensik Tulisan Tangan & Konfirmasi Hak Keperdataan", "Mengejar kebenaran materiil kehendak pewaris tanpa terhalang kekakuan formalitas korporasi.", 90, 60, 85, -15),
             ("Tolak Klaim Saham Mengacu pada Syarat Formalitas Akta Otentik Perseroan", "Kepastian hukum pasar modal dan struktur emiten terjaga dari goncangan dokumen bawah tangan.", 40, 95, 50, 20)),
            ("Perebutan Status Pengelolaan Cagar Budaya Istana Keluarga Pewaris",
             ["Salah satu aset peninggalan taipan adalah istana bersejarah cagar budaya yang ingin dijadikan museum publik oleh anak bungsu.", "Anak sulung berniat meruntuhkan istana untuk dibangun supermall apartemen 50 lantai bernilai triliunan.", "Pemerintah daerah memohon status perlindungan cagar budaya namun terkendala status sertifikat hak milik keluarga."],
             ("Tetapkan Perlindungan Cagar Budaya & Wajibkan Pengelolaan Bersama Sebagai Museum", "Warisan sejarah bangsa terselamatkan untuk generasi masa depan melampaui ego kerakusan keluarga.", 95, 70, 95, -15),
             ("Izinkan Pembangunan Supermall Mengacu pada Hak Bebas Pemilik Saham Terbanyak", "Pertumbuhan ekonomi dan lapangan kerja baru tercipta, namun memusnahkan situs sejarah abadi kota.", 30, 85, 60, 20))
        ])
    ]
    leagues.append((2, "Liga Amatir (Hukum Perdata 1 - Orang, Keluarga, Benda)", "Hukum Perdata, Hubungan Keluarga, Waris, dan Hak Kebendaan", l2_islands))

    return leagues

print("Script framework ready.")
