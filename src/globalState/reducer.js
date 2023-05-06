export const reducer = (state, action) => {
  switch (action.type) {
    case "COUNTDOWN":
      return { ...state, countDown: action.payload };

    default:
      return state;
  }
};
