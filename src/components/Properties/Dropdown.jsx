import React from 'react';

const Dropdown = (props) => {
    
    return (
        <div className="dropdown-menu">
            {props.options.map((obj, index) => {
                return(
                    <a href="#a" className="options" key={index} onClick={() => props.handleOption(index, props.filterType)}>{props.options[index]}</a>
                )
            })}
        </div>
    )
}

export default Dropdown;
