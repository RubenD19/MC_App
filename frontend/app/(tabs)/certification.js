import { ScrollView, SafeAreaView } from "react-native";
import { COLORS, TEXT } from "../../constants";
import { HeaderLayout, CertificationForm, SubText } from "../../components";
import { useState } from "react";

const RequestCertification = () => {
    const [formSent, setFormSent] = useState(false) 

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <HeaderLayout title='Request Certification' formSent={formSent} setFormSent={setFormSent}/>
            <ScrollView style={{alignContent: 'center'}}>    
                {!formSent ? <CertificationForm formSent={setFormSent}/> : 
                <SubText text={TEXT.certificationSubmissionText}/>}
            </ScrollView>
        </SafeAreaView>
    )
}

export default RequestCertification;