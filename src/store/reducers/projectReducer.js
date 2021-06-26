const initState = {
  projects: [
    { id: "1", title: "helpme", content: "hey there" },
    { id: "2", title: "help thery", content: "hey there" },
    { id: "3", title: "help him", content: "hey there" },
    { id: "4", title: "let me see the changes", content: "hey there" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project");
      return state;

    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;

    default:
      return state;
  }
};

export default projectReducer;
