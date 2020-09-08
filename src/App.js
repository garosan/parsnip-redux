import React, { Component } from "react";
import { connect } from "react-redux";
import TasksPage from "./components/TasksPage";

const mockTasks = [
  {
    id: 1,
    title: "Learn Redux",
    description: "The store, actions, and reducers to begin with.",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Peace on Earth",
    description: "No big deal",
    status: "In Progress",
  },
];

class App extends Component {
  render() {
    return (
      <div className="main-content">
        <TasksPage tasks={this.props.tasks} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps)(App);
