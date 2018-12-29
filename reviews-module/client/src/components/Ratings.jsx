import React from 'react';

class Ratings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
            <div>
                <div className='left'>
                    <div style={{marginBottom: 12}}>
                        <div>
                            <span className="_1r804a6o">Accuracy</span>
                        </div>
                        <div></div>
                    </div>
                    <div style={{marginBottom: 12}}>
                        <div>
                            <span className="_1r804a6o">Communication</span>
                        </div>
                        <div></div>
                    </div>
                    <div style={{marginBottom: 12}}>
                        <div>
                            <span className="_1r804a6o">Cleanliness</span>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className='right'>
                    <div style={{marginBottom: 12}}>
                        <div>
                            <span className="_1r804a6o">Location</span>
                        </div>
                        <div></div>
                    </div>
                    <div style={{marginBottom: 12}}>
                        <div>
                            <span className="_1r804a6o">Check-In</span>
                        </div>
                        <div></div>
                    </div>
                    <div style={{marginBottom: 12}}>
                        <div>
                            <span className="_1r804a6o">Value</span>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ratings;