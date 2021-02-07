const CURRENT_MESSAGE = 'CURRENT-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';
let initialState = {
    dialogs: [
        { id: 1, name: "Mark", logo: "https://boxinggu.ru/wp-content/uploads/2020/02/ion-cutelaba.png" },
        { id: 2, name: "Sil", logo: "https://boxinggu.ru/wp-content/uploads/2020/02/ion-cutelaba.png" },
        { id: 3, name: "Riudgher", logo: "https://boxinggu.ru/wp-content/uploads/2020/02/ion-cutelaba.png" },
        { id: 4, name: "Sirghi", logo: "https://boxinggu.ru/wp-content/uploads/2020/02/ion-cutelaba.png" },
        { id: 5, name: "Maria", logo: "https://boxinggu.ru/wp-content/uploads/2020/02/ion-cutelaba.png" }
    ],
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo Yo Yo" },
        { id: 4, message: "Hello dmfk" },
        { id: 5, message: "Mariaaaaaaaaaaaaaaa" }

    ],
    showMessages: { message: []},
    currentMessageValue: "type...",

}
const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_MESSAGE:
            state.currentMessageValue = action.message;
            debugger;
            return state;
        case ADD_MESSAGE:
            let newMessage = { message: state.currentMessageValue };
            state.showMessages.message.push(newMessage);
            state.currentMessageValue = "";
            return state;
        default:
            return state;

            
    }
}
export default messagesReducer;
export const updateCurrentMessageTextActionCreator = (text) => {
    return {
        type: CURRENT_MESSAGE, message:text

    }
}
export const updateNewMessageTextActionCreator = () => {
    return {
        type: ADD_MESSAGE

    }
}