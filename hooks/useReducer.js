const reducer = (state, action) => {
  switch (action.type) {
    case "loadingAnimationFinished":
      return { ...state, loadingAnimationFinished: true };
    case "loadingAnimationStart":
      return { ...state, loadingAnimationFinished: false };
    default:
      return state;
  }
};

export default reducer;
