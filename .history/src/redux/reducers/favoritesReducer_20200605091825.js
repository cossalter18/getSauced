const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_FAVORITES":
            return action.payload;
        default:
            return state;
    }
};

export default favoritesReducer;