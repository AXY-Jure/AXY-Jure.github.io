import type { Metadata } from "next";
import App from "@/src/App.jsx";
import { metadataForPath, staticPagePaths } from "../site-metadata";

type PageProps = { params: Promise<{ slug: string[] }> };

function pathFromSlug(slug: string[]) {
  return `/${slug.join("/")}`;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return staticPagePaths
    .filter((path) => path !== "/")
    .map((path) => ({ slug: path.slice(1).split("/") }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return metadataForPath(pathFromSlug(slug));
}

export default async function PublicPage({ params }: PageProps) {
  const { slug } = await params;
  const path = pathFromSlug(slug);
  return <App initialPath={path} />;
}
