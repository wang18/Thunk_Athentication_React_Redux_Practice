import React, {Component} from 'react';
import TextFieldGroup from './common/textFieldGroup';
import {Field, reduxForm} from 'redux-form';

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoading: false
        }
    }
    onSubmit(){

    }
    render(){
        const {handleSubmit} =this.props;
        return(
            <form>
                <h1>Login</h1>
                <Field label='Username' name='title' component={TextFieldGroup}/>
                <Field label='Email' name='categories' component={TextFieldGroup}/>
                <div className='form-group'>
                    <button className='btn btn-primary btn-lg' disabled={this.state.isLoading}>Login</button>
                </div>
            </form>);
    }
}

function validate(values){
    const errors ={};
    if(){}
}
export default reduxForm({validate, form: 'loginForm'})(LoginForm)