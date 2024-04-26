import fbIcon from '@/assets/fb.svg';
import inst from '@/assets/insta.svg';
import linkedin from '@/assets/linkedin.svg';
import styles from '@/components/footer/footer.module.css';
import FooterIcon from '@/components/footer/FooterIcon.tsx';

function SocialIcon() {
    return (
        <>
            <div className={styles.socialIcons}>
                <FooterIcon iconPath={fbIcon} link="https://www.facebook.com/profile.php?id=100086849614305" />
                <FooterIcon iconPath={linkedin} link="https://linkedin.com/" />
                <FooterIcon iconPath={inst} link="https://www.instagram.com/" />
            </div>
        </>
    );
}

export default SocialIcon;
