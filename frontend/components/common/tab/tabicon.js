import { View, Image, Text } from "react-native"
import styles from "./tabicon.styles"

const TabIcon = ({icon, color}) => 
    <View style={styles.container}>
        <Image
            source={icon}
            resizeMethod="cover"
            tintColor={color}
            style={styles.image}
        />
    </View>

const TabLabel = ({color, name, focused}) => 
    <View>
        <Text style={styles.text(color, focused)} >
            {name}
        </Text>
    </View>

export {TabIcon, TabLabel}