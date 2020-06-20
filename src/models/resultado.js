const { Schema, model } = require("mongoose");
const ResutadoSchema = new Schema(
  {
    nombre: { type: String, required: true },
    cedula: { type: String, required: true },
    correo: { type: String, required: true },
    puntaje: { type: Number, required: true },
    respuestas: [{pregunta:{type: String, required: true},respuesta: {type: String, required: true} }],
  },
  {
    timestamps: true
  }
);
module.exports = model('Resultado', ResutadoSchema);