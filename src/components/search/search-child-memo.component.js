import React from 'react';
import './search.css';

const SearchChildMemo = (props) => {
    console.log('Testing memo');
    return (
        <div className='App'>
            <input className='search' type='text'
                placeholder={props.placeholder}
                defaultValue={''} />
        </div>
    );
};

export default React.memo(SearchChildMemo);