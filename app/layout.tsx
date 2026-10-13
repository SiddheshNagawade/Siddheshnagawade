import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Siddhesh Nagawade — Product Design Portfolio",
  description: "Product Design Portfolio of Siddhesh Nagawade. Build in progress.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
