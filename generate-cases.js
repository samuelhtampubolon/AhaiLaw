const fs = require('fs');
const path = require('path');

// Menggunakan Arketipe Terkategori agar kombinasinya 100% realistis dan logis.
const archetypes = [
  // 1. PIDANA: Pembelaan Terpaksa & Penganiayaan
  {
    subjects: ["Seorang warga sipil", "Seorang pemilik warung", "Seorang mahasiswa yang sering dirundung", "Seorang wanita yang berjalan sendirian malam hari"],
    contexts: ["diancam dengan senjata tajam oleh perampok", "diserang oleh sekelompok preman mabuk", "mendapati rumahnya sedang dibobol maling"],
    actions: ["memukul balik pelaku dengan tongkat besi hingga gegar otak", "menusuk pelaku menggunakan pisau dapur hingga tewas", "menggunakan setrum (taser) yang melukai permanen pelaku"],
    dilemmas: ["Pelaku pembelaan ini kini ditetapkan sebagai tersangka penganiayaan berat oleh polisi.", "Secara teks hukum ia melukai orang lain, tapi secara moral ia hanya bertahan hidup."],
    optA: { action: "Hukum sesuai teks (Positivisme Pidana)", consequence: "Terdakwa dipenjara. Kepastian hukum tegak, namun rasa keadilan publik hancur.", keadilan: 10, kepastian: 90, kemanfaatan: 20, alignmentShift: 20 },
    optB: { action: "Bebaskan (Noodweer / Pembelaan Terpaksa)", consequence: "Terdakwa bebas. Keadilan substantif tercapai, masyarakat merasa aman membela diri.", keadilan: 95, kepastian: 40, kemanfaatan: 90, alignmentShift: -25 }
  },
  // 2. PERDATA: Sengketa Kontrak & Bisnis
  {
    subjects: ["Sebuah perusahaan startup teknologi", "Seorang kontraktor bangunan", "Sebuah agensi pengiriman barang", "Seorang supplier bahan baku pangan"],
    contexts: ["mengalami force majeure akibat bencana alam", "menghadapi krisis rantai pasok global secara tiba-tiba", "gagal memenuhi tenggat waktu karena regulasi pemerintah yang mendadak berubah"],
    actions: ["membatalkan sepihak pengiriman barang bernilai miliaran", "menunda pembayaran ke sub-kontraktor tanpa kejelasan", "gagal menyerahkan proyek tepat waktu"],
    dilemmas: ["Pihak klien menggugat wanprestasi dan menuntut ganti rugi penuh tanpa mau tahu alasannya.", "Dalam kontrak baku, tidak ada klausul spesifik mengenai situasi krisis ini."],
    optA: { action: "Kabulkan Gugatan Wanprestasi Penuh", consequence: "Kontrak (Pacta Sunt Servanda) ditegakkan kaku. Perusahaan tergugat bangkrut seketika.", keadilan: 30, kepastian: 95, kemanfaatan: 20, alignmentShift: 20 },
    optB: { action: "Gunakan Asas Kepatutan (Rebus Sic Stantibus)", consequence: "Kontrak disesuaikan karena keadaan memaksa. Bisnis tetap jalan, walau kepastian teks dikorbankan.", keadilan: 85, kepastian: 30, kemanfaatan: 90, alignmentShift: -20 }
  },
  // 3. TATA NEGARA / ADMINISTRASI: Kebijakan Publik
  {
    subjects: ["Seorang bupati", "Seorang kepala dinas tata ruang", "Seorang gubernur", "Seorang menteri lingkungan hidup"],
    contexts: ["menghadapi demonstrasi warga yang kelaparan akibat pabrik ditutup", "melihat ada celah kekosongan hukum dalam perizinan", "mendapat tekanan ekonomi untuk segera membuka lapangan kerja"],
    actions: ["mengeluarkan diskresi (Freies Ermessen) tanpa payung hukum jelas", "memberikan izin operasi pabrik meski AMDAL belum sempurna", "mengabaikan prosedur birokrasi demi mempercepat bantuan langsung"],
    dilemmas: ["Tindakan ini sangat bermanfaat bagi warga saat itu, namun secara prosedur administrasi negara ini cacat hukum (maladministrasi).", "Pengadilan PTUN kini sedang mengadili gugatan pembatalan kebijakan tersebut."],
    optA: { action: "Batalkan Kebijakan (Asas Legalitas Mutlak)", consequence: "Birokrasi disiplin, namun warga kembali menderita dan kehilangan pekerjaan/bantuan.", keadilan: 20, kepastian: 100, kemanfaatan: 10, alignmentShift: 25 },
    optB: { action: "Sahkan Diskresi (Kemanfaatan Publik)", consequence: "Kesejahteraan warga terselamatkan, namun membuka preseden pejabat berbuat sewenang-wenang.", keadilan: 80, kepastian: 20, kemanfaatan: 95, alignmentShift: -25 }
  },
  // 4. AGRARIA / TANAH: Sengketa Kepemilikan
  {
    subjects: ["Seorang petani miskin", "Sekelompok masyarakat adat", "Seorang pensiunan guru", "Sebuah yayasan yatim piatu"],
    contexts: ["telah menempati lahan tersebut selama 30 tahun tanpa gangguan", "hanya memiliki surat girik peninggalan zaman kolonial", "merasa tanahnya dirampas oleh pengembang dengan sertifikat HGB baru"],
    actions: ["menolak digusur oleh ekskavator pengembang properti raksasa", "memblokir akses jalan masuk ke area perkebunan perusahaan", "mendirikan tenda perlawanan di atas lahan sengketa"],
    dilemmas: ["Pengembang memiliki Sertifikat Hak Milik formal yang sah, sementara warga hanya punya bukti historis penguasaan fisik.", "Hukum agraria menjunjung sertifikat, namun nurani melihat ada perampasan hak turun-temurun."],
    optA: { action: "Eksekusi Penggusuran (Bukti Formal Sertifikat)", consequence: "Kepastian hukum pendaftaran tanah terjamin. Pengembang menang, warga kehilangan tempat tinggal.", keadilan: 10, kepastian: 95, kemanfaatan: 30, alignmentShift: 30 },
    optB: { action: "Lindungi Penguasaan Fisik (Hukum Adat / UUPA)", consequence: "Warga tak berdaya dilindungi. Namun, sistem sertifikasi negara dianggap tidak berkekuatan absolut.", keadilan: 95, kepastian: 20, kemanfaatan: 80, alignmentShift: -30 }
  },
  // 5. DIGITAL / AI LAW: Kejahatan & Hak Cipta Cyber
  {
    subjects: ["Seorang seniman digital", "Sebuah perusahaan AI generatif", "Seorang programmer independen", "Seorang influencer media sosial"],
    contexts: ["menemukan karyanya digunakan untuk melatih model AI tanpa izin", "membuat kode yang otomatis menyalin data publik secara masif", "tidak sengaja menyebarkan informasi palsu yang dibuat oleh deepfake"],
    actions: ["menggugat perusahaan teknologi atas pelanggaran hak cipta masif", "menolak menghapus model AI karena menganggapnya wajar (fair use)", "berlindung di balik alasan kebebasan berpendapat"],
    dilemmas: ["Hukum positif belum mengatur secara spesifik mengenai batas pencurian oleh kecerdasan buatan.", "Terdapat benturan antara melindungi inovasi teknologi dengan melindungi hak cipta individu."],
    optA: { action: "Kabulkan Gugatan Hak Cipta Ketat", consequence: "Kreator dilindungi penuh. Namun inovasi teknologi dan riset AI di negara tersebut terhenti total.", keadilan: 85, kepastian: 70, kemanfaatan: 40, alignmentShift: 15 },
    optB: { action: "Perbolehkan Fair Use demi Inovasi", consequence: "Perkembangan teknologi melesat cepat, namun kreator asli merasa dirugikan secara ekonomi dan moral.", keadilan: 30, kepastian: 50, kemanfaatan: 90, alignmentShift: -15 }
  },
  // 6. PIDANA KORUPSI: Niat vs Kerugian Negara
  {
    subjects: ["Seorang kepala desa", "Seorang rektor universitas negeri", "Seorang direktur BUMD", "Seorang pejabat pembuat komitmen (PPK)"],
    contexts: ["berniat menyelamatkan uang kas negara agar tidak hangus di akhir tahun", "salah menginterpretasikan aturan pengadaan barang akibat ketidakjelasan juknis", "mengalihkan dana desa untuk membangun jembatan darurat yang rubuh"],
    actions: ["menggunakan metode penunjukan langsung tanpa tender formal", "menandatangani pencairan dana sebelum proyek selesai 100%", "mengubah mata anggaran tanpa persetujuan DPRD/Kementerian"],
    dilemmas: ["Secara administratif ada pelanggaran formil dan kerugian negara, namun tidak sepeser pun uang masuk ke kantong pribadi mereka (tidak ada mens rea koruptif).", "Mereka murni melakukan itu untuk pelayanan publik yang mendesak."],
    optA: { action: "Hukum Tipikor (Formil Kerugian Negara)", consequence: "Aturan anti-korupsi dijaga sangat ketat, tapi pejabat inovatif ketakutan mengambil keputusan.", keadilan: 20, kepastian: 95, kemanfaatan: 10, alignmentShift: 30 },
    optB: { action: "Bebaskan (Tidak ada Mens Rea Jahat)", consequence: "Hukum progresif diterapkan. Namun celah ini berpotensi ditiru koruptor asli dengan dalih 'kebijakan'.", keadilan: 90, kepastian: 30, kemanfaatan: 80, alignmentShift: -20 }
  }
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const levels = 8;
const islandsPerLevel = 10;
const questionsPerIsland = 3;

let caseDataCode = `// Generated by generate-cases.js
// Kasus-kasus ini di-generate berdasarkan Arketipe Logis agar konteksnya 100% realistis di dunia hukum.

export const getQuestionsForIsland = (islandId: string) => {
  const cases: Record<string, any[]> = {\n`;

let globalCounter = 1;

for (let lvl = 1; lvl <= levels; lvl++) {
  for (let isl = 1; isl <= islandsPerLevel; isl++) {
    const islandId = `${lvl}-${isl}`;
    let islandQuestions = [];
    
    // Setiap pulau akan mengambil soal dari arketipe yang dirotasi agar temanya beragam namun tetap rasional
    for (let q = 0; q < questionsPerIsland; q++) {
      const arch = archetypes[(lvl + isl + q) % archetypes.length];
      
      const subject = getRandom(arch.subjects);
      const context = getRandom(arch.contexts);
      const action = getRandom(arch.actions);
      const dilemma = getRandom(arch.dilemmas);
      
      islandQuestions.push(`
        {
          id: "CASE-${globalCounter}",
          title: "Kasus #${globalCounter}: Sengketa Hukum & Dilema",
          facts: [
            "${subject} ${context}.",
            "Sebagai tindakan responsif, ia ${action}.",
            "${dilemma}"
          ],
          options: [
            {
              id: "OPT-1",
              action: "${arch.optA.action}",
              consequence: "${arch.optA.consequence}",
              keadilan: ${arch.optA.keadilan},
              kepastian: ${arch.optA.kepastian},
              kemanfaatan: ${arch.optA.kemanfaatan},
              alignmentShift: ${arch.optA.alignmentShift}
            },
            {
              id: "OPT-2",
              action: "${arch.optB.action}",
              consequence: "${arch.optB.consequence}",
              keadilan: ${arch.optB.keadilan},
              kepastian: ${arch.optB.kepastian},
              kemanfaatan: ${arch.optB.kemanfaatan},
              alignmentShift: ${arch.optB.alignmentShift}
            }
          ]
        }`);
      globalCounter++;
    }
    
    caseDataCode += `    "${islandId}": [${islandQuestions.join(',')}],\n`;
  }
}

caseDataCode += `  };
  return cases[islandId] || cases["1-1"];
};
`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'cases.ts'), caseDataCode);
console.log('Successfully generated 240 completely realistic unique cases based on Strict Archetypes!');
