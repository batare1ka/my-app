const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
let initialState = {
    posts: [
        { id: 1, message: "What is the deal?", likesCount: 12 },
        { id: 2, message: "It's my fisrt post", likesCount: 11 },
        { id: 3, message: "Yo Yo Yo", likesCount: 11 },
        { id: 4, message: "Hello dmfk", likesCount: 11 },
        { id: 5, message: "Mariaaaaaaaaaaaaaaa", likesCount: 11 }
    ],
    newPostText: "arsenal.com"

}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case CHANGE_POST_TEXT:

            state.newPostText = action.postText;
            return state;
        default:
            return state;

    }

}
export default profileReducer;
export const addPostActionCreator = () => {
    return {
        type: ADD_POST

    }
}
export const updateNewPostTextActionCreator = (text) =>{
      return {
          type: CHANGE_POST_TEXT, postText: text
      }
}