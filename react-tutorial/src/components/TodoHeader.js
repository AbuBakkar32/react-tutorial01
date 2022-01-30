import React, {Component} from 'react';

class TodoHeader extends Component {
    render() {
        return (
            <div>
                <div className="container form-group">
                    <h1>todos</h1>
                    <input className="new-todo form-control" placeholder="What needs to be done?" value={this.props.name} onChange={this.props.handleChange}/>
                    <button className="btn btn-sm btn-primary mt-2" onClick={this.props.saveTodo}>Add Todo</button>
                </div>
            </div>
        );
    }
}

export default TodoHeader;