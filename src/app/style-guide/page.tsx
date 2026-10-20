import type { Metadata } from "next";
import { StyleGuideClient } from "./StyleGuideClient";

export const metadata: Metadata = {
  title: "Design System & Style Guide | West Coast Services",
  description: "Internal design system showcase for West Coast Services marketing website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StyleGuidePage() {
  return <StyleGuideClient />;
}
