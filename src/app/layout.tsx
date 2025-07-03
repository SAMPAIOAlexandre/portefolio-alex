import type { Metadata } from "next";
import { Anuphan,Gowun_Dodum } from "next/font/google";
import "./globals.css";


// For body text 
const anuphan = Anuphan({
  variable: "--font-anuphan",
  subsets: ["latin"],
});

// For title
const gowunDodum = Gowun_Dodum({
  variable: "--font-gowun-dodum",
  subsets: ["latin"],
  weight: "400"
});


export const metadata: Metadata = {
  title: "Alexandre Sampaio - Developpeur Full Stack",
  description: "Développeur Full Stack passionné par la création d'applications web modernes et performantes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${gowunDodum.variable} ${anuphan.variable} h-full`}>
      <body className="h-full antialiased font-body bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
