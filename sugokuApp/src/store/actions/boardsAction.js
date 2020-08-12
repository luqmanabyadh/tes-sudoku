const encodeBoard = (board) =>
  board.reduce(
    (result, row, i) =>
      result +
      `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? "" : "%2C"}`,
    ""
  );

const encodeParams = (params) =>
  Object.keys(params)
    .map((key) => key + "=" + `%5B${encodeBoard(params[key])}%5D`)
    .join("&");

export const getBoards = (level) => {
  return (dispatch) => {
    fetch(`https://sugoku.herokuapp.com/board?difficulty=${level}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_BOARDS",
          payload: {
            boards: data.board,
          },
        });
      });
  };
};

export const getSolve = (solveBoard) => {
  return (dispatch) => {
    const request = {
      method: "POST",
      body: encodeParams({ board: solveBoard }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    };
    fetch(`https://sugoku.herokuapp.com/solve`, request)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_SOLVE",
          payload: {
            solution: data.solution,
          },
        });
      });
  };
};

export const getValidate = (validateBoard) => {
  return (dispatch) => {
    const request = {
      method: "POST",
      body: encodeParams({ board: validateBoard }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    };
    fetch(`https://sugoku.herokuapp.com/validate`, request)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_VALIDATE",
          payload: {
            status: data.status,
          },
        });
      });
  };
};

export const setDefaultStatus = (status) => {
  return (dispatch) => {
    dispatch({
      type: "SET_DEFAULT_STATUS",
      payload: {
        status,
      },
    });
  };
};

export const setLeaderboards = (userName) => {
  return (dispatch) => {
    dispatch({
      type: "SET_LEADERBOARDS",
      payload: {
        player: userName,
      },
    });
  };
};
