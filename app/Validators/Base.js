
class BaseValidator {
  async fails (errorMessages) {
    const { request, response } = this.ctx
    if (request.url().indexOf('/api/') === 0) {
      return this.ctx.response.send(errorMessages[0])
    }
    return true
  }
}

module.exports = BaseValidator;
