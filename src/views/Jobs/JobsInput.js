import React from "react";
class JobsInput extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleAddNewJob = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("Please input title or salary!");
      return;
    }

    alert("Add successfully!");
    console.log(">>> check data input: ", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
      salary: this.state.salary,
    });

    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <form onSubmit={(event) => this.handleAddNewJob(event)}>
        <label htmlFor="ltitle">Job's title:</label>
        <br />
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleChangeTitle(event)}
        />
        <br />
        <label htmlFor="lsalary">Salary:</label>
        <br />
        <input
          type="number"
          value={this.state.salary}
          onChange={(event) => this.handleChangeSalary(event)}
        />
        <br />
        <input type="submit" value="Add"/>
      </form>
    );
  }
}
export default JobsInput;
