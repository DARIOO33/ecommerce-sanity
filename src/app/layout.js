import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { GlobalProvider } from './GlobalProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce Website ReactJs + Sanity',
  description: 'Ecommerce Website by Dario using ReactJs and Sanity !',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} key={Math.random()}>
        <GlobalProvider>
          <div>
            <Header />
            <div className='content pb-4'>
              {children}
            </div>
          </div>
        </GlobalProvider>

      </body>
    </html>
  )
}
