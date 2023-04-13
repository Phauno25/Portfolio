const aboutReducer = (about, action) => {
    switch (action.type) {
      case "setAbout":
        return {
          ...about,
          name: action.payload.data.name,
          profile: action.payload.data.profile,
          email: action.payload.data.email,
          city: action.payload.data.city,
          image: action.payload.data.image,
          imageAlt: action.payload.data.imageAlt,
          description: action.payload.data.description
        };
  
      case "setInfo":
        return {
          ...about,
          name: action.payload.name,
          profile: action.payload.profile,
          email: action.payload.email,
          city: action.payload.city,
          image: action.payload.image,
          imageAlt: action.payload.imageAlt,
        };
  
      case "setDescription":
        return {
          ...about,
          description: action.payload
        };
  
      default:
        break;
    }
  };
  
  export default aboutReducer;