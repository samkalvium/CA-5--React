
const Reducer = (state, action) => {
    switch(action.type) {
        case "bookData":
            return{
                data: action.payload
            }
        default:
            break;
    }
}

export default Reducer
