import mongoose from "mongoose";

const PerfilUser = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },

  cpf: {
    type: String,
    required: true,
    index: {
      unique: true
    },

    CNPJ: {
      type: String,
      required: false
    },

    nomeFantasia: {
      type: String,
      required: false
    },

    RG: {
      type: String,
      required: true
    },
    dataNascimento: {
      type: String,
      required: true
    },

    endereco: {
      type: String,
      required: true
    },
    numero: {
      type: String,
      required: true
    },
    bairro: {
      type: String,
      required: true
    },
    cidade: {
      type: String,
      required: true
    },
    estado: {
      type: String,
      required: true
    },
    cep: {
      type: String,
      required: true
    },
    userId: {
      type: String,      
      required: true
    }
  }
});

export default mongoose.model("User", PerfilUser);
