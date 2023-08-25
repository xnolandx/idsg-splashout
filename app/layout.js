import './globals.css'
import Navbar from './components/navbar/navbar.js'
import Header from './components/header/header.js'

export const metadata = {
  title: 'IDSG-Splashout',
  description: 'IDSG Landing Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
        <Header />
        <Navbar />
        <div>  
          {children}
        </div>
        </main>
      </body>
    </html>
    
  )
}
