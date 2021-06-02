import React from 'react';

const FilterBox = ({ filterChange}) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='text'
                placeholder='Decide what to search'
            />
        </div>
    );
}

export default FilterBox;