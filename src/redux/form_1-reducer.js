const ADD_POST = 'ADD-POST';

let initialState = {
    posts : [
        {id: 1, message: 'Hey', likesCount: 5},
        {id: 2, message: 'wassup', likesCount: 15},
        {id: 3, message: 'fu', likesCount: 4},
        {id: 4, message: 'abobus', likesCount: 20},
        {id: 5, message: 'pobrey ochko', likesCount: 55},
    ],
    newPostText : 'JOPA',
    profile: null,
    id: 5,
}

const formReducer = (state=initialState, action)=>{
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type : ADD_POST,})

export default formReducer;