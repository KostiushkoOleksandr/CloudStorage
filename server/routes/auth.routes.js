const Router = require("express");      // експортуємо Router з express
const User = require("../models/User")  // експортуємо модель користувача
const bcrypt = require("bcryptjs")      // експортуємо bcrypt для хешування пароля
const {check, validationResult} = require("express-validator") // потрібно для того, якщо на сервер відправлять пустий пароль, або не валідну пошту

// створюємо об'єкт користувача
const router = new Router()

// створюємо метод в якому пост запит по url '/registration'
router.post('/registration',
    // другим параметром post передаємо масив
    [   
        // викликаємо функцію check, першим параметром передаємо поле яке валідуємо, другим параметром повідомлення з помилкою, в кінці вказуємо, що потрібно провалідувати поле як email
        check('email', "Uncorrect email").isEmail(),
        // теж саме робимо з паролем, тільки валідуємо по довжині, з умовою більше 3, але менше 12
        check('password', 'Password must be longer than 3 and shorter than 12').isLength({min:3, max:12})
    ],
    // стрілкова функція, де першим параметром запит, а другим відповідь
    async (req, res) => {
        // додаємо блок try, catch для відловлювання потенційних помилок
        try {
            // за допомогою функції validationResult отримаємо результат валідації, в параметер функції передамо запит
            const errors = validationResult(req)
            // перевіряємо, якщо результат валідації містить помилки які не відповідають умові, то користувач побачить повідомлення про помилку
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Uncorrect request", errors})
            }
            // отримаємо email, password з тіла запиту
            const {email, password} = req.body
            // перевірка на те, чи існує такий користувач в базі, в функцію findOne передамо email отриманий з запиту
            const candidate = await User.findOne({email})
            // перевіряємо в умові, якщо користувач не порожній, то ми повернемо відповідь з тілом вмісту, що такий користувач існує
            if(candidate) {
                return res.status(400).json({message: `User with email ${email} already exist`})
            }
            // хешуємо пароль, щоб не зберігати його відкритим в базі даних, в функцію hash передаємо пароль
            const hashPassword = await bcrypt.hash(password, 8)
            // створюємо нового користувача з захешованим паролем, якщо не потрапили в статус код 400.
            const user = new User({email, password: hashPassword})
            // зберігаємо користувача в базі даних, це теж асинхронна операція
            await user.save()
            // повернемо відповідь від сервера в якому в якості повідомлення зазначемо, що користувач був створений
            res.json({message: "User was created"})
        } catch (e) {
            // вивід потенційних помилок у влоги 
            console.log(e)
            // після чого відразу відправляти користувачу відповідь "Server error"
            res.send({message: "Server error"})
        }
    })

    // експортуємо router
    module.exports = router