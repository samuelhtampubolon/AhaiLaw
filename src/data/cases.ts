// src/data/cases.ts

const caseTemplates = [
  {
    title: "Sengketa Kontrak Kerjasama",
    facts: ["Pihak A tidak mengirimkan barang sesuai spesifikasi.", "Pihak B menolak membayar sisa tagihan.", "Dalam kontrak tidak ada pasal denda keterlambatan."],
    options: [
      { id: "OPT-1", action: "Hukum B membayar penuh (Kepastian)", consequence: "Pihak A untung, tapi mengabaikan cacat barang.", keadilan: 20, kepastian: 90, kemanfaatan: 40, alignmentShift: 10 },
      { id: "OPT-2", action: "Batalkan kontrak dan tuntut ganti rugi (Keadilan)", consequence: "Kontrak batal, pihak B terlindungi.", keadilan: 90, kepastian: 40, kemanfaatan: 60, alignmentShift: -10 }
    ]
  },
  {
    title: "Tuduhan Pencurian Ringan",
    facts: ["Terdakwa mencuri sebungkus roti karena kelaparan.", "Pemilik toko bersikeras memenjarakan terdakwa.", "Hukum pidana memiliki ancaman kurungan untuk pencurian ringan."],
    options: [
      { id: "OPT-1", action: "Penjara 3 Bulan (Positivisme)", consequence: "Aturan ditegakkan, namun nurani keadilan terluka.", keadilan: 10, kepastian: 100, kemanfaatan: 10, alignmentShift: 20 },
      { id: "OPT-2", action: "Restorative Justice / Maaf (Hukum Progresif)", consequence: "Pelaku mengembalikan nilai roti dengan bekerja di toko.", keadilan: 95, kepastian: 30, kemanfaatan: 90, alignmentShift: -25 }
    ]
  },
  {
    title: "Sengketa Tanah Warisan",
    facts: ["Sebidang tanah diklaim oleh dua pihak saudara kandung.", "Pihak A punya sertifikat tahun 1990, Pihak B punya surat adat tahun 1980.", "Tanah tersebut saat ini dikuasai fisik oleh Pihak B."],
    options: [
      { id: "OPT-1", action: "Menangkan Pihak A (Bukti Formal)", consequence: "Sertifikat memiliki kekuatan pembuktian sempurna.", keadilan: 40, kepastian: 95, kemanfaatan: 50, alignmentShift: 15 },
      { id: "OPT-2", action: "Bagi Rata (Mediasi/Keadilan Substantif)", consequence: "Kedua pihak damai, hukum adat dihormati sebagian.", keadilan: 85, kepastian: 50, kemanfaatan: 80, alignmentShift: -15 }
    ]
  }
];

export const getQuestionsForIsland = (islandId: string) => {
  // Untuk keperluan purwarupa (MVP), kita menghasilkan 3 pertanyaan beruntun secara deterministik
  // berdasarkan islandId agar setiap pulau terlihat memiliki soal yang unik.
  const [levelStr, islandStr] = islandId.split('-');
  const levelNum = parseInt(levelStr || '1', 10);
  const islandNum = parseInt(islandStr || '1', 10);
  
  const questions = [];
  for (let i = 0; i < 3; i++) {
    // Pick a template
    const template = caseTemplates[(levelNum + islandNum + i) % caseTemplates.length];
    
    questions.push({
      id: `CASE-${islandId}-Q${i+1}`,
      title: `(Soal ${i+1} - Pulau ${islandNum}) ${template.title}`,
      facts: template.facts,
      options: template.options
    });
  }
  
  return questions;
};
