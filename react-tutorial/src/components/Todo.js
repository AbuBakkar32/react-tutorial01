import React, {Component} from 'react';
import TodoHeader from "./TodoHeader";
import TodoEdit from "./TodoEdit";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            todos: [],
        };
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    saveTodo = (event) => {
        event.preventDefault();
        if(this.state.name !=='') {
            const name = this.state.name;
            const todos = this.state.todos;
            const newTodo = {
                'id': todos.length + 1,
                'name': name,
                'status': 'false',
            };
            this.setState({
                todos: [...todos, newTodo],
                name: '',
            });
        }

    };

    handleStatus = (id) => {
        const todos = this.state.todos
        const index = todos.findIndex(todo => todo['id'] === id);
        const todo = todos[index];
        if (todo['status'] === 'false') {
            todo['status'] = 'true';
        } else {
            todo['status'] = 'false';
        }
        todos[index] = todo;
        this.setState({
            todos: todos,
        });
    }

    render() {
        const todos = this.state.todos;
        const row = todos.map((todo) => {
            return (
                <TodoEdit todo={todo} handleStatus={this.handleStatus}/>
            );
        });
        return (
            <div>
                <TodoHeader handleChange={this.handleChange} saveTodo={this.saveTodo} name={this.state.name}/>
                <div className='align-content-center'>
                    <table className='table text-center mt-4'>
                        <thead>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Action</th>
                        </thead>
                        <tbody>
                        {row}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Todo;