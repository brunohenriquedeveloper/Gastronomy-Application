import styles from './navbar.module.css'
import { LuMenu, LuShoppingCart, LuUser } from "react-icons/lu";

export default function Navbar(){
    return(
        <nav className={styles.navbarContainer}>
            <div className={styles.navbarItems}>
                <img src="/logo-Places.png" alt=""  className={styles.logo}/>
            

            <div className={styles.navbarLinksContainer}>
            <a href="" className={styles.navbarLink}>Home</a>
            <a href="" className={styles.navbarLink}>Places</a>
            <LuShoppingCart className={styles.navbarLink}/>
            <LuUser className={styles.navbarLink}/>
            </div>
        </div>

        <div className={styles.mobileNavBarItems}>
        <img src="/logo-Places.png" alt=""  className={styles.logo}/>
        <div className={styles.mobileNavBarButtons}>
            <LuShoppingCart className={styles.navbarLink}/>
            <LuMenu className={styles.navbarLink}/>
        </div>
        </div>
            
        </nav>
    )
}