import React from 'react';
import '../../css/home.css';
import { NavLink } from 'react-router-dom';
import Grid from './Grid';

const Home = () => {
    return (
    <section className="home">
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
