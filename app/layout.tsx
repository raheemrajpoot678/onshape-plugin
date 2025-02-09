import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// Import the client component
import { getServerSession } from "next-auth";
import { AuthProvider } from "./components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Onshape Plugin",
  description: "Onshape",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider session={session}>{children}</AuthProvider>
      </body>
    </html>
  );
}
