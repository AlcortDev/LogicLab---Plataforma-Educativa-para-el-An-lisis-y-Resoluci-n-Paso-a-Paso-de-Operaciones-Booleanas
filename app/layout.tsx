import type { Metadata, Viewport } from "next";
import ServiceWorkerRegistration from "./service-worker-registration";
import "./globals.css";

export const metadata: Metadata = {
  title: "LogicLab | Aprende lógica booleana",
  description:
    "Resuelve operaciones booleanas paso a paso, explora tablas de verdad y conoce las compuertas lógicas.",
  applicationName: "LogicLab",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "LogicLab",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#101613",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        {children}
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
