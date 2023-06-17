import React from "react";
import { toast } from "react-toastify";
import Color from "../HOC/Color";
class AddToDo extends React.Component {
  state = {
    title: "",
  };
  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleAddTodo = () => {
    if (!this.state.title) {
      //undefined/null/empty
      toast.error("Please input todo!");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          className="input-add-todo"
          type="text"
          placeholder="Enter Todo"
          value={title}
          onChange={(event) => {
            this.handleOnChangeTitle(event);
          }}
        />
        <span className="focus-border"></span>
        <button
          className="btn btn-primary btn-sm rounded-0"
          type="button"
          onClick={() => {
            this.handleAddTodo();
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default Color(AddToDo);
