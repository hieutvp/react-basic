const initState = {
  users: [
    {
      id: "1",
      name: "Hieu",
    },
    {
      id: "2",
      name: "Hoang",
    },
  ],
  post: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return { ...state, users };
    case "CREATE_USER":
      let newId = Math.floor(Math.random() * 1001);
      let newUser = { id: newId, name: `random - ${newId}` };
      return {
        ...state,
        users: [...state.users, newUser],
      };
    default:
      return state;
  }
};

export default rootReducer;
