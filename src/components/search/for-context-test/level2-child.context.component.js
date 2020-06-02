import React from 'react';
import { SearchContext } from '../search.component';

const Level2Child = () => {
    //const contextval = React.useContext(SearchContext); // 1 way

    return (
        <div className='App'>
            {/* Level 2 child {contextval} */}
            <SearchContext.Consumer>
                {
                    value => `Level 2 child using consumer ${value}` // other way
                }
            </SearchContext.Consumer>
        </div>
    );
};

export default Level2Child;