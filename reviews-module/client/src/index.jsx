import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import Ratings from './components/Ratings.jsx';
import ReviewList from './components/ReviewList.jsx';
import axios from 'axios';

class ReviewsModule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            listingId: 1
        }
    }
    componentDidMount() {
        // render reviews for current listing
        getReviews(this.state.listingId)
    }

    getReviews(listingId) {
        axios.get(`/api/items/${listingId}`)
        .then(res => {
            console.log(res.data);
            this.setState({
                reviews: res.data,
                listingId: listingId
            })
        })
        .catch(err => {
            console.error(`error getting reviews from listing id ${listingId}`, err);
        })
    }

    render() {
        return(
            <div id='reviews'>
                <div>
                    <section>
                        {/* <Search /> */}
                        <div>
                            {/* <Ratings /> */}
                            <ReviewList reviews={this.state.reviews} />
                            {/* Pages */}
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<ReviewsModule/>, document.getElementById('app'));