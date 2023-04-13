const experienceReducer = (experience, action) => {
  switch (action.type) {
    case "setExperience":
      return (experience = action.payload);

    case "editExperience":
      const updatedItemIndex = experience.findIndex(
        (item) => item.id === action.payload.id
      );
      const newExperience = experience;
      newExperience[updatedItemIndex] = action.payload;
      return newExperience;

    case "addExperience":
      return [...experience, action.payload];

    default:
      return { ...experience };
  }
};

export default experienceReducer;
