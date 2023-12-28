const express = require('express')
const router = require('./router/router')
const cors = require('cors')
const { CheckLogin } = require('./middleware/Check')
const mongoose = require('mongoose')
const app = express()

const UserModel = require('./model/UserModel')




mongoose.connect('mongodb://localhost/users', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB')
}).catch((err) => {
    console.error(err)
});


// UserModel.create({
//     name: "Ahmed",
//     email: "john@example.com",
//     password: "password",
// }).then(() => {
//     console.log('User Created 🟢')
// }).catch((err) => {
//     console.error(err)
// });

UserModel.find().then((data) => {
    console.log("________________________________________________________")

    console.log(data)
    console.log(' Done Show Full Data 🟢')
    console.log("________________________________________________________")

}).catch((err) => {
    console.error(err)
})

UserModel.find({ name: "jawad" }).then((data) => {
    console.log("________________________________________________________")
    console.log(data)
    console.log(`All records have  name ${data.name} 🟢`)
    console.log("________________________________________________________")

}).catch((err) => {
    console.error(err)
})
UserModel.findOne({ name: "Ahmed" }).then((data) => {
    console.log("________________________________________________________")
    console.log(data)
    console.log(`One person registered with the name ${data.name} 🟢`)
    console.log("________________________________________________________")

}).catch((err) => {
    console.error(err)
})


app.use(cors())
app.use(express.urlencoded({ extended: true }));




app.use(CheckLogin)



const port = 3000
app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
)