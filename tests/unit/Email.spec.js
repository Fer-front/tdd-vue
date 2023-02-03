
import Email from "../../src/core/Email.js"
import { EMAIL_INVALID, EMAIL_DOMAIN_INVALID, EMAIL_MAX_CHAR, EMAIL_MIN_CHAR } from "../../src/enum/error.js"

describe('Componente Email:', () => {

    it('Email inválido', () => {
        expect(() => Email.validate('fer@')).toThrowError(EMAIL_INVALID)
    })

    it('Email valido', () => {
        expect(Email.validate('fernando@uol.com')).toBe(true)
    })

    it('Email com dominio inválido', () => {
        expect(() => Email.validate('fer@terra.com')).toThrowError(EMAIL_DOMAIN_INVALID)
    })

    it('Email com quantidade de caracteres inferior ao permitido', () => {
        expect(() => Email.validate('fer@uol.com')).toThrowError(EMAIL_MIN_CHAR)
    })

    it('Email com quantidade de caracteres superior ao permitido', () => {
        expect(() => Email.validate('fernando.1234567890.1234567890@uol.com')).toThrowError(EMAIL_MAX_CHAR)
    })

})