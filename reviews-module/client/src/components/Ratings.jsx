import React from "react";

const Ratings = props => (
  <div className="_2h22gn">
    {props.handleBackToReviews ? (
      <div className="back-to-reviews">
        <div className="search-count">
          {props.reviews.length} guests have mentioned <b>"{props.searchValue}"</b>
        </div>
        <div>
          <button
            className="back-to-reviews-button"
            type="button"
            onClick={props.handleBackToReviews}
          >
            Back to all reviews
          </button>
        </div>
      </div>
    ) : (
      <div>
        <div className="_en5l15m">
          <div>
            <div style={{ marginBottom: 12 }}>
              <div className="_2h22gn">
                <div className="_iq8x9is">
                  <span className="_1r804a6o">Accuracy</span>
                </div>
                <div className="_iq8x9is">
                  <div className="_1iu38l3">
                    {props.handleStarRating(props.avgAccuracy)}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: 12 }}>
              <div className="_2h22gn">
                <div className="_iq8x9is">
                  <span className="_1r804a6o">Communication</span>
                </div>
                <div className="_iq8x9is">
                  <div className="_1iu38l3">
                    {props.handleStarRating(props.avgCommunication)}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: 12 }}>
              <div className="_2h22gn">
                <div className="_iq8x9is">
                  <span className="_1r804a6o">Cleanliness</span>
                </div>
                <div className="_iq8x9is">
                  <div className="_1iu38l3">
                    {props.handleStarRating(props.avgCleanliness)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="_en5l15m">
          <div className="_1530dt5">
            <div style={{ marginBottom: 12 }}>
              <div className="_2h22gn">
                <div className="_iq8x9is">
                  <span className="_1r804a6o">Location</span>
                </div>
                <div className="_iq8x9is">
                  <div className="_1iu38l3">
                    {props.handleStarRating(props.avgLocation)}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: 12 }}>
              <div className="_2h22gn">
                <div className="_iq8x9is">
                  <span className="_1r804a6o">Check-in</span>
                </div>
                <div className="_iq8x9is">
                  <div className="_1iu38l3">
                    {props.handleStarRating(props.avgCheckIn)}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: 12 }}>
              <div className="_2h22gn">
                <div className="_iq8x9is">
                  <span className="_1r804a6o">Value</span>
                </div>
                <div className="_iq8x9is">
                  <div className="_1iu38l3">
                    {props.handleStarRating(props.avgValue)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);

export default Ratings;
