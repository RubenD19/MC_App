import { ScrollView, SafeAreaView } from "react-native";
import { AppointmentForm, HeaderLayout, SubText } from "../../components";
import { COLORS, TEXT } from "../../constants";
import { useRef, useState } from "react";

const RequestAppointment = () => {
    const scrollViewRef = useRef();
    const [formSent, setFormSent] = useState(false)

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <HeaderLayout title='Request Appointment' formSent={formSent} setFormSent={setFormSent}/>
            <ScrollView 
                ref={scrollViewRef} 
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({animated: false})}
                style={{alignContent: 'center'}}
            >
                {!formSent ? <AppointmentForm formSent={setFormSent}/> : 
                <SubText text={TEXT.appointmentSubmissionText}/>}
            </ScrollView>
        </SafeAreaView>
    )
}

export default RequestAppointment;