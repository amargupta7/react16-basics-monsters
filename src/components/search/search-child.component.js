import React from 'react';
import './search.css';

const SearchChild = React.forwardRef((props, ref) => {
    return (
        <div className='App'>
            <input ref={ref} className='search' type='search'
                onChange={props.onChange}
                placeholder='Search'
                defaultValue={''} />
        </div>
    );
});

export default SearchChild;