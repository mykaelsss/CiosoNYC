import styles from './banner.module.scss'

export function Banner() {
    return (
        <section className={ ` ${styles.bannerSection} flex justify-start overflow-hidden text-[4vw] laptop:text-[2vw]` }>
                <div className={ `${styles.marquee_content} whitespace-nowrap py-[1.5rem] px-[6rem]` }>
                    <span style={{color: "yellow" }}>&#127775;</span>
                    <span>Welcome To The Wonderful World Of Cioso</span>
                    <span style={{color: "yellow" }}>&#127775;</span>
                </div>
                <div className={ `${styles.marquee_content} whitespace-nowrap py-[1.5rem] px-[6rem]` }>
                    <span style={{color: "yellow" }}>&#127775;</span>
                    <span>Welcome To The Wonderful World Of Cioso</span>
                    <span style={{color: "yellow" }}>&#127775;</span>
                </div>
                <div className={ `${styles.marquee_content} whitespace-nowrap py-[1.5rem] px-[6rem]` }>
                    <span style={{color: "yellow" }}>&#127775;</span>
                    <span>Welcome To The Wonderful World Of Cioso</span>
                    <span style={{color: "yellow" }}>&#127775;</span>
                </div>
        </section>
    );
}
