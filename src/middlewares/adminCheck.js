module.exports = (req, res, next) => {
    if (req.session.user.rol === 1) {
        next()
    } else {
        console.log('No sos admin')
        }

    }
