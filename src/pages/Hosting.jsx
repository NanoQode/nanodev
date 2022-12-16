import React from 'react';
import { CallHero, HostBanner } from '../components';
import FAQ from '../components/FAQ';
import Featured from '../components/featured';
import ServicesFeatures from '../components/services.Features';
import Packages2 from '../components/packages2';
import { langData2, hostDataCard } from '../constant';
import { } from '../constant';
import { PACKAGES, pricepack3, pricepack4, pricepack5, webBanner4 } from '../images';

const Hosting = () => {
  return (
    <div>
      <HostBanner
        title={'Super Fats Servers'}
        title3={'Power Your Website On Our'}
        body={'For as low as $3'}
        img={webBanner4} />
      <Packages2 img={PACKAGES}
        img2={pricepack3}
        color={'#FBE9E5'}
        img3={pricepack4}
        img4={pricepack5}
      />
      <ServicesFeatures color={'#5AA6B1'} data={hostDataCard} bgColor={'#EBF4F6'} />
      <Featured center color={'#FBE9E5'} color2={'white'} data={langData2} title={'Trusted by thousands of agencies, in-house marketers, media companies, freelancers'} />
      <CallHero />
      <FAQ />
    </div>
  )
}

export default Hosting
