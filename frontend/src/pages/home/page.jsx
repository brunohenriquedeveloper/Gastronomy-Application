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
    <div className={styles.placesSectionDiv}>
        <img src="/imgs/homepage/paris.avif" alt="Europe" className={styles.image} />
        <div className={styles.titleWithIcon}>
            <FaMapMarkerAlt className={styles.icon} />
            <h4>Europe</h4>
        </div>
        <p>Explore historic cities, diverse cultures, and stunning landscapes.</p>
    </div>

    <div className={styles.placesSectionDiv}>
        <img src="/imgs/homepage/america.jpg" alt="Americas" className={styles.image} />
        <div className={styles.titleWithIcon}>
            <FaMapMarkerAlt className={styles.icon} />
            <h4>Americas</h4>
        </div>
        <p>From Patagonia to Alaska. Nature, culture, and unforgettable adventures.</p>
    </div>

    <div className={styles.placesSectionDiv}>
        <img src="/imgs/homepage/japan.jpg" alt="Asia" className={styles.image} />
        <div className={styles.titleWithIcon}>
            <FaMapMarkerAlt className={styles.icon} />
            <h4>Asia</h4>
        </div>
        <p>Ancient traditions meet futuristic innovation across vibrant landscapes.</p>
    </div>

    <div className={styles.placesSectionDiv}>
        <img src="/imgs/homepage/africa.jpg" alt="Africa" className={styles.image} />
        <div className={styles.titleWithIcon}>
            <FaMapMarkerAlt className={styles.icon} />
            <h4>Africa</h4>
        </div>
        <p>Safaris, deserts, forests, and extraordinary cultural richness.</p>
    </div>

    <div className={styles.placesSectionDiv}>
        <img src="/imgs/homepage/oceania.jpg" alt="Oceania" className={styles.image} />
        <div className={styles.titleWithIcon}>
            <FaMapMarkerAlt className={styles.icon} />
            <h4>Oceania</h4>
        </div>
        <p>Paradise beaches, exotic nature, and unique experiences await.</p>
    </div>

 <div className={styles.placesSectionDiv}>
    <img src="/imgs/homepage/discover.jpg" alt="Discover" className={styles.image} />
    <div className={styles.titleWithIcon}>
        <FaMapMarkerAlt className={styles.icon} />
        <h4>Discover New Places</h4>
    </div>
    <p>Find more destinations around the world.</p>
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