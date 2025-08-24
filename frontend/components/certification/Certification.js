import { View, Text, TouchableOpacity, Alert } from "react-native"
import { useState } from "react";
import FormField from "../common/formfield/formfield";
import DatePicker from "../common/datepicker/datepicker";
import styles from "./certification.style"
import { SelectList } from "react-native-dropdown-select-list";
import { date, object, string } from "yup";
import { sendEmailAPI, prepareForm } from "../../constants";

const certificationTypes = [
    {key: '1', value: 'Sickness Certification'},
    {key: '2', value: 'Social Welfare Certification'},
    {key: '3', value: 'Both'},
]

const formSchema = object({
    Name: string().required('* Name is required'),
    Email: string().email('* Email must be valid').required('* Email is required'),
    Phone_Number: string().required('* Phone Number is required'),
    Date_Of_Birth: date().required().max(new Date().toDateString(), '* Date must be today or earlier'),
    Certification_Required: string().required('* Certification is required'),
    Date_From: date().required(),
    Date_To: date().required()
})

const CertificationForm = ({ formSent }) => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const [form, setForm] = useState({
        Name:'',
        Email:'',
        Phone_Number:'',
        Date_Of_Birth: tomorrow,
        Certification_Required:'',
        Date_From: tomorrow,
        Date_To: tomorrow,
    })

    const [errors, setErrors] = useState({})

    const validateForm = async () => {
        try {
            await formSchema.validate(form, {abortEarly: false});
        } catch (err) {
            let tempErrors = {}
            console.log(err)
            err.inner.forEach(e => {
                tempErrors[e.path] = e.message
            });
            setErrors(tempErrors)
            return 
        }
        setErrors({})
        sendEmail()
    }

    const sendEmail = async () => {
        const stringForm = prepareForm(Object.entries(form))

        await sendEmailAPI('Certification', stringForm)
        .then((response) => {
            if (!response.ok) {
                throw response
            }
            return response.json()
        }).then((data) => {
            Alert.alert('Certificate requested')
            formSent(true)
            console.log(data)
        }).catch((error) => {
            Alert.alert('There was an error requesting the certificate, try again or visit the website')
            error.json().then((res) => console.log(res))
        })
    }

    return (
        <View style={styles.container}>
            <FormField 
                value={form.Name} 
                placeholder='Name' 
                handleChange={(x) => setForm({...form, Name: x})}
            />
            {errors.Name && <Text style={styles.errorText}>{errors.Name}</Text>}
            <FormField 
                value={form.Email} 
                placeholder='Email' 
                handleChange={(x) => setForm({...form, Email: x})}
            />
            {errors.Email && <Text style={styles.errorText}>{errors.Email}</Text>}
            <FormField 
                value={form.Phone_Number} 
                placeholder='Phone Number' 
                handleChange={(x) => setForm({...form, Phone_Number: x})}
            />
            {errors.Phone_Number && <Text style={styles.errorText}>{errors.Phone_Number}</Text>}
            <View style={styles.containerDOB}>
                <Text style={styles.textDOB}>
                    Date Of Birth:
                </Text>
                <DatePicker
                    currentDate={form.Date_Of_Birth}
                    setSelectedDate={(d) => setForm({...form, Date_Of_Birth: d})}
                />
            </View>
            {errors.Date_Of_Birth && <Text style={styles.errorText}>{errors.Date_Of_Birth}</Text>}
            <SelectList 
                inputStyles={styles.dropdownText}
                dropdownTextStyles={styles.dropdownText}
                data={certificationTypes} 
                setSelected={(x) => setForm({...form, Certification_Required: x})} 
                save="value"
                placeholder="Select certification required"
                search={false} 
            />
            {errors.Certification_Required && <Text style={styles.errorText}>{errors.Certification_Required}</Text>}
            <View style={styles.containerDOB}>
                <Text style={styles.textDOB}>
                    Date From:
                </Text>
                <DatePicker 
                    currentDate={form.Date_From} 
                    setSelectedDate={(d) => setForm({...form, Date_From: d})}
                />
            </View>
            {errors.Date_From && <Text style={styles.errorText}>{errors.Date_From}</Text>}
            <View style={styles.containerDOB}>
                <Text style={styles.textDOB}>
                    Date To:
                </Text>
                <DatePicker 
                    currentDate={form.Date_To} 
                    setSelectedDate={(d) => setForm({...form, Date_To: d})}
                />
            </View>
            {errors.Date_To && <Text style={styles.errorText}>{errors.Date_To}</Text>}
            <TouchableOpacity style={styles.button} onPress={validateForm}>
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity> 
        </View>
    )
}

export default CertificationForm