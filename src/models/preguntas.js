const { Schema, model } = require("mongoose");
const PreguntaSchema = new Schema(
  {
    nombre: { type: String, required: true },
    acertada: { type: String, required: true },
    puntaje: { type: Number, required: true },
    respuestas: [{ type: String, required: true }],
  },
  {
    timestamps: true
  }
);
module.exports = model('Pregunta', PreguntaSchema);