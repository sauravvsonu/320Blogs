export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to databasse
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const auth = getState().firebase.auth.uid;
    const firebase = getFirebase();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: auth,
        createdAt: new Date(),
      })
      .then(() => {
        firestore
          .collection("notification")
          .add({
            user: `${profile.firstName} ${profile.lastName}`,
            userId: auth,
            message: "Added New Project",
            time: new Date(),
          })
          .catch((err) => console.log("notification error", err));
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
