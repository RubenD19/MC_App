import { Text, View } from "react-native"
import styles from "./submissiontext.style"

const SubText = ({text}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
        
    )
}

export default SubText