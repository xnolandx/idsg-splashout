import Image from 'next/image'
import logo from '../../../public/idsg.png'
import styles from './header.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <Image src={logo} alt="idsg-logo" className={styles.image} priority/>
            <div className={styles.headerText}>
                <h1>Intelligence Data Solutions Group</h1>
                <p>Weaponizing Data for the Modern Battle Field.</p>
            </div>
            <Image src={logo} alt="idsg-logo" className={styles.image} priority/>
        </div>
    )
}