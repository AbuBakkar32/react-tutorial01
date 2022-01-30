import React, {Component} from 'react';

class TodoEdit extends Component {
    render() {
        if (this.props.todo.status === 'true') {
            return (
                <tr className="bg-danger">
                    <td >{this.props.todo.name}</td>
                    <td>{this.props.todo.status}</td>
                    <td><input type={"checkbox"} onChange={this.props.handleStatus.bind(this, this.props.todo.id)}/>
                    </td>
                </tr>
            );
        }
        return (
            <tr>
                <td>{this.props.todo.name}</td>
                <td>{this.props.todo.status}</td>
                <td><input type={"checkbox"} onChange={this.props.handleStatus.bind(this, this.props.todo.id)}/></td>
            </tr>
        );
    }
}

export default TodoEdit;