import { TextInput } from "react-native"
import styles from "./formfield.style"
import { COLORS } from "../../../constants"

const FormField = ({value, placeholder, handleChange}) => {
    return (
        <TextInput
            value={value} 
            placeholder={placeholder}
            placeholderTextColor={COLORS.lightGrey}
            style={styles.textInput} 
            onChangeText={handleChange}
        />
    )
}   

export default FormField