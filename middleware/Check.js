
exports.CheckLogin = (req, res, next) => {
    if (req.body.username === "jawad" && req.body.password === "12345") {
        next();
        return
    }
    res.json({
        msg: "نآسف ليس لديك صلاحية قم بالتسجيل الدخول",
        state: 0,
    })
}


exports.RegistrationValidation = (req, res, next) => {


    if (!req.body.username.trim() || !req.body.password.trim() || !req.body.email.trim()) {

        return res.json({
            msg: "تاكد من ادخال البيانات",
            state: 0
        })
    }


    next();
    return

}
