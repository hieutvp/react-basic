import React from "react";
import "./ListTodo.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { toast } from "react-toastify";
import Color from "../HOC/Color";
import AddToDo from "./AddTodo";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      {
        id: "todo1",
        title: "Doing homework",
      },
      {
        id: "todo2",
        title: "Watching TV",
      },
      {
        id: "todo3",
        title: "Playing football",
      },
    ],
    editTodo: {},
  };
  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Add successfully!");
  };
  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodos,
    });
    toast.success("Delete successfully!");
  };
  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObject = Object.keys(editTodo).length === 0;
    //save
    if (isEmptyObject === false && editTodo.id === todo.id) {
      if (!editTodo.title) {
        //undefined/null/empty
        toast.error("Please input todo!");
        return;
      }
      let listTodosCopy = [...listTodos];
      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);
      listTodosCopy[objIndex].title = editTodo.title;
      this.setState({
        listTodos: listTodosCopy,
        editTodo: {},
      });
      toast.success("Edit successfully!");
      return;
    }
    //edit
    this.setState({
      editTodo: todo,
    });
  };
  handleOnChangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObject = Object.keys(editTodo).length === 0;
    // let { listTodos } = this.state;
    return (
      <div className="list-todo-container">
        <div>List To Do</div>

        <AddToDo addNewTodo={this.addNewTodo} />
        {listTodos &&
          listTodos.length > 0 &&
          listTodos.map((item, index) => {
            return (
              <div className="row" key={item.id}>
                <div className="col-lg-7 mx-auto">
                  <div className="card border-0 shadow">
                    <div className="card-body p-5">
                      <div className="table-responsive">
                        <table className="table m-0">
                          <thead></thead>
                          <tbody>
                            <tr>
                              <th scope="row">{index + 1}</th>
                              {isEmptyObject === true ? (
                                <td>{item.title}</td>
                              ) : (
                                <>
                                  {editTodo.id === item.id ? (
                                    <td>
                                      <input
                                        onChange={(event) => {
                                          this.handleOnChangeEditTodo(event);
                                        }}
                                        value={editTodo.title}
                                      />
                                    </td>
                                  ) : (
                                    <td>{item.title}</td>
                                  )}
                                </>
                              )}
                              <td>
                                <ul className="list-inline m-0">
                                  <li className="list-inline-item">
                                    <button
                                      className="btn btn-success btn-sm rounded-0"
                                      type="button"
                                      onClick={() => {
                                        this.handleEditTodo(item);
                                      }}
                                    >
                                      {isEmptyObject === false &&
                                      editTodo.id === item.id
                                        ? "Save"
                                        : "Edit"}
                                    </button>
                                  </li>
                                  <li className="list-inline-item">
                                    <button
                                      className="btn btn-danger btn-sm rounded-0"
                                      type="button"
                                      onClick={() => {
                                        this.handleDeleteTodo(item);
                                      }}
                                    >
                                      Delete
                                    </button>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
export default Color(ListTodo);
