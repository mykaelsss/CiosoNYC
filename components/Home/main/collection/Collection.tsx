import Image from "next/image";
import styles from './collection.module.scss'
export function Collection() {
    type ClothingItem = {
        name: string;
        src: string;
    }
    const collection: ClothingItem[] = [
        {
            name: 'ROSALIA TOP',
            src: '/images/rosalia.jpg'
        },
        {
            name: 'REVENGE SUIT',
            src: '/images/revenge_suit.jpg'
        },
        {
            name: 'SCARLET TRENCH',
            src: '/images/scarlet_trench.jpg'
        },
        {
            name: 'KAITE DRESS',
            src: '/images/kaite_dress.jpg'
        },
        {
            name: 'KAITE TOP',
            src: '/images/kaite_top.jpg'
        },
        {
            name: 'ANGEL GLOVES',
            src: '/images/angle_gloves.jpg'
        }
    ]
    return (
        <section className={`${styles.collectionSection} w-[100vw] flex flex-col items-center invisible h-[0vh] tablet:visible tablet:h-[100vh]`}>
            <div className=
            {
                `flex text-slate-200 justify-center
                items-center w-full space-x-4 my-24
                text-[2vw]`
            }>
                <span>s / s</span>
                <div className={`w-[50%] h-0.5 bg-slate-200`}></div>
                <span>2024</span>
            </div>
            <div className={`${styles.marquee}`}>
                <ul className={`${styles.marquee_content}`}>
                    {collection.concat(collection).map((item, idx) => (
                        <li key={idx} className={`text-slate-200 text-[1.5vw]`}>
                            <p>{item.name}</p>
                            <Image
                            src={item.src}
                            alt={item.name}
                            height={400}
                            width={500}
                            priority
                            className={`w-[30vw] h-[30vw] rounded-md`}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
