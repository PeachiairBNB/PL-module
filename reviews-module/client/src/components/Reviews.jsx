import React from 'react';

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        return(
            <div>
                {/* dynamically/conditionally render reviews here...7 reviews per page */}
                <div>
                    <div>
                        <div>
                            <div className='_hgs47m'>
                                {/* profile picture */}
                                <div className='_1thk0tsb'>
                                    <div className='_e296pg' style={{height:48, width: 48, display: 'block'}}>
                                        <a className='_1oa3geg' href='/users/show/412855' target='_blank' rel='noopener noreferrer' aria-label='Robin User Profile' aria-busy='false'>
                                            <img className='_lorm7i' src='https://a0.muscache.com/im/users/412855/profile_pic/1369680335/original.jpg?aki_policy=profile_x_medium' height='48' width='48' alt= 'Robin User Profile' title='Robin User Profile'></img>
                                        </a>
                                    </div>
                                </div>
                                {/* first name and date of review */}
                                <div className='_n5lh69r'>
                                    <div style={{marginLeft: 16}}>
                                        <div>
                                            <div className='_6mxuijo'>Robin</div>
                                        </div>
                                        <div>
                                            <span className='_12kw8n71'>October 2018</span>
                                        </div>
                                    </div>
                                </div>
                                {/* flag */}
                                <div className='_1thk0tsb'>
                                    <button className='_1rp5252' type='button' aria-busy='false' style={{padding: 4, margin: -4}}>
                                        <svg viewBox='0 0 24 24' role='img' aria-label='Report' focusable='false' style={{height: '1em', width: '1em', display: 'block', fill: '#767676'}}>
                                            <path d='m22.39 5.8-.27-.64a207.86 207.86 0 0 0 -2.17-4.87.5.5 0 0 0 -.84-.11 7.23 7.23 0 0 1 -.41.44c-.34.34-.72.67-1.13.99-1.17.87-2.38 1.39-3.57 1.39-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41a6.35 6.35 0 0 0 -1.19.12c-.87.17-1.79.49-2.72.93-.48.23-.93.47-1.35.71l-.11.07-.17-.49a.5.5 0 1 0 -.94.33l7 20a .5.5 0 0 0 .94-.33l-2.99-8.53a21.75 21.75 0 0 1 1.77-.84c.73-.31 1.44-.56 2.1-.72.61-.16 1.16-.24 1.64-.24.87 0 1.52.11 2.54.38l.4.11c1.39.37 2.26.52 3.57.52 2.85 0 5.29-1.79 5.97-3.84a.5.5 0 0 0 0-.32c-.32-.97-.87-2.36-1.58-4.04zm-4.39 7.2c-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41-.57 0-1.2.09-1.89.27a16.01 16.01 0 0 0 -2.24.77c-.53.22-1.04.46-1.51.7l-.21.11-3.17-9.06c.08-.05.17-.1.28-.17.39-.23.82-.46 1.27-.67.86-.4 1.7-.7 2.48-.85.35-.06.68-.1.99-.1.87 0 1.52.11 2.54.38l.4.11c1.38.36 2.25.51 3.56.51 1.44 0 2.85-.6 4.18-1.6.43-.33.83-.67 1.18-1.02a227.9 227.9 0 0 1 1.85 4.18l.27.63c.67 1.57 1.17 2.86 1.49 3.79-.62 1.6-2.62 3.02-4.97 3.02z' fill-rule='evenodd'></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {/* review text */}
                            <div style={{marginTop: 16}}>
                                <div data-review-id='331759298'>
                                    <div>
                                        <div className='_1r804a6o' dir='ltr'>
                                        What an experience for any new or seasoned traveler!  You were embraced by the art and sculpture of nature in the entire sea shell home.  Each corner you turned told a story and it was magical to hear the rain at night and wake up to sunshine every morning.  My trip was too short…
                                        <button className='_1k01n3v1' type='button' aria-busy='false'>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* line separating from other reviews */}
                            <div style={{marginTop: 24, marginBottom: 24}}>
                                <div className='_7qp4lh'></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* pages...when clicked, render 7 new reviews based on page # */}
                <div>
                    <div className='_36rlri'>
                        <div style={{marginBottom: 32}}>
                            <nav role='navigation' data-id='p3-ReviewsPagination'>
                                <span>
                                    <div>
                                        <ul className='_11hau3k' data-id='p3-ReviewsPagination'>
                                            <li className='_8wtxgiq' data-id='page-1'>
                                                <button className='_1wtrbgoo' type='button' aria-label='Page 1, current page' aria-busy='false'>
                                                    <div className='_e602arm'>1</div>
                                                </button>
                                            </li>
                                            <li className='_1am0dt' data-id='page-2'>
                                                <button className='_1ip5u88' type='button' aria-label='Page 2' aria-busy='false'>
                                                    <div className='_1bdke5s'>2</div>
                                                </button>
                                            </li>
                                            <li className='_1am0dt' data-id='page-3'>
                                                <button className='_1ip5u88' type='button' aria-label='Page 3' aria-busy='false'>
                                                    <div className='_1bdke5s'>3</div>
                                                </button>
                                            </li>
                                            <li className='_1am0dt'>
                                                <div className='_1oq38vn'>
                                                    <div className='_1r804a6o'>...</div>
                                                </div>
                                            </li>
                                            <li className='_1am0dt' data-id='page-29'>
                                                <button className='_1ip5u88' type='button' aria-label='Page 29' aria-busy='false'>
                                                    <div className='_1bdke5s'>29</div>
                                                </button>
                                            </li>
                                            <li className='_b8vexar'>
                                                <button className='_1ip5u88' type='button' aria-busy='false'>
                                                    <div className='_1yofwd5'>
                                                        <div className='_1rltvky'>
                                                            <svg viewBox='0 0 18 18' role='img' aria-label='Next' focusable='false' style={{height: '1em', width: '1em', display: 'block', fill: 'currentColor'}}>
                                                                <path d='m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z' fillRule='evenodd'></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reviews;