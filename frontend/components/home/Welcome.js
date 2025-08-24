import { TouchableOpacity, Text, View, Linking } from 'react-native';
import { styles } from './welcome.styles'
import { TEXT } from '../../constants';

const Welcome = () => {
    const address = TEXT.clinicAddress

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeMessage}>
                Welcome to Our App 
            </Text>
            <View style={styles.contactContainer}>
                <Text style={styles.contactHeader}>
                    CONTACT US
                </Text>
                <Text style={styles.contactText}>
                    {TEXT.clinicPhone}
                </Text>
                <Text style={styles.contactText}>
                    {TEXT.clinicEmail}
                </Text>
                <Text style={styles.contactText}>
                    {address}
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(TEXT.websiteLink)}>
                    <Text style={styles.buttonText}> Learn More On Our Website </Text>
                </TouchableOpacity>      
            </View>
        </View>
    )
}
export default Welcome