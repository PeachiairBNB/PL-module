import React from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search.jsx";
import Ratings from "./components/Ratings.jsx";
import ReviewList from "./components/ReviewList.jsx";
import axios from "axios";

class ReviewsModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      listingId: 1,
      avgAccuracy: null,
      avgCommunication: null,
      avgCleanliness: null,
      avgLocation: null,
      avgCheckIn: null,
      avgValue: null,
      avgRating: null
    };
  }
  componentDidMount() {
    // render reviews for current listing
    this.getReviews(this.state.listingId);
    this.getRatings(this.state.listingId);
  }

  getReviews(listingId) {
    axios
      .get(`/api/items/${listingId}`)
      .then(res => {
        this.setState({
          reviews: res.data,
          listingId: listingId
        });
      })
      .catch(err => {
        console.error(
          `error getting reviews from listing id ${listingId}`,
          err
        );
      });
  }

  getRatings(listingId) {
    axios
      .get(`/api/items/${listingId}`)
      .then(res => {
        this.setState({
          avgAccuracy:
            res.reduce((sum, review) => {
              return sum + review.accuracy;
            }, 0) / res.length,
          avgCommunication:
            res.reduce((sum, review) => {
              return sum + review.communication;
            }, 0) / res.length,
          avgCleanliness:
            res.reduce((sum, review) => {
              return sum + review.cleanliness;
            }, 0) / res.length,
          avgLocation:
            res.reduce((sum, review) => {
              return sum + review.location;
            }, 0) / res.length,
          avgCheckIn:
            res.reduce((sum, review) => {
              return sum + review.checkin;
            }, 0) / res.length,
          avgValue:
            res.reduce((sum, review) => {
              return sum + review.value;
            }, 0) / res.length,
          avgRating:
            (this.state.avgAccuracy +
              this.state.avgCommunication +
              this.state.avgCleanliness +
              this.state.avgLocation +
              this.state.avgCheckIn +
              this.state.avgValue) /
            6
        });
      })
      .catch(err => {
        console.error(
          `error getting ratings from listing id ${listingId}`,
          err
        );
      });
  }

  render() {
    return (
      <div id="reviews">
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
    );
  }
}

ReactDOM.render(<ReviewsModule />, document.getElementById("app"));
