import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data.data && res.data ? res.data.data : {},
      });
    }
  }
  handleBackToUserList = () => {
    this.props.history.push("/user");
  };
  render() {
    let { user } = this.state;
    let isObjEmpty = Object.keys(user).length === 0;

    return (
      <>
        <div>User Id {this.props.match.params.id}</div>
        {isObjEmpty === false && (
          <>
            <div>
              Name: {user.first_name} {user.last_name}
            </div>
            <div>Email: {user.email}</div>
            <div>
              <img src={user.avatar} />
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  this.handleBackToUserList();
                }}
              >
                Back
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(DetailUser);
