import { StyleSheet } from "react-native"
import { SIZES, COLORS } from "../../../constants"

const styles = StyleSheet.create({
    dateButton: {
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        marginHorizontal: 10
    }, 
    dateText: {
        fontSize: SIZES.medium,
        color: COLORS.primary
    }
})

export default styles