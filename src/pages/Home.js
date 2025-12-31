import React from 'react';
import Testimonials from '../components/Testimonials';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Team from '../components/Team';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Services />
            <Team />
            <Portfolio />
            <Testimonials />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

