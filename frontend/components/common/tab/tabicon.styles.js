import { StyleSheet } from "react-native";
import { FONTS, SIZES, textStyles } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    text: (color, focused) => ([textStyles.text(SIZES.tabIconText), {
        color: color,
        fontFamily: focused ? FONTS.regularBold: FONTS.regular,
        textAlign: 'center',
        marginHorizontal: 5,
        marginTop:25,
    }]),

    image: {
        width: 60,
        height: 60
    }
})

export default styles