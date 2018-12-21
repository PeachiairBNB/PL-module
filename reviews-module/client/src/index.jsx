import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import Reviews from './components/Reviews.jsx';
import Ratings from './components/Ratings.jsx';

class ReviewsModule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div id='reviews'>
            <div>
                <section>
                    <Search />
                    <div>
                        {/* <Ratings />
                        <Reviews /> */}
                    </div>
                </section>
            </div>
            </div>
        )
    }
}

ReactDOM.render(<ReviewsModule/>, document.getElementById('app'));