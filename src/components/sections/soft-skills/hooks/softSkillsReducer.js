const softSkillsReducer = (softSkills, action) => {
  switch (action.type) {
    
    case "setSoftSkills":
      return softSkills = action.payload;


      case "editSoftSkills":

      const updatedItemIndex = softSkills.findIndex(item => item.id === action.payload.id);
      const newSoftSkills = softSkills
      newSoftSkills[updatedItemIndex] = action.payload
      return newSoftSkills

    default:
      return { ...softSkills };
  }
};

export default softSkillsReducer;
