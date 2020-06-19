const pregctrl = {};
const Preg = require('../models/preguntas');
const Resut = require('../models/resultado');
const preguntas = require('../models/preguntas');

pregctrl.llenarbase = async (req, res) => {
    const a = [
        {
            "nombre": '¿QUE ES UN ALGORITMO?',
            "puntaje": 30,
            "acertada": 'Es una serie de operaciones detalladas y no ambiguas para ejecutar paso a paso que conducen a la resolución de un problema',
            "respuestas": ['Es una serie de ejecuciones detalladas que no sirven para ejecutar procesos', 'Es un proceso de ejecuciones']
        }, {
            "nombre": 'MEDIANTE QUE SE REPRESENTA UN ALGORITMO',
            "puntaje": 30,
            "acertada": 'Mediante una herramienta o técnica',
            "respuestas": ['Mediante ejecución', 'Mediante un papel', 'Mediante procesos algebraicos']
        }, {
            "nombre": 'EL ALGORITMO SE TRANSFORMA EN UN PROGRAMA DE COMPUTADORA?',
            "puntaje": 30,
            "acertada": 'verdadera',
            "respuestas": ['Falso']
        }, {
            "nombre": 'LAS HERRAMIENTAS O TECNICAS DE PROGRAMACION QUE MAS SE UTILIZAN Y QUE SE EMPLEAN PARA LA REPRESENTACION DE ALGORITMOS SON',
            "puntaje": 30,
            "acertada": 'Pseudocódigo y Diagramas de flujo',
            "respuestas": ['Lenguaje C++ y Cobol', 'Análisis y Diagrama de flujo', 'Diagramas de Venn y Calculos']
        }, {
            "nombre": 'que es una constante',
            "puntaje": 30,
            "acertada": 'Constante es Un valor que está en la maquina',
            "respuestas": ['Valor que se le asigna y no cambia durante la ejecución o proceso de solución del problema', 'Valor que varia durante toda ejecución']
        },
    ];

    i = 0;
    while (i < a.length) {
        let preg = a[i]
        nombre = preg.nombre
        puntaje = preg.puntaje
        acertada = preg.acertada
        respuestas = preg.respuestas
        const Npreg = Preg({ nombre, acertada, puntaje, respuestas })
        await Npreg.save();
        i++
    }
    res.send('lenado')
}


pregctrl.guardar = async (req, res) => {
    const {id_prueba}= req.body
    const data = JSON.parse(JSON.stringify(req.body));
    let puntaje=0
    respuestas=[]
    for (let clave in data) {
        // Controlando que json realmente tenga esa propiedad
        if (data.hasOwnProperty(clave)) {
            if (clave !== 'id_prueba') {
                const pregunta = await Preg.findById(clave)
                if (pregunta.acertada === data[clave]) {
                    puntaje += pregunta.puntaje
                }
                pr={pregunta :clave,respuesta:data[clave]}
                respuestas.push(pr)
                // Mostrando en pantalla la clave junto a su valor
                //console.log("id de pregunta " + clave + " y la respuesta " + data[clave]);
            }
        }
    }
    console.log(id_prueba);
    await Resut.findByIdAndUpdate(id_prueba,{puntaje,respuestas})
    res.send('respuesta')
}


pregctrl.rederIndex = (req, res) => {
    res.render('index')
}

pregctrl.revolverNP = async (req, res) => {

    puntaje=0
    respuestas=[]
    const{nombre,cedula,correo}=req.body
    const Ncuestion=Resut({nombre,cedula,correo,puntaje,respuestas})
    const Nc=await Ncuestion.save()
    const a = await Preg.find().lean()
    idNc= Nc._id
    const p = []
    cantidad = 2
    while (p.length < cantidad) {
        const element = a[Math.floor(Math.random() * a.length)];
        if ((p.includes(element) === false)) {
            p.push(element)
            element.respuestas.push(element.acertada)
            element.respuestas = prueba(element.respuestas);
        }
    }
    console.log(idNc);
    res.render('prueba', { p,idNc })
}


const prueba = (item) => {
    item.sort(function () { return Math.random() - 0.5 });
    return item
};
/* https://pablomonteserin.com/res/diapos_theme/code-pen/index.php?url=/res//blog-material/trivial/index.html&queTiene=4 */
/* https://www.youtube.com/watch?v=anRB8u_D_YA&feature=youtu.be */
/* ---------------------------------------------------------- */


module.exports = pregctrl;



