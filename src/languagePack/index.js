import pl from './pl'
import en from './en'

const getLang = ()=>{
    const lang = sessionStorage.getItem('lang')
    switch (lang){
        case 'pl':
            return pl
        case 'en':
            return en
        default:
            return en
    }
}

export default {getLang,pl, en}
