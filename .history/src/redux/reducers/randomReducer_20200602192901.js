const randomReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_THREADS":
            return action.payload;
        default:
            return state;
    }
};

export default randomReducer;