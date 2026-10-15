import type { Metadata } from "next";
import { StyleGuideClient } from "./StyleGuideClient";

export const metadata: Metadata = {
  title: "Design System & Style Guide | Veltro",
  description: "Internal design system showcase for Veltro marketing website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StyleGuidePage() {
  return <StyleGuideClient />;
}
