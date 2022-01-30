import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.propsName}</h1>
                <input type={"text"} onChange={this.props.propsFunction}/>
            </div>
        );
    }
}

export default About;