const initialState = {
  selectedAlbum: null,
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_ALBUM":
      return {
        ...state,
        selectedAlbum: action.payload,
      };
    default:
      return state;
  }
};

export default albumReducer;
