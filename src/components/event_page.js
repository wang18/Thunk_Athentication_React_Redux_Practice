import React, {Component} from 'react';
import AuthImg from '../data/authenticatedImg.jpg';

class EventPage extends Component {
    render(){
        const imgStyle={"height":680};
        return(<div className="row">
            <div className="col-md-4 col-md-offset-4">
                <h2>THIS IS PAGE NEED AUTHENTICATION TO BE SEEN...</h2>
                <img style={imgStyle} src={AuthImg}/>
            </div>
        </div>);
    }
}
export default EventPage;