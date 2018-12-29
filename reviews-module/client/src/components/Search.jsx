import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: 12 }}>
          <div className="_2h22gn">
            <div className="_1ers5f61">
              <div className="_f8t6x1">
                <div className="_djxl322">
                  <div className="_17erhr0e">
                    <div className="_vy3ibx">
                      <h2 className="_fecoyn4" tabIndex="-1">
                        <span className="_1dl27thl">432 Reviews</span>
                      </h2>
                      <div className="_l0ao8q">
                        <div
                          itemProp="aggregateRating"
                          itemScope
                          itemType="http://schema.org/AggregateRating"
                        >
                          {/* overall rating in stars // need to dynamically change content to total reviewcount*/}
                          <div itemProp="ratingValue" content="">
                            <span role="img">
                              <span className="_1hojkzx8">
                                <svg
                                  viewBox="0 0 1000 1000"
                                  role="presentation"
                                  aria-hidden="true"
                                  focusable="false"
                                  style={{
                                    height: 1 + "em",
                                    width: 1 + "em",
                                    display: "block",
                                    fill: "currentColor"
                                  }}
                                >
                                  <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
                                </svg>
                              </span>
                              <span className="_1hojkzx8">
                                <svg
                                  viewBox="0 0 1000 1000"
                                  role="presentation"
                                  aria-hidden="true"
                                  focusable="false"
                                  style={{
                                    height: 1 + "em",
                                    width: 1 + "em",
                                    display: "block",
                                    fill: "currentColor"
                                  }}
                                >
                                  <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
                                </svg>
                              </span>
                              <span className="_1hojkzx8">
                                <svg
                                  viewBox="0 0 1000 1000"
                                  role="presentation"
                                  aria-hidden="true"
                                  focusable="false"
                                  style={{
                                    height: 1 + "em",
                                    width: 1 + "em",
                                    display: "block",
                                    fill: "currentColor"
                                  }}
                                >
                                  <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
                                </svg>
                              </span>
                              <span className="_1hojkzx8">
                                <svg
                                  viewBox="0 0 1000 1000"
                                  role="presentation"
                                  aria-hidden="true"
                                  focusable="false"
                                  style={{
                                    height: 1 + "em",
                                    width: 1 + "em",
                                    display: "block",
                                    fill: "currentColor"
                                  }}
                                >
                                  <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
                                </svg>
                              </span>
                              <span className="_1hojkzx8">
                                <svg
                                  viewBox="0 0 1000 1000"
                                  role="presentation"
                                  aria-hidden="true"
                                  focusable="false"
                                  style={{
                                    height: 1 + "em",
                                    width: 1 + "em",
                                    display: "block",
                                    fill: "currentColor"
                                  }}
                                >
                                  <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
                                </svg>
                              </span>
                            </span>
                          </div>
                          {/* need to dynamically change content value to total reviewcount */}
                          <div
                            className="_1m8bb6v"
                            itemProp="reviewCount"
                            content=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="_tvh5ly1">
              <div className="_f8t6x1">
                <div className="_djxl322">
                  <div className="_17erhr0e">
                    <div className="_9hxttoo">
                      <div className="_ckio8me">
                        {/* magnifying glass icon */}
                        <div className="_ncmdki">
                          <div
                            className="_e5ldu0s"
                            style={{ visibility: "visible", height: 34 }}
                          >
                            <div className="_nncr1bm">
                              <div className="_ni9axhe">
                                <svg
                                  viewBox="0 0 24 24"
                                  role="presentation"
                                  aria-hidden="true"
                                  focusable="false"
                                  style={{
                                    height: 1 + "em",
                                    width: 1 + "em",
                                    display: "block",
                                    fill: "currentColor"
                                  }}
                                >
                                  <path
                                    d="m10.4 18.2c-4.2-.6-7.2-4.5-6.6-8.8.6-4.2 4.5-7.2 8.8-6.6 4.2.6 7.2 4.5 6.6 8.8-.6 4.2-4.6 7.2-8.8 6.6m12.6 3.8-5-5c1.4-1.4 2.3-3.1 2.6-5.2.7-5.1-2.8-9.7-7.8-10.5-5-.7-9.7 2.8-10.5 7.9-.7 5.1 2.8 9.7 7.8 10.5 2.5.4 4.9-.3 6.7-1.7v.1l5 5c .3.3.8.3 1.1 0s .4-.8.1-1.1"
                                    fillRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* search bar */}
                        <div className="_178faes">
                          <input
                            className="_qa9xwau"
                            id="p3-ReviewsSearchBox"
                            name="p3-ReviewsSearchBox"
                            type="text"
                            placeholder="Search reviews"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 16, marginBottom: 16 }}>
          <div className="_7qp4lh" />
        </div>
      </div>
    );
  }
}

export default Search;
