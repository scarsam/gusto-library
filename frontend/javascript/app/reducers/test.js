let initialState = {
  name: 'Sam'
};
export const nameReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    default:
      return state;
  }
};