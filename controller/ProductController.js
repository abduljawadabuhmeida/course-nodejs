


exports.addProduct = (req, res) => {
    res.json({
        msg: "Welcome to the store",
        state: 1,
        products: [
            'IPhone',
            'Mac',
        ],
    })
}
