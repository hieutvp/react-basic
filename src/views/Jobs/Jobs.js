import React from "react";
import JobsInput from "./JobsInput";
import ListJobs from "./ListJobs";
class Jobs extends React.Component {
  //key:value
  state = {
    jobs: [],
  };

  addNewJob = (job) => {
    // let currentJob = this.state.jobs;
    this.setState({
      jobs: [...this.state.jobs, job],
    });
  };
  deleteJob = (job) => {
    let currentJob = this.state.jobs;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      jobs: currentJob,
    });
  };
  componentDidMount() {
    console.log("did mount");
  }
  componentDidUpdate(preProps, prevState) {
    console.log(
      "did update ",
      "previous state:",
      prevState,
      "current state: ",
      this.state
    );
  }
  /* 
    JSX => return block
    fragment
    */

  //   re-render
  render() {
    return (
      <>
        <JobsInput addNewJob={this.addNewJob} />
        <ListJobs jobs={this.state.jobs} deleteJob={this.deleteJob} />
      </>
    );
  }
}
export default Jobs;
