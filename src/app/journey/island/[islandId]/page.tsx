import IslandClientView from "./IslandClientView";

export function generateStaticParams() {
  const params: { islandId: string }[] = [];
  for (let l = 1; l <= 8; l++) {
    for (let i = 1; i <= 10; i++) {
      params.push({ islandId: `${l}-${i}` });
    }
  }
  return params;
}

export default async function Page({ params }: { params: Promise<{ islandId: string }> }) {
  const resolvedParams = await params;
  return <IslandClientView initialIslandId={resolvedParams.islandId} />;
}
