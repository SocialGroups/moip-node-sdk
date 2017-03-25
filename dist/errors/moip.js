function MoipError ({ message, type, errors } = {}) {
  this.name = 'MoipError'
  this.message = message
  this.type = type
  this.errors = errors
}

MoipError.prototype = new Error()

export default MoipError
