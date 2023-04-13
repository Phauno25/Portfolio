const educationReducer = (education, action) => {
  switch (action.type) {
    case "setEducation":
      return (education = action.payload);

    case "editEducation":
      const updatedItemIndex = education.findIndex(
        (item) => item.id === action.payload.id
      );
      const newEducation = education;
      newEducation[updatedItemIndex] = action.payload;
      return newEducation;

    case "addEducation":
      return [...education, action.payload];
    default:
      return { ...education };
  }
};

export default educationReducer;
