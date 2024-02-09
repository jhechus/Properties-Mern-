import type { Metadata } from "next";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import ThemeProvider from "@/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import LayoutProvider from "@/providers/layout-provider";

export const metadata: Metadata = {
  title: "Properties",
  description: "Onestop for all your propities needs",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* Utilizamos el ThemeProvider para establecer el tema en el contenido de 'children' */}
          <ThemeProvider>
            <LayoutProvider>{children}</LayoutProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
