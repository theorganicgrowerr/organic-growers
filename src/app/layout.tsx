import "./globals.css"; // <- must be first

export const metadata = {
  title: "The Organic Growers",
  description: "Hydroponic DIY kits for Indian homes – Organic Today. Healthy Tomorrow.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
