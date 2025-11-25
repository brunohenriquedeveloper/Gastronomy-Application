import styles from './page.module.css'
import { FaInstagram, FaFacebook, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Home(){
    return (
        <div className={styles.pageContainer}>
            <section>
                <h1>Welcome to Places</h1>
                <p>
                    Discover amazing places around the world with Places. Browse through our extensive collection of destinations, find hidden gems, and plan your next adventure. Whether you're looking for serene beaches, bustling cities, or tranquil mountains, Places has something for every traveler.
                </p>
            </section>

            <section className={styles.placesSection}>
                <div>
                    <i></i>
                    <h4></h4>
                    <p></p>
                </div>
            </section>

             <section className={styles.placesSection}>
                <div>
                    <i></i>
                    <h4></h4>
                    <p></p>
                </div>
            </section>

            <section className={styles.placesSection}>
                <div>
                    <i></i>
                    <h4></h4>
                    <p></p>
                </div>
            </section>

            <section className={styles.contactSection}>
                <h1>Stay Updated!</h1>
                <p>Subscribe to our newsletter to receive the latest updates, also follow us on social media for travel tips directly in your inbox.</p>
                <div className={styles.socialButtonsContainer}>
                    <button className={styles.socialButton}><FaInstagram /> Instagram</button>
                    <button className={styles.socialButton}><FaFacebook /> Facebook</button>
                    <button className={styles.socialButton}><FaWhatsapp /> WhatsApp</button>
                    <button className={styles.socialButton}><FaMapMarkerAlt /> Location</button>
                </div>
            </section>

        </div>
    )
}