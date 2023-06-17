import React from "react";
import "../App.scss"
class ListJobs extends React.Component {
  state = {
    isShowJob: false,
  };
  handleSetToggle = (status) => {
    this.setState({
      isShowJob: !status,
    });
  };
  handleDeleteJob = (job) => {
    let confirm = prompt(`Do you want to delete ${job.title}?`,'OK');
    if (confirm) {
      this.props.deleteJob(job);
      alert('Delete successfully!')
    }
  };
  render() {
    let { jobs } = this.props;
    let { isShowJob } = this.state;
    let check = isShowJob === true ? "isShowJob = true" : "isShowJob = false";
    return (
      <>
        <p>List jobs</p>
        {isShowJob === false ? (
          <div>
            <button className="btn-show" onClick={() => this.handleSetToggle(isShowJob)}>
              Show
            </button>
          </div>
        ) : (
          isShowJob && (
            <>
              <div className="job-list">
                {jobs.map((item, index) => {
                  return (
                    <div key={item.id}>
                      <ul>
                        <li>
                          Job's Title: {item.title} - Salary: {item.salary} ${" "}
                          <></>
                          <span onClick={() => this.handleDeleteJob(item)}>
                            X
                          </span>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
              <div>
                <button onClick={() => this.handleSetToggle(isShowJob)}>
                  Hide
                </button>
              </div>
            </>
          )
        )}
      </>
    );
  }
}

export default ListJobs;
