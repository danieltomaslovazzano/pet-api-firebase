// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/auth-context";
import { Suspense } from "react";
import { Toaster } from "sonner";
import ClientHydrationFix from "@/components/ClientHydrationFix";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Panel de administración",
};

const AuthProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <AuthProvider>{children}</AuthProvider>
    </Suspense>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        {/* Componente cliente para remover atributos conflictivos */}
        <ClientHydrationFix />
        <AuthProviderWrapper>{children}</AuthProviderWrapper>
        <Toaster />
      </body>
    </html>
  );
}