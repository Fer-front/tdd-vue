import { STRING_EMPTY, STRING_MAX_CHAR_EXCEDED, STRING_MIN_CHAR_EXCEDED, NO_STRING } from "../enum/error.js"

export class StringValidate {

    static noString(value) {
        if (typeof value != 'string') throw new Error(NO_STRING)
    }

    static isEmpty(value) {
        StringValidate.noString(value)

        if (value.length <= 0) throw new Error(STRING_EMPTY)
    }

    static minChar(value, qtd) {
        StringValidate.noString(value)

        if (value.length < qtd) throw new Error(STRING_MIN_CHAR_EXCEDED)
    }

    static maxChar(value, qtd) {
        StringValidate.noString(value)

        if (value.length > qtd) throw new Error(STRING_MAX_CHAR_EXCEDED)
    }
}


