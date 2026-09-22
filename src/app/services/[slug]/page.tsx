import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage, services } from "@/components/market-pages";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const detail = services.find((item) => item.slug === slug); if (!detail) return {};
  const label = detail.eyebrow.split(" ").map((word) => word[0] + word.slice(1).toLowerCase()).join(" "); const title = `${label} | Crestavia Executive Partners`;
  return { title, description: detail.description, alternates: { canonical: `https://crestaviaexecutivepartners.org/services/${slug}` }, openGraph: { title, description: detail.description, url: `https://crestaviaexecutivepartners.org/services/${slug}`, siteName: "Crestavia Executive Partners", type: "website" } };
}
export default async function ServiceDetailPage({ params }: Props) { const { slug } = await params; const detail = services.find((item) => item.slug === slug); if (!detail) notFound(); return <DetailPage detail={detail} kind="service" />; }
