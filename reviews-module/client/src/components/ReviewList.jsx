import React from "react";
import Review from './Review.jsx';
import PageNumber from './PageNumber.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      reviewCount: 0,
      currentPage: 1,
      reviewsPerPage: 7,
      numPages: 0,
      reviewsInPage: {}
    };
  }
  componentDidMount() {
    this.setState({
      reviews: this.props.reviews,
      reviewCount: this.props.reviews.length
    });
  }

  handlePageSelect(e) {
    this.setState({
      currentPage: Number(e.currentTarget.textContent),

    })
  }

  render() {
    return (
      <div>
        {/* reviews */}
        <div>
          {this.props.reviews.map(review => {
            return <Review review={review} key={review.id}/>
          })}
        </div>
        {/* pages */}
        <div>

        </div>
      </div>
    );
  }
}

export default ReviewList;

// {/* pages...when clicked, render 7 new reviews based on page # */}
// <div>
// <div className="_36rlri">
//   <div style={{ marginBottom: 32 }}>
//     <nav role="navigation" data-id="p3-ReviewsPagination">
//       <span>
//         <div>
//           <ul className="_11hau3k" data-id="p3-ReviewsPagination">
//             <li className="_8wtxgiq" data-id="page-1">
//               <button
//                 className="_1wtrbgoo"
//                 type="button"
//                 aria-label="Page 1, current page"
//                 aria-busy="false"
//               >
//                 <div className="_e602arm">1</div>
//               </button>
//             </li>
//             <li className="_1am0dt" data-id="page-2">
//               <button
//                 className="_1ip5u88"
//                 type="button"
//                 aria-label="Page 2"
//                 aria-busy="false"
//               >
//                 <div className="_1bdke5s">2</div>
//               </button>
//             </li>
//             <li className="_1am0dt" data-id="page-3">
//               <button
//                 className="_1ip5u88"
//                 type="button"
//                 aria-label="Page 3"
//                 aria-busy="false"
//               >
//                 <div className="_1bdke5s">3</div>
//               </button>
//             </li>
//             <li className="_1am0dt">
//               <div className="_1oq38vn">
//                 <div className="_1r804a6o">...</div>
//               </div>
//             </li>
//             <li className="_1am0dt" data-id="page-29">
//               <button
//                 className="_1ip5u88"
//                 type="button"
//                 aria-label="Page 29"
//                 aria-busy="false"
//               >
//                 <div className="_1bdke5s">29</div>
//               </button>
//             </li>
//             <li className="_b8vexar">
//               <button
//                 className="_1ip5u88"
//                 type="button"
//                 aria-busy="false"
//               >
//                 <div className="_1yofwd5">
//                   <div className="_1rltvky">
//                     <svg
//                       viewBox="0 0 18 18"
//                       role="img"
//                       aria-label="Next"
//                       focusable="false"
//                       style={{
//                         height: "1em",
//                         width: "1em",
//                         display: "block",
//                         fill: "currentColor"
//                       }}
//                     >
//                       <path
//                         d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
//                         fillRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </button>
//             </li>
//           </ul>
//         </div>
//       </span>
//     </nav>
//   </div>
// </div>
// </div>