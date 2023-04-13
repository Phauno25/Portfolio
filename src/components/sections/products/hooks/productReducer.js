const productReducer = (product, action) => {
  switch (action.type) {
    case "setProduct":
      return (product = action.payload);

    case "editProduct":
      const updatedItemIndex = product.findIndex(
        (item) => item.id === action.payload.id
      );
      const newProduct = product;
      newProduct[updatedItemIndex] = action.payload;
      return newProduct;

    case "addProduct":
      return [...product, action.payload];
    default:
      return { ...product };
  }
};

export default productReducer;
