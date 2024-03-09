import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Agoraw MVP',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
<html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen w-full bg-gray-100">
          <Sidebar />
          <div className="flex flex-col w-full h-full ml-4 p-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
