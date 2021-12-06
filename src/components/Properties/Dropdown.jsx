import React from 'react';

const Dropdown = (props) => {
    
    return (
        <div className="dropdown-menu">
            {props.options.map((obj, index) => {
                return(
                    <a href="#a" className="options">{props.options[index]}</a>
                )
            })}
        </div>
    )
}

export default Dropdown;
