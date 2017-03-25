'use strict'

import Promise from './utils/promise-any.js'
import moipError from './errors/moip.js'

export default class Moip {

  constructor(mode, token) {
    this.mode = mode
    this.token = token
  }

  customer() {
    return Promise.resolve({
        mode: this.mode,
        token: this.token
      })
      .then(this.validator)
      .then(true)
  }

  validator(validateRows) {
    if (!validateRows.mode || validateRows.token) {
      throw new moipError({
        message: 'Erro ao inicializar a instância do Moip.',
        type: 'validation_error',
        errors: [{
          message: 'Você deve chamar o construtor informando o mode type e o token a ser utilizado.',
          service: 'moip_validation'
        }]
      })
    }
  }
}
