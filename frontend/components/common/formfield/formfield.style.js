import { StyleSheet } from "react-native"
import { SIZES, textStyles } from "../../../constants"

const styles = StyleSheet.create({
    textInput: [textStyles.text(SIZES.formFieldText), {
        borderWidth:1,
        padding: 10,
    }],
})

export default styles