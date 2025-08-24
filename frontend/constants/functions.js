import { PixelRatio } from "react-native"

const scaleFont = (absFontSize) => {
    return Math.round(absFontSize / PixelRatio.getFontScale())
}

const prepareForm = (formEntries) => {
    var stringForm = {}
    for (var [key, value] of formEntries) {
        var field = value
        if (key == 'Date_Of_Birth') {
            field = field.toDateString()
        }
        stringForm[key.replaceAll('_', ' ')] = field   
    }
    return stringForm
}

export { scaleFont, prepareForm }