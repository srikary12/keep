import { NextAuthProvider } from "./auth-provider";
import ErrorBoundary from "./error-boundary";
import "./globals.css";
import { Mulish } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
})


import Nav from "./nav";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full bg-gray-50 ${mulish.className}`}
      suppressHydrationWarning={true}
    >
      <body className="h-full">
        <NextAuthProvider>
          {/* @ts-expect-error Server Component */}
          <Nav />
          {/* https://discord.com/channels/752553802359505017/1068089513253019688/1117731746922893333 */}
          <ErrorBoundary>{children}</ErrorBoundary>
        </NextAuthProvider>
      </body>
    </html>
  );
}