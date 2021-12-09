import React from 'react';
import Dropdown from './Dropdown';
import Filter from './Filter';
import PropTypes from 'prop-types';

const GeneralFilter = (props) => {

    return (
        <div>
            <Filter text={props.text}>
                <Dropdown options={props.options} handleOption={props.handleOption} filterType={props.filterType}/>
            </Filter>
        </div>
    )
}

GeneralFilter.propTypes = {
    text: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
}

export default GeneralFilter;
