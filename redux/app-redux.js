
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

// Initial State

const initialState = {
    photos: [
        require("../assets/images/image1.jpg"),
        require("../assets/images/image2.jpg"),
        require("../assets/images/image3.jpg"),
        require("../assets/images/image4.jpg"),
        require("../assets/images/image5.jpg"),
        require("../assets/images/image6.jpg"),
        require("../assets/images/image7.jpg"),
        require("../assets/images/image8.jpg"),
        require("../assets/images/image9.jpg"),
        require("../assets/images/image10.jpg")
    ]
}

// Reducer...

const reducer = (state = initialState, action) => {
    return state
}

// Store

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export { store }