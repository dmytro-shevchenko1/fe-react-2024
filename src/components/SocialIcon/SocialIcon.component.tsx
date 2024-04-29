import fbIcon from '@/assets/footerImages/fb.svg';
import inst from '@/assets/footerImages/insta.svg';
import linkedin from '@/assets/footerImages/linkedin.svg';
import styles from '@/components/footer/Footer.module.css';
import FooterIcon from '@/components/footer/FooterIcon.tsx';
import { SOCIAL_LINKS } from '@/constants/socialLinks.ts';

function SocialIcon() {
    return (
        <>
            <div className={styles.socialIcons}>
                <FooterIcon iconPath={fbIcon} link={SOCIAL_LINKS.facebook} />
                <FooterIcon iconPath={linkedin} link={SOCIAL_LINKS.linkedin} />
                <FooterIcon iconPath={inst} link={SOCIAL_LINKS.instagram} />
            </div>
        </>
    );
}

export default SocialIcon;
