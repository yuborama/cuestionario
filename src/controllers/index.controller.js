const indexctrl = {};

indexctrl.rederIndex = (req, res) => {
    res.render('index')
}

indexctrl.renderPrueba=(req,res)=>{
    console.log(req.body);
    res.send('nombre y cedula cargados')
}

indexctrl.rederAbout = (req, res) => {
    res.render('about')
}

indexctrl.rederSingin = (req, res) => {
    res.render('users/singin')
}

module.exports = indexctrl;