import React, {Component} from 'react';
import TextFieldGroup from './common/textFieldGroup';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {connect} from 'react-redux';
import {login} from '../actions/login';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {addFlashMessage} from "../actions/flash_messages";

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoading: false
        }
    }
    onSubmit(values){
        this.setState({
            isLoading: true
        });
        this.props.login(values).then(() => {
            this.props.addFlashMessage({
                type: 'success',
                text: 'you login successfully. Welcome!'
            })
        });
        this.props.history.push('/');
        /*this.props.login(values).then(
            (res) => {
                const ind=_.findIndex(res.data, {
                    'title':values.title,
                    'categories': values.categories
                });
                if(ind!=-1){
                    console.log(values);
                    this.props.history.push('/');
                }else{
                    console.log("NO SUCH USER...");
                }
            }
        )*/
        this.setState({isLoading: false});
    }
    render(){
        const {handleSubmit,error} =this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h1>Login</h1>
                <Field label='Username' name='title' component={TextFieldGroup}/>
                <Field label='Email' name='categories' component={TextFieldGroup}/>
                {error && <strong>{error}</strong>}
                <div className='form-group'>
                    <button className='btn btn-primary btn-lg' disabled={this.state.isLoading}>Login</button>
                </div>
            </form>);
    }
}

function validate(values){
    const errors ={};
    if(!values.title){
        errors.title="Enter username...";
    }
    if(!values.categories){
        errors.categories="Enter email...";
    }
    return errors;
}

const mapDispatchToProps=(dispatch) =>{
    return bindActionCreators({login, addFlashMessage}, dispatch);
}

LoginForm.propsTypes={
    login: PropTypes.func.isRequired
}
export default reduxForm({validate, form: 'loginForm'})(connect(null,mapDispatchToProps)(LoginForm));