import LevelClientView from "./LevelClientView";

export function generateStaticParams() {
  return [
    { levelId: "1" },
    { levelId: "2" },
    { levelId: "3" },
    { levelId: "4" },
    { levelId: "5" },
    { levelId: "6" },
    { levelId: "7" },
    { levelId: "8" },
  ];
}

export default async function Page({ params }: { params: Promise<{ levelId: string }> }) {
  const resolvedParams = await params;
  return <LevelClientView initialLevelId={resolvedParams.levelId} />;
}
