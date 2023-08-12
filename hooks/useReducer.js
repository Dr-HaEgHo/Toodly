const reducer = (state, action) => {
  switch (action.type) {
    case "loadingAnimationFinished":
      return { ...state, loadingAnimationFinished: true };
    default:
      return state;
  }
};

export default reducer;
