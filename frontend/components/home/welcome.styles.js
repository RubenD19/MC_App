import { StyleSheet } from "react-native";
import { SIZES, COLORS, buttonStyles, textStyles} from "../../constants";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        alignItems: 'center'
    },
    button: [buttonStyles.primaryButton, {
        width: '80%',
        marginVertical: 10
    }],
    buttonText: buttonStyles.text(SIZES.websiteButtonText),
    welcomeMessage: [textStyles.thinHeaderText(SIZES.welcomeText), {
        color: COLORS.primary,
        marginTop: 20,
        textAlign: 'center',
        width: '80%'
    }],
    contactContainer: {
        display: 'flex',
        rowGap: 15,
        width: '100%',
        alignItems: 'center',
    },
    contactHeader: [textStyles.thinHeaderText(SIZES.contactHeaderText), {
        color: COLORS.lightGrey,
        marginTop: 20,
    }],
    contactText: [textStyles.text(SIZES.contactText), {
        textAlign: 'center',
        width: '80%'
    }]
})

export { styles }