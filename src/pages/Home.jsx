import React from 'react'
import { Affordable, Banner, Client, Design, Form, Hero, Info, Services } from '../components'
import Featured from '../components/featured'
import { designData, langData } from '../constant'
import { DESIGN, designimg } from '../images'

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Banner />
            <Hero />
            <Services />
            <Info />
            <Design data={designData}
                subtitle={''}
                btn={false}
                img={DESIGN}
                img2={designimg}
                title={'The BIG Picture, in 3 Steps'} />
            <Affordable />
            <Client />
            <div className=''>
                <Featured
                    color={'#FBE9E5'}
                    color2={'white'}
                    data={langData} title={'Our Partners in Your Success'} />
            </div>
            <Form />
        </div>
    )
}

export default Home
