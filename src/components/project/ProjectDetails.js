import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import moment from "moment";
import { deleteProject } from "../../store/actions/deleteAction";

const ProjectDetails = (props) => {
  const { project, auth, projectId } = props;

  const deleteProject = () => {
    props.deleteProject(projectId);
    props.history.push("/");
  };

  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <div style={{ float: "right" }}>
              <button
                className="btn red lighten-1 z-depth-0"
                disabled={!(auth.uid === project.authorId)}
                onClick={deleteProject}
              >
                Delete
              </button>
            </div>
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
            <div className="card-action gret lighten-4 grey-text text-darken-3">
              <div>
                Posted by {project.authorFirstName} {project.authorLastName}
              </div>
              <div>{moment(project.createdAt.toDate()).calendar()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project......</p>
      </div>
    );
  }
};

const mapStateToProps = (state, onProps) => {
  // console.log(state, onProps);

  const id = onProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth,
    projectId: id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (projectId) => dispatch(deleteProject(projectId)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
