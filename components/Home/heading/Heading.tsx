import styles from './heading.module.scss';
import Image from 'next/image';
export function Heading() {
    return (
        <>
            <div className={`flex justify-end w-full my-3`}>
                <div className={`w-full relative flex`}>
                    <div className={`w-full flex justify-start`}>
                        <Image
                        src={'/images/sale_side_one.png'}
                        alt='sale'
                        priority
                        width={500}
                        height={600}
                        className={`${styles.img} w-[100%] h-[80%] laptop:w-[65.66%] laptop:h-[100%]`}
                        />
                    </div>
                    <div className={`flex flex-col items-center space-y-24 z-20 relative laptop:py-[50px] text-slate-200`}>
                        <span className=
                        {
                            `rounded-full border border-slate-200 w-[25vw]
                            text-[2.5vw] laptop:text-[1vw] h-[35px]
                            flex justify-center items-center invisible laptop:visible`
                        }>SEASON SALE</span>
                        <div className={`flex flex-col text-[6vw]`}>
                            <span className={` ${styles.sale}`}>SALE</span>
                            <span className={` ${styles.scriptSale} italic`} id="saleScript">SALE</span>
                            <span className={` ${styles.sale}`}>SALE</span>
                        </div>
                        <div className={``}>
                            <span className=
                            {
                                `rounded-full border border-slate-200 w-[25vw]
                                text-[1.3vw] text-center laptop:text-[.8vw] h-[35px]
                                flex justify-center items-center invisible laptop:visible`
                            }>SAVE UP TO 40% ON OUR NEW COLLECTION</span>
                        </div>
                    </div>
                    <div className={`w-full flex justify-end`}>
                        <Image
                        src={'/images/sale_side_two.png'}
                        alt='sale'
                        priority
                        width={500}
                        height={800}
                        className={`${styles.img} w-[100%] h-[80%] laptop:w-[65.66%] laptop:h-[100%]`}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
