import styles from './about.module.scss'

export function About() {

    return (
        <section className={`p-6`}>
            <hr />
            <div className={`flex justify-center p-6 text-slate-200`}>
                <h6 className={``}>ABOUT</h6>
            </div>
            <div className={`${styles.about} text-slate-200 p-6 text-center`}>
                <p>
                    <b>Welcome</b> to the glamorous world of <b>CIOSO</b>, where we <b>believe</b> in creating <b>unique</b>, stylish <b>pieces</b> that give you an outlet to <b>express yourself</b>.
                    At <b>CIOSO</b>, our <b>commitment</b> goes <b>beyond</b> fashion <b>trends</b>. We <b>cherish</b> the <b>unique</b> stories that each <b>garment</b> tells, <b>crafted with care</b> from <b>deadstock fabric</b>—a small but <b>meaningful</b> step towards a more <b>sustainable environment</b>.
                    Our <b>devotion</b> to <b>high-quality</b> fabrications, <b>ethical practices</b>, and <b>disrupting</b> the <b>trend</b>-cycle <b>production</b> is unwavering.
                    Every <b>CIOSO</b> piece not only <b>celebrates</b> your <b>freedom</b> of expression but also <b>contributes</b> to a brighter, more <b>eco-friendly future</b> for our planet.
                    Wearing <b>CIOSO</b> isn't just about fashion; it's embracing a <b>lifestyle</b>.
                    Join a journey where <b>style MINDFULLY meets repurpose</b> . Did you know?
                    You can <b>send</b> your beloved <b>CIOSO</b> pieces <b>back</b> to our atelier for a fee to be <b>reworked</b>, contributing to a <b>conscious</b> cycle where we <b>all produce less waste</b> .
                    <b>Thank you</b> for being part of the <b>CIOSO</b> story. Stay <b>bold</b>, stay <b>unapologetic</b>, and <b>shine</b> in a world where every thread whispers a tale of <b>uniqueness</b> and <b>purpose</b>.
                </p>
            </div>
        </section>
    )
}
