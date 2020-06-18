const { Schema, model } = require("mongoose");
const RespuestaSchema = new Schema(
  { 
    nombre: { type: String, required: true },
  },
  {
    timestamps: true
  }
);
module.exports = model('Respuesta', RespuestaSchema);