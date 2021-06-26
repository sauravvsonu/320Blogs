export const deleteProject = (projectId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to databasse
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const auth = getState().firebase.auth.uid;

    firestore
      .collection("projects")
      .doc(projectId)
      .delete()
      .then(() => {
        console.log("Project deleted");
        firestore.collection("notification").add({
          user: `${profile.firstName} ${profile.lastName}`,
          userId: auth,
          message: "Deleted Project",
          time: new Date(),
        });
        dispatch({ type: "DELETE_PROJECT", projectId });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_PROJECT_ERROR", err });
      });
  };
};
