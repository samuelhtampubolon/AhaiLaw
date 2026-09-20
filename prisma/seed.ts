const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Database...');
  
  const dummyUser = await prisma.user.upsert({
    where: { email: 'admin@ahailaw.local' },
    update: {},
    create: {
      email: 'admin@ahailaw.local',
      username: 'HakimAgung',
      current_level: 1,
      total_xp: 0,
      keadilan_score: 50,
      kepastian_score: 50,
      kemanfaatan_score: 50,
    },
  });

  console.log('Dummy user created:', dummyUser.username);
  
  // Here we would parse and insert the 400+ modules and cases.
  // For the initial seed, let's create a foundational module.
  const module1 = await prisma.module.upsert({
    where: { id: 'MOD-001' },
    update: {},
    create: {
      id: 'MOD-001',
      title: 'Hukum Alam Klasik dan Modern',
      category: 'Fondasi & Filsafat Hukum',
      era: 'classic',
      level_required: 1,
      difficulty: 1,
      xp_reward: 75,
      description: 'Modul fondasi tentang Hukum Alam Klasik dan Modern',
      estimated_minutes: 15,
      cases: {
        create: {
          title: 'Hukum yang Tidak Adil',
          facts: JSON.stringify(['Sebuah UU memerintahkan diskriminasi rasial.', 'Hakim dihadapkan pada dilema memutus sesuai UU atau moral.']),
          subjective_context: JSON.stringify(['Jika hakim menolak UU, ia dipecat.', 'Jika ia ikut UU, ia melanggar HAM dasar.']),
          statute: 'Formula Radbruch',
          options: {
            create: [
              {
                action_text: 'Terapkan UU tanpa ragu (Positivisme Murni)',
                legal_basis: 'Lex Dura Sed Scripta',
                alignment_shift: 25,
                keadilan: 10,
                kepastian: 95,
                kemanfaatan: 40,
                consequence: 'Anda menjaga kepastian hukum, tapi mengorbankan keadilan substantif.'
              },
              {
                action_text: 'Abaikan UU demi Keadilan (Hukum Alam)',
                legal_basis: 'Lex Iniusta Non Est Lex',
                alignment_shift: -25,
                keadilan: 90,
                kepastian: 20,
                kemanfaatan: 60,
                consequence: 'Anda menegakkan keadilan, namun merusak kepastian hukum.'
              }
            ]
          }
        }
      }
    },
  });

  console.log('Seeded Module:', module1.id);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
