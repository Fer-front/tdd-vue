import { DOMAM_EMAILS_VALID } from "@/enum/constants";
import { EMAIL_INVALID, EMAIL_DOMAIN_INVALID, EMAIL_MIN_CHAR, EMAIL_MAX_CHAR } from "../enum/error.js"

const MIN_CHAR_MAIL = 5
const MAX_CHAR_MAIL = 15



class Email {
    static validate(email) {
        
        const regexExtruture =  new RegExp('.*\@.*\.com')        
        const regexDomain = new RegExp(`(${DOMAM_EMAILS_VALID.join(',').replaceAll(',', '|')})`)
        const [mail, domain] = email.split('@')

        if(!regexExtruture.test(email)) throw new Error(EMAIL_INVALID)
        if(!regexDomain.test(email)) throw new Error(EMAIL_DOMAIN_INVALID)

    
        if(mail.length < MIN_CHAR_MAIL) throw new Error(EMAIL_MIN_CHAR)
        if(mail.length > MAX_CHAR_MAIL) throw new Error(EMAIL_MAX_CHAR)

        return true
    }

}

export default Email
