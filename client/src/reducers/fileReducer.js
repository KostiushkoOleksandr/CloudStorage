
// створюємо редюсер стан якого по замовчуванню
const defaultState = {
    
}

// створюємо сам редюсер, який першим параметром приймає state, другим action
export default function fileReducer(state = defaultState, action) {
    // далі в залежності від типу action, повинні виконувати ту чи іншу дію
    // створюємо switch, який по замовчуванню буде повертати state
    switch (action.type) {
        
        default:
            return state
    }
}
