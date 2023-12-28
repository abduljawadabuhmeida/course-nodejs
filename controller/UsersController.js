

exports.RegistrationUsers = (req, res) => {

    res.json({
        msg: "نجحت عملية التسجيل 👍🏼",
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        state: 1,
    })
}

exports.LoginUsers = (req, res) => {

    if (!req.body.username.trim() || !req.body.password.trim()) {

        return res.json({
            msg: "تاكد من ادخال البيانات",
            state: 0,
        })
    }
    if (req.body.username === "jawad" && req.body.password === "12345") {
        return res.json({
            msg: "نجحت عملية الدخول 👍🏼",
            username: req.body.username,
            password: req.body.password,
            state: 1,

        })
    }
    res.json({
        msg: "تآكد من كتابة اسم المستخدم وكلمة المرور بطريقة الصحيحة ❌",
        state: 0,
    })



}
