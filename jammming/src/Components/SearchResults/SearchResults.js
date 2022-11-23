import React from 'react';
import './SearchResults.css'

class SearchReults extends React.Component {
    render () {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList />
            </div>
        )
    }
}

export default SearchReults