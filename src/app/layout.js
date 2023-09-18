import Header from './components/Header'
import TopOffers from './components/TopOffers'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce Website ReactJs + Sanity',
  description: 'Ecommerce Website by Dario using ReactJs and Sanity !',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
          <div className='content'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
