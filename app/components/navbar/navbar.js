'use client'

import Link from 'next/link'
import styles from './navbar.module.css'
import { useState } from 'react'

export default function Navbar(){
  const [selectedTab, setSelectedTab] = useState('home')

  return(
    <div className={styles.main}>
      <Link 
      href='/' 
      className={selectedTab === 'home' ? styles.selectedTab : styles.unselectedTab}
      onClick={() => setSelectedTab('home')}
      > Home </Link>

      <Link 
      href='/mission' 
      className={selectedTab === 'mission' ? styles.selectedTab : styles.unselectedTab}
      onClick={() => setSelectedTab('mission')}
      > Mision </Link>

      <Link 
      href='/vision' 
      className={selectedTab === 'vision' ? styles.selectedTab : styles.unselectedTab}
      onClick={() => setSelectedTab('vision')}
      > Vision </Link>

      <Link 
      href='/capabilities' 
      className={selectedTab === 'capabilities' ? styles.selectedTab : styles.unselectedTab}
      onClick={() => setSelectedTab('capabilities')}
      > Capabilities </Link>

      <Link 
      href='/tools' 
      className={selectedTab === 'tools' ? styles.selectedTab : styles.unselectedTab}
      onClick={() => setSelectedTab('tools')}
      > Tools </Link>

    </div>
)
}