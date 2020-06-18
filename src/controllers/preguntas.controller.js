const pregctrl = {};
const Preg = require('../models/preguntas');
const Resp = require('../models/respuestas');
const respuestas = require('../models/respuestas');

pregctrl.nuevapregunta = async (req, res) => {
    nombre = '¿QUE ES UN ALGORITMO?'
    res1 = 'Es un proceso de ejecuciones'
    res2 = 'Es una serie de ejecuciones detalladas que no sirven para ejecutar procesos'
    res3 = 'Es una serie de operaciones detalladas y no ambiguas para ejecutar paso a paso que conducen a la resolución de un problema'
    const respuesta1 = Resp({ nombre: res1 })
    const respuesta2 = Resp({ nombre: res2 })
    const respuesta3 = Resp({ nombre: res3 })
    await respuesta1.save()
    await respuesta2.save()
    await respuesta3.save()
    acertada = respuesta3._id
    const respuestas = [respuesta1._id, respuesta2._id, respuesta3._id,];
    const NewResp = Preg({ nombre, acertada, respuestas })
    const preguntag = await NewResp.save();
    const preg_resp = await Preg.find({ _id: preguntag._id }).populate({ path: 'respuestas' }).populate({ path: 'acertada', select: 'nombre' }).lean();
    console.log(preg_resp);
    res.send('logrado')
}

pregctrl.guardar = async (req, res) => {
 console.log(req.body);
 res.send('respuesta')
 
}
pregctrl.revolverNP = async (req, res) => {
    const a = [
        {
            "question": "¿Quien descubrió América?",
            "answers": ["Colón", "Yo mismo", "Tú"]
        },
        {
            "question": "¿Quién es el mayor superheroe de todos los tiempos?",
            "answers": ["Spiderman", "Batman", "Yo mismo", "Tú mismo"]
        },
        {
            "question": "¿Por qué lo pájaros pían?",
            "answers": ["Tienen hambre", "Tienen frío", "Están contentos", "Están tristes"]
        }
    ];
    const p = []
    while (p.length < 3) {
        var element = a[Math.floor(Math.random() * a.length)];
        if ((p.includes(element) === false)) {
            p.push(element)
            element.answers = prueba(element.answers);
            console.log(element.answers);
        }
    }
    
    res.render('prueba',{p})
}




const prueba = (item) => { 
    item.sort(function(){ return Math.random()-0.5});
    return item
};
/* https://pablomonteserin.com/res/diapos_theme/code-pen/index.php?url=/res//blog-material/trivial/index.html&queTiene=4 */
/* https://www.youtube.com/watch?v=anRB8u_D_YA&feature=youtu.be */
/* ---------------------------------------------------------- */


module.exports = pregctrl;



