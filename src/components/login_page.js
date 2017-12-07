import React , {Component} from 'react';
import LoginForm from './login_form';

class LoginPage extends Component {

    render() {
        return (<div className="row">
            <div className='col-md-4 col-md-offset-4'>
                <LoginForm history={this.props.history} />
            </div>
        </div>);
    }
}

export default LoginPage;
