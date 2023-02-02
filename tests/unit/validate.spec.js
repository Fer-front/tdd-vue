import { StringValidate } from "../../src/helpers/validate.js"
import { NO_STRING, STRING_EMPTY, STRING_MAX_CHAR_EXCEDED, STRING_MIN_CHAR_EXCEDED } from "../../src/enum/error"


describe('Teste class de StringValidate:', ()=> {
    it('Caso variavel seja vazia uma excessao deve ser disparada', () => {
        const valid = 'valor'
        const invalid = ''

        
        expect(StringValidate.isEmpty(valid)).toEqual(undefined)
        expect(() => StringValidate.isEmpty(invalid)).toThrow(STRING_EMPTY)        
    })

    it('Caso variavel tenha 10 caracter e o limite seja 8 dispare excessão', () => {
        const limite = 8

        const valid = '12345678'
        const invalid = '1234567890'

        
        expect(StringValidate.maxChar(valid, limite)).toEqual(undefined)
        expect(() => StringValidate.maxChar(invalid, limite)).toThrow(STRING_MAX_CHAR_EXCEDED)        
    })

    it('Caso passe valor diferente de uma string uma excessao deve ser disparada', () => {        
        expect(() => StringValidate.noString(1243)).toThrow(NO_STRING)
    })

    it('Caso variavel tenha 2 caracter e o minimo seja 5 deve ser disparado excessão', () => {
        const minimo = 2

        const valid = '12345678'
        const invalid = '1'

        
        expect(StringValidate.minChar(valid, minimo)).toEqual(undefined)
        expect(() => StringValidate.minChar(invalid, minimo)).toThrow(STRING_MIN_CHAR_EXCEDED)        
    })
}) 