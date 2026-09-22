import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage, sectors } from "@/components/market-pages";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return sectors.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const detail = sectors.find((item) => item.slug === slug); if (!detail) return {};
  const label = detail.eyebrow.split(" ").map((word) => word[0] + word.slice(1).toLowerCase()).join(" "); const title = `${label} | Crestavia Executive Partners`;
  return { title, description: detail.description, alternates: { canonical: `https://crestaviaexecutivepartners.org/sectors/${slug}` }, openGraph: { title, description: detail.description, url: `https://crestaviaexecutivepartners.org/sectors/${slug}`, siteName: "Crestavia Executive Partners", type: "website" } };
}
export default async function SectorDetailPage({ params }: Props) { const { slug } = await params; const detail = sectors.find((item) => item.slug === slug); if (!detail) notFound(); return <DetailPage detail={detail} kind="sector" />; }
