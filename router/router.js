const express = require('express')
const router = express.Router()

const PostsController = require('../controller/PostsController')
const UsersController = require('../controller/UsersController')
const ProductController = require('../controller/ProductController')

const Check = require('../middleware/Check')


router.get('/', (req, res) => {
    res.json({
        msg: "Welcome Developer ",
        name: "Abduljawad Abuhmeida",
        age: 30,
        address: [
            "libya",
            "Tripoli",
            "SoqAljumaa"
        ],
        skills: [
            "NodeJs",
            "ejs",
            "HTML",
            "CSS",
            "PoweBi",
        ],
    })
})


router.post('/registration', Check.RegistrationValidation, UsersController.RegistrationUsers)
router.post('/login', UsersController.LoginUsers)
router.get('/posts', PostsController.AllPosts)
router.get('/addProduct', ProductController.addProduct)



module.exports = router;
