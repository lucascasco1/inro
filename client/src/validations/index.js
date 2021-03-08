
export const REGEX = {
  USERNAME: !/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/g,
  EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PASSWORD: !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g,
  ZIPCODE: /^([0-9]{4})/,
  DOCUMENT: /^([0-9])*$/,
  NAME: /^([A-Za-z])*$/,
  LASTNAME: /^([A-Za-z])*$/,
  TYPEDOCUMENT: /^([A-Za-z])*$/,
  PHONE: /^([0-9])*$/
}

export const validations = {
  username: (dataForm, label) => {
    if (!dataForm.trim()) {
      return
    } else if (REGEX.USERNAME.test(dataForm.trim())) {

    }
  },
  email: (dataForm, label) => {
    if (!dataForm.trim()) {
      return `${label} requerido.`
    } else if (REGEX.EMAIL.test(dataForm.trim())) {
      return `${label} invalido.`
    } else {
      return '';
    }
  },
  password: (dataForm, label) => {
    if (!dataForm.trim()) {
      return `${label} requerida.`
    } else if (dataForm.length < 8) {
      return `${label} demasiado corta.`
    } else if (PASSWORD.test(dataForm.trim())) {
      return `${label} invalida (al menos una letra y número).`
    } else {
      return '';
    }
  },
  zipCode: (dataForm, label) => {
    if (!dataForm.trim()) {
      return `${label} requerido.`
    } else if (REGEX.ZIPCODE.test(dataForm.trim())) {
      return `${label} invalido.`
    } else {
      return '';
    }
  },
  document: (dataForm, label) => {
    if (!dataForm.trim()) {
      return `${label} requerido.`
    } else if (REGEX.DOCUMENT.test(dataForm.trim())) {
      return `${label} invalido.`
    } else {
      return '';
    }
  },
  name: (dataForm, label) => {
    if (!dataForm.trim()) {
      return `${label} requerido.`
    } else if (REGEX.NAME.test(dataForm.trim())) {
      return `${label} invalido.`
    } else {
      return '';
    }
  },
  lastName: (dataForm, label) => {
    if (!dataForm.trim()) {
      return `${label} requerido.`
    } else if (REGEX.LASTNAME.test(dataForm.trim())) {
      return `${label} invalido.`
    } else {
      return '';
    }
  },
  typeDocument: (dataForm, label) => {
    if (!dataForm.trim()) {
      return `${label} requerido.`
    } else if (REGEX.TYPEDOCUMENT.test(dataForm.trim())) {
      return `${label} invalido.`
    } else {
      return '';
    }
  },
  phone: (dataForm, label) => {
    if (!dataForm.trim()) {
      return `${label} requerido.`
    } else if (REGEX.PHONE.test(dataForm.trim())) {
      return `${label} invalido.`
    } else {
      return '';
    }
  },
}
