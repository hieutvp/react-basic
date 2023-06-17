import React from "react";
import { withRouter } from "react-router";
import Color from "./HOC/Color";
import logo from "../assets/images/avatar.jpg";
import { connect } from "react-redux";

class Home extends React.Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.history.push("/todo");
  //   }, 3000);
  // }
  handleDeleteUser = (user) => {
    this.props.deleteUserRedux(user);
  };

  handleAddUser = (user) => {
    this.props.addUserRedux();
  };
  render() {
    let listUsers = this.props.dataRedux;
    return (
      <>
        <div>React App</div>
        {/* <img src={logo} /> */}
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div className="list-users" key={item.id}>
                  {index + 1} - {item.name}{" "}
                  <span
                    onClick={() => {
                      this.handleDeleteUser(item);
                    }}
                  >
                    X
                  </span>
                </div>
              );
            })}
          <button
            onClick={() => {
              this.handleAddUser();
            }}
          >
            Add new
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};
const mapDispatch = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};
// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatch)(Color(Home));
