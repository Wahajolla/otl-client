const categories = (state: RootState) => state.category?.categories;

const category = (state: RootState) => state.category?.category;

export const categorySelectors = {
  categories,
  category,
};
