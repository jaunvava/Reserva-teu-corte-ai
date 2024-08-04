import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Reserva Teu Corte Aí | Barbearias",
   description: "projeto de reserva de cortes em barbearias",
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="pt-br" className="dark">
         <body className={inter.className}>
            <h1>eae parca teste, teste</h1>
            {children}
         </body>
      </html>
   )
}
