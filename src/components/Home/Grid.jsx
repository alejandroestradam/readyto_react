import React from 'react';
import { NavLink } from 'react-router-dom';

const Grid = () => {
    return (
    <article id="properties">
        <h1>Live anywhere in the world</h1>
        <div class="propert">
            <figure class="card">
                <NavLink to="/" className="link-image">
                    <img src="/img/house.jpg" alt="Houses"/>
                </NavLink> 
                <p>Houses</p>
            </figure>
            <figure class="card">
                <NavLink to="/" className="link-image">
                    <img src="/img/apartment.jpg" alt="Apartment"/>
                </NavLink> 
                <p>Apartments</p>
            </figure>
            <figure class="card">
                <NavLink to="/" className="link-image"> 
                    <img src="/img/private-room.jpg" alt="Private Rooms"/>
                </NavLink> 
                <p>Private room</p>
            </figure>
            <figure class="card">
                <NavLink to="/" className="link-image">
                    <img src="/img/unique-stay.jpg" alt="Unique Stays"/>
                </NavLink> 
                <p>Unique stays</p>
             </figure>
        </div>
    </article>
    )
}

export default Grid;
