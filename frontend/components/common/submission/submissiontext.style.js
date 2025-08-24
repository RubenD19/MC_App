import { StyleSheet } from "react-native";
import { SIZES, textStyles } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 10,
        alignItems: 'center'
    },
    text: [textStyles.text(SIZES.submissionText), {
        textAlign: 'center'
    }]
})

export default styles