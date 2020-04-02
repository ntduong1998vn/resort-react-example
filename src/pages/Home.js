import React from 'react'
import { Link } from "react-router-dom";

import Hero from "../components/Hero.jsx";
import Banner from '../components/Banner'
import Service from '../components/Service'
import FeaturedRooms from '../components/FeaturedRooms'

const Home = () => {
    return (
        <React.Fragment>
            <Hero hero="defaultHero" >
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at 300$">
                    <Link to="/rooms" className='btn-primary' >Our Rooms</Link>
                </Banner>
            </Hero>
            <Service />
            <FeaturedRooms />
        </React.Fragment>
    )
}

export default Home
