import { images } from "../../../constants"
import { Stack, useRouter } from "expo-router"
import { TouchableOpacity, Image, Text, View } from "react-native"
import { StatusBar } from "expo-status-bar"

import styles from "./headerlayout.styles"


const HeaderLayout = ({title, formSent, setFormSent}) => {
    const router = useRouter()

    return (
        <>
        <StatusBar style="dark"/>
        <Stack.Screen options={{
            header: () => (
                <View style={styles.header}>
                    {formSent ? <TouchableOpacity style={styles.btnContainerLeft} onPress={() => {setFormSent(false)}}>
                                    <Image 
                                        source={images.refresh}
                                        resizeMode="cover"
                                        style={styles.btnImg}
                                    />
                                </TouchableOpacity> : <View style={styles.btnContainerLeft}/>}
                    <View style={styles.headerTitleWrapper}>
                        <Text style={styles.headerTitle}>{title}</Text>
                    </View>
                    <TouchableOpacity style={styles.btnContainerRight} onPress={() => router.navigate('/')}>
                        <Image 
                            source={images.home}
                            resizeMode="cover"
                            style={styles.btnImg}
                        />
                    </TouchableOpacity>
                </View>
            ),
            headerTitleAlign: 'center',
            headerStyle: styles.header,
        }}/>
        </>
    )
}

export default HeaderLayout
