import type { Metadata } from "next";
import App from "@/src/App.jsx";
import { metadataForPath } from "./site-metadata";

export const metadata: Metadata = metadataForPath("/");

export default function HomePage() {
  return <App initialPath="/" />;
}
