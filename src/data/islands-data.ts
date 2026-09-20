// Metadata untuk 80 Pulau di 8 Liga Hukum AhaiLaw

export interface IslandMeta {
  id: string; // e.g. "1-1"
  levelId: number;
  islandIndex: number;
  globalIndex: number;
  title: string;
}

export const islandCatalog: Record<string, IslandMeta> = {
  "1-1": { id: "1-1", levelId: 1, islandIndex: 1, globalIndex: 1, title: "Asas Keadilan vs Kepastian Hukum (Dilema Radbruch)" },
  "1-2": { id: "1-2", levelId: 1, islandIndex: 2, globalIndex: 2, title: "Asas Legalitas & Larangan Retroaktif (Nullum Delictum)" },
  "1-3": { id: "1-3", levelId: 1, islandIndex: 3, globalIndex: 3, title: "Hukum Kodrat vs Positivisme Yuridis (Hans Kelsen)" },
  "1-4": { id: "1-4", levelId: 1, islandIndex: 4, globalIndex: 4, title: "Asas Kepatutan & Keadilan Substantif (Hukum Progresif)" },
  "1-5": { id: "1-5", levelId: 1, islandIndex: 5, globalIndex: 5, title: "Hermeneutika Hukum: Penafsiran Teleologis vs Gramatikal" },
  "1-6": { id: "1-6", levelId: 1, islandIndex: 6, globalIndex: 6, title: "Hirarki Peraturan Perundang-Undangan & Lex Superior" },
  "1-7": { id: "1-7", levelId: 1, islandIndex: 7, globalIndex: 7, title: "Asas Fiksi Hukum & Presumsi Setiap Orang Tahu UU" },
  "1-8": { id: "1-8", levelId: 1, islandIndex: 8, globalIndex: 8, title: "Hukum Adat / Kebiasaan vs Kodifikasi Hukum Tertulis" },
  "1-9": { id: "1-9", levelId: 1, islandIndex: 9, globalIndex: 9, title: "Diskresi Penegak Hukum vs Penyalahgunaan Wewenang" },
  "1-10": { id: "1-10", levelId: 1, islandIndex: 10, globalIndex: 10, title: "Ujian Komprehensif: Putusan Sidang Mahkamah Perdana" },
  "2-1": { id: "2-1", levelId: 2, islandIndex: 1, globalIndex: 11, title: "Kedudukan Hak Waris Anak Luar Kawin pasca Putusan MK" },
  "2-2": { id: "2-2", levelId: 2, islandIndex: 2, globalIndex: 12, title: "Hak Mutlak Ahli Waris (Legitieme Portie) vs Wasiat" },
  "2-3": { id: "2-3", levelId: 2, islandIndex: 3, globalIndex: 13, title: "Perjanjian Kawin (Prenup) yang Dibuat Saat Pernikahan Berjalan" },
  "2-4": { id: "2-4", levelId: 2, islandIndex: 4, globalIndex: 14, title: "Hibah Wasiat yang Melebihi Batas Sepertiga Harta Warisan" },
  "2-5": { id: "2-5", levelId: 2, islandIndex: 5, globalIndex: 15, title: "Bezit vs Eigendom: Penguasaan Fisik Tanah Terlantar 30 Tahun" },
  "2-6": { id: "2-6", levelId: 2, islandIndex: 6, globalIndex: 16, title: "Eksekusi Objek Hak Tanggungan oleh Bank Tanpa Putusan Pengadilan" },
  "2-7": { id: "2-7", levelId: 2, islandIndex: 7, globalIndex: 17, title: "Pengampuan (Curatele) Terhadap Pengusaha Lansia yang Mengalami Demensia" },
  "2-8": { id: "2-8", levelId: 2, islandIndex: 8, globalIndex: 18, title: "Penarikan Sepihak Jaminan Fidusia oleh Debt Collector di Jalanan" },
  "2-9": { id: "2-9", levelId: 2, islandIndex: 9, globalIndex: 19, title: "Perbuatan Melawan Hukum (Pasal 1365 KUHPerdata) oleh Tetangga Berisik" },
  "2-10": { id: "2-10", levelId: 2, islandIndex: 10, globalIndex: 20, title: "Ujian Komprehensif: Sengketa Kompleks Harta Warisan Taipan Properti" },
  "3-1": { id: "3-1", levelId: 3, islandIndex: 1, globalIndex: 21, title: "Keabsahan Kontrak Digital Klik (Click-wrap Agreement)" },
  "3-2": { id: "3-2", levelId: 3, islandIndex: 2, globalIndex: 22, title: "Wanprestasi vs Overmacht Akibat Krisis Pasokan Global" },
  "3-3": { id: "3-3", levelId: 3, islandIndex: 3, globalIndex: 23, title: "Penerapan Asas Rebus Sic Stantibus pada Kontrak Konstruksi" },
  "3-4": { id: "3-4", levelId: 3, islandIndex: 4, globalIndex: 24, title: "Klausula Eksonerasi Cuci Tangan dalam Tiket Parkir & Ekspedisi" },
  "3-5": { id: "3-5", levelId: 3, islandIndex: 5, globalIndex: 25, title: "Penerobosan Cadar Perusahaan (Piercing Corporate Veil) Direksi Curang" },
  "3-6": { id: "3-6", levelId: 3, islandIndex: 6, globalIndex: 26, title: "Permohonan PKPU oleh Kreditor Minoritas atas Utang Belum Jatuh Tempo" },
  "3-7": { id: "3-7", levelId: 3, islandIndex: 7, globalIndex: 27, title: "Pelanggaran Klausul Non-Compete Mantan Karyawan Startup" },
  "3-8": { id: "3-8", levelId: 3, islandIndex: 8, globalIndex: 28, title: "Penerapan Business Judgment Rule pada Kerugian Akuisisi Anak Perusahaan" },
  "3-9": { id: "3-9", levelId: 3, islandIndex: 9, globalIndex: 29, title: "Sengketa Kartel Harga Tiket Pesawat & Monopoli Pasar (KPPU)" },
  "3-10": { id: "3-10", levelId: 3, islandIndex: 10, globalIndex: 30, title: "Ujian Komprehensif: Sengketa Multi-Miliar Arbitrase Dagang Internasional" },
  "4-1": { id: "4-1", levelId: 4, islandIndex: 1, globalIndex: 31, title: "Batas Asas Legalitas & Larangan Analogi Hukum Pidana" },
  "4-2": { id: "4-2", levelId: 4, islandIndex: 2, globalIndex: 32, title: "Pembelaan Terpaksa (Noodweer) Korban Begal yang Membalas Pelaku" },
  "4-3": { id: "4-3", levelId: 4, islandIndex: 3, globalIndex: 33, title: "Pembelaan Melampaui Batas (Noodweer Exces) Guncangan Jiwa Hebat" },
  "4-4": { id: "4-4", levelId: 4, islandIndex: 4, globalIndex: 34, title: "Dolus Eventualis (Sengaja dengan Keinsafan Sadar Kemungkinan)" },
  "4-5": { id: "4-5", levelId: 4, islandIndex: 5, globalIndex: 35, title: "Percobaan Kejahatan (Poging) & Pengunduran Diri Sukarela" },
  "4-6": { id: "4-6", levelId: 4, islandIndex: 6, globalIndex: 36, title: "Penyertaan Pidana: Aktor Intelektual vs Pembantu Pelaksana" },
  "4-7": { id: "4-7", levelId: 4, islandIndex: 7, globalIndex: 37, title: "Alasan Penghapus Pidana: Melaksanakan Perintah Jabatan Atasan" },
  "4-8": { id: "4-8", levelId: 4, islandIndex: 8, globalIndex: 38, title: "Daya Paksa Relatif (Vis Compulsiva) Sandera Pegawai Bank" },
  "4-9": { id: "4-9", levelId: 4, islandIndex: 9, globalIndex: 39, title: "Pertanggungjawaban Pidana Korporasi atas Kebakaran Hutan" },
  "4-10": { id: "4-10", levelId: 4, islandIndex: 10, globalIndex: 40, title: "Ujian Komprehensif: Pembunuhan Berencana dengan Peran Berlapis" },
  "5-1": { id: "5-1", levelId: 5, islandIndex: 1, globalIndex: 41, title: "Keabsahan Penetapan Tersangka Tanpa Pemeriksaan Calon Tersangka" },
  "5-2": { id: "5-2", levelId: 5, islandIndex: 2, globalIndex: 42, title: "Penggeledahan & Penyitaan Tanpa Izin Ketua Pengadilan Negeri" },
  "5-3": { id: "5-3", levelId: 5, islandIndex: 3, globalIndex: 43, title: "Doktrin Unlawfully Obtained Evidence (Bukti Hasil Peretasan Ilegal)" },
  "5-4": { id: "5-4", levelId: 5, islandIndex: 4, globalIndex: 44, title: "Nilai Pembuktian Saksi Mahkota (Crown Witness) & JC" },
  "5-5": { id: "5-5", levelId: 5, islandIndex: 5, globalIndex: 45, title: "Sengketa Visum et Repertum Psikiatrikum ODGJ Berulang" },
  "5-6": { id: "5-6", levelId: 5, islandIndex: 6, globalIndex: 46, title: "Hak Tersangka atas Pendampingan Advokat (Pasal 56 KUHAP)" },
  "5-7": { id: "5-7", levelId: 5, islandIndex: 7, globalIndex: 47, title: "Beban Pembuktian Terbalik pada Kasus Gratifikasi & TPPU" },
  "5-8": { id: "5-8", levelId: 5, islandIndex: 8, globalIndex: 48, title: "Eksepsi Surat Dakwaan Batal Demi Hukum (Obscuur Libel)" },
  "5-9": { id: "5-9", levelId: 5, islandIndex: 9, globalIndex: 49, title: "Penolakan Keterangan Saksi De Auditu dalam Sidang Tipikor" },
  "5-10": { id: "5-10", levelId: 5, islandIndex: 10, globalIndex: 50, title: "Ujian Komprehensif: Sidang Perkara Pembunuhan Berantai & Saintifik" },
  "6-1": { id: "6-1", levelId: 6, islandIndex: 1, globalIndex: 51, title: "Uji Formil Pembentukan Undang-Undang di Mahkamah Konstitusi" },
  "6-2": { id: "6-2", levelId: 6, islandIndex: 2, globalIndex: 52, title: "Diskresi Pejabat Publik (Freies Ermessen) dalam Bencana Alam" },
  "6-3": { id: "6-3", levelId: 6, islandIndex: 3, globalIndex: 53, title: "Keputusan Fiktif Positif Badan Usaha Pemerintahan di PTUN" },
  "6-4": { id: "6-4", levelId: 6, islandIndex: 4, globalIndex: 54, title: "Pencabutan Izin Usaha Tambang Tanpa Hak Dengar yang Adil" },
  "6-5": { id: "6-5", levelId: 6, islandIndex: 5, globalIndex: 55, title: "Benturan Kepentingan (Conflict of Interest) Penyaluran Bansos" },
  "6-6": { id: "6-6", levelId: 6, islandIndex: 6, globalIndex: 56, title: "Pemakzulan Kepala Daerah Akibat Pelanggaran Sumpah Jabatan" },
  "6-7": { id: "6-7", levelId: 6, islandIndex: 7, globalIndex: 57, title: "Maladministrasi vs Tipikor pada Pengadaan Darurat Bencana" },
  "6-8": { id: "6-8", levelId: 6, islandIndex: 8, globalIndex: 58, title: "Sengketa Akses Keterbukaan Informasi Rahasia Negara vs Audit BPK" },
  "6-9": { id: "6-9", levelId: 6, islandIndex: 9, globalIndex: 59, title: "Sengketa Kewenangan Lembaga Negara (SKLN) di MK" },
  "6-10": { id: "6-10", levelId: 6, islandIndex: 10, globalIndex: 60, title: "Ujian Komprehensif: Sidang Sengketa Hasil Pemilihan Presiden" },
  "7-1": { id: "7-1", levelId: 7, islandIndex: 1, globalIndex: 61, title: "Permohonan Ekstradisi Tersangka Korupsi Tanpa Perjanjian Bilateral" },
  "7-2": { id: "7-2", levelId: 7, islandIndex: 2, globalIndex: 62, title: "Asas Non-Refoulement Kapal Pengungsi Rohingya di Laut Lepas" },
  "7-3": { id: "7-3", levelId: 7, islandIndex: 3, globalIndex: 63, title: "Kekebalan Diplomatik atas Kejahatan Berat Pembunuhan Staf Kedutaan" },
  "7-4": { id: "7-4", levelId: 7, islandIndex: 4, globalIndex: 64, title: "Hukum Humaniter: Serangan Militer di Dekat Rumah Sakit Sipil" },
  "7-5": { id: "7-5", levelId: 7, islandIndex: 5, globalIndex: 65, title: "Yurisdiksi Universal Mengadili Diktator Asing Pelaku Genosida" },
  "7-6": { id: "7-6", levelId: 7, islandIndex: 6, globalIndex: 66, title: "Penenggelaman Kapal Ikan Asing Berdasarkan Konvensi UNCLOS 1982" },
  "7-7": { id: "7-7", levelId: 7, islandIndex: 7, globalIndex: 67, title: "Gugatan Arbitrase ISDS atas Kebijakan Larangan Ekspor Nikel Mentah" },
  "7-8": { id: "7-8", levelId: 7, islandIndex: 8, globalIndex: 68, title: "Penyelesaian Pelanggaran HAM Berat: Yudisial vs Komisi Rekonsiliasi" },
  "7-9": { id: "7-9", levelId: 7, islandIndex: 9, globalIndex: 69, title: "Sanksi Embargo Ekonomi Internasional vs Akses Bantuan Kemanusiaan" },
  "7-10": { id: "7-10", levelId: 7, islandIndex: 10, globalIndex: 70, title: "Ujian Komprehensif: Sidang Mahkamah Internasional (ICJ) Kasus Aneksasi" },
  "8-1": { id: "8-1", levelId: 8, islandIndex: 1, globalIndex: 71, title: "Hak Cipta Pelatihan AI Tanpa Izin Pencipta (Dataset Scraping)" },
  "8-2": { id: "8-2", levelId: 8, islandIndex: 2, globalIndex: 72, title: "Pertanggungjawaban Pidana Mobil Otonom (Autonomous Crash)" },
  "8-3": { id: "8-3", levelId: 8, islandIndex: 3, globalIndex: 73, title: "Deepfake Pornografi Non-Konsensual & Batas Parodi Siber" },
  "8-4": { id: "8-4", levelId: 8, islandIndex: 4, globalIndex: 74, title: "Kebocoran Data Pasien Rumah Sakit & Sanksi Denda UU PDP" },
  "8-5": { id: "8-5", levelId: 8, islandIndex: 5, globalIndex: 75, title: "Smart Contract Eror pada Blockchain: Kode Sebagai Hukum vs Keadilan" },
  "8-6": { id: "8-6", levelId: 8, islandIndex: 6, globalIndex: 76, title: "Hak untuk Dilupakan (Right to Be Forgotten) Terhadap Berita Usang" },
  "8-7": { id: "8-7", levelId: 8, islandIndex: 7, globalIndex: 77, title: "Eutanasia Pasif atas Permintaan Wasiat Pasien Koma Terminal" },
  "8-8": { id: "8-8", levelId: 8, islandIndex: 8, globalIndex: 78, title: "Paten Obat Kanker yang Ditemukan Sepenuhnya oleh Algoritma AI" },
  "8-9": { id: "8-9", levelId: 8, islandIndex: 9, globalIndex: 79, title: "Manipulasi Pasar Aset Kripto & Ketiadaan Regulasi Terpusat" },
  "8-10": { id: "8-10", levelId: 8, islandIndex: 10, globalIndex: 80, title: "Sidang Tertinggi: Konstitusi Generasi Masa Depan & Hak AI Berakal" },
};

export const getIslandsForLevel = (levelId: number): IslandMeta[] => {
  const result: IslandMeta[] = [];
  for (let i = 1; i <= 10; i++) {
    const id = `${levelId}-${i}`;
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
