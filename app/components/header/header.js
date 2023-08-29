import Image from 'next/image'
import logo from '../../../public/idsg.png'
import styles from './header.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <Image src={logo} alt="idsg-logo" className={styles.image} priority/>
            <div className={styles.headerText}>
                <div className={styles.title}>Intelligence Data Solutions Group</div>
                <div className={styles.subTitle}>Weaponizing Data for the Modern Battle Field.</div>
            </div>
            <Image src={logo} alt="idsg-logo" className={styles.image} priority/>
        </div>
    )
}