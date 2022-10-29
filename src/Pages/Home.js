import React from 'react'
import MainSection from '../components/MainSection';
import Services from '../components/Services';
import Card from "../components/Card";
import Pricing from "../components/Pricing";
import WhyChooseUs from "../components/WhyChooseUs";
import Carousel from '../components/Carousel';
import Address from '../components/Address';

const Home = () => {
  return (
    <div>
      <MainSection/>
      <Services/>
      <WhyChooseUs/>
      <Card/>
      <Carousel/>
     <Pricing/>
     <Address/>
      </div>
  )
}

export default Home