import aboutMe from '@/assets/about_me.svg';

import styles from './AboutPage.module.css';

function About() {
    return (
        <>
            <main>
                <section>
                    <div className={styles.introFlex}>
                        <div className={styles.introText}>
                            <h1 className={styles.aboutH1}>About me</h1>
                            <p className={styles.aboutParagraph}>
                                Hi! My name is Dmytro Shevchenko and I&apos;m a Junior Frontend Developer. I am already familiar with main
                                Web Technologies like React, HTML, CSS, JavaScript and Git version control system.
                            </p>
                            <p className={styles.aboutParagraph}>
                                This page was developed during the course{' '}
                                <a className={styles.link} href="https://www.mastersacademy.education/frontend-react-it">
                                    &apos;Intro to React&apos;
                                </a>{' '}
                                from Masters Academy in 2024.
                            </p>
                            <p className={styles.aboutParagraph}>
                                This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to
                                create my own small project for the portfolio.
                            </p>
                            <p className={styles.aboutParagraph}>You can contact me via social network and check out my GitHub.</p>
                        </div>
                        <img className={styles.aboutImage} src={aboutMe} alt="about" />
                    </div>
                </section>
            </main>
        </>
    );
}

export default About;
