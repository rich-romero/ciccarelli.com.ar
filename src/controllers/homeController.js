let controller = {
    home: (req,res) => {
         res.render('home')
},

sobreNosotros: (req, res) => {
    res.render('sobreNosotros')
}

}

module.exports = controller

