import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension' // для використання інструментів робробника в браузері
import thunk from "redux-thunk"; // для асинхронної роботи
import userReducer from "./userReducer"; // імпорт в загальний редюсер
import fileReducer from "./fileReducer"; // імпорт в загальний редюсер


// редюсер який об'єднує всі редюсери
// створюємо його за допомогою функції combineReducers
const rootReducer = combineReducers({
    // додавання редюсера в загальний
    user: userReducer,
    // додавання редюсера в загальний
    files: fileReducer

})

// за допомогою функції createStore створюємо сам стор, першим параметром передаємо кореневий редюсер
// другим параметром передаємо applyMiddleware(redux-thunk), обгорнутий функцією composeWithDevTools для використання інструментів розробника в браузері
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))