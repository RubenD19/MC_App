import { View, Text, TouchableOpacity, Alert } from "react-native";
import FormField from "../common/formfield/formfield";
import styles from "./appointment.style";
import { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import DatePicker from "../common/datepicker/datepicker";
import { date, object, string } from "yup";
import { sendEmailAPI, prepareForm} from "../../constants";

const categories = [
    {key:'1', value:'Medical Card'},
    {key:'2', value:'Doctor Visit Card'},
    {key:'3', value:'Under 8'},
    {key:'4', value:'Private'},
    {key:'5', value:'Pregnancy'},
    {key:'6', value:'Blood Test - Nurse'},
    {key:'7', value:'Cervical Check'},
    {key:'8', value:'Injection - Nurse'}
]

const appointmentTypes = [
    {key:'1', value:'Doctor'},
    {key:'2', value:'Nurse'}
]

const formSchema = object({
    Name: string().required('* Name is required'),
    Email: string().email('* Email must be valid').required('* Email is required'),
    Phone_Number: string().required('* Phone number is required'),
    Date_Of_Birth: date().required().max(new Date().toDateString(), '* Date must be today or earlier'),
    Appointment_Type: string().required('* Appointment type is required'),
    Reason_For_Visit: string().required('* Reason for visit is required')
})


const AppointmentForm = ({ formSent }) => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const [form, setForm] = useState({
        Name:'',
        Email:'',
        Phone_Number:'',
        Date_Of_Birth: tomorrow,
        Appointment_Type:'',
        Reason_For_Visit:''
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
        
        await sendEmailAPI('Appointment', stringForm)
        .then((response) => {
            if (!response.ok) {
                throw response
            }
            return response.json()
        }).then((data) => {
            Alert.alert('Appointment requested')
            formSent(true)
            console.log(data)
        }).catch((error) => {
            Alert.alert('There was an error requesting the appointment, try again or visit the website')
            error.json().then((res) => console.log(res))
        })
    }

    return (
        <View style={styles.container}>
            <FormField 
                value={form.Name} 
                placeholder='Patient Name' 
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
                data={appointmentTypes} 
                setSelected={(x) => setForm({...form, Appointment_Type: x})} 
                save="value"
                placeholder="Select appointment type"
                search={false} 
            />
            {errors.Appointment_Type && <Text style={styles.errorText}>{errors.Appointment_Type}</Text>}
            <SelectList
                inputStyles={styles.dropdownText}
                dropdownTextStyles={styles.dropdownText}
                data={categories} 
                setSelected={(x) => setForm({...form, Reason_For_Visit: x})} 
                save="value"
                placeholder="Select reason for visit"
                search={false}
            />
            {errors.Reason_For_Visit && <Text style={styles.errorText}>{errors.Reason_For_Visit}</Text>}
            <TouchableOpacity style={styles.button} onPress={validateForm}>
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AppointmentForm