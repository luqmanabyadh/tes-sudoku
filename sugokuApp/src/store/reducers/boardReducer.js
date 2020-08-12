const initiateState = {
  boards: [],
  solution: [],
  status: "",
  leaderboards: [],
};

const boardReducer = (state = initiateState, action) => {
  switch (action.type) {
    case "SET_BOARDS":
      return { ...state, boards: action.payload.boards };
    case "SET_SOLVE":
      return { ...state, solution: action.payload.solution };
    case "SET_VALIDATE":
      return { ...state, status: action.payload.status };
    case "SET_DEFAULT_STATUS":
      return { ...state, status: action.payload.status };
    case "SET_LEADERBOARDS":
      return {
        ...state,
        leaderboards: state.leaderboards.concat(action.payload.player),
      };
    default:
      return state;
  }
};

export default boardReducer;
