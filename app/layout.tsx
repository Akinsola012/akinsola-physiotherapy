import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "../components/site-shell";

export const metadata: Metadata = {
  title: "[Your Name] | Physiotherapy in [Your Location]",
  description: "Personalised home, orthopaedic, neurological, geriatric and ergonomic physiotherapy in [Your Location]."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
