import { COLORS } from "../../constants";
import { SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Welcome } from "../../components";

export default function Index() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <StatusBar style="dark"/>
            <ScrollView style={{alignContent: 'center'}}>    
                <Welcome/>
            </ScrollView>
        </SafeAreaView>
    )
}