import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bake & Wrap | Fresh Bakery & Cafe",
  description:
    "Bake & Wrap is a local San Antonio bakery-cafe serving loaf slices, pastries, bagels, biscuits, wraps, and sandwiches.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
