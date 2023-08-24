import Link from 'next/link'
import './globals.css'
import styles from './page.module.css'
import Navbar from './components/navbar'
import Header from './components/header'




export const metadata = {
  title: 'IDSG-Splashout',
  description: 'IDSG Landing Page',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <main>
      <Header />

      <Navbar />
      <div>  
        {children}
      </div>

      </main>
    </html>
    
  )
}
