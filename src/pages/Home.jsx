import React from 'react'
import { Affordable, Banner, Client, Design, Footer, Form, Header, Hero, Info, Services } from '../components'
import Featured from '../components/featured'

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
            <Client />
            <div className=''>
                <Featured />
            </div>
            <Form />
            <Footer/>
        </div>
    )
}

export default Home
