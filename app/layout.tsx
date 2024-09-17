import WhatsAppButton from "@/components/ui/whatsapp-button.component";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ScrollUpButton from "@/components/ui/scroll-up.component";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} min-h-screen bg-secondary`}>
        {children}
        <SpeedInsights />
        <WhatsAppButton />
        {/* <ScrollUpButton /> */}
      </body>
    </html>
  );
}
