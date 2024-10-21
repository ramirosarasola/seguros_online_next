import WhatsAppButton from "@/components/ui/whatsapp-button.component";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Metrics from "@/metrics/metrics";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Seguros Para Autos | SegurosOnline | Mejoramos cualquier Presupuesto",
  description:
    "Cotizá seguros para autos online. Mejorá tu póliza actual ahorrando hasta un 30% sin perder beneficios. Trabajamos con todas las aseguradoras, Cotizá Ya!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body className={`${poppins.className} min-h-screen bg-secondary`}>
        {children}
        <SpeedInsights />
        <WhatsAppButton />
        <Metrics />
        {/* <ScrollUpButton /> */}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID!!} />
    </html>
  );
}
