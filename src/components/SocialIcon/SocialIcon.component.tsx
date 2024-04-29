import fbIcon from '@/assets/footerImages/fb.svg';
import inst from '@/assets/footerImages/insta.svg';
import linkedin from '@/assets/footerImages/linkedin.svg';
import styles from '@/components/footer/Footer.module.css';
import FooterIcon from '@/components/footer/FooterIcon.tsx';
import SocialLinks from '@/constants/SocialLinks.tsx';

function SocialIcon() {
    return (
        <>
            <div className={styles.socialIcons}>
                <FooterIcon iconPath={fbIcon} link={SocialLinks.facebook} />
                <FooterIcon iconPath={linkedin} link={SocialLinks.linkedin} />
                <FooterIcon iconPath={inst} link={SocialLinks.instagram} />
            </div>
        </>
    );
}

export default SocialIcon;
