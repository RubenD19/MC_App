import { StyleSheet } from "react-native"
import { SIZES, buttonStyles, textStyles } from "../../constants"

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 20,
        rowGap: 15,
    },
    containerDOB: {
        flexDirection: 'row', 
        alignItems: 'center',
        columnGap: 10
    },
    textDOB: textStyles.text(SIZES.textDOB),
    button: buttonStyles.primaryButton,
    buttonText: buttonStyles.text(SIZES.sendFormText),
    dropdownText: textStyles.text(SIZES.dropdownText),
    errorText: textStyles.errorText,
})

export default styles