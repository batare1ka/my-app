import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "What is the deal?", likesCount: 12 },
                { id: 2, message: "It's my fisrt post", likesCount: 11 },
                { id: 3, message: "Yo Yo Yo", likesCount: 11 },
                { id: 4, message: "Hello dmfk", likesCount: 11 },
                { id: 5, message: "Mariaaaaaaaaaaaaaaa", likesCount: 11 }
            ],
            newPostText: "arsenal.com"

        },
         messagesPage: {
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
    },
    getState() {
        return this._state;
    },
    subscribe  (observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber (changes){
        console.log(changes);
    },
    dispatch (action){      //{type: "ADD-POST"}
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    this._callSubscriber(this._state);
   },
    
}


export default store;