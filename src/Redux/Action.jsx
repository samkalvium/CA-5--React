import axios from 'axios';

const displayBooks = () =>{
    return(dispatch) => {
        axios.get("https://reactnd-books-api.udacity.com/books", {
            headers: {
                Authorization: 'whatever-you-want' 
            }
          })
        .then((res) => dispatch({type: "bookData", payload: res }));
    }
}

export default displayBooks;