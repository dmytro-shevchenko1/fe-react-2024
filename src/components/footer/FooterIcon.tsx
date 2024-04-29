import styles from './Footer.module.css';

interface FooterIconProps {
    link: string;
    iconPath: string;
}

const FooterIcon: React.FC<FooterIconProps> = ({ link, iconPath }) => (
    <a href={link}>
        <img src={iconPath} alt="Icon" className={styles.icon} />
    </a>
);

export default FooterIcon;
