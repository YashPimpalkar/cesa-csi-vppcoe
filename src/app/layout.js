import { Inter, Roboto, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'


const inter = Inter({ subsets: ['latin'] })
// const roboto = Roboto({ subsets: ['latin'] })
// const poppins =Poppins({ subsets: ['latin'] })

export const metadata = {
  title: 'CESA & CSI',
  description: 'Official website for the Computer Department Society Association (CESA) and Computer Society Of India (CSI) of VPPCOE College. Stay updated with events, blog posts, and our mission.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider >
          <AuthProvider>
            <div className='container'>
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
