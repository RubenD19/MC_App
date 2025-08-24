import { StyleSheet } from "react-native"
import { SIZES, buttonStyles, textStyles } from "../../constants"

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 20,
        rowGap: 30,
    },
    button: buttonStyles.primaryButton,
    buttonText: buttonStyles.text(SIZES.prescriptionButtonText),
    text: [textStyles.text(SIZES.prescriptionInfoText), {
        textAlign: 'center'
    }]
})

export default styles