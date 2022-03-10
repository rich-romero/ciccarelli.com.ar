let controller = {
    home: (req,res) => {
         res.render('home')
},

sobreNosotros: (req, res) => {
    res.render('sobreNosotros')
},

calidad: (req, res) => {
    res.render('calidad')
},
exportacion: (req, res) => {
    res.render('exportacion')
},
//Vista distribuidores no funciona en la pagina oficial lo cual no sabia que poner en esta vista, 
///la deje armada pero falta rellenar con lo que va.
distribuidores: (req, res) => {
    res.render('distribuidores')
},

competicion: (req, res) => {
    res.render('competicion')
},

servicio: (req, res) => {
    res.render('servicio')
},

newsletters: (req, res) => {
    res.render('newsletters')
}


}

module.exports = controller

