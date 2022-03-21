module.exports = (req, res, next) => {
    if (req.session.user.rol === 1) {
        next()
    } else {
        if (req.session.user.rol) {
            res.redirect('/')
        }}
        console.log('undefined')
    }
