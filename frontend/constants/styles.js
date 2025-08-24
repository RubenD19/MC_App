import { StyleSheet } from "react-native";
import { FONTS, COLORS, SIZES } from "./theme";
import { scaleFont } from "./functions";

const buttonStyles = StyleSheet.create({
    text: (fontSize) =>  ({
        fontFamily: FONTS.regularBold,
        color: COLORS.white,
        fontSize: scaleFont(fontSize),
        textAlign: 'center'
    }),

    primaryButton: {
        backgroundColor: COLORS.button,
        borderRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
})

const textStyles = StyleSheet.create({
    text: (fontSize) => ({
        fontFamily: FONTS.regular,
        fontSize: scaleFont(fontSize),
    }),
    headerText: (fontSize) => ({
        fontFamily: FONTS.header,
        fontSize: scaleFont(fontSize),
    }),
    thinHeaderText: (fontSize) => ({
        fontFamily: FONTS.headerNotBold,
        fontSize: scaleFont(fontSize),
    }),
    errorText: {
        fontFamily: FONTS.regular,
        fontSize: scaleFont(SIZES.errorText),
        color: COLORS.primary,
        marginTop: -10,
    }
})

export { buttonStyles, textStyles }