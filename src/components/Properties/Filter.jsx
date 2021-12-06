import React from 'react';
import '../../css/properties.css'
const Filter = (props) => {
    const [open, setOpen] = React.useState(false);
    return (
        <li className="filter">
            <a href="#a" className="filter-btn" onClick={() => setOpen(!open)}>
                {props.text}
            </a>
            {open && props.children}
        </li>
    )
}

export default Filter;
