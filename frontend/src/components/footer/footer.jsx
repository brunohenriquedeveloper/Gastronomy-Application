import styles from './footer.module.css';
import {Link} from 'react-router-dom';

export default function Footer(){
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerLogo}><img src="./imgs/logo-Places.png" alt="" srcset="" /></div>
        
            <div className={styles.footerLinks}>
                <p>© 2026 Places. All rights reserved.</p>
            </div>
        </footer>
    );
}