import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addTodo } from  './actions/todo';

class App extends Component {

  state = {
    todo: ''
  }

  // addTodo = () => {
  //   return ({
  //     type: 'ADD_TODO',
  //     todo: this.state.todo
  //   })
  // }

  // simply populating the text input field
  handleOnChange = event => {
    this.setState({
      todo: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log("Todo being added: ", this.state.todo);
    
    this.props.addTodo(this.state.todo);
    this.setState({ todo: '' });
  }

  render() {
    //debugger;
    const renderTodos = () => this.props.todos.map(todo => <li key={todo}>{todo}</li>);
    return (
      <div className="App">
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input
          type="text"
          onChange={(event) => this.handleOnChange(event)}
          id="todos"
          placeholder="add todo" 
          value={this.state.todo}/>
        <input type="submit" />
      </form>
      <h2>Todos:</h2>
        <ol>{renderTodos()}</ol>
      </div>
    );
  }
};

// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos
//   };
// };

// This new function takes in dispatch as an argument
// It then returns an object that contains a function as a value!
// const mapDispatchToProps = dispatch => {
//   return {
//     addTodo: (todo) => {
//       dispatch(addTodo(todo))
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect(mapStateToProps, { addTodo })(App);
export default connect(state => ({ todos: state.todos }), { addTodo })(App);