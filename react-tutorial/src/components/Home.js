import React, {Component} from 'react';
import About from "./About";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Abu Bakkar',
            email: 'abubakkar.swe@gmail.com',
            password: '1234576',
            confirmPassword: '1234576',
            errors: {'message': 'Something went wrong'},
            message: 'Success',
            data: [],
        }
    }

    handleClick = () => {
        if (this.state.name === 'Abu Bakkar')
            this.setState({name: 'ABS-RAKIB'});
        else
            this.setState({name: 'Abu Bakkar'});
    }

    //change name using propos




    changePassword = (e)=> {
        if(e.target.value.length < 1 )
            this.setState({password: '123456789'});
        else
            this.setState({password: e.target.value});
    }

    render() {
        const name = this.state.name
        const message = this.state.errors.message
        return (
            <div>
                <h1>Hello {this.state.name}!!</h1>
                <p>Email: {this.state.email}</p>
                <p>{this.state.password}</p>
                <p>{this.state.confirmPassword}</p>
                <p>{name ? 'Success' : message}</p>
                <About propsName = {this.state.name} propsFunction = { this.changePassword }/>
                <button onKeyPress={this.handleClick}>Change Name</button>
            </div>
        );
    }
}

export default Home;