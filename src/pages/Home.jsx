import React from 'react'
import { Affordable, Banner, Design, Header, Hero, Info, Services } from '../components'

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Hero />
            <Services />
            <Info />
            <Design />
            <Affordable />
        </div>
    )
}

export default Home
