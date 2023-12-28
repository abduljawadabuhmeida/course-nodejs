const posts = require('../helper/posts.json')



exports.AllPosts = (req, res) => {
    res.json({
        msge: posts,
    })
}
