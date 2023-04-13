const skillsReducer = (skills, action) => {
  switch (action.type) {
    
    case "setSkills":
      return skills = action.payload;


      case "editSkills":

      const updatedItemIndex = skills.findIndex(item => item.id === action.payload.id);
      const newSkills = skills
      newSkills[updatedItemIndex] = action.payload
      return newSkills

      case "addSkills":
        return [...skills, action.payload];
    default:
      return { ...skills };
  }
};

export default skillsReducer;
