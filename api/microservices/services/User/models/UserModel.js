const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const crypto = require('crypto')


const validateEmail = function(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


const UserSchema = new Schema({
  email: {
    type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'Ingresa un email valido'],
        validate: [validateEmail, 'Ingresa un email valido'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Ingresa un email valido']
  },
  password: {
    type: String,
    // min: [8, 'Contraseña demasiado corta'],
    // max: [16, 'Contraseña demasiado larga'],
    required: [true, 'Contraseña requerida']
  },
  role: {
    type: String,
    enum: ['guest', 'client', 'admin'],
    default: 'guest'
  },
  idType: {
    type: String,
    enum: ['dni'],
    /* required: true */
  },
  idNumber: {
    type: Number,
    trim: true,
    // min: [8, 'Numero fuera de rango'],
    // max: [8, 'Numero fuera de rango'],
    /* required: true */
  },
  name: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  streetNumber: {
    type: Number,
    trim: true
  },
  zipCode: {
    type: Number,
    trim: true
  },
  country: {
    type: String,
    trim: true
  },
  phone: {
    type: Number,
    trim: true
  },
  street: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    trim: true
  },
  birthdate: {
    type : String,
   // validate: [validateAge, 'Ingresa una edad valida'],
  },
  codeSecurity: {
    type: String
  },
  codeSecurityExp: {
    type: Date
  },
  contacts : [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Contact'
    }
  ],
  accounts : [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Contact'
    }
  ],
});

UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash;
  this.codeSecurity = crypto.randomBytes(3).toString('hex').toUpperCase();
  this.codeSecurityExp = Date.now() + 3000;
  next();
})

UserSchema.methods.isValidPassword = async function(password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
}

module.exports = mongoose.model('User', UserSchema)
