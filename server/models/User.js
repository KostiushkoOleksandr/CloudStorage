// імпортуємо Schema, ObjectId, model з пакета mongoose
const {Schema, model, ObjectId} = require("mongoose")

// створюємо (Schema) яка буде містити інформацію про поля сутностей 
const User = new Schema({
    // id не створюю, а відразу переходжу до email, так як mongoose створює їх автоматично
    email: {type: String, required: true, unique: true}, // авторизація користувача через email
    password: {type: String, required: true},            // авторизація користувача через password
    diskSpace: {type: Number, default: 1024**3*10},      // будемо зберігати інформацію про розмір диску
    usedSpace: {type: Number, default: 0},               // будемо мати інформацію про кількість використаного місця
    avatar: {type: String},                              // аватар користувача, (пізніше додам більше інфи до користувача)
    // зв'язуємо сутність користувача та файла (нижче маємо масив який має тип ObjectId, який в свою чергу посилається на сутність файла)
    files : [{type: ObjectId, ref:'File'}]
})

// експортуємо модель
module.exports = model('User', User)