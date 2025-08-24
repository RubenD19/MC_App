import { StyleSheet } from "react-native";
import { COLORS, SIZES, textStyles } from "../../../constants";

const styles = StyleSheet.create({
    btnContainerRight: {
        width: 36,
        height: 36,
        marginRight: 10
    },
    btnContainerLeft: {
        width: 36,
        height: 36,
        marginLeft: 10
    },
    btnImg: {
        width: '100%',
        height: '100%',
    },
    header: {
        backgroundColor: COLORS.white,
        borderBottomWidth:2, 
        borderBottomColor: COLORS.primary, 
        height:80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop:15,
    },
    headerTitle: textStyles.headerText(SIZES.headerTitleText)
})

export default styles