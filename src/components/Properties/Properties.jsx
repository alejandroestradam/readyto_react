import React from 'react';
import '../../css/properties.css';
import Navbar from '../Navbar';
import Dropdown from './Dropdown';
import Filter from './Filter';
import PropertiesGrid from './PropertiesGrid';

const Properties = () => {
    return (
    <div>
        <Navbar isloggedIn={false} user="Alejandro"
        display="none" background="#01a6e6"/>
        <div className="properties-section">
        <section class="Filters">
            <Filter text="Price"> 
            <Dropdown options={['option 1', 'option 2', 'option 3', 'option 4']}/>
            </Filter>
            <Filter text="Property type"> 
            </Filter>
            <Filter text="Rooms"> 
            </Filter>
            <Filter text="Bathroms"> 
            </Filter>
            {/*<div class="dropdown">
                <button class="dropdown-btn">Precio</button>
                <div class="dropdown-filters">
                    <input type="text"/> - <input type="text"/>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropdown-btn">Tipo de propiedad</button>
                <div class="dropdown-filters filters-list">
                    <a href="/">Casas</a>
                    <a href="/">Departamentos</a>
                    <a href="/">Cuartos privados</a>
                    <a href="/">Estancias Únicas</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropdown-btn">No. de Cuartos</button>
                <div class="dropdown-filters">
                    <input type="text"/> - <input type="text"/>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropdown-btn">No. de baños</button>
                <div class="dropdown-filters">
                    <input type="text"/> - <input type="text"/>
                </div>
    </div>*/}
        </section>
        <PropertiesGrid />
        </div>
    </div>
    )
}

export default Properties;
