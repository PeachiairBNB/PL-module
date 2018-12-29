import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import Reviews from './components/Reviews.jsx';
import Ratings from './components/Ratings.jsx';
import axios from 'axios';

class ReviewsModule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }
    }
    componentDidMount() {
        // render reviews for current listing
    }


    render() {
        return(
            <div id='reviews'>
            <div>
                <section>
                    {/* <Search /> */}
                    <div>
                        {/* <Ratings /> */}
                        <Reviews />
                        {/* Pages */}
                    </div>
                </section>
            </div>
            </div>
        )
    }
}

ReactDOM.render(<ReviewsModule/>, document.getElementById('app'));