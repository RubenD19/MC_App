import { ScrollView, SafeAreaView } from "react-native";
import { COLORS } from "../../constants";
import { HeaderLayout, Prescription } from "../../components";

const RequestPrescription = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <HeaderLayout title='Repeat Prescription' formSent={false}/>
            <ScrollView style={{alignContent: 'center'}}>
                <Prescription/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RequestPrescription;