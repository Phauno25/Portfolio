const landingReducer = (about, action) => {
  switch (action.type) {
    case "setLanding":
      return {
        ...about,
        name: action.payload.data.name,
        message: action.payload.data.message,
        backgroundImg: action.payload.data.backgroundImg,
      };
    case "editLanding":
      return {
        ...about,
        name: action.payload.name,
        message: action.payload.message,
        backgroundImg: action.payload.backgroundImg,
      };
    case "resetMessage":
      return {...about,
        message: null};

    default:
      break;
  }
};

export default landingReducer;
