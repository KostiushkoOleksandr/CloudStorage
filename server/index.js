const express = require("express")     // експорт express у змінну
const mongoose = require("mongoose")   // експорт mongoose у змінну
const config = require("config")       // експорт config у змінну

// за допомогою express створюємо сервер
const app = express()
// за допомогою функції get у config по ключу отримаємо значення з файлу default.json
const PORT = config.get('serverPort')

// створюємо функцію, яка буде підключатися до бази даних, та запускати сервер
const start = async () => {

    // код обертаю в try, catch для відловлювання помилок, пізніше реалізую за допомогою (middlewareErrorHandler)                                  
    try {
        //першим параметром функція connect приймає url до бази даних (беремо його з сайту монго), далі з config отримуємо url і передамо його параметром в функцію connect
        // підключення до бази даних це асинхронний процес тому викоритовуємо (async, await)
        await mongoose.connect(config.get("dbUrl"), {
        
        })

        // викликаємо стрілкову функцію listen в яку першим параметром передаю номер порту, на якому буде працювати сервер
        app.listen(PORT, () => {
            // другим параметром приймає функцію яка викликається після того як сервер запуститься
            console.log('Server started on port ', PORT)
        })
    } catch (e) {

    }
}

// виклакаємо зстворену функцію
start()