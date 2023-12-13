import styles from './info.module.scss'
import Image from 'next/image'
export function Info() {
    return (
        <section className={`flex items-center pl-6 text-slate-200 my-6 laptop:my-24`}>
            <div className={`flex flex-col text-[5vw] laptop:text-[4vw]`}>
                <span>Spring 2024</span>
                <span>Collection</span>
                <span>Shop new pieces</span>
            </div>
            <div className={`flex justify-end w-[100%]`}>
                <Image
                src={'/images/main.png'}
                alt="model"
                priority
                width={500}
                height={800}
                className={`w-[90%] h-auto`}
                />
            </div>
        </section>
    )
}
