import styles from './navbar.module.css'
import { LuMenu, LuShoppingCart, LuUser } from "react-icons/lu";
import {Drawer} from '@mui/material'
import { useState } from 'react';

export default function Navbar(){
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }


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
            <LuMenu className={styles.navbarLink} onClick={handleOpenMenu}/>
        </div>
        </div>
        <Drawer
        anchor='right'
        open={openMenu}
        onClose={handleOpenMenu}
        >
        <div className={styles.drawer}>
            <a href="" className={styles.navbarLink}>Home</a>
            <a href="" className={styles.navbarLink}>Places</a>
            <a href="" className={styles.navbarLink}>Profile</a>
        </div>
        </Drawer>
            
        </nav>
    )
}