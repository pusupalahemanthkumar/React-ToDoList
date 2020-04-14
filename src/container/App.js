// Importing Required Files And Packages Here
import React, { Component } from "react";
import ToDoList from "../components/ToDoList/ToDoList"
import "./App.css";

// Defining React Class Based Component Here
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: "",
    };
  }
  formSubmitHandler = (event) => {
    event.preventDefault();
    if (this.state.text.length === 0) {
      return;
    } else {
      const olditems = [...this.state.items];
      olditems.push({ data: this.state.text, id: new Date() });
      this.setState({
        items: olditems
      });
    }
  };
  changedHandler=(event)=>{
      this.setState({
          text:event.target.value
      })
  }
  render() {
    return (
      <div className="App">
        <h1>{this.props.AppTitle}</h1>
        <ToDoList items={this.state.items} />
        <form onSubmit={this.formSubmitHandler.bind(this)}>
          <label htmlFor="data">Enter Data</label>
          <input
            id="data"
            onChange={this.changedHandler.bind(this)}
            value={this.state.text}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default App;
