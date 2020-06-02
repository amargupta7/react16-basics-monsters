import React from 'react';
import './search.css';
// All commented code for memo
// import SearchChildMemo from './search-child-memo.component';

// All commented code is for forwading refs example
// import SearchChild from './search-child.component';

// All commented for context example
// import Level1Child from './for-context-test/level1-child.component';
// export const SearchContext = React.createContext();

// Commented for errorboundary example
// import ErrorTest from './error-boundary/error-test.component';

const Search = (props) => {
    // const someRef = React.useRef('');
    return (
        <div className='App'>
            <input className='search' type='search' placeholder='Search' onChange={props.onChange} />
            {/* <SearchChildMemo placeholder='Please enter something'/> */}
            {/* <SearchChild ref={someRef} onChange={props.onChange}/>
            <h1>{someRef.current.value}</h1> */}
            {/* <SearchContext.Provider value='someval'>
                <Level1Child />
            </SearchContext.Provider> */}
            {/* <ErrorTest /> */}
        </div>
    );
}

export default Search;