
// створюємо редюсер стан якого по замовчуванню
const defaultState = {
    // додаємо об'єкт поточного користувача
    currentUser: {}, 
    // та змінну яка відповідає за те чи користувач залогінився чи ні
    isAuth: false
}

// створюємо сам редюсер, який першим параметром приймає state, другим action
export default function userReducer(state = defaultState, action) {
    // далі в залежності від типу action, повинні виконувати ту чи іншу дію
    // створюємо switch, який по замовчуванню буде повертати state
    switch (action.type) {
        
        default:
            return state
    }
}
