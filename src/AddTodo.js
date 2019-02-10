import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
    }

    render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>ADD TODO</label><br/>
                <input type="text" onChange={this.handleChange} value={this.state.content}/><br/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

}

export default AddTodo;