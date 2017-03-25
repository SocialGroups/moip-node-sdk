'use strict'

import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import chaiSubset from 'chai-subset'
import nock from 'nock'
import path from 'path'

import moip from '../../dist/moip.js'
import moipError from '../../dist/errors/moip.js'

chai.use(chaiAsPromised)
chai.use(chaiSubset)

let expect = chai.expect

describe('cep-promise (unit)', () => {
  describe('when imported', () => {
    it('should return a Function', () => {
      expect(moip).to.be.a('function')
    })
  })

  describe('when invoked without arguments', () => {
    it('should reject "validator_error"', () => {
      let Moip = new moip()
      return Moip.customer()
        .catch((error) => {
          return expect(error)
            .to.be.an.instanceOf(moipError)
            .and.containSubset({
              name: 'MoipError',
              message: 'Erro ao inicializar a instância do Moip.',
              type: 'validation_error',
              errors: [{
                message: 'Você deve chamar o construtor informando o mode type e o token a ser utilizado.',
                service: 'moip_validation'
              }]
            })
        })
    })
  })
})
