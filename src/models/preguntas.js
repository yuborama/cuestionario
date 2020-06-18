const { Schema, model } = require("mongoose");
const PreguntaSchema = new Schema(
  { 
    nombre: { type: String, required: true },
    acertada: { type: Schema.Types.ObjectId, ref: 'Respuesta', required: true },
    respuestas: [{ type: Schema.Types.ObjectId, ref: 'Respuesta', required: true }],
  },
  {
    timestamps: true
  }
);
module.exports = model('Pregunta', PreguntaSchema);