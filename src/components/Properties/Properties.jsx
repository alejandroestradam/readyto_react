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
            <Dropdown options={['$0 - $100', '$100 - $500', '$500 - $1000', ' > $1000']}/>
            </Filter>
            <Filter text="Property type"> 
            <Dropdown options={['Houses', 'Apartments', 'Private Room', 'Unique Stays']}/>
            </Filter>
            <Filter text="Rooms"> 
            <Dropdown options={['1 room', '2 rooms', '3 rooms', '> 3 rooms']}/>
            </Filter>
            <Filter text="Bathroms"> 
            <Dropdown options={['1 bathroom', '2 bahtrooms', '3 bathrooms', '> 3 bathrooms']}/>
            </Filter>
        </section>
        <PropertiesGrid />
        </div>
    </div>
    )
}

export default Properties;
