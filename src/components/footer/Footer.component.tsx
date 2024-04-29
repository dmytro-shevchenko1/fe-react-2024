import SocialIcon from '@/components/SocialIcon/SocialIcon.component.tsx';
import { SOCIAL_LINKS } from '@/constants/socialLinks.ts';

import styles from './Footer.module.css';
function FooterComponent() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.footerContent}>
                        <SocialIcon />
                        <div className={styles.footerText}>
                            <p>
                                Made with 💗 on course{' '}
                                <a className={styles.linkFooter} href={SOCIAL_LINKS.masters}>
                                    &apos;Intro to React&apos; from Masters Academy in 2024
                                </a>{' '}
                                by Dmytro Shevchenko
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default FooterComponent;
