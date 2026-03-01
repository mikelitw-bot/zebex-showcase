import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZEBEX Industries — Industrial Scanning Solutions 2025",
  description: "ZEBEX latest industrial scanning products: Laser Sensors, Fixed Scanners, Scan Modules, and Handheld Scanners for modern automation.",
  keywords: "ZEBEX, barcode scanner, laser sensor, industrial scanner, 2D image scanner, automation, DPM",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
