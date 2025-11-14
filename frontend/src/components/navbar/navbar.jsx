import styles from './navbar.module.css'
import { LuMenu, LuShoppingCart, LuUser } from "react-icons/lu";
import {Drawer} from '@mui/material'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }


    return(
        <nav className={styles.navbarContainer}>
            <div className={styles.navbarItems}>
                <Link to={'/'}><img src="/logo-Places.png" alt=""  className={styles.logo}/></Link>
                
            

            <div className={styles.navbarLinksContainer}>
            <Link to={'/'} className={styles.navbarLink}>Home</Link>
            <Link to={'/places'} className={styles.navbarLink}>Places</Link>
            <Link to={'/cart'}>
                <LuShoppingCart className={styles.navbarLink}/>
            </Link>
            <Link to={'/profile'}>
                <LuUser className={styles.navbarLink}/>
            </Link>
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
            <Link to={'/'} className={styles.navbarLink}>Home</Link>
             <Link to={'/places'} className={styles.navbarLink}>Places</Link>
            <Link to={'/profile'} className={styles.navbarLink}>Profile</Link>
        </div>
        </Drawer>
            
        </nav>
    )
}