const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case "_FAVORITES":
            return action.payload;
        default:
            return state;
    }
};

export default favoritesReducer;