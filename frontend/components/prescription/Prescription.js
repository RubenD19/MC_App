import { View, TouchableOpacity, Text, Linking } from "react-native"
import styles from "./prescription.style"
import { TEXT } from "../../constants"

const PRESCRIPTION_LINK = 'https://form.jotform.com/220602574967360'

const Prescription = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(PRESCRIPTION_LINK)}>
                <Text style={styles.buttonText}>Click to complete form in browser</Text>
            </TouchableOpacity> 
            <Text style={styles.text}>
                {TEXT.prescriptionInfoText}
            </Text>
        </View>
    )
}

export default Prescription