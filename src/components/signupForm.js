import React, {Component} from 'react';
import Timeszones from '../data/timezones';
import _ from 'lodash';
import PropTypes from 'prop-types';
import TextFieldGroup from './common/textFieldGroup';


class SignupForm extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            categories:'',
            content:'',
            isLoading: false,
            invalid: true
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
        this.checkUserExists=this.checkUserExists.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        this.setState({
            isLoading: true
        });
        const values = {
            title: this.state.title,
            categories: this.state.categories,
            content: this.state.content,
        }
        this.props.userSignupRequest(values)
            .then(() => this.setState({isLoading: false}))
            .then(() => {
                this.props.addFlashMessage({
                    type: 'success',
                    text: 'you signed up successfully. Welcome!'
                });
                this.props.history.push('/')});
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    checkUserExists(e){
        const val=e.target.value;
        if(val !==''){
            this.props.isUserExists(val).
            then((res) => {
                const ind = _.findIndex(res.data,{'title': val});
                if(ind>=0){
                    this.setState({
                        invalid: true
                    });
                    alert(`${res.data[ind].title} exists...`);
                }else{
                    this.setState({
                        invalid: false
                    });
                }
            });
        }
    }

    render(){
        const options = _.map(Timeszones, (val, key) =>
            <option key={val} value={val}>{key}</option>
        );

        return(
            <form onSubmit={this.onSubmit}>
                <h1>Join our community!</h1>

                <TextFieldGroup field='title'
                                value={this.state.title}
                                label="Username" type="text"
                                onChange={this.onChange}
                                checkUserExists={this.checkUserExists}
                />
                <TextFieldGroup field='categories'
                                value={this.state.categories}
                                label="Email"
                                type="text"
                                onChange={this.onChange}
                                checkUserExists={this.checkUserExists}

                />

                <div className="group-control">
                    <label>
                        Timezone
                    </label>
                    <select
                        className="form-control"
                        name="content"
                        onChange={this.onChange}
                        value={this.state.content}
                    >
                        <option value="" disabled>Choose Your Timezone</option>
                        {options}
                    </select>
                </div>

                <div className="form-group">
                    <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>

            </form>
        )
    }
}
SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
}

export default SignupForm;