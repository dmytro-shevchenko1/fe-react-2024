import fbIcon from '@/assets/fb.svg';
import styles from '@/components/footer/footer.module.css';
import FooterIcon from '@/components/footer/FooterIcon.tsx';

function SocialIcon() {
    return (
        <>
            <div className={styles.socialIcons}>
                <FooterIcon iconPath={fbIcon} link="facebook.com" />
                <FooterIcon iconPath={fbIcon} link="facebook.com" />
                <FooterIcon iconPath={fbIcon} link="facebook.com" />
            </div>
        </>
    );
}

export default SocialIcon;
