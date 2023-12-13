import React from 'react'
import { Heading } from './heading/Heading'
import { Banner } from './nav/Banner'
import { Info } from './main/Info'
import { Collection } from './main/collection/Collection'
import { About } from './footer/About'

export function Landing() {
    return (
        <>
            <header>
                <Banner/>
                <Heading />
            </header>
            <main>
                <Info/>
                <Collection />
            </main>
            <footer>
                <About />
            </footer>
        </>
    )
}
