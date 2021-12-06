import React from 'react';
import '../../css/home.css';
import { NavLink } from 'react-router-dom';
import Grid from './Grid';
import Navbar from '../Navbar';

const Home = () => {
    return (
    <section className="home">
        <Navbar isloggedIn={false} user="Alejandro"
        display="flex" background="transparent"/>
        <article class="explore flex-center">
            <h1>Discover new places to travel</h1>
            <div class="btn-explore flex-center">
                <NavLink to="/properties" class="flex-center">Explore</NavLink>
            </div>
        </article>
        <Grid />
    </section>
    )
}

export default Home;
